import React from 'react';

import "../styles/components/description.css";

class Description extends React.Component {
  render() {
    return (
      <>
        <div className="separator-description">
          <label className="description">
            {this.props.text}
          </label>
        </div>
      </>
    );
  }
}

export default Description;