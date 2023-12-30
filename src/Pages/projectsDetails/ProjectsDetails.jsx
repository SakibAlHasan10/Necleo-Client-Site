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
    const {download_url}=data;
    // console.log(id, data)
      if (isPending) return 'Loading...'

      if (error) return 'An error has occurred: ' + error.message
    
    return (
        <div>
            <div>
                <img src={download_url} alt="" className="w-full h-full rounded-xl" />
                
            </div>
        </div>
    );
};

export default ProjectsDetails;