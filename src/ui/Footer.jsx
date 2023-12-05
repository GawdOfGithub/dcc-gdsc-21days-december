import dcc from "../assets/dccc.jpg";
// export const Footer = () => {
//   return (
//     <footer className="footer p-10  text-base-content  custom-bg-color">
//     <aside>
//      <img height={50} width={50} src={dcc}/>
//       <p>DEVELOPERS & CODERS CLUB NITA<br/></p>
//     </aside> 
//     <nav>
//       <header className="footer-title">Services</header> 
//       <a className="link link-hover">Branding</a>
//       <a className="link link-hover">Design</a>
//       <a className="link link-hover">Marketing</a>
//       <a className="link link-hover">Advertisement</a>
//     </nav> 
//     <nav>
//       <header className="footer-title">Company</header> 
//       <a className="link link-hover">About us</a>
//       <a className="link link-hover">Contact</a>
//       <a className="link link-hover">Jobs</a>
//       <a className="link link-hover">Press kit</a>
//     </nav> 
//     <nav>
//       <header className="footer-title">Legal</header> 
//       <a className="link link-hover">Terms of use</a>
//       <a className="link link-hover">Privacy policy</a>
//       <a className="link link-hover">Cookie policy</a>
//     </nav>
//   </footer>
//   )
// }


// // National Institute of Technology, Agartala,
// // Jirania, Tripura - 799046


import React from 'react';
import { GrLinkedin } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { RxDiscordLogo } from "react-icons/rx";


export const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
      <img height={100} width={100} src={dcc}/>
        <h3>DECEMBOTHONE</h3>
        <p>Developers & Coders Club - Dream Code Conquer</p>
        <div className='college'>
          <span>National Institute of Technology, Agartala</span>
          <span>Jirania, Tripura - 799046</span>
        </div>
        <ul className="socials">
          <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=dccnita@gmail.com" target='_blank' rel="noreferrer"><AiOutlineMail size={30} /></a></li>
          <li><a href="https://twitter.com/dccnita" target='_blank' rel="noreferrer"><FaTwitter size={30} /></a></li>
          <li><a href="https://www.instagram.com/dccnita/" target='_blank' rel="noreferrer"><FaInstagramSquare size={30} /></a></li>
          <li><a href="https://www.linkedin.com/company/dccnita/" target='_blank' rel="noreferrer"><GrLinkedin size={30} /></a></li>
          <li><a href="https://discord.com/invite/58qJhGtTaa" target='_blank' rel="noreferrer"><RxDiscordLogo size={30} /></a></li>
          <li><a href="https://www.youtube.com/@DCCNITA" target='_blank' rel="noreferrer"><BsYoutube size={30} /></a></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>copyright &copy;2023 DCC.</p>
      </div>
    </footer>
  )
}
