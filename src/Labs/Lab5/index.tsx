import EnvironmentVariables from "./EnvironmentVariables";
import HttpClient from "./HttpClient";
import ModuleObjects from "./ModuleObject";
import PathParameters from "./PathParameters";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithArraysAsynchronously from "./WorkingWithArraysAsynchronously";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithObjectsAsynchronously from "./WorkingWithObjectsAsynchronously";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function Lab5() {
    return (
      <div id="wd-Lab5">
        <h2>Lab 5</h2>
        <div className="list-group">
          <a href="https://kanbas-node-server-app-1-pv0y.onrender.com/Lab5/welcome"
             className="list-group-item">
             Welcome
          </a>
        </div><hr/>
        <EnvironmentVariables />
        <PathParameters/>
        <WorkingWithObjects/>
        <ModuleObjects/>
        <WorkingWithArrays/>
        <HttpClient/>
        <WorkingWithObjectsAsynchronously/>
        <WorkingWithArraysAsynchronously/>
      </div>
    );
  }
