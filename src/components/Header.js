import styles from '../styles/Header.css'

const Header = ({ onHover, unHover }) => {
    
    return (
        <div className='header-container'>
            <h1 className='logo'>MS</h1>
            <ul>
                <li className='header-list-item' ><a href="/"></a>About</li>
                <li className='header-list-item' ><a href="/"></a>Projects</li>
                <li className='header-list-item' ><a href="/"></a>Journey</li>
                <li className='header-list-item' ><a href="/"></a>Accomplishments</li>
            </ul>
        </div>
    )
}

export default Header

