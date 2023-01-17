import { Outlet } from "react-router-dom";
import MainNav from "../component/MainNav";

const RootLayout = () => {
  return (
    <>
      <MainNav />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
