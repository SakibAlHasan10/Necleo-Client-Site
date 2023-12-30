import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-[#f4a261] to-[#e76f51]">
      <div className=" pt-52 text-center min-h-screen ">
        <h1 className="text-5xl font-bold mb-10">My Assignment</h1>
        <Link to={"/dashboard"}>
        <Button variant="contained">Go to Dashboard</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
