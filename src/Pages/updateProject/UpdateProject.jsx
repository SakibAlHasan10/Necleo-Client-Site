
import { Container, Grid, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";";useAxiosSecure";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/axiosPublic/useAxiosPublic";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

const UpdateProduct = () => {
  const axiosPublic = useAxiosPublic()
  const [err, setErr]= useState("")
 const navigate = useNavigate()
 const {id}= useParams()
    const { isPending, error, data={} } = useQuery({
        queryKey: ['singleProjects', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/my-projects/${id}`);
            return res?.data;
        },
    })
    const {download_url, author, description, _id}=data;
    // console.log(id, data)
      // data fetching loading
  if (isPending) return <p className="text-center mt-52 text-xl">Loading...</p>;
  // data fetching error
  if (error) return <p className="text-center mt-52 text-xl">An error has occurred: ${error.message}</p>;
  const handleSubmit = async (event) => {
    event.preventDefault();
    setErr("")
    const data = new FormData(event.currentTarget);
    const authorName = data.get("authorName");
    const projectImg = data.get("projectImg");
    const projectDescription = data.get("description");

      const project = {
        author: authorName,
        download_url:projectImg,
        description: projectDescription
      };
    // console.log(project)
    //   create projects
      const pro = await axiosPublic.patch(`/my-projects/${_id}`, project);
      if(pro.data.modifiedCount===1){
        toast.success("Project update successfully")
        navigate('/dashboard/my-project')
      }
    //   console.log(pro)
    }
  return (
    <Box sx={{p:3, height:"88vh"}}>
      <Typography textAlign={"center"} sx={{ fontWeight: "800", fontSize:{xs:"30px",md:"42px"} }}>
      Update Project
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 8 }}>
        <Container sx={{ display: "flex", gap: "20px" }}>
          {/* product section */}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                id="authorName"
                label="Author Name"
                name="authorName"
                defaultValue={author}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Project Image Url"
                name="projectImg"
                multiline
                required
                fullWidth
                defaultValue={download_url}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Project Description"
                name="description"
                multiline
                required
                fullWidth
                defaultValue={description}
                rows={4}
              />
            </Grid>
          </Grid>
        </Container>
        <Typography sx={{textAlign:"center", mt:"20px", color:"red"}}>
          {err}
        </Typography>
        <Container>
          <Button
            type="submit"
            size="medium"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </Container>
      </Box>
    </Box>
  );
};


export default UpdateProduct;