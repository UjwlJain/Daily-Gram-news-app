import React from 'react'
import { useState, useEffect } from 'react'
import NewsItem from './NewsItem';
const NewsBoard = ({category}) => {

  const[articles,setArticles]= useState([]);
  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`;
    // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=24d596393c824f5db0ad4ede472579da`;
    fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles));
  }, [category])
  
  return (
    <div>
        <h2 className='text-center text-danger'>Latest <span> News</span></h2>
        {articles.map((news, index)=>{
          return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
        })}
    </div>
  )
}

export default NewsBoard