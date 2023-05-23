import React from 'react'

export default function List({id}) {
  return (
    <div id={id} className='about'>
        <div className='container'>
                <div className='row'>
                    

                    <div className='col-6'>
                            <div className='about__img'>
                                    <img src='/img/fifa.jpg' alt='about' />
                            </div>
                    </div>
                    <div className='col-6'>
                        <h3>FIFA 23</h3>
                        <h1> $30</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>

                <div className='row'>
                    

                    <div className='col-6'>
                            <div className='about__img'>
                                    <img src='/img/assasin.jpg' alt='about' />
                            </div>
                    </div>
                    <div className='col-6'>
                        <h3>Assasin's Creed Black Flag</h3>
                        <h1> $20</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        
                    </div>
                </div>
                <div className='row'>
                    

                    <div className='col-6'>
                            <div className='about__img'>
                                    <img src='/img/nfs.jpg' alt='about' />
                            </div>
                    </div>
                    <div className='col-6'>
                        <h3>NFS PyBack</h3>
                        <h1> $10</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        
                    </div>
                </div>
                <div className='list__btn'>
                            <a href='' className='btn btn-smart'>View More In Cart?</a>
                        </div>

            </div>
    </div>
  )
}
