import NavBar from "./components/NavBar";
import GifContainer from "./components/GifContainer";
import GifSearch from "./components/GifSearch";
import { handleFetch } from "./utils";
import fetchData from "./utils/fetchData";
import API_KEY from "./config";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const doFetch = async () => {
      const [data, error] = await fetchData(
        `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=3&rating=g`
      );
      if (data) setData(data);
      if (error) setError(error.message);
    };
    doFetch();
  }, []);

  if (error) return <p>{error.message}</p>;

  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <div className="ui container">
        <GifSearch setData={setData} />
        <br />
        <GifContainer GIFs={data.data} />
      </div>
    </div>
  );
}

export default App;
