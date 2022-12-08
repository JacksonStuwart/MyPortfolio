import './App.css';
import Contact from "./contact-div"
import Edabout from './ed-about';
import SkillInterest from './skill-interst';
import Projects from './projects';
import Header from './header';
import Footer from './footer';
import Hobbies from './hobbies';
import { useEffect } from 'react';

function App() {

  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
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

  function Counter(e) {
    fetch("https://api.countapi.xyz/hit/my-portfolio-sable-six.vercel.app/ca881a48-b966-47e4-a39f-89c1eb7da5e1")
      .then(response => response.json())
      .then(json => {
        document.getElementById('titleVisit').innerText = "Total Visits : " + json.value;
      })
    e.preventDefault();
  }
  
  return (
    <div className="App">
      <Header />
      <Contact />
      <Edabout />
      <SkillInterest />
      <Projects />
      <Hobbies />
      <Footer />
    </div>
  );

}

export default App;
