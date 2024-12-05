import * as client from "./client";
import { useEffect, useState } from "react";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });

export default function Session({ children }: { children: any }) {
  const [pending, setPending] = useState(true);
  const dispatch = useDispatch();

  const fetchProfile = async () => {
    try {
      const response = await axiosWithCredentials.get('/api/users/Profile');
      if (response.data && typeof response.data === 'object') {
        const currentUser = response.data;
        dispatch(setCurrentUser(currentUser));
      } else {
        console.error('Invalid response data from server:', response.data);
      }
    } catch (err: any) {
      if (err.response) {
        if (err.response.status === 401) {
          console.error('Unauthorized: Redirecting to login.');
        } else if (err.response.status === 404) {
          console.error('Resource not found: Check the /Profile endpoint.');
        } else {
          console.error('Failed to fetch user Profile:', err);
        }
      } else {
        console.error('Failed to fetch user Profile:', err);
      }
    }
    setPending(false);
  };
  useEffect(() => {
    fetchProfile();
  }, []);

  if (!pending) {
    return children;
  }

  return null;
}

