import React from 'react'
import AboutMe from '../components/homepage/Aboutme'
import HomeContacts from '../components/homepage/HomeContacts'
import PageTitleDisplay from '../components/PageTitleDisplay'
import ContactForm from '../components/ContactForm'

const Contacts = () => {
  return (
    <div className='flex flex-col' >
      <div data-aos="fade-up">
          <PageTitleDisplay text='Where to find me?' title='contacts' />
      </div>
      <div>
          <HomeContacts/>
      </div>
      <div>
          <ContactForm/>
      </div>
    </div>
  )
}

export default Contacts