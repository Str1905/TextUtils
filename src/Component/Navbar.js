import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
     
    
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" style={{fontFamily:"serif"}} id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="/">Link</a>
                            </li> */}

                            <li className='nav-item'>
                                <Link className='nav-link' to="/about">
                                    About Us
                                </Link>
                            </li>
                        </ul>
                        <div style={{ display: "flex" }} className='mx-4'>
                            {/* <label for="exampleColorInput" class="form-label">Color picker</label> */}
                            <input type="color" className="form-control form-control-color" id="exampleColorInput" value={`${props.colorValue}`} title="Choose your color" onChange={props.handleOnChange}  />
                        </div>
                        <div className={`form-check form-switch text-${props.btns}`}>
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{ fontFamily: "serif" }}>Enable {props.btns} Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

