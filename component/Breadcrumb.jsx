import Link from 'next/link'
import React from 'react'

function Breadcrumb(title, api) {

    return (
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
                                {title.title === 'contact' ? 'our' : ''}    <strong>     </strong>
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
    )
}

export default Breadcrumb