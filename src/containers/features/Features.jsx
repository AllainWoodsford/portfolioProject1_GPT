import React from 'react';
import { Feature } from '../../components';
import './features.css';
const Features = () => {

  const featureData = [{title: "Powerful Analytics", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi sit amet mauris commodo."},
  {title: "Machine Learning", text:"Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Malesuada fames ac turpis egestas integer eget aliquet nibh. Maecenas accumsan lacus vel facilisis."},
  {title: "Advanced Neural Networks", text:"Tortor at risus viverra adipiscing at in tellus integer feugiat. Faucibus in ornare quam viverra orci sagittis eu volutpat odio. Arcu non sodales neque sodales ut etiam sit. Malesuada fames ac turpis egestas sed tempus urna. Integer eget aliquet nibh praesent tristique magna sit."},
  {title: "Automote your processes", text:"Volutpat commodo sed egestas egestas fringilla phasellus"},
]

  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
      {featureData.map((data,index)=> {
        return(<Feature title={data.title} text={data.text} key={index + data.title}/>)
      })}
      </div>
    </div>
  )
}



export default Features;