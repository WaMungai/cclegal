import React from 'react'
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom' // useLocation for path detection

export default function Footer() {
  const location = useLocation()
  const isClientView = location.pathname.startsWith('/portal') // detect client view

  // Dynamic office data
  const offices = isClientView
    ? [
        {
          city: 'Nairobi',
          area: 'Westlands',
          type: 'Main Office',
          address:
            'Westlands Commercial Centre, Old Block (Block D), 2nd Floor, Nairobi',
        },
        {
          city: 'Thika',
          area: null,
          type: 'Office',
          address: 'Alisa Plaza, 4th Floor, Suite 40A, Kwame Nkrumah Road.',
        },
        {
          city: 'Nairobi',
          area: 'CBD',
          type: 'Drop-off Location',
          address: 'Hughes Building, 4th Floor, Suite 401, Kenyatta Avenue.',
        },
      ]
    : [
        {
          city: 'Nairobi',
          area: 'Kiambu Road',
          type: 'Main Office',
          address:
            'Ridgeview Place, 1st Floor, Ridgeways Road, Off Kiambu Road, P.O. BOX 24156-00100',
        },
        {
          city: 'Thika',
          area: null,
          type: 'Office',
          address: 'Alisa Plaza, 4th Floor, Suite 40A, Kwame Nkrumah Road.',
        },
        {
          city: 'Nairobi',
          area: 'CBD',
          type: 'Drop-off Location',
          address: 'Hughes Building, 4th Floor, Suite 401, Kenyatta Avenue.',
        },
      ]

  // Quick links remain unchanged
  const quickLinks = [
    { title: 'Home', path: '/' },
    { title: 'About Us', path: '/aboutus' },
    { title: 'Practice Areas', path: '/practiceareas' },
    { title: 'Blog', path: '/blog' },
  ]

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>

        {/* Offices */}
        <div style={columnStyle}>
          <h3 style={headingStyle}>Our Offices</h3>
          {offices.map((office, index) => (
            <div key={index} style={{ marginBottom: '1.25rem' }}>
              <p style={officeTitleStyle}>
                {office.city}
                {office.area && ` — ${office.area}`}
              </p>
              <p style={officeTypeStyle}>{office.type}</p>
              <p style={addressStyle}>{office.address}</p>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div style={columnStyle}>
          <h3 style={headingStyle}>Quick Links</h3>
          <ul style={listStyle}>
            {quickLinks.map((link) => (
              <li key={link.title} style={{ marginBottom: '0.75rem' }}>
                <Link
                  to={link.path}
                  style={linkStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#D4AF37')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div style={columnStyle}>
          <h3 style={headingStyle}>Connect with us</h3>
          <div style={socialContainerStyle}>
            <SocialIcon
              href="https://www.linkedin.com/company/c-c-advocates-llp/"
              bg="#0A66C2"
            >
              <FaLinkedin />
            </SocialIcon>

            <SocialIcon
              href="https://www.instagram.com/cclegal_llp"
              bg="#E4405F"
            >
              <FaInstagram />
            </SocialIcon>

            <SocialIcon
              href="https://www.facebook.com/share/1Bz3C4AGjg/"
              bg="#1877F2"
            >
              <FaFacebook />
            </SocialIcon>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div style={copyrightStyle}>
        &copy; {new Date().getFullYear()} Chege & Chege Company Advocates LLP.
        All rights reserved.
      </div>
    </footer>
  )
}


const SocialIcon = ({ href, bg, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    style={iconStyle(bg)}
  >
    {children}
  </a>
)


const footerStyle = {
  backgroundColor: '#101527',
  color: '#fff',
  padding: '4rem 2rem',
  marginTop: '4rem',
  textAlign: 'left',
}

const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  maxWidth: '1200px',
  margin: '0 auto',
  gap: '4rem',
}

const columnStyle = {
  flex: '1 1 260px',
  textAlign: 'left',
}

const headingStyle = {
  fontSize: '1.5rem',
  marginBottom: '1rem',
  textAlign: 'left',
}

const officeTitleStyle = {
  fontWeight: 'bold',
  marginBottom: '0.2rem',
  textAlign: 'left',
}

const officeTypeStyle = {
  fontSize: '0.85rem',
  color: '#D4AF37',
  marginBottom: '0.3rem',
  textAlign: 'left',
}

const addressStyle = {
  lineHeight: 1.6,
  color: '#ddd',
  textAlign: 'left',
}

const listStyle = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  textAlign: 'left',
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  transition: 'color 0.2s',
}

const socialContainerStyle = {
  display: 'flex',
  gap: '1rem',
  justifyContent: 'flex-start',
}

const copyrightStyle = {
  textAlign: 'left',
  maxWidth: '1200px',
  margin: '3rem auto 0',
  fontSize: '0.9rem',
  color: '#aaa',
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
