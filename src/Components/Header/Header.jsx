import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header-container'>
            <div className='brand'>
                <img width={'100px'} src="https://png.pngtree.com/png-clipart/20211116/original/pngtree-letter-p-logo-design-vector-png-png-image_6943111.png" alt="Logo" className='brand-logo' />
            </div>
            <div className='header-left'>
                <div className="brand-badge">
                    <img width={'40px'} height={'41px'} className='badge-image' src="https://www.dreamhost.com/news/wp-content/uploads/2023/03/Get-your-xyz-domain-Feature-682x453.jpg" alt="" />
                    <span>XYZ Enterprises Pvt.Ltd</span>
                </div>
                <div className="drop-down">
                    <i class="fa-solid fa-chevron-down"></i>
                </div>
            </div>
        </div>
  )
}

export default Header