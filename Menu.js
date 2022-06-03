import React from 'react' 
import { NavLink } from 'react-router-dom'



export default function Menu(props) {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-secondary">
            <div className="container">
                <NavLink to={`/`} className="navbar-brand">REact CRud</NavLink>


                <button className="navbar-toggle" data-bs-toggle="collapse" data-bs-target="#menu">
                    <span className="navbar-toggle-icon"></span>
                </button>

                <div className="collapse navbar-collapse"  id="menu">
                    <ul className="navbar-nav">
                        <NavLink to={`/home`} className="nav-link">Home</NavLink>

                        <li className="nav-item">
                            <NavLink to={`/create`} className="nav-link"> Create </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to={`/update`} className="nav-link"> Update </NavLink>
                         </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}