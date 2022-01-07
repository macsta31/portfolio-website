import styles from '../styles/Project.css'

const Project = () => {
    return (
        <div className="card">
            <h2 className='card-title'>Title</h2>
            <p className="card-description">  description</p>
            <img src="" alt="" className="demo"/>
            <span>
                <button className='card-btn'>Code</button>
                <button className='card-btn'>Demo</button>
            </span>
        </div>
    )
}

export default Project
