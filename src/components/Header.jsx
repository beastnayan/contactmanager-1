import React from 'react'


function Header() {
    return (
        <>
            <header className='fluid-container text-light  d-flex justify-content-between px-4 py-2 align-items-center  border-bottom'>
                <div className=' text-light'>
                    <h3 className='text-primary fw-bold'>Phone Directory</h3>
                    <span  className='fs-6'>Manage Your Contact</span>
                </div>
            </header>
        </>
    )
}

export default Header