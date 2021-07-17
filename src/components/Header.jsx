import React, { useState } from 'react'

export default function Header() {
    const [navbar, setNavbar] = useState(false)

    const changeBackgroundNav = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackgroundNav);
    return (
        <>
            <div className="sticky-top">
            <nav className={navbar ? 'navbar active navbar-expand-lg' : 'navbar navbar-expand-lg'}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><i className="fas fa-ellipsis-v"></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <p className="navbar-brand"><i className="fas fa-glass-cheers"></i>Brewery</p>
                    <div className="form-inline ml-auto my-2 my-lg-0">
                       <a href="https://github.com/Anilvarmach/open-brewery-api-task" target="_blank" rel="noopener noreferrer"><i className="fab fa-github github "></i></a>
                    </div>
                </div>
            </nav>
            </div>
        </>
    )
}


