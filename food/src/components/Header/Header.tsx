import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className="bg-accent-tes-200 h-13 w-full text-black fixed top-0 p-4 z-10">
      <div className="w-full h-full">
          <div className="flex w-full h-full ">
              <div className="w-11/12 ">
                  <h1 className="font-babylonica jus text-accent-main">MyFeed.com</h1>
              </div>
              <div className="w-11/12  ">
                  <nav className="flex w-full justify-between font-heading pl-10">

                   <nav>Home</nav>
                   <nav>Home</nav>
                   <nav>Home</nav>
                   <nav>Home</nav>

                  </nav>
              </div>
          </div>
      </div>
  </div>
    )
  }
}
