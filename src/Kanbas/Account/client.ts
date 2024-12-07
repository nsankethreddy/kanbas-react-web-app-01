import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export const USERS_API = `${REMOTE_SERVER}/api/users`;
const axiosWithCredentials = axios.create({ withCredentials: true });
export const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const Signin = async (credentials: any) => {
  const response = await axiosWithCredentials.post(
    `${USERS_API}/Signin`,
    credentials
  );
  return response.data;
};
export const Profile = async () => {
  const response = await axiosWithCredentials.post(`${USERS_API}/Profile`);
  return response.data;
};
export const Signup = async (user: any) => {
  const response = await axiosWithCredentials.post(`${USERS_API}/Signup`, user);
  return response.data;
};
export const Signout = async () => {
  const response = await axiosWithCredentials.post(`${USERS_API}/Signout`);
  return response.data;
};

export const findMyCourses = async () => {
  const { data } = await axiosWithCredentials.get(
    `${USERS_API}/current/courses`
  );

  return data;
};
export const findEnrolledCourses = async (userId: any) => {
  const { data } = await axiosWithCredentials.get(
    `${USERS_API}/${userId}/enrolled-courses`
  );
  return data;
};
export const findCoursesForUser = async (userId: string) => {
  const response = await axiosWithCredentials.get(
    `${USERS_API}/${userId}/courses`
  );
  return response.data;
};

export const createCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.post(
    `${USERS_API}/current/courses`,
    course
  );
  return data;
};

export const findAllCourses = async () => {
  const { data } = await axiosWithCredentials.get(
    `${REMOTE_SERVER}/api/courses`
  );
  return data;
};
export const addEnrollment = async (enrollment: any) => {
  const { data } = await axiosWithCredentials.post(
    `${USERS_API}/current/enrolled`,
    enrollment
  );
  return data;
};
export const getEnrollment = async (userId: string, courseId: string) => {
  const { data } = await axiosWithCredentials.get(
    `${USERS_API}/current/enrollmentStatus`,
    { params: { user: userId, course: courseId } }
  );
  return data;
};

export const enrollUser = async (data: {
  courseId: string;
  userId: string;
}) => {
  console.log("Payload sent to enrollUser:", data); // Debugging
  const response = await axios.post(`${ENROLLMENTS_API}`, data);
  return response.data;
};

export const unenrollUser = async (unenrollment: {
  userId: string;
  courseId: string;
}) => {
  const response = await axios.delete(ENROLLMENTS_API, { data: unenrollment });
  return response.data;
};

export const findAllUsers = async () => {
  const response = await axiosWithCredentials.get(USERS_API);

  return response.data;
};
export const findUsersByRole = async (role: string) => {
  const response = await axios.get(`${USERS_API}?role=${role}`);
  return response.data;
};
export const findUsersByPartialName = async (name: string) => {
  const response = await axios.get(`${USERS_API}?name=${name}`);
  return response.data;
};
export const findUserById = async (id: string) => {
  const response = await axios.get(`${USERS_API}/${id}`);
  return response.data;
};
export const deleteUser = async (userId: string) => {
  const response = await axios.delete(`${USERS_API}/${userId}`);
  return response.data;
};

export const updateUser = async (user: any) => {
  const response = await axiosWithCredentials.put(
    `${USERS_API}/${user._id}`,
    user
  );
  return response.data;
};
export const createUser = async (user: any) => {
  const response = await axios.post(`${USERS_API}`, user);
  return response.data;
};
export const enrollIntoCourse = async (userId: string, courseId: string) => {
  const response = await axios.post(
    `${USERS_API}/${userId}/courses/${courseId}`
  );
  return response.data;
};
export const unenrollFromCourse = async (userId: string, courseId: string) => {
  const response = await axios.delete(
    `${USERS_API}/${userId}/courses/${courseId}`
  );
  return response.data;
};
