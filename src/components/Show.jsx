import { Link } from "react-router-dom";

export default function Show({bookmark, deleteBookmarks}){


    const removeBookmarks = () => {
        deleteBookmarks(bookmark._id);
      };


return(
    <div className="bookmark">
            <a href={`${bookmark.url}`}><h1>{bookmark.title}</h1></a>
            <button onClick={removeBookmarks}>delete</button>
            <Link to={`/bookmarks/${bookmark._id}`}><button>edit</button></Link>
        </div>
)
}