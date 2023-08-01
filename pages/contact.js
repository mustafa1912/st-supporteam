import Link from 'next/link'
import { useEffect, useState } from 'react';
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import st from '../public/images/st.png'
import Breadcrumb from '@/component/Breadcrumb'
// import  
export default function Contact( ) {

    
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
            <title>  st | Contact </title>
            <meta name="description" content="Architectural Designer General manitenance&decoration" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className='contact position-relative'>
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
            <section className='w-100 '>
                <Breadcrumb title={'contact'} />
                <section className='bg-light section'>
                    <div className='container pt-2 pb-2' >
                        <h2> where to <strong> find us </strong></h2>
                        <div>
                            {dataCompany.map((Element, index) => (
                                <React.Fragment key={index}>
                                    <Link href={Element.links}
                                        target='_blank' className='mb-3 fw-bold'>
                                        {Element.address}
                                    </Link>
                                </React.Fragment>
                            ))}
                        </div>
                        <div className='google-map position-relative mt-2'>
                            <div className='position-absolute dotes-left'>
                                <div className='dote'></div>
                                <div className='dote'></div>
                                <div className='dote'></div>
                                <div className='dote'></div>
                                <div className='dote'></div>
                                <div className='dote'></div>
                                <div className='dote'></div>
                                <div className='dote'></div>
                            </div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3630.9229611199785!2d54.3725599!3d24.488126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e6643765ba6a9%3A0x98494bcce27e6018!2sNissan%20Najda%20Showroom%20-%20Al%20Masaood%20Automobiles!5e0!3m2!1sen!2seg!4v1690829084178!5m2!1sen!2seg" width="100%" height="450"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            <Link href='https://www.google.com/maps/place/%D8%A7%D9%84%D9%85%D8%B3%D8%B9%D9%88%D8%AF+%D9%84%D9%84%D8%B3%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA+-+Al+Masaood%E2%80%AD/@24.4881309,54.3751348,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5e6643765ba6a9:0x98494bcce27e6018!8m2!3d24.488126!4d54.3725599!16s%2Fg%2F11g8_bk_wg?entry=ttu'
                                loading='lazy'
                                className='link-map'
                                target='_blank'>
                            </Link>
                            <div className='position-absolute dotes-right'>
                                <div className='dote'></div>
                                <div className='dote'></div>
                                <div className='dote'></div>
                                <div className='dote'></div>
                                <div className='dote'></div>
                                <div className='dote'></div>
                                <div className='dote'></div>
                                <div className='dote'></div>
                            </div>
                        </div>
                        <div className='info-contact'>
                            <div className='mt-3'>
                                <div className='row'>
                                    <div className='col-sm-4 mt-2 mb-2'>
                                        <h2>Contact details :</h2>
                                    </div>
                                    {dataCompany.map((Element, index) => (
                                        <React.Fragment key={index}>
                                            <div className='col-sm-4 mt-2 mb-2'><Link href={'https://wa.me:' + Element.facebook} className='fw-bold'>
                                                <span className='icon'><i class="fa-solid fa-phone"></i></span> {Element.facebook} </Link>
                                            </div>
                                            <div className='col-sm-4 mt-2 mb-2'><Link href={'tel:' + Element.tel} className='fw-bold'>
                                                <span className='icon'><i class="fa-solid fa-phone"></i></span> {Element.tel} </Link>
                                            </div>
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-sm-12 col-md-4 mt-2 mb-2'>
                                    <h2>Office In Abu Dhabi  :</h2>
                                </div>
                                <div className='col-sm-12 col-md-8 mt-2 mb-2'>
                                    {dataCompany.map((Element, index) => (
                                        <React.Fragment key={index}>
                                            <Link href={Element.links} target='_blank' className='fw-bold'>
                                                <span className='icon'><i class="fa-solid fa-phone"></i></span>{Element.address}</Link>
                                        </React.Fragment>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </main>
    </div>
    )
}
 