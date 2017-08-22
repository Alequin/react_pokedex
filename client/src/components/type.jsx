import React from 'react';

class Type extends React.Component{

  render(){
    return (
      <div className="type-container">
        <h3>Type</h3>
        <p>{this.props.type}</p>
      </div>
    );
  }

}

export default Type;
