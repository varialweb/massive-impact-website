"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import gsap from "gsap";

export default function Nav({ darkMode = false }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const mobileNav = document.querySelector('#mobile-nav')
    if (open) {
      gsap.from('#mobile-nav', {
        left: '-100vw',
        duration: 0.1,
      })

      gsap.to('#mobile-nav', {
        left: 0,
      })
    } else {
      if (mobileNav.style.left) {
        gsap.from('#mobile-nav', {
          left: 0,
          duration: 0,
        })

        gsap.to('#mobile-nav', {
          left: '-100vw',
        })
      }
    }
  }, [open])

  return (
    // <nav className="p-3 md:p-8 lg:p-12 flex justify-between items-center relative z-50 w-[100vw] max-w-[100vw] overflow-hidden">
    // <nav className="p-3 md:p-8 lg:p-12 relative z-50 grid grid-cols-2">
    //   <img 
    //     src={darkMode ? "https://media.benjaminjohn.net/images/brand/logo-temp-light" : "https://media.benjaminjohn.net/images/brand/logo-temp-dark"}
    //     alt=""
    //     width="200"
    //     className="md:w-[300px] lg:w-[400px] 2xl:w-[500px]"
    //   />
    //   <button 
    //     onClick={() => setOpen(!open)}
    //     className="xl:hidden"
    //   >
    //     <img 
    //       src={darkMode ? "/img/hamburger-light.svg" : "/img/hamburger-dark.svg"}
    //       alt="menu"
    //       width="28"
    //       className="md:w-[40px] lg:w-[54px]"
    //     />
    //   </button>
    //   <NavLinks darkMode={darkMode} className="hidden xl:flex" />
    //   <div id="mobile-nav" className="w-5/6 h-screen absolute top-0 -left-[100vw] xl:hidden flex">
    //     <div id="inner-mobile-nav" className="w-full h-screen flex flex-col gap-4 md:gap-6 bg-white p-3 md:p-8 shadow-lg">
    //       <img 
    //         src={"https://media.benjaminjohn.net/images/brand/logo-temp-dark"}
    //         alt=""
    //         width="200"
    //         className="md:w-[300px] lg:w-[400px] 2xl:w-[500px] h-auto"
    //       />
    //       <NavLinks className="flex flex-col" />
    //     </div>
    //     {/* <button
    //       onClick={() => setOpen(false)} 
    //       className="bg-transparent w-1/6 md:w-1/4 h-screen [content]-['hi']"
    //     /> */}
    //   </div>
    // </nav>
    <nav className="relative z-50 p-3 md:p-8 grid grid-cols-[auto_1fr] items-center">
      <img 
        src={darkMode ? '/img/massive-impact-logo-v8-white.svg' : '/img/massive-impact-logo-v8.svg'}
        width="80"
        className="md:w-[150px] lg:w-[150px]"
      />
      <button
        onClick={() => setOpen(!open)}
        className="justify-self-end xl:hidden"
      >
        <img 
          src={darkMode ? "/img/hamburger-light.svg" : "/img/hamburger-dark.svg"}
          alt="menu"
          width="28"
          className="md:w-[40px] lg:w-[54px]"
        />
      </button>
      <NavLinks darkMode={darkMode} className="hidden xl:flex justify-self-end" />
      <div id="mobile-nav" className="w-5/6 h-screen absolute top-0 -left-[100vw] xl:hidden flex">
        <div id="inner-mobile-nav" className="w-full h-screen flex flex-col gap-4 md:gap-6 bg-white p-3 md:p-8 shadow-lg">
          <img 
          src={"/img/massive-impact-logo-v8.svg"}
          alt=""
          width="80"
          className="md:w-[150px] lg:w-[400px] 2xl:w-[500px] h-auto"
        />
          <NavLinks className="flex flex-col" />
        </div>
        {/* <button
          onClick={() => setOpen(false)} 
          className="bg-transparent w-1/6 md:w-1/4 h-screen [content]-['hi']"
        /> */}
      </div>
    </nav>
  )
}


function NavLinks({ className, darkMode }) {
  return (
    <ul className={`uppercase text-lg md:text-2xl font-bold font-['Inter'] flex gap-4 md:gap-6 xl:gap-16 ${className}`} style={{ color: darkMode ? 'white' : '#040B25' }}>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  )
}