import React from 'react';

import "../styles/components/welcome.css";

class Welcome extends React.Component {
  render() {
    return (
      <>
        <div>
          <label className="welcome">
            {this.props.text}
          </label>
        </div>
      </>
    );
  }
}

export default Welcome;