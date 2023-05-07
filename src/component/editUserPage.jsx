import React from "react";
import { Link, useParams } from "react-router-dom";

// const EditUserPage = ({ id }) => {
//   const anotherUser = Number(id) + 1;
const EditUserPage = () => {
  const { userId } = useParams();
  const anotherUser = Number(userId) + 1;

  return (
    <>
      <h1>Edit User Page</h1>
      <ul>
        <li>
          <Link to={`/users/${userId}/profile`}>User Profile Page</Link>
        </li>
        <li>
          <Link to={`/users/${anotherUser}/profile`}>Another User</Link>
        </li>
        <li>
          <Link to="/users">Users List Page</Link>
        </li>
      </ul>
    </>
  );
};

export default EditUserPage;
