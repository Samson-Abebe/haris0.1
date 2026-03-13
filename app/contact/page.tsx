"use client"

import { motion } from "framer-motion"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-purple-50">

      {/* HERO SECTION */}
      <section className="text-center py-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-gray-800"
        >
          Contact Hlina Pharmacy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
        >
          We are here to serve you with precision care and a personal touch.
          Reach out to us anytime.
        </motion.p>
      </section>

      {/* CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-12">

        {/* CONTACT FORM */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-10 rounded-3xl shadow-xl"
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Send Us a Message
          </h2>

          <form className="space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
            />

            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 transition text-white py-4 rounded-xl font-semibold"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* MAP + INFO */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Google Map */}
          <div className="rounded-3xl overflow-hidden shadow-xl h-80">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Addis+Ababa,Ethiopia"
              width="100%"
              height="100%"
              loading="lazy"
            ></iframe>
          </div>

          {/* Contact Info Cards */}
          <div className="grid gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="font-semibold text-lg">📍 Address</h3>
              <p className="text-gray-600 mt-2">
                Addis Ababa, Ethiopia
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="font-semibold text-lg">📞 Phone</h3>
              <p className="text-gray-600 mt-2">
                +251 9XX XXX XXX
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="font-semibold text-lg">✉ Email</h3>
              <p className="text-gray-600 mt-2">
                info@hlinapharmacy.com
              </p>
            </div>
          </div>
        </motion.div>

      </section>
    </div>
  )
}
