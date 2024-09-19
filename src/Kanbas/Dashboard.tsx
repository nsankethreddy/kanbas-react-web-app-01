import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (3)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width={200} alt="react image" />
            <div>
              <h5>
                CS1234 React JS
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
        <Link className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1235/Home">
            <img src="/images/PDP.jpg" width={200} alt="PDP image" />
            <div>
              <h5>
                CS1235 PDP
              </h5>
              <p className="wd-dashboard-course-title">
                Programmer basics
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">         <Link className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1235/Home">
            <img src="/images/SE.jpg" width={200} alt="SE image" />
            <div>
              <h5>
                CS1236 SE
              </h5>
              <p className="wd-dashboard-course-title">
                SWE basics
              </p>
              <button> Go </button>
            </div>
          </Link> </div>
      </div>
    </div>
  );
}
