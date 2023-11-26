"use client";

import Link from "next/link";
import Nav from "../Nav";

import gsap from 'gsap'
import _ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

export default function AboutPage() {

  useEffect(() => {
    gsap.registerPlugin(_ScrollTrigger)

    gsap.from('#about-ben', {
      scrollTrigger: '#about-ben',
      y: 200,
      opacity: 0,
      duration: 0.35,
    })

    gsap.to('#about-ben', {
      scrollTrigger: '#about-ben',
      y: 0,
      opacity: 1,
    })

    gsap.from('#h1', {
      scrollTrigger: '#h1',
      y: 200,
      opacity: 0,
      duration: 0.35,
    })

    gsap.to('#h1', {
      scrollTrigger: '#h1',
      y: 0,
      opacity: 1,
    })

    gsap.from('#p-1', {
      scrollTrigger: '#p-1',
      y: 200,
      opacity: 0,
      duration: 0.35,
    })

    gsap.to('#p-1', {
      scrollTrigger: '#p-1',
      y: 0,
      opacity: 1,
    })

    gsap.from('#p-2', {
      scrollTrigger: '#p-2',
      y: 200,
      opacity: 0,
      duration: 0.35,
    })

    gsap.to('#p-2', {
      scrollTrigger: '#p-2',
      y: 0,
      opacity: 1,
    })

    gsap.from('#link', {
      scrollTrigger: '#link',
      y: 200,
      opacity: 0,
      duration: 0.35,
    })

    gsap.to('#link', {
      scrollTrigger: '#link',
      y: 0,
      opacity: 1,
    })
  }, [])
  return (
    <div>
      <Nav />
      <main className="grid gap-8 md:gap-16 justify-items-center xl:grid-cols-2 max-w-[1280px] mx-auto p-3 py-8 md:p-8 md:py-12 lg:p-12 lg:py-16 xl:p-16 xl:py-20">
        <img id="about-ben" src="https://media.benjaminjohn.net/images/about-images/about-ben" alt="Benjamin John" width="275" className="md:w-[350px] lg:w-[450px]" />
        <div className="grid gap-4 justify-items-center">
          <h1 id="h1" className="text-center">Let's connect <span className="text-massive-orange-500">personally</span></h1>
          <p id="p-1">
            I would love to tell you my entire story and why I am qualified to guide you, but the best way to do that is for us to create a friendship. 
            Let's start with that personal connection so you can see how Massive Impact can really make a difference.
          </p>
          <p id="p-2">
            Don't worry - this isn't a sales call. 
            I truly value relationships and I will never ask you to do business with me. 
            I want you to feel as genuinely about my process and approach as I feel about making an impact in your life.
          </p>
          <Link id="link" href="/contact" className="flex items-center gap-2 text-orange-500 font-semibold text-xl md:text-2xl leading-none">
            Create friendship. <img src="/img/link-arrow-orange.svg" alt="" width="28" className="-mt-0.5" />
          </Link>
        </div>
      </main>
    </div>
  )
}