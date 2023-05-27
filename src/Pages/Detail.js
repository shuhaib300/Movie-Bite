import React from 'react'
import {useState} from 'react';
import {useContext} from 'react';
import {useParams} from 'react-router-dom'
import {newcontext} from '../App'
import {imageUrl} from '../Assets/Api';

function Detail() {
  const{array,setarray}=useContext(newcontext)
  const {id}=useParams()
  // console.log(array);
  console.log(id);

  const [filter]= array.filter((res)=>res.id==id);
  console.log(filter);
  return (
    <div className='dtl'>
      
     <img className='imgmovies' src={imageUrl+filter.backdrop_path} alt="No Image" /> 
      <h1 className='heading'>{filter.title || filter.name}</h1>
      <h5 className='heading'>Release Date:- {filter.first_air_date}</h5>
      <h5 className='heading'>Popularity:- {filter.popularity}</h5>
      <h5 className='heading'>Average Rating:- {filter.vote_average}</h5>
      <h5 className='heading'>Total Votes:- {filter.vote_count}</h5>
      <h1>{filter.overview}</h1>
    </div>
  )
}

export default Detail
