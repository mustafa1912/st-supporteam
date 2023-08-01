import Link from 'next/link'
import React from 'react'

function Socailbar(props) {

    return (
        <React.Fragment>
            <div className='position-absolute socail row m-0'>
                <div className='item'>
                    <Link href={'./../'} >
                        <img src="/images/Long line.png" alt="house" title='house' className='line' />
                    </Link>
                </div>
                <div className='item'>
                    {props.data.map((Element, index) => (
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
    )
}

export default Socailbar

export async function getStaticProps1() {
    const res = await fetch(`https://dashboard.st-supporteam.com/api/companySetting`)
    const data = await res.json();
    return {
        props: {
            data: data
        }
    }
}
