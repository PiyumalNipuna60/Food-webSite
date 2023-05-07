import React, { Component } from 'react'

export default class about extends Component {
  render() {
    return (
      <div >
      <div className="w-full h-screen ">
       <div className=' bottom-0 left-0 right-0 w-full h-2/3 m-auto'>
            <div className='w-1/2 h-2/3 ml-20 mt-30 absolute right-0'>
              <div><h1 className='font-babylonica text-8xl md:font-bold text-accent-set-200'>About
                <span className='font-serif text-xxl md:font-bold text-black'> US</span>
                <br></br> </h1>
              </div>

              <div className='mt-16 text-5xl md:font-bold w-10/12'><p>Why choice us ? </p>
              </div>

              <div className='mt-16 text-xl w-10/12'><p>Our food website stands out from the rest because we prioritize providing high-quality, delicious recipes that are easy to follow and use ingredients that are accessible for home cooks. 
                We also make sure to provide thorough nutritional information for each recipe so that our readers can make informed choices about their food. Our team of experienced chefs and food writers are passionate about cooking and food culture, 
                and we strive to share that passion with our readers through engaging content and beautiful food photography. </p>
              </div>

              <div className='mt-28'>
              <span className='bg-accent-set-200 border border-slate-500 rounded-2xl px-10 py-2 cursor-pointer text-black md:font-bold hover:text-red-600 hover:py-3 hover:px-14'>Order Now </span>
              </div>
            </div>
            <div className=''>
              <img src='https://img.freepik.com/free-photo/fried-rice-with-sausage_1339-8083.jpg?size=626&ext=jpg&ga=GA1.1.796175600.1683452475&semt=ais' alt='image' className='h-11/12 w-1/2 '></img>
            </div>
       </div>
      </div>
    </div>
    )
  }
}
