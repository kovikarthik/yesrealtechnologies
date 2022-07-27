import React from 'react'
import './Footer.css'
import {NavLink} from'react-router-dom'

export default function Footer() {
    const openwebpage =  url=>{
        window.open(url,'_blank')
      };
  return (
   <>
   <div className='footercontent ' style={{width:'100%',margin:'0',padding:'1rem',backgroundColor:'white',color:'rgba(0,109,184,255)',bottom:'0',boxShadow: 'rgba(99, 99, 99, 0.2) 8px 0px 8px 0px'}}>
      <div className='row scrcenter' >
              <NavLink className="col-2 navbarbtn1"  to="yesrealtechnologies/business" >Business</NavLink>
              <NavLink className="col-2 navbarbtn1"  to="yesrealtechnologies/careers" >Careers</NavLink>
              <NavLink className="col-2 navbarbtn1"  to="yesrealtechnologies/media" >Media</NavLink>
              <NavLink className="col-2 navbarbtn1"  to="yesrealtechnologies/investor" >Investor Relations</NavLink>
              <NavLink className="col-2 navbarbtn1" to="yesrealtechnologies/security" >Security & Privacy</NavLink>
              <NavLink className="col-2 navbarbtn1" to="yesrealtechnologies/contact" >Contact</NavLink>
      </div>
      <div className='row scrcenter' >
              <div className="col-2 " style={{paddingLeft:'0.5rem'}}>
                    <NavLink className="col-2 navbarbtn1" style={{fontWeight: 'normal',textDecoration:'none'}}  to="yesrealtechnologies/business" >Overview</NavLink><br></br>
                    <NavLink className="col-2 navbarbtn1" style={{fontWeight: 'normal',textDecoration:'none'}}  to="yesrealtechnologies/business/recruitment" >Recruitment</NavLink><br></br>
                    <NavLink className="col-2 navbarbtn1" style={{fontWeight: 'normal',textDecoration:'none'}}  to="yesrealtechnologies/business/advisors" >Advisors</NavLink><br></br>
                    <NavLink className="col-2 navbarbtn1" style={{fontWeight: 'normal',textDecoration:'none'}}  to="yesrealtechnologies/business/backendverification" >Backend Verification</NavLink><br></br>
                    <NavLink className="col-2 navbarbtn1" style={{fontWeight: 'normal',textDecoration:'none'}}  to="yesrealtechnologies/business/sass" >Saas</NavLink><br></br>
              </div>
              <div className="col-2 " >
                
              </div>
              <div className="col-2 " ></div>
              <div className="col-2 " ></div>
              <div className="col-2 " ></div>
              <div className="col-2 " >
                3094-13th Cross, 6th A Main 2nd Stage Near ESI Quater Indira Nagar Bengaluru Bangalore Karanataka - 560038 India<br></br><br></br>
                <i class='bx bxl-linkedin-square bx-tada bx-rotate-90' style={{margin:'0',marginRight:'2px',paddingRight:'2px',fontSize:'2rem'}} onClick={() => { openwebpage('https://www.linkedin.com/in/yesreal-technologies-private-limited-91100b233') }} ></i> 
                <i class='bx bxl-facebook-circle bx-tada bx-rotate-90' style={{ margin: '0',marginRight:'2px', paddingRight:'2px', fontSize: '2rem' }}></i>
                <i class='bx bxl-twitter bx-tada bx-rotate-90' style={{ margin: '0', padding: '0', fontSize: '2rem' }}></i>                
              </div>
      </div>
      <div className='row scrcenter' style={{}} >@Copyright 2022 Yesreal Technologies Private Limited</div>
    </div>
   </>
  )
}
