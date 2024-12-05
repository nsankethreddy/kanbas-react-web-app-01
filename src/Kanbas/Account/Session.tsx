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
      const response = await axiosWithCredentials.get('/Profile'); // Use axiosWithCredentials to make the request
      const currentUser = response.data;
      dispatch(setCurrentUser(currentUser));
    } catch (err: any) {
      if (err.response && err.response.status === 401) {
        console.error('Unauthorized: Redirecting to login.');
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

  return null; // Return null or a loading indicator while pending
}

