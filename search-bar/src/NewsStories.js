const NewsStories = ({stories = []}) => {
    return (
        <div className="stories-wrapper">
            {
                stories && 
                stories.map(({id, url, title, author, points}) => (
                    title && url && 
                    <div className='stories-list' key={id}>
                        <h3><a href={url} target="_blank" rel="noreferrer">{title}</a> - By <b>{author}</b> ({points} points) </h3>
                    </div>
                ))
            }
        </div>
    );
};
export default NewsStories;