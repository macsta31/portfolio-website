import reactDom from "react-dom"
import { SocialIcon } from "react-social-icons"
import styles from '../styles/Sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <ul className="socials-tab">
                <li><SocialIcon style={{margin:5}}  url="https://github.com/macsta31" bgColor="grey"/></li>
                <li><SocialIcon style={{margin:5}}  url="https://www.linkedin.com/in/mack-stathis-aa07b31a2/" bgColor="grey"/></li>
                <li><SocialIcon style={{margin:5}}  url="https://www.instagram.com/mackstathis/?hl=en" bgColor="grey"/></li>
                
            </ul>
        </div>
    )
}

export default Sidebar
