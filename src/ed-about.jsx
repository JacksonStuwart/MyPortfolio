import './App.css';

function Edabout() {
    return (
        <div id='ed-about'>
            <div id="education" className='hiddenLeft'>
                <h1>EDUCATION</h1>
                <table><tr>
                    <td>2018-2022</td>
                    <td>SARANATHAN COLLEGE OF ENGINEERING
                    <h6>B.Tech - IT | CGPA - 8.00</h6>
                    </td>
                </tr>
                    <tr>
                        <td>2017-2018</td>
                        <td>SRV.MAT.HR.SEC.SCHOOL
                        <h6>HSC | 73.33%</h6>
                        </td>
                    </tr>
                    <tr>
                        <td>2015-2016</td>
                        <td>SRV.MAT.HR.SEC.SCHOOL
                        <h6>SSLC | 91.6%</h6>
                        </td>
                    </tr>
                </table>
            </div>
            <div id='about' className='hiddenRight'>
            <h1>About me</h1>
                <p id='about-p'>
                    I'm a passionate youngster who
                    wants to develop career by utilising
                    opportunities and learning new
                    technologies which could enhance
                    my skills.

                </p>
            </div>
        </div>
    )
}

export default Edabout