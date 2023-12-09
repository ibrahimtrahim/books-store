import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section>
        <div className="herosection position-relative w-100">
            <div className="position-absolute text-white d-flex flex-column align-items-start justify-content-center hero">
                <div className="container">
                    <div className="col-md-6">
                        <span className="text-uppercase">Dive into Endless Worlds</span>
                        <h1 className="mb-4 mt-2 display-4 fw-bold">Explore a collection of books that transport you to <span className='Headline'>different worlds</span></h1>
                        <p>Welcome to BookHaven, your gateway to captivating stories. Dive into affordable reads across diverse genres. Join our community and let every book be your escape.</p>
                        <div className="mt-5">
                            <Link to="#" className="btn px-5 py-3 text-white mt-3 mt-sm-0 buttonCTA ">Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</section>
  )
}

export default Hero