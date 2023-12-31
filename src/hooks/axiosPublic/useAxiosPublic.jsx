
    import axios from "axios";

    const axiosPublic = axios.create({
      // baseURL: "http://localhost:5000",
      baseURL: "https://necleo-server-site.vercel.app",
    });
    const useAxiosPublic = () => {
      return axiosPublic;
    };
    
    export default useAxiosPublic;