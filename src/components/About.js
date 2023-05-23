import React from 'react'
import { Link } from "react-router-dom";
function About({ id }) {
  return (
    <div id={id}>
        <div className='about'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <h3>ABOUT US</h3>
                        <h1> Welcome To Our Home</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <Link to = "/shop">Go to shp</Link>
                        <div className='about__btn'>
                            <a href='' className='btn btn-smart'>Read More?</a>
                        </div>
                    </div>

                    <div className='col-6'>
                            <div className='about__img'>
                                    <img src='/img/bg33.jpg' alt='about' />
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
