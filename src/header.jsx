import './App.css';
import picture from './profile-pic.jpg'

function Header() {
        return (
        <div id='main'>
            <div id='title-main'>
                <div id="Title-div" className='hiddenLeft'>
                    <h1>A I  Jackson Stuwart</h1>
                    <h3>Developer</h3>
                </div>
                <div id='profile-pic' className='hiddenRight'>
                    <img src={picture} alt="Profile" />
                </div>
            </div>
            <h4 id='titleVisit' className='hiddenRight'> </h4>
        </div>
    );
}

export default Header;
