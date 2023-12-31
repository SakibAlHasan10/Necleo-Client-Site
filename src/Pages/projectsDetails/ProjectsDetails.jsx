import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/axiosPublic/useAxiosPublic";
import { useParams } from "react-router-dom";

const ProjectsDetails = () => {
    const {id}= useParams()
    const axiosPublic = useAxiosPublic()
    const { isPending, error, data={} } = useQuery({
        queryKey: ['singleProjects', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/projects/${id}`);
            return res?.data;
        },
    })
    const {download_url, author}=data;
    // console.log(id, data)
      // data fetching loading
  if (isPending) return <p className="text-center mt-52 text-xl">Loading...</p>;
  // data fetching error
  if (error) return <p className="text-center mt-52 text-xl">An error has occurred: ${error.message}</p>;
    
    return (
        <div className="p-7">
            <div>
                <img src={download_url} alt="" className="w-full md:w-8/12 h-full rounded-xl" />
                <h4 className="text-2xl font-bold mt-6">{author}</h4>
            </div>
        </div>
    );
};

export default ProjectsDetails;