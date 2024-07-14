import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import InsideNote from "../pages/InsideNote/InsideNote";

const MyRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pages/InsideNote" element={<InsideNote />} />
            <Route path="/pages/Home" element={<Home />} />
        </Routes>
    )
};

export default MyRoutes;