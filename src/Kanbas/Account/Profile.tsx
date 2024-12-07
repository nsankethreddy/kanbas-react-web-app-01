import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import * as client from "./client";

export default function Profile() {
  const [Profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const updateProfile = async () => {
    const updatedProfile = await client.updateUser(Profile);
    dispatch(setCurrentUser(updatedProfile));

  };

  const fetchProfile = () => {
    if (!currentUser) return navigate("/Kanbas/Account/Signin");
    setProfile(currentUser);
  };
  const Signout = async () => {
    await client.Signout();
    dispatch(setCurrentUser(null));
    navigate("/Kanbas/Account/Signin");
  };

  useEffect(() => { fetchProfile(); }, []);
  return (
    <div className="wd-Profile-screen">
      <h3>Profile</h3>
      {Profile && (
        <div>
          <input defaultValue={Profile.username} id="wd-username" className="form-control mb-2"
            onChange={(e) => setProfile({ ...Profile, username: e.target.value })} />
          <input defaultValue={Profile.password} id="wd-password" className="form-control mb-2"
            onChange={(e) => setProfile({ ...Profile, password: e.target.value })} />
          <input defaultValue={Profile.firstName} id="wd-firstname" className="form-control mb-2"
            onChange={(e) => setProfile({ ...Profile, firstName: e.target.value })} />
          <input defaultValue={Profile.lastName} id="wd-lastname" className="form-control mb-2"
            onChange={(e) => setProfile({ ...Profile, lastName: e.target.value })} />
          <input defaultValue={Profile.dob} id="wd-dob" className="form-control mb-2"
            onChange={(e) => setProfile({ ...Profile, dob: e.target.value })} type="date" />
          <input defaultValue={Profile.email} id="wd-email" className="form-control mb-2"
            onChange={(e) => setProfile({ ...Profile, email: e.target.value })} />
          <select
            value={Profile.role}
            onChange={(e) => setProfile({ ...Profile, role: e.target.value })}
            className="form-control mb-2"
            id="wd-role"
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button onClick={updateProfile} className="btn btn-primary w-100 mb-2"> Update </button>

          <button onClick={Signout} className="btn btn-danger w-100 mb-2" id="wd-Signout-btn">
            Sign out
          </button>
        </div>
      )}
    </div>);
}

