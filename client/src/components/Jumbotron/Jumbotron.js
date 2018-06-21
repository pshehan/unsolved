import React from "react";
import './Jumbotron.css';
import { Link } from "react-router-dom";



export default class Jumbotron extends React.Component {
  state = {
    navbarHeight: 0
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
        backgroundColor: 'black',
        marginTop: this.state.navbarHeight
      }}
        className="jumbotron">
        {this.props.children}

           
           <Link to="/"><button type="button" className="btn btn-outline-danger">Home</button></Link>
           <Link to="/savedArticles"><button type="button" className="btn btn-outline-danger">Saved</button></Link>
      </div>
    )
  }
}
