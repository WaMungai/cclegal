import React from 'react'
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Footer() {
  const offices = [
    {
      city: 'Nairobi, Kenya',
      address:
        'Ridgeview Place, 1st Floor, Ridgeways Road, Off Kiambu Road, P.O. BOX 24156-00100',
    },
    {
      city: 'Thika, Kenya',
      address:
        'Alisa Plaza, 4th Floor, Suite 40A, Kwame Nkrumah Rd',
    },
    {
      city: 'CBD drop-off location, Nairobi, Kenya',
      address:
        'Hughes Building, 4th Floor, Suite 401, Kenyatta Avenue',
    },
  ]

  const quickLinks = [
    { title: 'Home', path: '/' },
    { title: 'About Us', path: '/aboutus' },
    { title: 'Practice Areas', path: '/practiceareas' },
    { title: 'Blog', path: '/blog' },
    
  ]

  return (
    <footer
      style={{
        backgroundColor: '#101527',
        color: '#fff',
        padding: '4rem 2rem',
        marginTop: '4rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          maxWidth: '1200px',
          margin: '0 auto',
          gap: '4rem',
          textAlign: 'left',
        }}
      >
        {/* Offices */}
        <div style={{ flex: '1 1 280px' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
            Our Offices
          </h3>
          {offices.map((office, index) => (
            <div key={index} style={{ marginBottom: '1rem' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '0.3rem' }}>
                {office.city}
              </p>
              <p style={{ marginBottom: '0.2rem', lineHeight: 1.6 }}>
                {office.address}
              </p>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div style={{ flex: '1 1 200px' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
            Quick Links
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {quickLinks.map((link) => (
              <li key={link.title} style={{ marginBottom: '0.75rem' }}>
                <Link
                  to={link.path}
                  style={{
                    color: '#fff',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = '#D4AF37')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = '#fff')
                  }
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div style={{ flex: '1 1 200px' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
            Connect with us
          </h3>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a
              href="https://www.linkedin.com/company/c-c-advocates-llp/"
              target="_blank"
              rel="noopener noreferrer"
              style={iconStyle('#0A66C2')}
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/cclegal_llp"
              target="_blank"
              rel="noopener noreferrer"
              style={iconStyle('#E4405F')}
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/share/1Bz3C4AGjg/"
              target="_blank"
              rel="noopener noreferrer"
              style={iconStyle('#1877F2')}
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div
        style={{
          textAlign: 'left',
          maxWidth: '1200px',
          margin: '3rem auto 0',
          fontSize: '0.9rem',
          color: '#aaa',
        }}
      >
        &copy; {new Date().getFullYear()} Chege & Chege Company Advocates LLP.
        All rights reserved.
      </div>
    </footer>
  )
}

const iconStyle = (bg) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  color: '#fff',
  fontSize: '1.5rem',
  borderRadius: '50%',
  backgroundColor: bg,
  transition: 'transform 0.2s',
})
