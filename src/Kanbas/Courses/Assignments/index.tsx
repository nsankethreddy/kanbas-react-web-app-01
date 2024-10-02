import { CiSearch } from "react-icons/ci";
import { LuPlus } from "react-icons/lu";
import "../../styles.css"
import { BsGripVertical } from "react-icons/bs";
import { FaSortDown } from "react-icons/fa";
import AssignmentControlButtons from "./AssignmentControlButtons";
import A1ControlButtons from "./A1ControlButtons";
import { GiNotebook } from "react-icons/gi";



export default function Assignments() {
  return (
    <div id="wd-assignments" className="wd-assignment">
      <div id="wd-assignments-header" className="assignment-header">
        <div id="wd-search-container" className="search-container">
          <CiSearch className="search-icon" />
          <input id="wd-search-assignment"
            type="text"
            placeholder="Search..."
            className="search-input"
          />
        </div>
        <div className="assignmnet-header-buttons">
          <button id="wd-add-module-btn" className="btn btn-lg btn-light me-1 border border-1">
            <LuPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Group</button>
          <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1">
            <LuPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Assignment</button>
        </div>
      </div>



      <ul id="wd-assignments-list" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-light">
            <BsGripVertical className="me-2 fs-3" />
            <FaSortDown className="position-relative" style={{ bottom: "1px" }} />
            ASSIGNMENTS
            <AssignmentControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center" style={{ borderLeft: '5px solid green' }}>
              <BsGripVertical className="me-3 fs-3" />
              <GiNotebook className="me-3 fs-3" style={{ color: 'green' }} />
              <div className="flex-grow-1 ms-3">
                <h4 className="mb-0">
                  <a href="#/Kanbas/Courses/1234/Assignments/123" className="text-decoration-none text-dark">A1</a>
                </h4>
                <p style={{ fontSize: '0.8em' }} className="mb-0">
                  <span style={{ color: 'red' }}>Multiple Modules</span> | <span style={{ fontWeight: 'bold' }}>Not available until</span>  May 6 at 12:00am | <span style={{ fontWeight: 'bold' }}>Due</span>  May 13 at 11:59pm | 100 pts
                </p>
              </div>
              <A1ControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center" style={{ borderLeft: '5px solid green' }}>
              <BsGripVertical className="me-3 fs-3" />
              <GiNotebook className="me-3 fs-3" style={{ color: 'green' }} />
              <div className="flex-grow-1 ms-3">
                <h4 className="mb-0">
                  <a href="#/Kanbas/Courses/1234/Assignments/123" className="text-decoration-none text-dark">A2</a>
                </h4>
                <p style={{ fontSize: '0.8em' }} className="mb-0">
                  <span style={{ color: 'red' }}>Multiple Modules</span> | <span style={{ fontWeight: 'bold' }}>Not available until</span> May 16 at 12:00am | <span style={{ fontWeight: 'bold' }}>Due</span> May 23 at 11:59pm | 100 pts
                </p>
              </div>
              <A1ControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center" style={{ borderLeft: '5px solid green' }}>
              <BsGripVertical className="me-3 fs-3" />
              <GiNotebook className="me-3 fs-3" style={{ color: 'green' }} />
              <div className="flex-grow-1 ms-3">
                <h4 className="mb-0">
                  <a href="#/Kanbas/Courses/1234/Assignments/123" className="text-decoration-none text-dark">A3</a>
                </h4>
                <p style={{ fontSize: '0.8em' }} className="mb-0">
                  <span style={{ color: 'red' }}>Multiple Modules</span> | <span style={{ fontWeight: 'bold' }}>Not available until</span>  May 26 at 12:00am | <span style={{ fontWeight: 'bold' }}>Due</span> May 31 at 11:59pm | 100 pts
                </p>
              </div>
              <A1ControlButtons />
            </li>
          </ul>
        </li>
      </ul >
    </div >
  );
}
