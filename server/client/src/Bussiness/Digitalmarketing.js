import React from 'react'
import image from '../assets/teamwork.gif'
import ScrollTop from '../ScrollTop'

function Digitalmarketing() {
    return (
        <div id='top'>
            <ScrollTop />
            <div style={{ textAlign: 'center', color: '#006db8', background: 'whiteSmoke' }}>  <br />
                <h3 style={{ fontFamily: 'Quicksand' }}>DIGITAL MARKETING </h3><br />
            </div>

            <div className='row' style={{ margin: 0 }}>

                <div className='col' >
                    <div style={{ marginLeft: "4rem" }}>
                        <h1 style={{ fontFamily: "Quicksand" }}><br /><br /> <br />   <br />Sorry , it's under developement !</h1>
                        <span>&nbsp;&nbsp;Our team is working hard to complete this page , Please wait . </span>
                    </div>
                    <br /><br />
                </div>
                <div className='col'>
                    <img src="../assets/teamwork.gif" />
                </div>
            </div>

        </div>
    )
}

export default Digitalmarketing
