import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="max-w-[1440]" >
            <Outlet/>
        </div>
    );
};

export default Root;