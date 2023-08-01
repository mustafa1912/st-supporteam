import Link from 'next/link'
import React from 'react'
// import style from '../styles/css/Nav.module.css'
function Nav() {
    return (
        <div className={style.bg}>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link class="navbar-brand" href="1#">Navbar</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" href="1#">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" href="1#">Link</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" href="1#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </Link>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link class="dropdown-item" href="1#">Action</Link></li>
                                    <li><Link class="dropdown-item" href="1#">Another action</Link></li>
                                    <li><Link class="dropdown-item" href="1#">Something else here</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link disabled" href="1#" tabindex="-1" aria-disabled="true">Disabled</Link>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav