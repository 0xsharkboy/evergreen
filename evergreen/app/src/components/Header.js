import React from 'react';

import "../styles/components/header.css";

class Header extends React.Component {
  render() {
    return (
      <>
        <div>
          <img className="profile" src={this.props.profile}/>
        </div>
      </>
    );
  }
}

export default Header;