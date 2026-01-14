import React from 'react'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Footer() {
   const offices = [
  {
    city: 'Nairobi, Kenya',
    address: '1st Floor, Ridgeview Place, Ridgeways Road, Off Kiambu Road, P.O. BOX 24156-00100',
   
  },
  {
    city: 'Thika, Kenya',
    address: 'Alisa Plaza, 4th Floor, Suite 40A, Kwame Nkrumah Rd',
    
  },
  {
    city: 'CBD drop-off location, Nairobi, Kenya',
    address: 'Hughes Building, 4th Floor, Suite 401, Kenyatta Avenue',
    
  }
];
    const quickLinks = [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Blog', path: '/blog' },
        { title: 'Contact', path: '/contact' }
    ]

    return (
        <footer style={{
            backgroundColor: '#101527',
            color: '#fff',
            padding: '4rem 2rem',
            marginTop: '4rem'
        }}>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                maxWidth: '1200px',
                margin: '0 auto',
                gap: '2rem'
            }}>
                {/* Offices */}
                <div style={{ flex: '1 1 250px' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Our Offices</h3>
                    {offices.map((office, index) => (
                        <div key={index} style={{ marginBottom: '1rem' }}>
                            <p style={{ fontWeight: 'bold', marginBottom: '0.2rem' }}>{office.city}</p>
                            <p style={{ marginBottom: '0.2rem' }}>{office.address}</p>
                            <p>{office.phone}</p>
                        </div>
                    ))}
                </div>

                {/* Quick Links */}
                <div style={{ flex: '1 1 200px' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Quick Links</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {quickLinks.map(link => (
                            <li key={link.title} style={{ marginBottom: '0.75rem' }}>
                                <Link
                                    to={link.path}
                                    style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.2s' }}
                                    onMouseEnter={e => e.currentTarget.style.color = '#101527'}
                                    onMouseLeave={e => e.currentTarget.style.color = '#fff'}
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Socials */}
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff', alignItems: 'center'  }}>Connect with us</h3>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/company/yourcompany"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '40px',
                            height: '40px',
                            color: '#fff',
                            fontSize: '1.5rem',
                            borderRadius: '50%',
                            backgroundColor: '#0A66C2',
                            transition: 'transform 0.2s, background-color 0.2s'
                        }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <FaLinkedin />
                    </a>

                    {/* Instagram */}
                    <a
                        href="https://www.instagram.com/yourcompany"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '40px',
                            height: '40px',
                            color: '#fff',
                            fontSize: '1.5rem',
                            borderRadius: '50%',
                            backgroundColor: '#E4405F',
                            transition: 'transform 0.2s, background-color 0.2s'
                        }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <FaInstagram />
                    </a>
                </div>
            </div>


            {/* Copyright */}
            <div style={{ textAlign: 'center', marginTop: '3rem', fontSize: '0.9rem', color: '#aaa' }}>
                &copy; {new Date().getFullYear()}  Chege & Chege Advocates LLP. All rights reserved.
            </div>
        </footer>
    )
}
