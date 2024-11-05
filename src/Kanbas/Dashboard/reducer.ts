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
      const newEnrollment: Enrollment = { _id: nanoid(), ...action.payload };

      state.enrollments.unshift(newEnrollment);
    },
    unenrollCourse(
      state,
      action: PayloadAction<{ user: string; course: string }>
    ) {
      state.enrollments = state.enrollments.filter(
        (enrollment: Enrollment) =>
          !(
            enrollment.user === action.payload.user &&
            enrollment.course === action.payload.course
          )
      );
    },
  },
});

export const { enrollCourse, unenrollCourse } = enrollmentSlice.actions;

export default enrollmentSlice.reducer;
