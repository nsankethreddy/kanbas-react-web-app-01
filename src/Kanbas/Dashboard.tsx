import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (8
        )</h2> <hr />

      <div id="wd-dashboard-course" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">

          <div className="wd-dashboard-course col" style={{ width: "250px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
                <img src="/images/reactjs.jpg" width="100%" height={160} alt="react image" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 React JS
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack software developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "250px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1235/Home">
                <img src="/images/PDP.jpg" width="100%" height={160} alt="PDP image" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1235 PDP
                  </h5 >
                  <p className="wd-dashboard-course-title card-text">
                    Programmer basics
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "250px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1236/Home">
                <img src="/images/SE.jpg" width="100%" height={160} alt="SE image" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1236 SE
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    SWE basics
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "250px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1237/Home">
                <img src="/images/CC.png" width="100%" height={160} alt="SE image" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1237 CC
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    CC basics
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "250px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1238/Home">
                <img src="/images/AA.png" width="100%" height={160} alt="AA image" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1238 AA
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    AA basics
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "250px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1239/Home">
                <img src="/images/BB.jpg" width="100%" height={160} alt="BB image" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1239 BB
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    BB basics
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "250px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1240/Home">
                <img src="/images/DD.jpg" width="100%" height={160} alt="DD image" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1240 DD
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    DD basics
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "250px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1241/Home">
                <img src="/images/EE.png" width="100%" height={160} alt="EE image" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1241 EE
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    EE basics
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

        </div >
      </div>
    </div>
  );
}
