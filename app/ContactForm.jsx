"use client";

import { useEffect, useState } from "react";

import gsap from 'gsap'
import _ScrollTrigger from "gsap/ScrollTrigger";
import { InlineWidget } from "react-calendly";

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(_ScrollTrigger)

    gsap.from('#contact-form', {
      scrollTrigger: '#contact-form',
      y: 200,
      opacity: 0,
      duration: 0.35,
    })

    gsap.to('#contact-form', {
      scrollTrigger: '#contact-form',
      y: 0,
      opacity: 1,
    })
  }, [])

  function handleSubmit(event) {
    event.preventDefault()
    const { name, email, phone, business, comments } = event.target
    setLoading(true)

    fetch('/api/contact', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        phone: phone.value,
        business: business.value,
        comments: comments.value,
      })
    })
    .then(response => response.json())
    .then(response => {
      if (response.success) setSent(true)

      // console.log(response)
      setSent(true)
      setLoading(false)
    })
    .catch(error => {
      console.error(error)
      setLoading(false)
    })
  }

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      style={{ borderImage: 'linear-gradient(185deg, #142878 40%,#FF5E00 60%) 1'}} className="w-full max-w-[784px] mx-auto p-4 py-8 md:p-8 border-4 grid gap-5 relative z-10 bg-white"
    >
      <h2 className="text-center">Let's Start a <span className="text-massive-orange-500">Friendship</span></h2>
      <InlineWidget url="https://calendly.com/massivemeetup" />
      
      {/* <div className="grid gap-0.5">
        <label htmlFor="name" className="font-['League_Spartan'] font-semibold text-xl">Name*</label>
        <input 
          id="name"
          name="name"
          placeholder="John Doe"
          required={true}
        />
      </div>
      <div className="grid gap-0.5">
        <label htmlFor="email" className="font-['League_Spartan'] font-semibold text-xl">Email*</label>
        <input 
          id="email"
          name="email"
          type="email"
          placeholder="someone@somewhere.com"
          required={true}
        />
      </div>
      <div className="grid gap-0.5">
        <label htmlFor="phone" className="font-['League_Spartan'] font-semibold text-xl">Phone Number*</label>
        <input 
          id="phone"
          name="phone"
          placeholder="(555) 555-5555"
          required={true}
        />
      </div>
      <div className="grid gap-0.5">
        <label htmlFor="business" className="font-['League_Spartan'] font-semibold text-xl">Business Name</label>
        <input 
          id="business"
          name="business"
          placeholder="My Biz LLC"
        />
      </div>
      <div className="grid gap-0.5">
        <label htmlFor="comments" className="font-['League_Spartan'] font-semibold text-xl">Questions or Comments</label>
        <textarea
          id="comments"
          name="comments"
          placeholder="I’m ready to change my life by..."
          rows="4"
        />
      </div>
      <button 
        disabled={loading || sent}
        className="text-white bg-massive-orange-500 disabled:bg-massive-blue-800 p-4 w-full text-xl font-semibold flex gap-1.5 items-center justify-center mt-4 rounded-[1px]"
      >
        {sent ? (
         'Successfully sent!'
        ) : (
          loading ? (
            <>Sending <img src="/img/loading.svg" alt="" height="24" className="animate-spin invert" /></>
          ) : (
            <>Create friendship <img src="/img/link-arrow-white.svg" alt="" width="24" /></>
          )
        )}
      </button> */}
    </form>
  )
}