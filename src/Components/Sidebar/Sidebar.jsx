import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar-container'>
            <div className='profle'>
                <img width={'80px'} height={'80px'} src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="profileImage" />
                <div className='profile-name'>
                    <h4>Ram Mohan</h4>
                    <i className="fa-solid fa-chevron-down fa-rotate-270"></i>
                </div>
                <p className='email'>rammohan2@gmail.com</p>
            </div>
            <div className='page-nav'>
                <div className="nav-item">
                <i class="fa-solid fa-bars"></i>
                    <h4>Dashboard</h4>
                </div>
                <div className="nav-item">
                <i class="fa-solid fa-person-snowboarding"></i>

                    <h4>Perks</h4>
                </div>
                <div className="nav-item">
                    <i className="fa-solid fa-puzzle-piece"></i>
                    <h4>Addons</h4>
                </div>
                <div className="nav-item">
                    <i class="fa-solid fa-circle-question"></i>
                    <h4>FAQ</h4>
                </div>
                <div className="nav-item">
                <i class="fa-solid fa-headset"></i>
                    <h4>Support</h4>
                </div>
                <div className='logout'>
                    <button>Logout <i class="fa-solid fa-power-off"></i></button>
                </div>

            </div>

        </div>
  )
}

export default Sidebar