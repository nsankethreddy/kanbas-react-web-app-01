import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { enrollments } from "../Database";
import { nanoid } from "nanoid";

interface Enrollment {
  _id: string;
  user: string;
  course: string;
}

const initialState = {
  enrollments: structuredClone(enrollments) as Enrollment[],
};

const enrollmentSlice = createSlice({
  name: "enrollment",
  initialState,
  reducers: {
    enrollCourse(
      state,
      action: PayloadAction<{ user: string; course: string }>
    ) {
      console.log("Before enrollCourse:",JSON.stringify(state.enrollments, null, 2));
      console.log("New enrollment:", JSON.stringify(action.payload, null, 2));

      const newEnrollment: Enrollment = { _id: nanoid(), ...action.payload };

      state.enrollments.unshift(newEnrollment);

      console.log("After enrollCourse:",JSON.stringify(state.enrollments, null, 2));
    },
    unenrollCourse(
      state,
      action: PayloadAction<{ user: string; course: string }>
    ) {
      console.log("Before unenrollCourse:",JSON.stringify(state.enrollments, null, 2));
      console.log("Unenrollment request:",JSON.stringify(action.payload, null, 2));

      // Filter out the enrollment that matches the user and course from action payload
      state.enrollments = state.enrollments.filter(
        (enrollment: Enrollment) =>
          !(
            enrollment.user === action.payload.user &&
            enrollment.course === action.payload.course
          )
      );

      console.log("After unenrollCourse:",JSON.stringify(state.enrollments, null, 2));
    },
  },
});

export const { enrollCourse, unenrollCourse } = enrollmentSlice.actions;

export default enrollmentSlice.reducer;
