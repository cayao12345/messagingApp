import React from 'react'
import {AiOutlineMessage} from 'react-icons/all'
import "./HomePage.css";
import {Link} from 'react-router-dom'

const HomePage = () => {
    return (
        <div className="homePageContainer">
            <h1>Messaging App <AiOutlineMessage className="icon" /></h1>
            <Link to={{
                pathname : '/MainApp',
            }} className="getStartedButton">
                GET STARTED
            </Link>
        </div>
    )
}

export default HomePage
