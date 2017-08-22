import React from 'react';

class Stats extends React.Component{

  render(){
    return (
      <div className="stats-container">
        <p className="attack-stat">{this.props.attack}</p>
        <p>{this.props.defence}</p>
        <p>{this.props.speed}</p>
        <p>{this.props.special}</p>
      </div>
    );
  }

}

export default Stats;
