import { createRoot } from "react-dom/client";
import Homepage from "./pages/Common/Homepage";
import Login from "./pages/Common/Login";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./pages/Common/Registration";
import ClientMainpage from "./pages/Client/Mainpage.jsx";
import MentorMainpage from "./pages/Mentor/Mainpage.jsx";
import GiveHelp from "./pages/Mentor/GiveHelp.jsx";
import MentorAdvice from "./pages/Client/MentorAdvice.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/mentor-home" element={<MentorMainpage />} />
      <Route path="/client-home" element={<ClientMainpage />} />
      <Route path="/give-help" element={<GiveHelp />}/>
      <Route path="/mentor-advice" element={<MentorAdvice />}/>
    </Routes>
  </BrowserRouter>
);
