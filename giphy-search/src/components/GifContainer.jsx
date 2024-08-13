function GifContainer({ GIFs }) {

    return (

        <ul>
            {GIFs?.map((gif) => <li key={gif.id}>
                <p>
                    {gif.info}
                </p>
                <img src={gif.images.fixed_height.url} alt={gif.title} />
            </li>

            )}
        </ul>
    )
}

export default GifContainer
