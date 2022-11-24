import React from 'react';

import "../styles/components/button.css";

class Button extends React.Component {
  Icon({icon: Logo}) {
    return (
      <Logo className="icon"/>
    )
  }
  render() {
    return (
      <>
        <div>
          <button className="button">
            <this.Icon icon={this.props.icon}/>
            {this.props.text}
          </button>
        </div>
      </>
    );
  }
}

export default Button;