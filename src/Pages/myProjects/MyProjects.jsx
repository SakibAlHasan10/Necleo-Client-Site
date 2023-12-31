import { Link } from "react-router-dom";
import img from "../../assets/9224390_add_plus_new_create_control_icon 1.png"
import useAxiosPublic from "../../hooks/axiosPublic/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
const MyProjects = () => {
    const axiosPublic = useAxiosPublic();

  // tanstack query
  const {
    isPending,
    error,
    data = [],
  } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/my-projects`);
      return res?.data;
    },
  });

  // console.log(data)
  // data fetching loading
  if (isPending) return <p className="text-center mt-52 text-xl">Loading...</p>;
  // data fetching error
  if (error) return <p className="text-center mt-52 text-xl">An error has occurred: ${error.message}</p>;
  
return (
    <div className="pt-[18px] pl-[52px] w-full min-h-[90vh]">
        <h2 className="text-5xl font-semibold mb-6">My Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-5 gap-5">

        {
            data?.map(card=><div key={card._id} >
                <Link to={`/dashboard/my-projects/${card._id}`}>
                <div className="rounded-[10px] bg-white p-4">
                <img src={card.download_url} alt="" className="rounded-[10px]" />
                </div>
                </Link>
            </div>)
        }
    </div>

        <div className="text-center w-[300px] md:w-[404px] h-[265px] p-[22px] bg-white rounded-[10px] mb-14">
            <Link to={"/dashboard/sample-projects"}>
            <div className="bg-[#fa782f66] w-[260px] md:w-[360px] h-[180px] rounded-[10px]">
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
