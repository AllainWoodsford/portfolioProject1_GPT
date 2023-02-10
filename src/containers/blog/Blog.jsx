import React from 'react';
import { Article } from '../../components';
import './blog.css';
import blogImages from './import';
import postData from './postData';

const Blog = () => {
  return (
    <div className="gpt3__Blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening, We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__Blog-container_GroupA">
          <Article key={postData[0].title+ postData[0].id} 
          title={postData[0].title} 
          date={postData[0].date} 
          url={postData[0].url} 
          img={blogImages[0].icon} 
          imgAlt={postData[0].imgAlt} />
        </div>
        <div className="gpt3__Blog-container_GroupB">
          {postData.slice(1).map((data,index) => {
              return(<Article key={data.title+index} 
                title={data.title} 
                date={data.date} 
                url={data.url} 
                img={blogImages[index+1].icon} 
                imgAlt={data.imgAlt}/>)
              })} 
            
         
        </div>
      </div>
  
    </div>
  )
}

export default Blog;