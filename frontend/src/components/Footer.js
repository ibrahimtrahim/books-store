import React from 'react';
import { Container } from 'react-bootstrap';
import {FaGithub, FaLinkedinIn, FaInstagram} from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className='text-center text-white' style={{ backgroundColor: '#f1f1f1' }}>
        <Container className='pt-4'>
            <section className='mb-4'>
                <a href="/" className='text-dark mx-4'><FaGithub/></a>
                <a href="/" className='text-dark mx-4'><FaLinkedinIn/></a>
                <a href="/" className='text-dark mx-4'><FaInstagram/></a>
            </section>
        </Container>
        <div className='text-center text-dark p-3 bg-body-tertiary'>
        © 2023 Copyright:
        <a className='text-dark' href='/'>
        BookHaven
        </a>
        </div>
    </footer>
  )
}

export default Footer