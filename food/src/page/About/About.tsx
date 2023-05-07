import React, { Component } from 'react'

export default class about extends Component {
  render() {
    return (
      <div >
      <div className="w-full h-screen ">
       <div className=' bottom-0 left-0 right-0 w-full h-2/3 m-auto'>
            <div className='w-1/2 h-2/3 ml-20 mt-40 absolute right-0'>
              <div><h1 className='font-babylonica text-8xl md:font-bold'>About
                <span className='font-serif text-xxl md:font-bold text-accent-set-200'> US</span>
                <br></br> </h1>
              </div>

              <div className='mt-16 text-xl w-10/12'><p>We are now accepting all inquiries for full buyouts for private events</p>
              </div>

              <div className='mt-16 text-xl w-10/12'><p>We are now accepting all inquiries for full buyouts for private events and holiday parties, any day of the week, day or night. 
                Our restaurant can accommodate up to 45 guests and potentially more. We can work with you on the menu, and curate beverages, beer, wine, and sake as well. 
                Please contact us here to inquire!</p>
              </div>

              <div className='mt-28'>
              <span className='bg-accent-set-200 border border-slate-500 rounded-2xl px-6 py-2 cursor-pointer text-black md:font-bold hover:text-red-600 hover:py-3 hover:px-8'>Order Now </span>
              </div>
            </div>
            <div className='  bottom-10 '>
              <img src='https://img.freepik.com/free-photo/french-fries_1339-1421.jpg?w=1380&t=st=1683454511~exp=1683455111~hmac=f613c4acbb7eafc5a251d24e82261d0352c5c627aa750f538ac3967afd88d57d' alt='image'></img>
            </div>
       </div>
      </div>
    </div>
    )
  }
}
