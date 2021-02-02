import React from "react";



 class Button extends React.Component {
    

   
  render() {
    return (
      <div>
          <button className={this.isSelected} onClick={this.props.onClick}>{this.props.children}className="form-control btn btn-primary" </button>
      </div>
    );
  }
}

export default Button;