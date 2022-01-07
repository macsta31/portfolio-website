import styles from '../styles/Nav.css'
import { useNavigate } from 'react-router-dom'

const Nav = () => {

    let navigate = useNavigate()
    return (
        <nav>
            <ul className='nav-list'>
                <button onClick={() => navigate("/")} className="header-list-item">About</button>
                <button onClick={() => navigate("/projects")} className="header-list-item">Projects</button>
                <button onClick={() => navigate("/")} className="header-list-item">Journey</button>
                <button onClick={() => navigate("/")} className="header-list-item">Accomplishments</button>
            </ul>  
                
        </nav>
    )
}

export default Nav
