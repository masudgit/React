import { useEffect } from "react";
import { useState } from "react";
import axios from "axios"
import SearchBar from "./SearchBar";
import NewsStories from "./NewsStories";

const NewsStoriesWithSearch = () => {

  const [stories, setStories] = useState([]);
  const [allStories, setAllStories] =  useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState(''); 
  const url = "http://localhost:3000/"; 

  const fetchStories = async () => {
    try {
        const response = await axios.get(`${url}story`);
        const storedStories = response.data;
        setAllStories(storedStories);
        setStories(storedStories);
        setError(null)
        //console.log(data)
    }catch(err) {
        setError(err.message);
        setStories(null)   
    }finally {
        setLoading(false);
    }
  };

  useEffect(() => {
    fetchStories();
  }, []); 

  const updateKeyword = (keyword) => {
    const filtered = allStories && allStories.filter(story => {
        return `${story.title.toLowerCase()} ${story.author.toLowerCase()}`.includes(keyword.toLowerCase())
    });
    setKeyword(keyword);
    setStories(filtered);
  }

  return (
    <> { /* React Fragment */}
        <div className="wrapper">
            <h2>Latest HN Stories</h2>
            {loading && <div>News frontpage stories loading...</div>}
            {error && <div>{`Problem fetching the News Stories - ${error}`}</div>}
            <SearchBar keyword={keyword} onChange={updateKeyword} />
            <NewsStories stories={stories}/>
        </div>
    </>
  )
};
export default NewsStoriesWithSearch;
