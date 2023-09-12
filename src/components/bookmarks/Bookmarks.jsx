import Bookmark from "../bookmark/Bookmark";
import PropTypes from 'prop-types'

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 mt-2">
            <div className="p-4 m-4 bg-slate-200 rounded-lg ">
                <h3 className="text-2xl font-semibold text-center">Spent Time on Read: {readingTime}</h3>
            </div>
            <h1 className="text-2xl font-semibold text-center p-2">Bookmarked Blogs: {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}
export default Bookmarks;