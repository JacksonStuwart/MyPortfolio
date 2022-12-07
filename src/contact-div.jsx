import './App.css';
import { FaRegEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { useEffect } from 'react';


function Contact() {
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
  return (

    <div id='contact-div'>
      <div className='hiddenLeft'><FaPhoneAlt id='ph' /><p >+ 91 - 9629666207 </p></div>
      <div><FaRegEnvelope id='mail' /><p > jstuwart1820@gmail.com </p></div>
      <div className='hiddenRight'><FaMapMarkerAlt id='address' /><p > karumandapam, Tiruchurapalli </p></div>
    </div>
  )
}
export default Contact