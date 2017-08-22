import React from 'react';

class Profile extends React.Component{

  render(){
    return (
      <div>
        <h2 className="name">Bulbasaur</h2>
        <div className="health-container">
          <p>HP:</p>
          <div></div>
        </div>
        <p className="health">10/10</p>  
      </div>
    );
  }

}

export default Profile;
