import React, { useState } from 'react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState('');
  const formId = 'mrbagypk';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    try {
      await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        body: formData,
      });
    } catch (error) { }
    setFormStatus('success');
    (e.target as HTMLFormElement).reset();
  };


  return (
    <section id="contact" className="py-20 px-6 md:px-10">
      <div className="glass rounded-3xl p-8 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold">Let’s work together</h2>
        <p className="text-neutral-300 mt-3">
          I’m based in Nepal and open to remote or on-site engagements. For consulting,
          product development, or advice sessions, drop a note.
        </p>
        <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
          <input className="glass rounded-xl px-4 py-3" name="name" placeholder="Your name" required />
          <input className="glass rounded-xl px-4 py-3" name="email" placeholder="Email" type="email" required />
          <textarea className="glass rounded-xl px-4 py-3 min-h-[120px]" name="message" placeholder="How can I help?" required></textarea>

          {/* Hide button if form is in success or error state */}
          {formStatus === '' || formStatus === 'error' ? (
            <button
              type="submit"
              className="px-5 py-3 rounded-2xl bg-brand-500 hover:bg-brand-400 transition shadow-lg shadow-brand-900/30"
            >
              Send Message
            </button>
          ) : null}

          {/* Success or error messages */}
          {formStatus === 'success' && <p className="mt-3 text-green-500">Thank you! Your message has been sent.</p>}
          {formStatus === 'error' && <p className="mt-3 text-red-500">Oops! Something went wrong. Please try again later.</p>}
        </form>

        <div className="mt-4 text-neutral-400 text-sm">
          Or email: <a className="underline" href="mailto:mail.rishavkarna@gmail.com">mail.rishavkarna@gmail.com</a>
        </div>
      </div>

      <footer className="text-center text-neutral-500 mt-10 text-sm">
        © {new Date().getFullYear()} Rishav Karna · Nepal
      </footer>
    </section>
  );
}
