import React, { Component } from 'react'
import Header from '../../components/Header/Header'

export default class Home extends Component {
  render() {
    return (
      <div className="">
        <h1 className="bg-black text-red-800 border-b-4 cursor-pointer border-accent-main text-accent-main">Home</h1>
        <Header />
      </div>
    )
  }
}
