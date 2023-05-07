import React from "react";
import { Outlet } from "react-router-dom";

const Users = () => {
  return <Outlet />;

  //   return (
  //     <>
  //       {userId ? (
  //         edit ? (
  //           <EditUserPage id={userId} />
  //         ) : (
  //           <UserPage id={userId} users={users} />
  //         )
  //       ) : (
  //         <UsersListPage users={users} />
  //       )}
  //     </>
  //   );
};

export default Users;
