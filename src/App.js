import { Route, Routes } from "react-router-dom";
import UserDetails from "./components/UserDetails";
import UserList from "./components/UserList";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<UserList />} />
        <Route path=":login" element={<UserDetails />} />
      </Routes>
    </>
  );
}

export default App;
