import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
// import UsersList from "../usersList";

const UserPage = () => {
  const params = useParams();
  const { userId, edit } = params;
  return (
    <>
      {!edit && (
        <div>
          <h1> userPage</h1>
          {/* <h2>{user && user.label}</h2> */}
          <ul>
            <li>
              <Link to="/users">Users List Page</Link>
            </li>
            <li>
              <Link to={`/users/${userId}/profile/edit`}>Edit this User</Link>
            </li>
          </ul>
          <h4>userId: {userId}</h4>
        </div>
      )}

      <Outlet />
    </>
  );
};

export default UserPage;
