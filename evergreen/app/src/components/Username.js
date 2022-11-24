import React from 'react';

import "../styles/components/username.css";

class Username extends React.Component {
  render() {
    return (
      <>
        <div className="separator-username">
          <label className="username">
            {this.props.text}
          </label>
        </div>
      </>
    );
  }
}

export default Username;