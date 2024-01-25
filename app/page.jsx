"use client";

import Link from "next/link";
import Nav from "./Nav";
import gsap from 'gsap'
import _ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import ContactForm from "./ContactForm";
import { InlineWidget, PopupButton, PopupModal } from "react-calendly";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(_ScrollTrigger)

    gsap.from('#hero-content', {
      scrollTrigger: '#hero-content',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })

    gsap.to('#hero-content', {
      scrollTrigger: '#hero-content',
      opacity: 1,
      y: 0,
    })
    
    gsap.from('#intro-h2', {
      scrollTrigger: '#intro-h2',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })

    gsap.to('#intro-h2', {
      scrollTrigger: '#intro-h2',
      opacity: 1,
      y: 0,
    })
    
    gsap.from('#intro-p-1', {
      scrollTrigger: '#intro-p-1',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })

    gsap.to('#intro-p-1', {
      scrollTrigger: '#intro-p-1',
      opacity: 1,
      y: 0,
    })
    
    gsap.from('#intro-p-2', {
      scrollTrigger: '#intro-p-2',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })

    gsap.to('#intro-p-2', {
      scrollTrigger: '#intro-p-2',
      opacity: 1,
      y: 0,
    })
    
    gsap.from('#abstract-side-bar-right', {
      scrollTrigger: '#abstract-side-bar-right',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })

    gsap.to('#abstract-side-bar-right', {
      scrollTrigger: '#abstract-side-bar-right',
      opacity: 1,
      y: 0,
    })

    gsap.from('#impact-h2', {
      scrollTrigger: '#impact-h2',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })

    gsap.to('#impact-h2', {
      scrollTrigger: '#impact-h2',
      opacity: 1,
      y: 0,
    })
    gsap.from('#impact-p', {
      scrollTrigger: '#impact-p',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })

    gsap.to('#impact-p', {
      scrollTrigger: '#impact-p',
      opacity: 1,
      y: 0,
    })
    gsap.from('#impact-link', {
      scrollTrigger: '#impact-p',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })

    gsap.to('#impact-link', {
      scrollTrigger: '#impact-p',
      opacity: 1,
      y: 0,
    })
    
    gsap.from('#business-card', {
      scrollTrigger: '#business-card',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })

    gsap.to('#business-card', {
      scrollTrigger: '#business-card',
      opacity: 1,
      y: 0,
    })
    
    gsap.from('#health-card', {
      scrollTrigger: '#health-card',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })

    gsap.to('#health-card', {
      scrollTrigger: '#health-card',
      opacity: 1,
      y: 0,
    })
    
    gsap.from('#relationships-card', {
      scrollTrigger: '#relationships-card',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })

    gsap.to('#relationships-card', {
      scrollTrigger: '#relationships-card',
      opacity: 1,
      y: 0,
    })
    
    gsap.from('#and-more', {
      scrollTrigger: '#and-more',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })

    gsap.to('#and-more', {
      scrollTrigger: '#and-more',
      opacity: 1,
      y: 0,
    })
    
    gsap.from('#meet-ben-pic', {
      scrollTrigger: '#meet-ben-pic',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })

    gsap.to('#meet-ben-pic', {
      scrollTrigger: '#meet-ben-pic',
      opacity: 1,
      y: 0,
    })
    
    gsap.from('#meet-ben-content', {
      scrollTrigger: '#meet-ben-content',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })

    gsap.to('#meet-ben-content', {
      scrollTrigger: '#meet-ben-content',
      opacity: 1,
      y: 0,
    })
    
    gsap.from('#contact-ben', {
      scrollTrigger: '#contact-ben',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })

    gsap.to('#contact-ben', {
      scrollTrigger: '#contact-ben',
      opacity: 1,
      y: 0,
    })
  }, [])

  return (
    <div
      id="hero-background"
      style={{
        // backgroundImage: 'url("https://media.benjaminjohn.net/images/home-images/meteor-image?w=1920")',
        backgroundPosition: 'top',
        backgroundSize: 'cover, 100%',
        backgroundAttachment: 'fixed',
      }}
      // className="[background-image]:[url('/img/meteor-image-2264w.jpg')]"
    >
      <Nav darkMode={true} />
      <main>
        <Hero />
        <Intro />
        <Impact />
        <Businesses />
        <MeetBen />
        <ContactBen />
      </main>
    </div>
  )
}

function Hero() {
  return (
    <section 
      style={{
        background: 'linear-gradient(hsl(228, 80%, 8%, 55%) 0%, hsl(228, 60%, 15%, 55%) 12%, hsl(227, 54%, 30%, 65%) 30%, hsl(228, 45%, 58%, 75%) 50%, hsl(228, 35%, 69%, 80%) 60%, hsl(228, 25%, 79%, 90%) 72%, hsl(227, 20%, 90%, 95%) 85%, #FFFFFF 95%)'
      }}
      // bg-gradient-to-b from-[#040B25aa] from-10% via-[#132777cc] via-60%  to-white
      className="grid place-items-center p-3 py-16 pt-24 md:pt-32 lg:pt-48 2xl:pt-60 md:px-8 lg:px-12   2xl:pb-[60px] relative -top-20 -mb-[92px] md:-top-48 md:-mb-[208px] lg:-top-40 lg:-mb-[204px] xl:-top-48 xl:-mb-[248px] z-10 max-w-[100vw]"
    >
      {/* <div id="hero-content" className="flex flex-col md:flex-row justify-center items-center"> */}
      <div id="hero-content" className="grid md:grid-cols-[auto_auto] justify-center items-center place-items-center">
        <picture>
          <source srcSet="https://media.benjaminjohn.net/images/home-images/hero-ben" media="(min-width: 768px)" />
          <img src="https://media.benjaminjohn.net/images/home-images/hero-ben-mobile" alt="" width="250" className="md:w-[350px] 2xl:w-[400px]" />
        </picture>
        <div className="bg-gradient-to-b from-massive-blood-orange to-massive-orange-500 text-white p-3 py-8 pb-4 md:px-5 md:pb-5 lg:px-12 lg:py-10 lg:pb-8 rounded-[1px] flex flex-col gap-3 md:gap-5 text-center md:text-left max-w-[800px]">
          <h1 className="xl:text-[55px] xl:leading-[70px]">
            A
            <span className="relative"> coach
              <span className="absolute -top-8 left-8 xl:-top-10 xl:left-12 font-['Square_Peg'] text-massive-blue-800 font-normal text-[48px] xl:text-[60px]">mentor</span>
              <svg className="absolute top-3 left-2.5 xl:hidden"><line x1="0" x2="100" y1="5" y2="20" strokeWidth={4} stroke="#081135" /></svg>
              <svg className="absolute top-3 left-2.5 xl:hidden"><line x1="0" x2="100" y1="20" y2="5" strokeWidth={4} stroke="#081135" /></svg>
              <svg className="absolute top-5 left-3.5 hidden xl:block"><line x1="5" x2="160" y1="5" y2="30" strokeWidth={5} stroke="#081135" /></svg>
              <svg className="absolute top-5 left-3.5 hidden xl:block"><line x1="5" x2="160" y1="30" y2="5" strokeWidth={5} stroke="#081135" /></svg>
            </span> who cares about people.
          </h1>
          <Link href="/contact" className="text-[29px] leading-[35px] lg:text-[35px] lg:leading-[42px]">
            Let's start a friendship to create the life you <span className="inline-flex gap-1.5">want. <img src="/img/link-arrow-white.svg" alt="" width="28" /></span>
            
          </Link>
        </div>
      </div>
    </section>
  )
}

function Intro() {
  // -mt-20 md:-mt-36 lg:-mt-[248px] 2xl:-mt-[248px]
  return (
    // <section className=" bg-white flex flex-col items-center gap-5 p-3 pb-8 relative">
    <section className="grid gap-5 p-3 md:p-8 justify-center bg-white relative">
      <img id="abstract-side-bar-right" src="/img/abstract-side-bar.png" alt="" width="154" className="absolute -right-0.5 h-auto w-[6vw] top-[25%] hidden xl:block" />
      <h2 id="intro-h2" className="text-center">Unlock your true <span className="text-massive-orange-500">potential</span></h2>
      <p id="intro-p-1">
        A lot of us have the right intentions but the wrong motivations. 
        In our hearts, we want to do something meaningful and lead a life that fulfills us. 
        Creating that kind of purpose often gets muddied by the daily desires and pressures we face, 
        some that we make for ourselves. What if you could detach yourself from wanting and pursue your passion authentically, 
        genuinely, and wholeheartedly, without expecting anything in return? Imagine the impact you could make with your skills, 
        knowledge, and experience living this way. All you need is the right mindset to do it.
      </p>
      <p id="intro-p-2">
        Massive Impact is not a coaching experience, but an experience that will show you how to impact others in a major way. 
        It is a complete overhaul on the mental blocks and barriers keeping you from your full potential. By partnering with me,
         you can learn to channel your passion and operate on a whole new level where you are free to give your talents to the world without expectation. 
         You will discover what really matters to you and see firsthand how to elevate yourself and operate with an outlook that will allow you to change 
         your life and the lives of those around you.
      </p>
      <Link href="/contact" className="text-massive-orange-500 flex gap-2 items-center mx-auto text-lg md:text-xl font-semibold font-[Inter]">
        Create friendship. <img src="/img/link-arrow-orange.svg" alt="" width="24" />
      </Link>
    </section>
  )
}

function Impact() {
  return (
    <section className="bg-gradient-to-b from-[hsl(228,_74%,_12%,_80%)] to-[hsl(228,_72%,_27%,_80%)] p-3 md:px-8 py-8 md:py-12 text-white grid gap-3 md:gap-8 justify-center max-w-[100vw] overflow-hidden">
      <h2 id="impact-h2" className="text-white text-center">
        Learn to make a 
        <span className="relative">
          n
          <span className="absolute font-['Square_Peg'] font-normal text-massive-orange-500 -top-8 md:-top-9 -left-8 md:left-0 text-[1.5em]"> massive </span>
          <svg className="absolute top-3 left-0.5 xl:hidden"><line x1="0" x2="18" y1="2" y2="20" strokeWidth={3} stroke="#FF5E00" /></svg>
          <svg className="absolute top-3 left-0.5 xl:hidden"><line x1="0" x2="18" y1="20" y2="2" strokeWidth={3} stroke="#FF5E00" /></svg>
          <svg className="absolute top-4 left-0.5 hidden xl:block"><line x1="1" x2="22" y1="2" y2="25" strokeWidth={3} stroke="#FF5E00" /></svg>
          <svg className="absolute top-4 left-0.5 hidden xl:block"><line x1="0" x2="22" y1="25" y2="2" strokeWidth={3} stroke="#FF5E00" /></svg>
        </span>
        
        <span> impact</span>
      </h2>
      <p id="impact-p">
        Massive Impact provides expert guidance in a variety of areas. Whether you are an entrepreneur who needs help starting a business, 
        a lifelong musician forming their dream band, or a person struggling to maintain a healthy lifestyle and healthy relationships, 
        I have all of the tools you need to achieve success and personal growth.
      </p>
      <div id="impact-link" className="grid">
        <Link  href="/contact" className="text-center flex gap-1.5 justify-self-center items-center text-lg md:text-xl font-semibold font-[Inter]">
          <span  className="flex gap-1.5 items-center">Show me more <img src="/img/link-arrow-white.svg" alt="" width="24" /></span>
        </Link>
      </div>
    </section>
  )
}

function Businesses() {
  return (
    <section className="bg-white p-3 pb-12 mx:px-8 py-8 md:py-12 relative grid gap-8">
      <img id="abstract-side-bar-left" src="/img/abstract-side-bar.png" alt="" width="154" className="absolute -left-0.5 rotate-180 h-auto w-[6vw] top-[30%] hidden 2xl:block" />
      <div className="flex flex-col xl:grid xl:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
        <div id="business-card" style={{ borderImage: 'linear-gradient(#0eade0, #132777) 1'}} className="p-6 border-4 w-full max-w-[360px] h-full grid gap-5 items-center justify-items-center">
            <img src="/img/business.svg" />
            <h3>Business</h3>
            <p>
              Whether you are an entrepreneur, business owner, or professional, I can help guide you on key areas to foster your personal growth and achievement.
            </p>
            <ul className="list-disc w-full list-outside pl-3.5">
              <li>Create long-term friendships</li>
              <li>Build a trusting community</li>
              <li>Organically help people</li>
              <li>Establish concrete communication</li>
              <li>Learn money truths</li>
              <li>Increase team culture and performance</li>
              <li>Scale with honest relationships</li>
              <li>Massive mindset development</li>
            </ul>
        </div>
        {/* <div className="p-2 bg-gradient-to-b from-[#0DC114] to-[#132777] to-70% w-full max-w-[355px]"> */}
        <div id="health-card" style={{ borderImage: 'linear-gradient(#0dc114, #132777) 1'}} className="p-6 border-4 w-full max-w-[360px] h-full grid gap-5 items-center justify-items-center">

            <img src="/img/health-and-strength.svg" />
            <h3 className="text-center">Health & Strength</h3>
            <p>
              Learning to care for your health includes the body, mind, and soul. I can give you real tools to elevate your health and longevity.
            </p>
            <ul className="list-disc w-full list-outside pl-3.5">
              <li>Create long-term friendships</li>
              <li>Increase inner strength and physical fitness</li>
              <li>Experience and learn about 100% plant-based diet</li>
              <li>Receive 24/7 access to health resources</li>
              <li>Reach your optimal health</li>
              <li>Shatter your illusions and perceived limits</li>
              <li>Massive mindset development</li>
            </ul>
        </div>
        {/* <div className="p-2 bg-gradient-to-b from-[#5B18B0] to-[#132777] w-full max-w-[355px]"> */}
        <div id="relationships-card" style={{ borderImage: 'linear-gradient(#5b18b0, #132777) 1'}} className="p-6 border-4 w-full max-w-[360px] h-full grid gap-5 items-center justify-items-center">
            <img src="/img/relationships.svg" />
            <h3 className="text-center">Relationships</h3>
            <p>
              How we interact makes an impact. I can show you strategies to protect your energy and communicate to the people you love that you care.
            </p>
            <ul className="list-disc w-full list-outside pl-3.5">
              <li>Create long-term friendships</li>
              <li>Transform your communication</li>
              <li>Increase your spousal love and communication</li>
              <li>Increase your energy awareness</li>
              <li>Convert negative energy in a healthy way</li>
              <li>Bring out the superhero parent within you</li>
              <li>Understand and rebuild relationships with your child</li>
            </ul>
        </div>
      </div>
      <p id="and-more" className="text-[29px] leading-[35px] lg:text-[35px] lg:leading-[42px] font-[Inter] italic text-center">...and more!</p>
    </section>
  )
}

function MeetBen() {
  return (
    <section className="bg-gradient-to-b from-massive-orange-500 to-white to-75% p-3 mx:px-8 xl:px-32 py-8 md:py-12 md:pb-40 xl:py-40 2xl:py-32 xl:pb-0 2xl:pb-0 relative flex flex-col xl:grid xl:grid-cols-2 xl:items-center gap-8 xl:gap-12 w-full overflow-x-clip -mb-1">
      <img id="meet-ben-pic" src="https://media.benjaminjohn.net/images/home-images/meet-ben-2" alt="" className="mt-4 scale-150 md:scale-100 relative xl:w-[175%] 2xl:w-[150%] md:mt-12 xl:-mt-48 2xl:-mt-40 3xl:-mt-40 xl:-ml-24" />
      <div id="meet-ben-content" className="relative px-4 -mt-16 md:-mt-48 xl:-mt-8 xl:ml-0 2xl:-ml-40">
        <div className="relative w-fit md:w-[500px] md:h-[500px] xl:scale-[90%] 2xl:scale-100 3xl:scale-125 xl:-mt-24 2xl:ml-48 3xl:ml-72 2xl:-mt-32 3xl:-mt-40 mx-auto aspect-square">
          <div className="bg-white relative z-50 p-8 grid gap-8 w-full border-4 border-massive-blue-500">
            <h2 className="text-center">Meet <span className="text-massive-orange-500">Ben</span></h2>
            <p>
              I know how challenging life can be. I am not here to tell people what to do or how to do it, but to serve as a friend, mentor, 
              and guide to others who are struggling with things I myself have experienced. In my life, I have overcome great obstacles largely 
              due to my willingness to look inward and invest in myself. Over time, I have adopted gratitude, humility, and compassion through 
              my experience. I genuinely care about your life, and have all of the insight, knowledge, and personal experience to help you.
            </p>
            <Link href="/about" className="text-massive-orange-500 flex gap-2 items-center mx-auto text-lg md:text-xl font-semibold font-[Inter]">
              Get to know me. <img src="/img/link-arrow-orange.svg" alt="" width="24" />
            </Link>
          </div>
          <div
            className="w-full h-full bg-massive-blue-600 -z-[50] bg-clip-border absolute rotate-45 aspect-square -top-5 xl:-top-4 left-0 hidden md:block" 
          />
        </div>
      </div>
    </section>
  )
}

function ContactBen() {
  return (
    <section className="bg-white bg-opacity-0 p-3 pb-12 md:pb-16 md:px-16 py-8 md:py-12 relative grid items-center gap-8 -mb-1">
      <img id="contact-ben" src="https://media.benjaminjohn.net/images/home-images/contact-ben" alt="" width="275" className="relative z-[9] -mb-60 mx-auto md:w-[325px] xl:-mb-0 xl:absolute xl:right-0 xl:-bottom-8 2xl:right-32 3xl:right-[300px]" />
      <ContactForm />
      {/* <InlineWidget url="https://calendly.com/massivemeetup" /> */}
      <div 
        style={{
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 40%, 0% 20%)',
        }}
        className="w-full h-full absolute bg-white"
      />
      <div 
        style={{
          clipPath: 'polygon(0% 20%, 100% 40%, 100% 100%, 0% 100%)',
        }}
        className="w-full h-full absolute bg-gradient-to-b to-[hsl(229,_87%,_6%,_100%)_85%] from-[hsl(228,_72%,_27%,_80%)]"
      />
    </section>
  )
}