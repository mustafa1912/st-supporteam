import Link from 'next/link'
import React from 'react'
function Navbar(props1) {

    // const [companySetting, setCompanySetting] = useState([])
    // const [mobilMenue, setMobilMenue] = useState(false)
    // useEffect(() => {
    //     // CompanySetting
    //     axios.get(`${api.api}/api/companySetting`)
    //         .then(function (response) {
    //             // handle success
    //             setCompanySetting(response.data)
    //             console.log(response.data)
    //         })
    //         .catch(function (error) {
    //             // handle error
    //             console.log(error);
    //         })
    // }, [])

    // const menu = () => {
    //     setMobilMenue(!mobilMenue)
    // }
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid row m-0">
                    <div className='col-3 col-sm-3 col-md-2 col-lg-1 d-flex'>
                         
                    </div>
                    <div className='d-flex col-9 col-sm-9 col-md-6 col-lg-6 justify-content-end position-relative' >
                        <div className={"collapse navbar-collapse "  } id="navbarSupportedContent">
                            <ul className={'navbar-nav d-flex  justify-content-evenly w-100 '}>
                                <li className="nav-item">
                                    <Link href='/projects' className="nav-link text-white">PROJECTS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href='/services' className="nav-link text-white">Services </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href='/about' className="nav-link text-white">ABOUT </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href='/contact' className="nav-link text-white">CONTACT</Link>
                                </li>
                            </ul>
                        </div>
                        <button className="btn btn-outline-origin border-0 d-block d-sm-none" type="button"  >
                            <i className="fa-solid fa-bars fs-2" ></i>
                        </button>
                    </div>
                </div>
            </nav>
            {console.log(props1.data)}
            {console.log(props1.data)}
        </React.Fragment>
    )
}

export default Navbar
export async function getStaticProps11() {
    const res = await fetch(`https://dashboard.st-supporteam.com/api/companySetting`)
    const data = await res.json();
    return {
        props1: {
            data: data
        }
    }
}