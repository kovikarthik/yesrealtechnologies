import React from 'react'
import './Careers.css'
import image from '../assets/careers.gif'
import engineer from '../assets/engineer.pdf'
import cto from '../assets/cto.pdf'
// import {Link} from 'react-scroll'
import { HashLink as Link } from 'react-router-hash-link'
import ScrollTop from '../ScrollTop'

function Careers() {
  const openwebpage = url => {
    window.open(url, '_blank')
  };
  return (
    <div id='top'>
            <ScrollTop/>
      <br />
      <div className="row" style={{ margin: "0rem" }}>
        <div className="col-4">
          <img src={image} style={{ height: "370px", width: "350px" }} />

        </div>
        <div className="col" style={{ textAlign: "left", margin: "1rem" }}><br /><br /><br /><br />
          <h1 style={{ fontFamily: "Quicksand" }}>Yeah ! We have job vacancies</h1>
          <span>&nbsp;&nbsp;You are one click away to make your future bright . Make a smart move and <strong>JOIN US</strong></span>
          <br /><br />
          {/* <button class="btn btn-dark" style={{ fontFamily: "Poppins" }}>
            </button> */}
          <Link className="btn btn-dark" style={{ fontFamily: "Poppins" }} to='#curcareer' smooth={true} duration={1000}>Click to find job openings .</Link>
        </div>
      </div>
      <div id='curcareer' style={{ background: "#FFD029", padding: "3rem", paddingTop: '1.5rem' }}>

        <h2 style={{ fontFamily: "Quicksand" }} >CURRENT OPENINGS </h2>
        <br />
        <div className="row" style={{ textAlign: "left" }}>

          <div className="col card m-2 shadow border-0 p-4">
            <span style={{ fontFamily: "Poppins" }}><strong>                        React JS Developers

            </strong></span>
            <span style={{ fontSize: "0.8rem", marginTop: "0.4rem", color: "grey", letterSpacing: "0.02rem", marginLeft: "0.2rem" }}> EXPERIENCE<br />
              <strong style={{ color: "black" }}>                       3 to 10 Years


              </strong></span>

            <span style={{ fontSize: "0.9rem", marginTop: "0.4rem" }}>
               HTML, CSS, JavaScript, ReactJs(2+Versions)


            </span>



          </div>
          <div className="col card m-2 shadow border-0 p-4">
            <span style={{ fontFamily: "Poppins" }}><strong>                        Node JS Developers

            </strong></span>
            <span style={{ fontSize: "0.8rem", marginTop: "0.4rem", color: "grey", letterSpacing: "0.02rem", marginLeft: "0.2rem" }}> EXPERIENCE<br />
              <strong style={{ color: "black" }}>                       3 to 10 Years


              </strong></span>

            <span style={{ fontSize: "0.9rem", marginTop: "0.4rem" }}>
              JavaScript, ExpressJS, NodeJs, MongoDB.


            </span>



          </div>
          <div className="col card m-2 shadow border-0 p-4">
            <span style={{ fontFamily: "Poppins" }}><strong>                        Angular Developers

            </strong></span>
            <span style={{ fontSize: "0.8rem", marginTop: "0.4rem", color: "grey", letterSpacing: "0.02rem", marginLeft: "0.2rem" }}> EXPERIENCE<br />
              <strong style={{ color: "black" }}>                       3 to 10 Years


              </strong></span>

            <span style={{ fontSize: "0.9rem", marginTop: "0.4rem" }}>
              TypeScript HTML, CSS, AngularJs(2+Versions)


            </span>



          </div>
          <div className="col card m-2 shadow border-0 p-4">
            <span style={{ fontFamily: "Poppins" }}><strong>                        UI / UX Designers

            </strong></span>
            <span style={{ fontSize: "0.8rem", marginTop: "0.4rem", color: "grey", letterSpacing: "0.02rem", marginLeft: "0.2rem" }}> EXPERIENCE<br />
              <strong style={{ color: "black" }}>                       3 to 10 Years


              </strong></span>

            <span style={{ fontSize: "0.9rem", marginTop: "0.4rem" }}>
              {/* JavaScript HTML, CSS, Angulars(2+Versions/Re actis, ExpressJS, NodeJs, MongoDB. */}
              preparing mockups, wireframing, protoyping.
              Tools - Figma, AdobeXD, Sketch.

            </span>



          </div>


        </div>



        <div className="row" style={{ textAlign: "left" }}>


          <div className="col card m-2 shadow border-0 p-4">
            <span style={{ fontFamily: "Poppins" }}><strong>                       Digital Marketing

            </strong></span>
            <span style={{ fontSize: "0.8rem", marginTop: "0.4rem", color: "grey", letterSpacing: "0.02rem", marginLeft: "0.2rem" }}> EXPERIENCE<br />
              <strong style={{ color: "black" }}>                       3 to 10 Years


              </strong></span>

            <span style={{ fontSize: "0.9rem", marginTop: "0.4rem" }}>
              Prior Experience in Startups, Negotiation Skills, Growth roadmap and innovations, Architect, Engineer hunting and team growth management, Product Management, Strategic Thinking, Managing Talent, Managing Innovation, Managing Priorities



            </span>



          </div>
          <div className="col card m-2 shadow border-0 p-4">
            <span style={{ fontFamily: "Poppins" }}><strong>                       Market Manager
            </strong></span>
            <span style={{ fontSize: "0.8rem", marginTop: "0.4rem", color: "grey", letterSpacing: "0.02rem", marginLeft: "0.2rem" }}> EXPERIENCE<br />
              <strong style={{ color: "black" }}>                       3 to 10 Years


              </strong></span>

            <span style={{ fontSize: "0.9rem", marginTop: "0.4rem", textAlign: 'left' }}>
              Prior Experience in Startups, Negotiation Skills, Growth roadmap and innovations, Architect, Engineer hunting and team growth management, Product Management, Strategic Thinking, Managing Talent, Managing Innovation, Managing Priorities


            </span>



          </div>

          <div className="col card m-2 shadow border-0 p-4">
            <span style={{ fontFamily: "Poppins" }}><strong>                       Chief Technology Officer

            </strong></span>
            <span style={{ fontSize: "0.8rem", marginTop: "0.4rem", color: "grey", letterSpacing: "0.02rem", marginLeft: "0.2rem" }}> EXPERIENCE<br />
              <strong style={{ color: "black" }}>                        10<sup>+</sup> Years


              </strong></span>

            <span style={{ fontSize: "0.9rem", marginTop: "0.4rem", textAlign: 'left' }}>
              Prior Experience in Startups, Negotiation Skills, Growth roadmap and innovations, Architect, Servers, Cybersecurity, Tech & Coding Skills (Full Stack), team growth management, Product Management, Team Management Skills, Strategic Thinking, Managing Talent, Managing Innovation, Managing Priorities.


            </span>
            <br />
            {/* <a href='../assets/cto.pdf' target='_blank'>koo</a> */}
            {/* <div style={{ marginLeft: "13rem",  color: 'rgba(0,109,184,255)' }}> <strong onClick={()=>{openwebpage('../assests/cto.pdf')}}>Know more</strong></div> */}
            <div style={{ marginLeft: "13rem", color: 'rgba(0,109,184,255)' }}> <strong ><a href={cto} target="_blank" style={{ cursor: 'pointer', textDecoration: 'none', color: 'black' }}>Know more</a></strong></div>


          </div>

          <div className="col card m-2 shadow border-0 p-4">
            <span style={{ fontFamily: "Poppins" }}><strong>                       Engineering Manager
            </strong></span>
            <span style={{ fontSize: "0.8rem", marginTop: "0.4rem", color: "grey", letterSpacing: "0.02rem", marginLeft: "0.2rem" }}> EXPERIENCE<br />
              <strong style={{ color: "black" }}>                       10<sup>+</sup> Years


              </strong></span>

            <span style={{ fontSize: "0.9rem", marginTop: "0.4rem", textAlign: 'left' }}>
              Prior Experience in Startups, Negotiation Skills, Growth roadmap and innovations, Architect, Servers, MVP (Minimum Viable Product) and DevOps issues, team growth management, Product Management, Team Management Skills, Strategic Thinking, Managing Talent, Managing Innovation, Managing Priorities.



            </span>
            <br />
            <div style={{ marginLeft: "13rem", color: 'rgba(0,109,184,255)' }}> <strong ><a href={engineer} target="_blank" style={{ cursor: 'pointer', textDecoration: 'none', color: 'black' }}>Know more</a></strong></div>

          </div>


        </div>












































      </div>
    </div>
  )
}

export default Careers