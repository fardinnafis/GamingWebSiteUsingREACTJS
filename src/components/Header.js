import React from 'react'
import Navbar from './Navbar'
import { Link } from "react-router-dom";

const Header  = ({id}) => {
  return (
    <div id={id} className='banner'>
        
        <Navbar/>
       
            <div className='banner__content'>
                <div className='container'>
                    <div className='banner__text'>
                    <h3>BuY YoUr GaMe!</h3>
                    <h1>Be MaStEr In GaMe</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    <div className='banner__btn'>
                        
                        <Link to="/price" className='btn btn-smart'>BUY NOW!!!</Link>
                    </div>
                    </div>
                </div>


            </div>

    </div>
  )
}

export default Header