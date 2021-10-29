import React, { Component } from 'react'
import logo from '../Components/public/image/maxresdefault.jpg';
import cse from '../Components/public/image/yt1.png';



class Banner extends Component {
    render() {
        return (
            <section className="container-banner">

                    <a href="#home"><img id="profilepic" src={logo}  width="170" height="170" alt="profilepic"/></a>
                    <h1> Hi! I'm Bui Minh Toan </h1>
                    <p id="paragarph1"> Developer <br/> " "
                    </p>
                    
            </section>
        )
    }
}

export default Banner


