import React from 'react';

class Profile extends React.Component{

  render(){
    return (
      <div>
        <h2 className="name">{this.props.name}</h2>
        <div className="health-container">
          <p>HP:</p>
          <div></div>
        </div>
        <p className="health">{this.props.health}/{this.props.health}</p>
      </div>
    );
  }

}

export default Profile;
