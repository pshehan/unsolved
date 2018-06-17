import React from "react";
import './Jumbotron.css';



export default class Jumbotron extends React.Component {
  state = {
    navbarHeight: 0
  }

  componentDidMount() {
    this.setState({ navbarHeight: document.querySelector('.navbar').clientHeight })
  }

  render() {
    return (
      <div style={{
        backgroundImage: ("bg.jpg"),
        height: 400,
        clear: 'both',
        fontFamily: 'fondamento',
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',

        marginTop: this.state.navbarHeight
      }}
        className="jumbotron">
        {this.props.children}
      </div>
    )
  }
}
