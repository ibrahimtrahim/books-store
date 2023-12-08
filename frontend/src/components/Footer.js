import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import {FaGithub, FaLinkedinIn, FaInstagram} from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className='text-center text-white' style={{ backgroundColor: '#f1f1f1' }}>
        <Container className='pt-4'>
            <section className='mb-4'>
                <Link to="/" className='text-dark mx-4'><FaGithub/></Link>
                <Link to="/" className='text-dark mx-4'><FaLinkedinIn/></Link>
                <Link to="/" className='text-dark mx-4'><FaInstagram/></Link>
            </section>
        </Container>
        <div className='text-center text-dark p-3 bg-body-tertiary'>
        © 2023 Copyright:
        <Link className='text-dark' to='/'>
        BookHaven
        </Link>
        </div>
    </footer>
  )
}

export default Footer