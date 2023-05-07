import { Navigate, Route, Routes } from "react-router-dom";
import EditUserPage from "./component/editUserPage";
import MainPage from "./component/mainPage";
import UserPage from "./component/userPage";
import UsersListPage from "./component/usersListPage";
import Users from "./layouts/users";

// const routes = [
//   {
//     path: "",
//     element: <MainPage />,
//   },
//   {
//     path: "users",
//     element: <Users />,
//     children: [
//       {
//         path: "",
//         element: <UsersListPage />,
//       },
//       {
//         path: ":userId",
//         element: <UserPage />,
//       },
//       {
//         path: ":profile",
//         element: <UserPage />,
//       },
//       {
//         path: ":edit",
//         element: <EditUserPage />,
//       },
//     ],
//   },
//   {
//     path: "*",
//     element: <Navigate to="/" />,
//   },
// ];

function App() {
  // const elements = useRoutes(routes);

  // return elements;

  return (
    <>
      <div>
        <h1>APP</h1>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="users" element={<Users />}>
            <Route index element={<UsersListPage />} />
            <Route path=":userId/profile" element={<UserPage />}>
              <Route path=":edit" element={<EditUserPage />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
