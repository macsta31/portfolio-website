import styles from '../styles/Nav.css'
import { useNavigate } from 'react-router-dom'

const Nav = () => {

    let navigate = useNavigate()
    return (
        <div>
        <nav>
            <ul className='nav-list'>
                <li><button onClick={() => navigate("/")} className="header-list-item">About</button></li>
                <li><button onClick={() => navigate("/projects")} className="header-list-item">Projects</button></li>
                <li><button onClick={() => navigate("/")} className="header-list-item">Journey</button></li>
                <li><button onClick={() => navigate("/")} className="header-list-item">Accomplishments</button></li>
            </ul>  
                
        </nav>
        </div>
    )
}

export default Nav
