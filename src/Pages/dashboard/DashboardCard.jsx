import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/axiosPublic/useAxiosPublic";
import Card from "./Card";

const DashboardCard = () => {
  // data fetching hook
  const axiosPublic = useAxiosPublic();

  // tanstack query
  const {
    isPending,
    error,
    data = [],
  } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/projects`);
      return res?.data;
    },
  });

  // console.log(data)
  // data fetching loading
  if (isPending) return "Loading...";
  // data fetching error
  if (error) return "An error has occurred: " + error.message;
  return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* data map and data passing Card component */}
        {data?.map((card) => (
          <Card key={card?._id} card={card} />
        ))}
      </div>
    );
};

export default DashboardCard;