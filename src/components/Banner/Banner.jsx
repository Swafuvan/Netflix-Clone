import React, { useEffect, useState } from 'react';
import axios from '../../axios';
import { API_KEY, imageUrl } from '../../contents/constents';
import Youtube from 'react-youtube';
import './banner.css';

function Banner() {
  const [movie, setMovie] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  const [videoId, setVideoId] = useState(null); 

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`);
        const randomIndex = Math.floor(Math.random() * response.data.results.length);
        setMovie(response.data.results[randomIndex]);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchTrendingMovies();
  }, []);

  const handlePlayButton = () => {
    if (movie && movie.id) {
        console.log(movie);
      axios.get(`movie/${movie.id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
        console.log(response.data.results);
            if(response.data.results.length !== 0){
                setVideoId(response.data.results[0])
                setShowVideo(true);
            }else{
                console.log('array Empty'); 
            }
        })
    } else {
      console.error('No video ID available for the selected movie');
    }
  };

  const opts = {
    height: '490',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className='banner'>
      {!showVideo && (
        <div style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ''})` }} className='content'>
          <div className='bannerButton'>
            <h1 className='title'>{movie? movie.title:"" }</h1>
            <button onClick={handlePlayButton} className='button'>Play</button>
            <button className='button'>My List</button>
            <h2 className='description'>{movie ? movie.overview : ''}</h2>
          </div>
        </div>
      )}
      {showVideo && (
        <div className="videoWrapper">
          <Youtube opts={opts} videoId={videoId.key} />
        </div>
      )}
        <div className="fading"></div>
    </div>
  );
}

export default Banner
