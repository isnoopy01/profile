import React, { Component } from 'react'
import contact from '../Components/public/image/contactlogo.png';
import mailme from '../Components/public/image/mailmeimg.png';


class Contact extends Component {
    render() {
        return (
            <section className="container-1">

                <img id="contactimg" src={contact} width="180" height="180" alt="contactlogo"/>
                <h3> <strong>Bui Minh Toan</strong></h3>
                <h4>Email Id: minhtoanbmt2001@gmail.com</h4>
                <a id="mail"href="https://mail.google.com/mail/?view=cm&fs=1&to=minhtoanbmt2001@gmail@gmail.com"><img id="mailmelogo" src={mailme} alt="mail me"/>Click Here To Send Mail</a>
                <br/>
                        <a href="https://www.facebook.com/bmt3110/">
                        <span className="icon fa fa-facebook" style={{color:'antiquewhite'}} ></span>
                        </a>
                        <a href="https://twitter.com/Simduck01" >
                                <span className="icon fa fa-twitter"  style={{color:'antiquewhite'}}></span>
                        </a>
                        <a href="https://github.com/isnoopy01">
                                <span className="icon fa fa-github" style={{color:'antiquewhite'}} ></span>
                        </a>
                        <a href="https://www.instagram.com/m.curtis.t/">
                                <span className="icon fa fa-instagram"  style={{color:'antiquewhite'}}></span>
                        </a>

                
            </section>
        )
    }
}

export default Contact
