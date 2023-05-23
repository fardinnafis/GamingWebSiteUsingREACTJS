import React from 'react'
import Navbar from './Navbar'
export default function Price({ id }) {
  return (
    <div id={id} className='prices'>
        
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <div className='price'>
                        <div className='price__img'>
                            <img src='/img/gta1.jpg' alt='game1'/>
                        </div>
                        <h1 className='price__heading'>GTA V</h1>
                        <p className='price_text'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                        <p className='price_tk'>
                            $30
                        </p>
                    </div>
                </div>


                <div className='col-4'>
                    <div className='price'>
                        <div className='price__img'>
                            <img src='/img/codBlack.jpg' alt='game1'/>
                        </div>
                        <h1 className='price__heading'>Call Of Duty</h1>
                        <p className='price_text'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                        <p className='price_tk'>
                            $30
                        </p>
                    </div>
                </div>



                <div className='col-4'>
                    <div className='price'>
                        <div className='price__img'>
                            <img src='/img/codMW.jpg' alt='game1'/>
                        </div>
                        <h1 className='price__heading'>Call Of Duty MW</h1>
                        <p className='price_text'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                        <p className='price_tk'>
                            $30
                        </p>
                    </div>
                </div>

                </div>
                <div className='row'>
                <div className='col-4'>
                    <div className='price'>
                        <div className='price__img'>
                            <img src='/img/fifa.jpg' alt='game1'/>
                        </div>
                        <h1 className='price__heading'>FIFA23</h1>
                        <p className='price_text'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                        <p className='price_tk'>
                            $30
                        </p>
                    </div>
                </div>


                <div className='col-4'>
                    <div className='price'>
                        <div className='price__img'>
                            <img src='/img/assasin.jpg' alt='game1'/>
                        </div>
                        <h1 className='price__heading'>Assasin's Creed</h1>
                        <p className='price_text'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                        <p className='price_tk'>
                            $20
                        </p>
                    </div>
                </div>



                <div className='col-4'>
                    <div className='price'>
                        <div className='price__img'>
                            <img src='/img/nfs.jpg' alt='game1'/>
                        </div>
                        <h1 className='price__heading'>NFS PayBack</h1>
                        <p className='price_text'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                        <p className='price_tk'>
                            $10
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}
