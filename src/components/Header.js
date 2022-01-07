import styles from '../styles/Header.css'
import Nav from './Nav'
import Logo from './Logo'

const Header = ({ onHover, unHover }) => {
    
    return (
        <div className='header-container'>
            <Logo />
            <Nav />
        </div>
    )
}

export default Header

