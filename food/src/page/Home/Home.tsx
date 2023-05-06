import React, { Component } from 'react'
import Header from '../../components/Header/Header'

export default class Home extends Component {
  render() {
    return (
      <div >
        <div className="w-full h-screen">
         <div className='absolute bottom-0 left-0 right-0 w-full h-2/3 m-auto'>
            <div className='w-1/2 h-2/3 ml-20'>
              <div><h1 className='font-babylonica text-5xl md:font-bold'>
                Get Fresh <span className='font-serif text-6xl md:font-bold text-accent-set-200'>Food</span>
                <br></br> in a Easy way</h1>
              </div>

              <div className='mt-16 text-xl w-10/12'><p>We are now accepting all inquiries for full buyouts for private events and holiday parties, any day of the week, day or night. 
                Our restaurant can accommodate up to 45 guests and potentially more. We can work with you on the menu, and curate beverages, beer, wine, and sake as well. 
                Please contact us here to inquire!</p>
              </div>

              <div className='mt-28'>
              <span className='bg-accent-set-200 border border-slate-500 rounded-2xl px-6 py-2 cursor-pointer text-black md:font-bold hover:text-red-600 hover:py-3 hover:px-8'>Order Now </span>
              </div>
            </div>


            <div className=' absolute bottom-10 right-0'>
              <img src='https://img.freepik.com/free-photo/roast-beef-cheese-bun-sandwich_1147-524.jpg?w=996&t=st=1683384388~exp=1683384988~hmac=c16a9efa9dd5887e43ac15432dc64ac90f1e5cc1840fe7ea1fd51cafbaab24d8' alt='image'></img>
            </div>
         </div>
        </div>
      </div>
    )
  }
}
