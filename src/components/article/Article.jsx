import React from 'react';
import './article.css';
const Article = (props) => {
  return (
    <div className="gpt3__article">
      <div className="gpt3__article-img">
      <img src={props.img} alt={props.imgAlt}/>
      </div>
     <div className="gpt3_article-content">
      <div>
        <p>{props.date}</p>
        <h3>{props.title}</h3>
    </div>
    <a src={props.url}>Read full Article</a>
     </div>
   
    </div>
  )
}

export default Article