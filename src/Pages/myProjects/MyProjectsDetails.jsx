import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/axiosPublic/useAxiosPublic";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import Swal from "sweetalert2";

const MyProjectsDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const {
    isPending,
    error,
    data = {},
  } = useQuery({
    queryKey: ["mySingleProjects", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/my-projects/${id}`);
      return res?.data;
    },
  });
  const { download_url, author, description, _id } = data;
  // console.log(id, data)
  // data fetching loading
  if (isPending) return <p className="text-center mt-52 text-xl">Loading...</p>;
  // data fetching error
  if (error) return <p className="text-center mt-52 text-xl">An error has occurred: ${error.message}</p>;
  const handleDelete = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/my-projects/${id}`).then((res) => {
          if (res?.data?.deletedCount === 1) {
            Swal.fire({
              title: "Deleted!",
              text: "Your project has been deleted.",
              icon: "success",
            });
            navigate("/dashboard/my-project");
          }
        });
      }
    });
  };
  return (
    <div className="p-7">
      <div>
        <img src={download_url} alt="" className="w-full md:w-10/12 lg:w-8/12 h-full rounded-xl" />
        <div className="gap-10 flex mt-6">
          <Link to={`/dashboard/update/${_id}`}>
            <Button variant="contained">Update Project</Button>
          </Link>
          <Button variant="contained" onClick={handleDelete}>
            Delete Project
          </Button>
        </div>
        <h4 className="text-2xl font-bold mt-5 mb-3">{author}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default MyProjectsDetails;
