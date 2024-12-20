import React, { useEffect, useState } from "react";
import ModulesControls from "./ModuleControls"
import { IoEllipsisVertical } from "react-icons/io5";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import { useParams } from "react-router";
import * as db from "../../Databases";
import { addModule, editModule, updateModule, deleteModule, setModules }
  from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControls from "./ModuleControls";
import * as modulesClient from "./client";
import * as coursesClient from "../client";

// test comment
export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";
  const dispatch = useDispatch();
  const fetchModules = async () => {
    const modules = await coursesClient.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };
  const createModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const module = await coursesClient.createModuleForCourse(cid, newModule);
    console.log("module id created:",module._id);
    dispatch(addModule(module));
    fetchModules();
  };
  const removeModule = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };
  const saveModule = async (module: any) => {
    console.log('module saved:',module._id);
    await modulesClient.updateModule(module);
    dispatch(updateModule(module));
  };


  useEffect(() => {
    fetchModules();
  }, []);

  return (
      <div>
        <ModuleControls setModuleName={setModuleName} moduleName={moduleName}
        addModule={createModuleForCourse} /><br /><br /><br /><br />
        <ul id="wd-modules" className="list-group rounded-0">
        {modules.map((module: any) => (
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              {!module.editing && module.name}
              {module.editing && (
                <input className="form-control w-50 d-inline-block"
                  onChange={(e) => dispatch(updateModule({ ...module, name: e.target.value }))}
                  onKeyDown={(e) => { if (e.key === "Enter") {                     
                     saveModule({ ...module, editing: false });
                } }}
                  defaultValue={module.name} />
              )}
             
              <ModuleControlButtons
                moduleId={module._id}
                deleteModule={(moduleId) => removeModule(moduleId) }
                editModule={(moduleId) => dispatch(editModule(moduleId))} />
             
            </div>
            {module.lessons && (
              <ul className="wd-lessons list-group rounded-0">
                {module.lessons.map((lesson: any) => (
                  <li className="wd-lesson list-group-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" />
                    {lesson.name}
                    {isFaculty && <LessonControlButtons />}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      </div>
  );
}