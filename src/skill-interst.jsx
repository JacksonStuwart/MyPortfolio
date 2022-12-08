import './App.css';

function SkillInterest() {
    return (
        <div id='skill-interest'>
            <div id='skill' className='hiddenLeft'>
                <h1>SKILLS</h1>
                <ul>
                    <li>Web Development ( HTML, EJS, CSS, javascript, jquery, node.js, express.js, react.js, MySQL, Mongo DB )</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>C Programming</li>
                </ul>
            </div>
            <div id='interest' className='hiddenRight'>
                <h1>INTEREST</h1>
                <ul>
                    <li>Web Development</li>
                    <li>App Development</li>
                    <li>Artificial Intelligence</li>
                </ul>
            </div>
        </div>
    )
}
export default SkillInterest