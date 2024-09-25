import { Outlet } from "react-router-dom";
import LearnAside from "../../components/LearnAside";
import Navbar from "../../components/Navbar";


const LearnLayout = () => {
  return (
    <div className="learn-layout">
      <Navbar  />
      <LearnAside />

      <div className="ml-72">
        
        <Outlet />
      </div>
    </div>
  );
};

export default LearnLayout;