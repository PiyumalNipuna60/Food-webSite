import React, { Component } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import SearchIcon from '@mui/icons-material/Search';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  render() {
    const activeLink="border-b-4 cursor-pointer hover:border-accent-main text-accent-main";
    // const activeLink2="border-4 cursor-pointer hover:border-accent-main rounded-full";
    const normalLink="cursor-pointer hover:bg-violet-400";

    return (
        <div className=" w-11/12 h-13 text-black fixed p-4 z-10 m-5 rounded-full snap-center ml-16 shadow-xl border-2">
      <div className="w-full h-full">
          <div className="flex w-full h-full ">
              <div className="w-1/3  items-center ">
                  <h1 className="font-babylonica text-2xl md:font-bold  text-accent-main">Food.com</h1>
              </div>
              <div className="w-2/3">
                  <nav className="flex w-full space-x-20 md:font-bold text-xl  font-heading pl-10">

                    <NavLink to={"/Home"}
                    className={({isActive})=>
                        isActive?activeLink:normalLink
                    }>Home</NavLink>

                    <NavLink to={"/about"}
                    className={({isActive})=>
                       isActive?activeLink:normalLink 
                    }>About</NavLink>

                    <NavLink to={"/Menu"}
                    className={({isActive})=>
                       isActive?activeLink:normalLink 
                     }>Menu</NavLink>

                     <NavLink to={"/Gallery"}
                     className={({isActive})=>
                       isActive?activeLink:normalLink
                     }>Gallery</NavLink>

                     <NavLink to={"/Order"}
                     className={({isActive})=>
                       isActive?activeLink:normalLink
                     }>Order</NavLink>

                     <NavLink to={"/Team"}
                     className={({isActive})=>
                       isActive?activeLink:normalLink
                     }>Team</NavLink>
                  </nav>
              </div>
              <div className="w-72 ">
                  <nav className="flex w-full font-heading pl-10 justify-end space-x-4">

                   <ShoppingCartIcon />
                   <LoginIcon />
                  <SearchIcon />
                  </nav>
              </div>
          </div>
      </div>
  </div>
    )
  }
}
