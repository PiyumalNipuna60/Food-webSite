import React, { Component } from 'react'
import Header from '../../components/Header/Header'

export default class Home extends Component {
  render() {
    return (
      <div >
        <Header />
        <div className="w-full h-screen">
         <div className='fixed bg-red-500  bottom-0 top-0 left-0 right-0 w-full h-2/3 m-auto'>
            <div></div>
            <div><img></img></div>
         </div>
        </div>
      </div>
    )
  }
}
