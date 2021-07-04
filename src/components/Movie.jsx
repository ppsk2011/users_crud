import React from 'react';

const Movie=(props)=>{
console.log(props)
    return(
        <>
        <div>{props.movie.title}</div>
        </>
    )
}

export default Movie;