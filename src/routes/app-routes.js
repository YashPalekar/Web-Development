import { Route, Routes } from "react-router-dom";
import Sider from "../components/sider";
import Cities from "../pages/cities";
import Home from "../pages/home";

const AppRoutes = () => {
  return (
    <>
      <Sider tabs={["home", "cities"]} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cities" element={<Cities />}></Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
