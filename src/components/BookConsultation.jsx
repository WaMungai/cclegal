import React, { useEffect } from 'react'

export default function BookConsultation() {
  useEffect(() => {
    // Load Calendly script once
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section
      style={{
        padding: '4rem 2rem',
        backgroundColor: '#f9f9f9',
        textAlign: 'center'
      }}
    >
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Book a Consultation</h2>
      <p style={{ fontSize: '1rem', color: '#555', marginBottom: '2rem' }}>
        Schedule a consultation with us at your convenience. Choose a time that works best for you.
      </p>

      {/* Calendly inline widget */}
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/jwamungai8/30min"
        style={{
          minWidth: '320px',
          height: '630px',
          margin: '0 auto',
          borderRadius: '12px',
          overflow: 'hidden'
        }}
      ></div>

    
    </section>
  )
}
