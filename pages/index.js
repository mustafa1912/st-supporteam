import Link from 'next/link'
import React from 'react'
import { useEffect, useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import st from '../public/images/st.png'
import house from '../public/images/house.png'
import Shape from '../public/images/Shape.png'
// import  
export default function Home( ) {


  const [dataCompany, setDataCompany] = useState([]);
  useEffect(() => {
    // Fetch data from an API or other sources on the client side
    fetch(`https://dashboard.st-supporteam.com/api/companySetting`) // Replace with your API endpoint or URL
        .then((response) => response.json())
        .then((data) => setDataCompany(data))
        .catch((error) => console.error(error));
    }, [ ]);

  return (<div>
    <Head>
      <title> st |   Home </title>
      <meta name="description" content="Architectural Designer General manitenance&decoration" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className=''>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid row m-0">
          <div className='col-3 col-sm-3 col-md-2 col-lg-1 d-flex'>
            {dataCompany.map((Element, index) => (
              <React.Fragment key={index}>
                <Link className="navbar-brand p-3 m-0" href="/">
                  <Image src={st} alt={Element.name} title={Element.name}  width={500}
                  height={100}
                    className='w-100' />
                </Link>
              </React.Fragment>
            ))}
          </div>
          <div className='d-flex col-9 col-sm-9 col-md-6 col-lg-6 justify-content-end position-relative' >
            <div className={"collapse navbar-collapse "} id="navbarSupportedContent">
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
      <section className='home '>
        <div className='container position-relative;'>
          <div className='row flex-sm-column-reverse flex-md-row'>
            <div className='col-sm-12 colo-12 col-md-6 mt-md-3   mt-sm-5 text-side'>
              <div className='title'>
                <h1 className=''> support <span className='text-light'> team</span></h1>
                <h4> general maintenance <span className='text-light'>  &  </span> decoration <span> team</span></h4>
              </div>
              <div className='get-start'>
                <h2 className='text-light'> becuse your home </h2>
                <h2 className='text-light text-end'> deserves to be specail </h2>
                <button className='btn btn-orinage rounded-0 mt-4'>
                  get start
                </button>
              </div>
            </div>
            <div className='col-sm-12 colo-12 col-md-6 mt-md-3  img-side'>
              <Image src={house} alt="house"  width={500}
              height={100}
                title='house' className='img-house ' />
              <Image src={Shape} alt="house"  width={500}
              height={100}
                title='house' className=' position-absolute' />
              {/* */}
            </div>
          </div>
        </div>
      </section>        
      {/*  <Footer /> 
      <Socailbar />*/}
    </main>
  </div>
  )
}
 