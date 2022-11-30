import './App.css';
import one from './one.jpg'
import two from './two.JPG'
import three from './three.jpg'
import four from './four.JPG'
import { useEffect } from 'react';


function Hobbies() {
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
            <div id="hobbies-achieve">
                <div id='achievement' className='hiddenLeft'>
                    <h1>Achievements</h1>
                    <ul>
                        <li>Certification of completion on Web Development</li>
                        <li>Certifications of completion of python programming.</li>
                        <li>Certifications on completion of basis of network.</li>
                        <li>Certifications of appreciation on basis of computer and IT skills.</li>
                        <li> Certifications of completion of C programming</li>
                        <li>Runner up in 2019 basketball zonals.</li>
                        <li>Runner up in 2020 basketball zonals.</li>
                    </ul>
                </div>
                <div id='hobbies' className='hiddenRight'>
                    <h1>HOBBIES</h1>
                    <div id='imgsl'>
                        <img src={one} alt="" />
                        <img src={two} alt="" />
                        <img src={three} alt="" />
                        <img src={four} alt="" />
                    </div>
                </div>
            </div>
    );
}

export default Hobbies;