import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER || "http://localhost:4000";


const axiosWithCredentials = axios.create({ withCredentials: true });

export const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const enrollUser = async (data: {
  courseId: string;
  userId: string;
}) => {
  const response = await axiosWithCredentials.post(`${ENROLLMENTS_API}`, data);
  return response.data;
};

export const unenrollUser = async (unenrollment: {
  userId: string;
  courseId: string;
}) => {
  const response = await axiosWithCredentials.delete(ENROLLMENTS_API, {
    data: unenrollment,
  });
  return response.data;
};
