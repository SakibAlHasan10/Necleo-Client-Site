import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/axiosPublic/useAxiosPublic";
import Card from "./Card";

const MyProjects = () => {
    const axiosPublic = useAxiosPublic()
    const { isPending, error, data=[] } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/projects`);
      
            return res?.data;
        },
    })
    // console.log(data)
      if (isPending) return 'Loading...'
    
      if (error) return 'An error has occurred: ' + error.message
    return (
        <div>
            {
                data?.map(card=><Card key={card?._id} card={card}/>)
            }
        </div>
    );
};

export default MyProjects;