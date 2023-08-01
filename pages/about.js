import Link from 'next/link'
import { useEffect, useState } from 'react';
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import st from '../public/images/st.png'
import Breadcrumb from '@/component/Breadcrumb'
// import  
export default function About( ) {

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
            <title>  st |  About </title>
            <meta name="description" content="Architectural Designer General manitenance&decoration" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className='contact position-relative  '>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid row m-0">
                    <div className='col-3 col-sm-3 col-md-2 col-lg-1 d-flex'>
                        {dataCompany.map((Element, index) => (
                            <React.Fragment key={index}>
                                <Link className="navbar-brand p-3 m-0" href="/">
                                    <Image src={st} alt={Element.name} title={Element.name} width={500}
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
            <section className='w-100 page mb-5'>
                <React.Fragment  >
                    <div className='breadcrumb position-relative pt-5 pb-5'>
                        <div className='container w-100'>
                            <div className='row'>
                                <div className='col-4 col-sm-4 col-md-2 d-flex justify-content-around align-items-center'>
                                    <div className='dote'></div>
                                    <div className='dote'></div>
                                    <div className='dote'></div>
                                    <div className='dote'></div>
                                    <div className='dote'></div>
                                    <div className='dote'></div>
                                    <div className='dote'></div>
                                    <div className='dote'></div>
                                </div>
                                <div className='col-8 col-sm-8 col-md-10'>
                                    <h1 className='text-light'>
                                        <strong>   about   </strong>
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <Link href={'./../'} className='z-index-10000'>
                            <div className='position-absolute'>
                                <div className='dote'></div>
                                <div className='dote'></div>
                                <div className='dote'></div>
                                <div className='dote'></div>
                                <div className='dote'></div>
                                <div className='dote'></div>
                                <div className='dote'></div>
                                <div className='dote'></div>
                            </div>
                        </Link>

                    </div>
                </React.Fragment>
                <section className=' section container'>
                    <div className='mb-4'>
                        <div className='title'>
                            <h2 >introduction</h2>
                        </div>
                        <p className='text-light text-description'>
                            The company is well equipped with latest Tools and equipment's to carry out all our
                            Services the company is having high caliber Management professionals, technicians,
                            Skilled & semi-skilled workers Who are qualified, self-motivated and well Experienced
                            Our project management procedures and Discipline can bring significant benefit to
                            Clients by cost and time frame to achieve the Goal defined by quantitative and qualitative Objec-
                            tives
                        </p>
                    </div>
                    <div className='mb-4'>
                        <div className='title'>
                            <h2 >VISION</h2>
                        </div>
                        <p className='text-light text-description'>
                            To be a leading world class in Civil, Building Contracting,
                        </p>
                        <p className='text-light text-description'>
                            Facility Management Company
                        </p>
                        <p className='text-light text-description'>
                            in U.A.E, to make our Earth Worth Living.
                        </p>
                    </div>
                    <div className='mb-4'>
                        <div className='title'>
                            <h2 >MISSION</h2>
                        </div>
                        <p className='text-light text-description'>
                            Provide our customers a level of unmatched services in the indus-
                            try keeping
                        </p>
                        <p className='text-light text-description'>
                            in mind professionalism, sustainability green technology and inno-
                            vation
                        </p>
                        <p className='text-light text-description'>
                            Commit to each project with 100% dedication
                        </p>
                        <p className='text-light text-description'>
                            Create a cooperative atmosphere that reflects
                        </p>
                        <p className='text-light text-description'>
                            The personality of successful vibrant
                            And enthusiastic team
                        </p>
                        <p className='text-light text-description'>
                            Strive continuously to improve though
                            Our customer's valuable feedback
                        </p>

                    </div>
                </section>
            </section>
            <React.Fragment>
                <div className='position-absolute socail row m-0'>
                    <div className='item'>
                        <Link href={'./../'} >
                            <img src="/images/Long line.png" alt="house" title='house' className='line' />
                        </Link>
                    </div>
                    <div className='item'>
                        {dataCompany.map((Element, index) => (
                            <React.Fragment key={index}>
                                <div className='mt-3'>
                                    <Link href={Element.insta} rel='nofllow' target='_blanck' className='btn-socail'>
                                        <i class="fa-brands fa-instagram"></i>
                                    </Link>
                                </div>
                                <div className='mt-3'>
                                    <Link href={Element.twiter} rel='nofllow' target='_blanck' className='btn-socail'>
                                        <i class="fa-brands fa-twitter"></i>
                                    </Link>
                                </div>
                                <div className='mt-3'>
                                    <Link href={'https://wa.me/' + Element.facebook} rel='nofllow' target='_blanck' className='btn-socail'>
                                        <i class="fa-brands fa-whatsapp"></i>
                                    </Link>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                <img src="/images/Shape2.png" alt="house" title='house' className='Shape2 position-absolute' />
            </React.Fragment>
        </main>
    </div>
    )
}
 