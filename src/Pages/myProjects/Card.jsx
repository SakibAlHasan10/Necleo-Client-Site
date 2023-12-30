import { Link } from "react-router-dom";

const Card = ({card}) => {
    const {_id, author, url, download_url}=card;
    // console.log(url)
    return (
        <div>
            <div>
                <Link>
                <img src={download_url} alt="" className="w-full h-full rounded-md" />
                </Link>
            </div>
        </div>
    );
};

export default Card;