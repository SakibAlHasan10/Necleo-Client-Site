import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full min-h-screen">
      <div className=" pt-52 text-center min-h-screen ">
        <h1 className="text-4xl font-bold mb-6">My Assignment</h1>
        <Link to={"/dashboard"}>
        <Button variant="contained">Go to Dashboard</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
