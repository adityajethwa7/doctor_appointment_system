import { useEffect,useRef } from 'react'
import React from 'react'
import userImg from "../../assets/assets/images/avatar-icon.png"
import logo from "../../assets/assets/images/logo.png"
import {NavLink,Link} from "react-router-dom"
import {BiMenu} from 'react-icons/bi';
const navlinks=[
{
    path:'/home',
    display:'Home'
},
{
    path:'/doctors',
    display:'Find A Doctor'
},
{
    path:'/services',
    display:'Services'
},
{
    path:'/contact',
    display:'Contact'
},

]

const Header = () => {
const headerRef=useRef(null);

const menuRef=useRef(null);

const handleStickyHeader = () =>{
     window.addEventListener('scroll',()=>{
        if(document.body.scrollTop>80 || document.documentElement.scrollTop>80 ){
            headerRef.current.classList.add(`sticky__header`)
        }
        else{
            headerRef.current.classList.remove(`sticky__header`)

        }
    
    })
}

useEffect(()=>{
    handleStickyHeader()
    return ()=> window.removeEventListener(`scroll`,handleStickyHeader)
})

const  toggleMenu=()=> menuRef.current.classList.toggle(`show__menu`)
  return (
    <header className='header flex items-center' ref={headerRef} >

        <div className="container">
            < div className='flex items-center justify-between'>
                <div>
                <img src={logo} alt="" />
                </div>

         
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                <ul className="menu flex items-center gap-[2.7rem]">
            {
                navlinks.map((link,index)=>(<li key={index}>
                    <NavLink to={link.path} className={navClass=> navClass.isActive? 'text-primaryColor text-[16px] leading-7 font-[600]' : 'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'}>{link.display}</NavLink>
                </li>)) 
            }
                </ul>
                </div>

             <div className='flex items-center gap-4'>
                <div className=' hidden'>
                <Link to='/'>
                    <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                        <img src={userImg} className="w-full rounded-full" alt="" />
                    </figure>
                </Link>
                </div>
                <Link to="/login" >
                 <button className='bg-[primaryColor] py-2 px-6 text-black font-[600] h-[44px] flexitems-center justify-center rounded-[50px]'>Login</button>
                </Link>
       <span className='md:hidden' onClick={toggleMenu}>
       <BiMenu className="w-6 h-6 cursor-pointer"/>
       </span>
       </div>
       </div>
       </div>
    </header>
  )
}

export default Header