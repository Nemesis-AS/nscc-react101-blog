import { Link } from "react-router-dom";

const PostCard = ({ data }) => {
    const formatDate = (stamp) => {
        const date = new Date(stamp);
        const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
        return `${MONTHS[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    };

    return (
        <Link
            to={`/blog/${data.slug}`}
            className="border border-black transition duration-300 cursor-pointer hover:shadow-black-8 hover:-translate-x-2 hover:-translate-y-2 rounded-lg"
        >
            <img
                src={data.image}
                alt={data.title}
                className="w-full rounded-t-lg"
            />
            <div className="card-text py-6 px-4 text-xl">
                <div className="text-lg">{ formatDate(data.created_at) }</div>
                <div className="text-4xl py-4">
                    { data.title }
                </div>
                <div className="text-xl py-4">
                    { data.description }
                </div>

                <div className="font-bold">Read More &rarr;</div>
            </div>
        </Link>
    );
};

export default PostCard;
