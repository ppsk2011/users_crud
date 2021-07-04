import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import axios from 'axios';
import {Link} from 'react-router-dom'

const MoviesDashboard = (props) => {

    const test = props.children;
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getAlbums();
    }, [])

    const getAlbums = async () => {
        const resp = await axios.get('https://jsonplaceholder.typicode.com/albums');
        console.log(resp.data)
        setMovies(resp.data)

    }

    const addMovie=(e)=>{
    console.log(e);


    }
    return (
        <div>{test}
            <h1>This is Movies Dashboard</h1>
            <button onClick={addMovie}>    <Link to="/addmovie">Add Movie</Link></button>
            <button>Remove</button>
            <button>Update</button>
            <button>Get All Movies</button>
            {movies && movies.map(movie => (<Movie key={movie.id} movie={movie} />))
            }
 

        </div>
    )

}

export default MoviesDashboard;