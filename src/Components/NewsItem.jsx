import React from 'react'
import image from '../assets/newsimg.jpg'
const NewsItem = ({title, description, src, url}) => {
  return (
    <div className="card bg-light text-dark mb-3 d-inline-block my-3 mx-3 px-2 py-2 " style={{maxWidth:"345px"}}>
  <img src={src?src:image} style={{height:"200px", width:"300px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,100):"Breaking: Latest news updates - Description isn't available, Check for details by clicking the button below!"}</p>
    <a href={url} className="btn btn-primary">Read full Article</a>
  </div>
</div>
  )
}

export default NewsItem