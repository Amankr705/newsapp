import React, { Component } from 'react'

export class NavBar extends Component {
  

  render() {
    return (
      <div>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="/">NewsBuzz</a>
                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                        <a className="nav-link text-light" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-light" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-light" href="/about">business</a>
                        </li><li className="nav-item">
                        <a className="nav-link text-light" href="/about">entertainment</a>
                        </li><li className="nav-item">
                        <a className="nav-link text-light" href="/about">general</a>
                        </li><li className="nav-item">
                        <a className="nav-link text-light" href="/about">health</a>
                        </li><li className="nav-item">
                        <a className="nav-link text-light" href="/about">science</a>
                        </li><li className="nav-item">
                        <a className="nav-link text-light" href="/about">sports</a>
                        </li><li className="nav-item">
                        <a className="nav-link text-light" href="/about">technology</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
      </div>
    )
  }
}

export default NavBar