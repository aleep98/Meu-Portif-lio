'use client'

import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Send, Loader2, Mail, MapPin } from 'lucide-react'

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  
  const sendEmail = (e: React.FormEvent) => {
      e.preventDefault()
      setIsSubmitting(true)
      setStatus('idle')
      
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
      
      if (formRef.current) {
          emailjs
          .sendForm(serviceId, templateId, formRef.current, publicKey)
          .then(
              () => {
                  setStatus('success')
                  formRef.current?.reset()
                },
        (error) => {
            console.error('FAILED...', error)
            setStatus('error')
        }
    )
    .finally(() => {
        setIsSubmitting(false)
    })
    console.log(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID)
}
}

return (
    <section id="contact" className="py-24 bg-[#0D0E11]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get in Touch
          </h2>
          <p className="text-slate-300 mb-8 leading-relaxed text-lg">
            Have a project in mind or just want to say hi? 
            Feel free to send me a message. I'm always open to discussing new projects, 
            creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-red-500 shrink-0">
                <Mail size={24} />
              </div>
              <span className="text-lg">l.aleep98@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-red-500 shrink-0">
                <MapPin size={24} />
              </div>
              <span className="text-lg">Brazil</span>
            </div>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-xl space-y-6"
        >
          <div>
            <label htmlFor="user_name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full bg-[#0D0E11] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label htmlFor="user_email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full bg-[#0D0E11] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
            <textarea
              name="message"
              required
              rows={4}
              className="w-full bg-[#0D0E11] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition resize-none"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send size={20} />
              </>
            )}
          </button>

          {status === 'success' && (
            <p className="text-green-400 text-center text-sm mt-2">
              Message sent successfully! I'll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-center text-sm mt-2">
              Something went wrong. Please try again later.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}