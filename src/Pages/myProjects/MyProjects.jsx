import { Link } from "react-router-dom";
import img from "../../assets/9224390_add_plus_new_create_control_icon 1.png"
const MyProjects = () => {
return (
    <div className="pt-[18px] pl-[52px] w-full min-h-[90vh]">
        <h2 className="text-5xl font-semibold mb-6">My Projects</h2>

        <div className="text-center w-[404px] h-[265px] p-[22px] bg-white rounded-[10px]">
            <Link to={"/dashboard/sample-projects"}>
            <div className="bg-[#fa782f66] w-[360px] h-[180px] rounded-[10px]">
                <div className="flex justify-center items-center h-full">
                <img src={img} alt="sample project" className="w-[53px] h-[53px]" />
                </div>
            </div>
            <h4 className="text-base font-semibold mt-[10px]">Create a new project</h4>
            <p className="text-xs mt-1 font-semibold">or try a <Link to={"/dashboard/sample-projects"}>
            <span className="text-[#FA782F]">sample project</span>
            </Link>
            </p>
            </Link>
        </div>
    </div>
  );
};

export default MyProjects;
