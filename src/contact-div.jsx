import './App.css';
import { FaRegEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  return (
    <div id='contact-div'>
      <div className='hiddenLeft'><FaPhoneAlt id='ph' /><p >+ 91 - 9629666207 </p></div>
      <div><FaRegEnvelope id='mail' /><p > jstuwart1820@gmail.com </p></div>
      <div className='hiddenRight'><FaMapMarkerAlt id='address' /><p > karumandapam, Tiruchurapalli </p></div>
    </div>
  )
}
export default Contact