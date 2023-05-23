import React from 'react'
import { Link } from "react-router-dom";
function About({id}) {
  return (
    <div id={id}>
        <div className='about'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <h3>Contact Us</h3>
                        <h2> Welcome To Our Room</h2>
                        <h1>GG and GG</h1>
                        <h1>gg@gmail.com</h1>
                        <h1>01918ggggg</h1>
                        
                        
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

