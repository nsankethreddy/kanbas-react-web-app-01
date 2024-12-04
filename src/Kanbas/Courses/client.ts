import axios from "axios";
const COURSES_API = `https://kanbas-node-server-app-fdzu.onrender.com/api/courses`;
export const fetchAllCourses = async () => {
  const { data } = await axios.get(COURSES_API);

  return data;
};
export const deleteCourse = async (id: string) => {
  const { data } = await axios.delete(`${COURSES_API}/${id}`);
  return data;
};
export const updateCourse = async (course: any) => {
  const { data } = await axios.put(`${COURSES_API}/${course._id}`, course);
  return data;
};
export const findModulesForCourse = async (courseId: string) => {
  const response = await axios
    .get(`${COURSES_API}/${courseId}/modules`);
  return response.data;
};
export const createModuleForCourse = async (courseId: string, module: any) => {
  const response = await axios.post(
    `${COURSES_API}/${courseId}/modules`,
    module
  );
  return response.data;
};


export const findAssignmentsForModules = async (moduleId: string) => {
  const response = await axios
    .get(`${COURSES_API}/${moduleId}/assignments`);
  return response.data;
};
export const createAssignmentsForCourse = async (courseId: string, assignment: any) => {
  const response = await axios.post(
    `${COURSES_API}/${courseId}/assignments`,
    assignment
  );
  return response.data;
};



