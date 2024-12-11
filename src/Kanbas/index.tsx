import { Routes, Route, Navigate } from "react-router-dom";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";
import "./styles.css";
import { useEffect, useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import * as userClient from "./Account/client";
import { useSelector } from "react-redux";
import * as courseClient from "./Courses/client";
import { enrollIntoCourse, enrollUser, unenrollFromCourse, unenrollUser } from "../Kanbas/Account/client";


export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);
  const [allCourses, setAllCourses] = useState<any[]>([]);
  const [enrolledCourses, setEnrolledCourses] = useState<any[]>([]);
  const [enrolling, setEnrolling] = useState<boolean>(false);

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const findCoursesForUser = async () => {
    try {
      const courses = await userClient.findCoursesForUser(currentUser._id);
      console.log(courses);
      setEnrolledCourses(courses);
    } catch (error) {
      console.error("Error fetching enrolled courses:", error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      fetchAllCourses();
      findCoursesForUser();
    } else {
      setAllCourses([]);
      setEnrolledCourses([]);
    }

  }, [currentUser, enrolling]);



  const [course, setCourse] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", img: "/images/reactjs.png", description: "New Description",

  });

  const fetchAllCourses = async () => {
    try {
      const allCourses = await courseClient.fetchAllCourses();
      setAllCourses(allCourses);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const allCourses = await courseClient.fetchAllCourses();
      const enrolledCourses = await userClient.findCoursesForUser(
        currentUser._id
      );
      const courses = allCourses.map((course: any) => {
        if (enrolledCourses.find((c: any) => c._id === course._id)) {
          return { ...course, enrolled: true };
        } else {
          return course;
        }
      });
      setCourses(allCourses);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (currentUser && currentUser._id) {
      fetchCourses();

    }
  }, [currentUser]);

  const addNewCourse = async () => {
    const { _id, ...courseData } = course;
    console.log(courseData)
    const newCourse = await courseClient.createCourse(course);
    setAllCourses([...allCourses, newCourse]);
    await findCoursesForUser();
  };

  const deleteCourse = async (courseId: string) => {
    const status = await courseClient.deleteCourse(courseId);
    setAllCourses(allCourses.filter((course) => course._id !== courseId));
    await unenrollFromCourse(currentUser._id, courseId);
    setEnrolledCourses(enrolledCourses.filter((c: any) => c._id !== courseId));
  };

  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    setAllCourses(
      allCourses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
    const updatedEnrolledCourses = await userClient.findCoursesForUser(currentUser._id);
    setEnrolledCourses(updatedEnrolledCourses);
  };

  return (
    <Session>
      <div id="wd-kanbas">
        <KanbasNavigation />
        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="Account" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route path="/Dashboard" element={<ProtectedRoute>
              <Dashboard
                course={course}
                allCourses={allCourses}
                enrolledCourses={enrolledCourses}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}
                setEnrolledCourses={setEnrolledCourses} />
            </ProtectedRoute>} />
            <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute>} />
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />
          </Routes>
        </div>
      </div>
    </Session>

  );
}
