import React, { useState } from 'react';
import RevealOnScroll from '../components/common/RevealOnScroll';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/jangraritik1@gmail.com", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: `New Portfolio Message from ${formData.name}`
        })
      });
      if (response.ok) {
        alert("Thank you for reaching out! Your message has been sent.");
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Oops! Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-6 bg-background">
      <RevealOnScroll>
        <div className="w-full max-w-md">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white bg-primary px-6 py-3 border-4 border-black inline-block shadow-brutal -rotate-2">
              Get in Touch
            </h2>
          </div>
          
          <div className="bg-white border-4 border-black p-8 shadow-brutal">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-mono font-bold text-foreground mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-surface-bright border-4 border-black py-3 px-4 text-foreground font-medium focus:outline-none focus:bg-white focus:shadow-[4px_4px_0_0_#b70011] transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block font-mono font-bold text-foreground mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-surface-bright border-4 border-black py-3 px-4 text-foreground font-medium focus:outline-none focus:bg-white focus:shadow-[4px_4px_0_0_#b70011] transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block font-mono font-bold text-foreground mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-surface-bright border-4 border-black py-3 px-4 text-foreground font-medium focus:outline-none focus:bg-white focus:shadow-[4px_4px_0_0_#b70011] transition-all resize-none"
                  placeholder="Hello there!"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-secondary text-white font-mono font-bold tracking-widest border-4 border-black shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all uppercase disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
