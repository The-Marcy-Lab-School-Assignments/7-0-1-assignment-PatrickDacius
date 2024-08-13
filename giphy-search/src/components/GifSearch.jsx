import { useState } from "react";
import fetchData from "../utils/fetchData";
import API_KEY from "../config";

function GifSearch({ setData }) {

    const [query, setSearch] = useState('')
    const [error, setError] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault()

        const [data, error] = await fetchData(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=3&rating=g`);
        if (data) setData(data);
        if (error) setError(error.message);
    }
    if (error) return <p>{error.message}</p>
    console.log(query)
    return (
        <form>
            <label htmlFor="searchInput">Enter a Search Term </label>
            <input type="text" value={query} onChange={(e) => setSearch(e.target.value)} className="form-control" id="searchInput" />
            <button onClick={handleSubmit} type="submit" className="btn btn-success">Search</button>
        </form>
    )
}




export default GifSearch
