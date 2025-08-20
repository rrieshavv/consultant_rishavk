
import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 md:px-10">
      <div className="glass rounded-3xl p-8 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold">Let’s work together</h2>
        <p className="text-neutral-300 mt-3">
          I’m based in Nepal and open to remote or on-site engagements. For consulting,
          product development, or advice sessions, drop a note.
        </p>
        <form className="mt-6 grid gap-4">
          <input className="glass rounded-xl px-4 py-3" placeholder="Your name" />
          <input className="glass rounded-xl px-4 py-3" placeholder="Email" type="email" />
          <textarea className="glass rounded-xl px-4 py-3 min-h-[120px]" placeholder="How can I help?" />
          <button type="button" className="px-5 py-3 rounded-2xl bg-brand-500 hover:bg-brand-400 transition shadow-lg shadow-brand-900/30">
            Send Message
          </button>
        </form>
        <div className="mt-4 text-neutral-400 text-sm">
          Or email: <a className="underline" href="mailto:spysugen5@gmail.com">mail.rishavkarna.com</a>
        </div>
      </div>
      <footer className="text-center text-neutral-500 mt-10 text-sm">
        © {new Date().getFullYear()} Rishav Karna · Nepal
      </footer>
    </section>
  )
}
