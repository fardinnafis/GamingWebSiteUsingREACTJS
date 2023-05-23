import React from 'react'
import { Link } from "react-router-dom";
function Shop({id}) {
  return (
    <div id={id} className='shop'>
        <div className='container'>
        <div className='shop__text'>
            <div>
                <h1>To Grab The Limited Offer...</h1>
                <div className='shop__btn'>
                    <a href="#price" className='btn btn-smart'>Go To Shop</a>
                </div>
            
            </div>
        </div>
    </div>
    </div>
  )
}

export default Shop