import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'

const ContactUs = () => {
  return (
     <section className="w-full min-h-screen bg-white p-10">
      <h2 className="text-center text-3xl font-semibold my-12 text-black">
        Get in <span className="text-bright-red">touch</span> with us for collaboration....
      </h2>

      <div className="flex items-center justify-center max-w-screen gap-10 h-full flex-wrap w-full">

        <div className="bg-black text-white p-10 relative overflow-hidden max-w-100 w-full h-100 text-center">
          <div className="mb-6 p-10">
            <FaPhoneAlt className="text-bright-red text-4xl mb-4 mx-auto" />
            <h3 className="text-3xl font-bold mb-2">8605688071</h3>
            <p className="text-sm opacity-70 mb-4">Available from 9:00am - 06:00pm</p>
            <p className="text-yellow-400 font-medium mb-4">info@anicomic.in</p>
            <p className="text-sm">Nagpur, Maharashtra 441002</p>
          </div>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-gray-600 block mb-1">Name</label>
              <input
                type="text"
                className="w-full border-b border-gray-400 focus:outline-none py-1"
              />
            </div>

            <div>
              <label className="text-gray-600 block mb-1">Email ID</label>
              <input
                type="email"
                className="w-full border-b border-gray-400 focus:outline-none py-1"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-gray-600 block mb-1">Contact number:</label>
              <input
                type="text"
                className="w-full border-b border-gray-400 focus:outline-none py-1"
              />
            </div>

            <div>
              <label className="text-gray-600 block mb-1">Website:</label>
              <input
                type="text"
                className="w-full border-b border-gray-400 focus:outline-none py-1"
              />
            </div>
          </div>

          <div>
            <label className="text-gray-600 block mb-1">Company Name:</label>
            <input
              type="text"
              className="w-full border-b border-gray-400 focus:outline-none py-1"
            />
          </div>

          <div>
            <textarea
              rows="5"
              className="w-full border border-gray-400 p-3 focus:outline-none"
              placeholder="Please share your requirement in detail"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-red-600 text-white px-8 py-2 font-semibold hover:bg-red-700"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactUs