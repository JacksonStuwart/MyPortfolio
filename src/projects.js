import './App.css';
import { useEffect } from 'react';


function Projects() {
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
        <div id='projects'>
            <h1>PROJECTS</h1>
            <div className='inner-project hiddenLeft '>
                <h2>INVENTORY MANAGEMENT</h2>
                <p>
                    A real world application developed for an NGO named REACHH.
                    This application helps to manage their inventory , maintain their
                    customer consumption and refill of medicines and helps their
                    organization to maintain an overall report for accounting
                    purpose.<br />
                    FRAMEWORK - Flutter, Firebase
                </p>
            </div>
            <div className='inner-project hiddenRight'>
                <h2>BIKE SERVICE APPLICATION</h2>
                <p>
                    It is a web application for the bike service stations where the
                    customer bookings are made online and monitored by service
                    stations.<br />
                    FRAMEWORK - node.js, Express.js, Html, EJS, CSS, Firebase.
                    <a href="https://github.com/JacksonStuwart/Bike-Application-project.git" target="_blank" rel='noreferrer'><h3> GITHUB REPO </h3></a>

                </p>
            </div>
            <div className='inner-project hiddenLeft'>
                <h2>REACT APP</h2>
                <p>
                    This is an android application done using React framework for
                    personal use, to view and update Allowance, To-Do-Details and
                    to manage passwords.<br />
                    FRAMEWORK - React-Native, Firebase
                    <a href="https://github.com/JacksonStuwart/React-Native-App.git" target="_blank" rel='noreferrer'><h3> GITHUB REPO </h3></a>

                </p>
            </div>
            <div className='inner-project hiddenRight'>
                <h2>HOME SECURITY SYSTEM</h2>
                <p>
                    An IOT based system which alert individual when theft happens
                    in a house. It is implemented by using GSM module ,sonar
                    sensor. When a theif tries to break or open the locker through a
                    Gsm module it alerts the user through call or SMS.<br />
                    TECHNOLOGIES USED : Aurdino uno ,Arduino IDE
                </p>
            </div>
            <div className='inner-project hiddenLeft'>
                <h2>SMART HOME</h2>
                <p>
                    Smart Home An IOT based smart home which helps the user to
                    control the appliances such as fan, light etc.<br />
                    TECHNOLOGIES USED : Aurdino uno ,Arduino IDE
                </p>
            </div>
            <div className='inner-project hiddenRight'>
                <h2>Portfolio</h2>
                <p>
                    A web page of my portfolio of skills, projects etc .<br />
                    FRAMEWORK - React.js, Firebase
                    <a href="https://github.com/JacksonStuwart/MyPortfolio.git" target="_blank" rel='noreferrer'><h3> GITHUB REPO </h3></a>

                </p>
            </div>
        </div>
    )
}
export default Projects