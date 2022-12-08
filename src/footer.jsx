import './App.css';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useEffect } from 'react';


function Footer() {

    useEffect(() => {
        fetch("https://api.countapi.xyz/hit/my-portfolio-sable-six.vercel.app/ca881a48-b966-47e4-a39f-89c1eb7da5e1")
            .then(response => response.json())
            .then(json => {
                document.getElementById('titleVisit').innerText = "Total Visits : " + json.value;
            })
    })

    return (
        <div id='footer'>
            <div id='insideFooter1' className='hiddenLeft'>
                <a href="https://github.com/JacksonStuwart" target="_blank" rel='noreferrer'><FaGithub id='git' size={50} /></a>
                <a href="https://www.instagram.com/stu_art_20/" target="_blank" rel='noreferrer'><FaInstagram size={50} id='insta' /></a>
                <a href="https://www.linkedin.com/in/jackson-stuwart-833076255/" target="_blank" rel='noreferrer'><FaLinkedin size={50} id='in' /></a>
            </div>
            <div id='insideFooter2'><p className='hiddenRight' >Website By @JACKSON STUWART</p></div>
        </div>
    );
}

export default Footer;
