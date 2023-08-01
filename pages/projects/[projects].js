import Link from 'next/link'
import React from 'react'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head'
import Image from 'next/image'
import st from '../../public/images/st.png'
 
export default function Projects_single() {

    
    const router = useRouter();
    let  slug = router.query.projects;  // Access the "slug" parameter from the URL

    const [dataCompany, setDataCompany] = useState([]);
    const [dataPhoto, setData] = useState([]);
    const [dataCategory, setCategory] = useState('');
     useEffect(() => {
        // Fetch data from an API or other sources on the client side
        fetch(`https://dashboard.st-supporteam.com/api/companySetting`) // Replace with your API endpoint or URL
            .then((response) => response.json())
            .then((data) => setDataCompany(data))
            .catch((error) => console.error(error));
        // Fetch data from an API or other sources on the client side
        fetch(`https://dashboard.st-supporteam.com/api/Portfolio`) // Replace with your API endpoint or URL
            .then((response) => response.json())
            .then((data) =>{ setData(data) })
            .catch((error) => console.error(error));
            slug = router.query.projects; 
            {dataPhoto.map((Element, index) => (Element.id == slug? setCategory(Element.category ):''  ))} 
      }, [dataPhoto]);
 

    return (<div>
        <Head>
            <title>  st | projects |{dataPhoto.map((Element, index) => (Element.id == slug?  Element.category :''  ))} </title>
            <meta name="description" content="Architectural Designer General manitenance&decoration" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <Link rel="icon" href="/favicon.ico" />
        </Head>
        <main className='contact position-relative bg-dark'>
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
                                        <strong> {dataPhoto.map((Element, index) => (Element.id == slug?  Element.category :''  ))} </strong>
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
                <section className='projects container '>
                    <div className='row pb-3'>
                        {dataPhoto.map((Element, index) => (
                            <React.Fragment key={index}> 
                                {Element.category === dataCategory ?
                                    <div className='col-sm-4 mb-4' >
                                        <a data-fancybox="gallery"
                                            data-caption={Element.category}
                                            href={'https://dashboard.st-supporteam.com/storage/app/' + Element.image} alt={Element.title}>
                                            <img src={'https://dashboard.st-supporteam.com/storage/app/' + Element.image} className='w-100 img-Project' alt='_Paul_Dyer_Tierwelthaus_' title='_Paul_Dyer_Tierwelthaus_' />
                                        </a>
                                    </div>
                                    : ''}
                            </React.Fragment>
                        ))}
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

