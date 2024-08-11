import React, { useEffect, useState, useRef } from 'react'
import './RowPost.css'
import axios from '../../axios';
import { API_KEY, imageUrl } from '../../contents/constents';
import Youtube from 'react-youtube'
function RowPost(props) {
    const [urlId, setUrlId] = useState('')
    const [movies, setMovies] = useState([]);
    const rowRef = useRef(null);
    useEffect(() => {
        axios.get(props.url).then((response) => {
            setMovies(response.data.results)
        }).catch((err) => {
            alert(err + 'No Videos');
        })
    }, [props.url]);
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        }
    }
    const handleMovies = (id) => {
        console.log(id);
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
            if (response.data.results.length !== 0) {
                setUrlId(response.data.results[0])
            } else {
                console.log('array Empty');
            }
        }).catch((err) => {
            alert("Error fetching movie videos:" + err)
        })
    }
    const scrollLeft = () => {
        if (rowRef.current) {
            rowRef.current.scrollLeft -= 225;
        }
    };

    const scrollRight = () => {   
        if (rowRef.current) {
            rowRef.current.scrollLeft += 225;
        }
    };
    return (
        <div className='rows'>
            <h3>{props.title}</h3>
            <div className='scroll-buttons'>
                <button onClick={scrollLeft}>&#8249;</button>
                <button onClick={scrollRight}>&#8250;</button>

            </div>
            <div className="posters" ref={rowRef}>
                {movies.map((obj) =>
                    <img key={obj.id} onClick={() => handleMovies(obj.id)} className='row-images' src={`${imageUrl + obj.backdrop_path}`} alt="poster" />
                )}
            </div>
            
            {urlId && <Youtube opts={opts} videoId={urlId.key} />}
        </div>
    )
}

export default RowPost
