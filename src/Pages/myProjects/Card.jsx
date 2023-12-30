import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Card = ({card}) => {
    const {_id, 
        // author, 
        // url, 
        download_url}=card;
    // console.log(url)
    return (
        <div>
            <div>
                <Link to={`/dashboard/projects/${_id}`}>
                <img src={download_url} alt="" className="w-full h-full rounded-md" />
                </Link>
            </div>
        </div>
    );
};
Card.propTypes = {
    card: PropTypes.object,
  };
export default Card;