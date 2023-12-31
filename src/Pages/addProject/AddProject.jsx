import { Container, Grid, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";";useAxiosSecure";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/axiosPublic/useAxiosPublic";
import toast from "react-hot-toast";

const AddProject = () => {
  const axiosPublic = useAxiosPublic()
  const [err, setErr]= useState("")
 const navigate = useNavigate()
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
      const pro = await axiosPublic.post("/projects", project);
      if(pro.statusText==="OK"){
        toast.success("Project create successfully")
        navigate('/dashboard/my-project')
      }

    }
  return (
    <Box sx={{p:3, height:"88vh"}}>
      <Typography textAlign={"center"} sx={{ fontWeight: "800", fontSize:{xs:"30px",md:"42px"} }}>
      Sample Project
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
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Project Image Url"
                name="projectImg"
                multiline
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Project Description"
                name="description"
                multiline
                required
                fullWidth
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


export default AddProject;