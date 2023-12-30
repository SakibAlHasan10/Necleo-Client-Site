
const Card = ({card}) => {
    const {_id, author, url}=card
    return (
        <div>
            <div>
                <img src={url} alt="" />
            </div>
        </div>
    );
};

export default Card;