import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>} />
    </Routes>
  )
}

export default AllRoutes;