import { Link, useParams, useLocation } from "react-router-dom";
import "../styles.css";

export default function CoursesNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  const { cid } = useParams();
  const { pathname } = useLocation();
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0 me-4">
      {links.map((link) => (
        <Link
          key={link}
          id={`wd-course-${link.toLowerCase()}-link`}
          to={`/Kanbas/Courses/${cid}/${link}`}
          className={`list-group-item ${pathname.includes(link) ? "active" : "text-danger"} border border-0`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
