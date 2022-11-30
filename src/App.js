import './App.css';
import Contact from "./contact-div"
import Edabout from './ed-about';
import SkillInterest from './skill-interst';
import Projects from './projects';
import picture from './profile-pic.jpg'
import Hobbies from './hobbies';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });
    const hiddenElementsLeft = document.querySelectorAll('.hiddenLeft');
    const hiddenElementsRight = document.querySelectorAll('.hiddenRight');
    hiddenElementsLeft.forEach((el) => observer.observe(el));
    hiddenElementsRight.forEach((el) => observer.observe(el));
  })
  return (
    <div className="App-header">
      <div id='title-main'>
        <div id="Title-div" className='hiddenLeft'>
          <h1>A I  Jackson Stuwart</h1>
          <h3>Developer</h3>
        </div>
        <div id='profile-pic' className='hiddenRight'>
          <img src={picture} alt="Profile" />
        </div>
      </div>
      <Contact />
      <Edabout />
      <SkillInterest />
      <Projects />
      <Hobbies />
      <div id='footer'>
        <a href="https://github.com/JacksonStuwart" target="_blank" rel='noreferrer'><FaGithub id='git' size={50} /></a>
        <a href="https://www.instagram.com/stu_art_20/" target="_blank" rel='noreferrer'><FaInstagram size={50} id='insta' /></a>
        <a href="https://www.linkedin.com/in/jackson-stuwart-833076255/" target="_blank" rel='noreferrer'><FaLinkedin size={50} id='in' /></a>
        <p className='hiddenRight'>Website By @JACKSON STUWART</p>
      </div>
    </div>
  );
}

export default App;
