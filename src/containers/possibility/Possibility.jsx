import React from 'react';
import './possibility.css';
import possibility from '../../assets/possibility.png';
const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
      <img src={possibility} alt="possibility image" />
      </div>
      <div className="gpt3__possibility-container">
      <h4>Dared to dream?</h4>
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Egestas quis ipsum suspendisse ultrices gravida dictum fusce. Sagittis orci a scelerisque purus semper eget duis at tellus. Malesuada fames ac turpis egestas maecenas pharetra. Sit amet volutpat consequat mauris nunc congue.</p>
      <h4>Get started now with GPT-3</h4>
      </div>
    </div>
  )
}

export default Possibility;