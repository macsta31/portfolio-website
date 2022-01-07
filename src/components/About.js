import styles from '../styles/About.css'

const About = () => {
    return (
        <div className="about-container" style={{ color:"black" }}>
            <h1 className='about-title highlight-inverted'>About me</h1>
            <p className='about-p'>I enjoy learning new things about the web and then applying them to projects.
                Currently learning <span className='highlight-inverted'>React framework</span>.
                <br />
                Here are some more technologies I have learnt:
            </p>
            <ul className='technologies'>
                <li>Java</li>
                <li>HTML5 & CSS3</li>
                <li>JavaScript</li>
                <li>C</li>
                <li>React</li>
            </ul>
        </div>
    )
}

export default About
