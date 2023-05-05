import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <div className="bg-accent-tes-200 w-11/12 h-13 text-black fixed p-4 z-10 m-5 rounded-full snap-center ml-16">
      <div className="w-full h-full">
          <div className="flex w-full h-full ">
              <div className="w-1/3  items-center ">
                  <h1 className="font-babylonica jus text-accent-main">MyFeed.com</h1>
              </div>
              <div className="w-2/3">
                  <nav className="flex w-full space-x-24 font-heading pl-10">

                   <nav>Home</nav>
                   <nav>About</nav>
                   <nav>Menu</nav>
                   <nav>Gallery</nav>
                   <nav>Order</nav>
                   <nav>Team</nav>
                  </nav>
              </div>
              <div className="w-72 ">
                  <nav className="flex w-full font-heading pl-10 justify-end">

                   <nav>H</nav>
                   <nav>A</nav>
                   <nav>M</nav>
                  </nav>
              </div>
          </div>
      </div>
  </div>
    )
  }
}
