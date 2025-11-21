import React, { useEffect, useState } from "react";
import img from "../../assets/night-sky.jpeg";
import qr from "../../assets/qr.jpg";
import HeadSection from "./HeadSection";

const InternshipForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    phoneNumber: "",
    email: "",
    passportPhoto: null,
    highestQualification: "",
    referenceCode: "",
    paymentScreenshot: null,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },[]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Application Submitted! (Check console for data)");
  };

  return (
    <section className="w-full mx-auto rounded-lg shadow-lg text-white">
      <HeadSection
        poster={img}
        title={"Join Our"}
        highlighted={"INTERNSHIP"}
        subtitle={"Program Today"}
        paragraph={`Ready to kickstart your career in the creative industry? Fill out the form below to apply for our internship program. We're looking for passionate and talented individuals to join our team and grow with us.`}
        highlightedPara={"Anicomic International"}
      />

      <h2 className="text-2xl md:text-3xl font-bold text-center mb-5 z-10 relative text-white pt-10">
        Internship Application Form
      </h2>
      <form
        className="space-y-6 z-10 relative p-6 rounded-lg"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-white bg-grad px-3 rounded-lg w-fit  mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="w-full px-4 py-2 border-b-2 border-vivid-red outline-none rounded-md focus:ring-bright-red"
              placeholder=""
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="dob"
              className="block text-sm font-medium text-white bg-grad px-3 rounded-lg w-fit  mb-1"
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="w-full px-4 py-2 border-b-2 border-vivid-red outline-none rounded-md focus:ring-bright-red"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium tewhite bg-grad px-3 rounded-lg w-fit 300 mb-1"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              className="w-full px-4 py-2 border-b-2 border-vivid-red outline-none rounded-md focus:ring-bright-red"
              placeholder="123-456-7890"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white bg-grad px-3 rounded-lg w-fit  mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border-b-2 border-vivid-red outline-none rounded-md focus:ring-bright-red"
              placeholder="@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="passportPhoto"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Passport Size Photo
            </label>
            <input
              type="file"
              id="passportPhoto"
              name="passportPhoto"
              accept="image/*" // Accept only image files
              className="w-full px-4 py-2 border-b-2 border-vivid-red outline-none rounded-md focus:ring-bright-red file:mr-4 file:py-2file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-grad file:text-white hover:file:bg-red-700"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="highestQualification"
              className="block text-sm font-white bg-grad px-3 rounded-lg w-fit ext-gray-300 mb-1"
            >
              Highest Qualification
            </label>
            <input
              type="text"
              id="highestQualification"
              name="highestQualification"
              className="w-full px-4 py-2 border-b-2 border-vivid-red outline-none rounded-md focus:ring-bright-red"
              placeholder="e.g., Bachelor's in Design"
              value={formData.highestQualification}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="referenceCode"
              className="block text-sm font-medium white bg-grad px-3 rounded-lg w-fit y-300 mb-1"
            >
              Reference Code (Optional)
            </label>
            <input
              type="text"
              id="referenceCode"
              name="referenceCode"
              className="w-full px-4 py-2 border-b-2 border-vivid-red outline-none rounded-md focus:ring-vivid-red"
              placeholder="If you have one"
              value={formData.referenceCode}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="paymentScreenshot"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Paywhite screenshot
            </label>
            <input
              type="file"
              id="paymentScreenshot"
              name="paymentScreenshot"
              accept="image/*" // Accept only image files
              className="w-full px-4 py-2 border-b-2 border-vivid-red outline-none rounded-md focus:ring-vivid-red file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-vivid-red file:text-white hover:file:bg-red-700"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <img src={qr} className="h-50 w-50 mx-auto block" alt="" />
        <button
          type="submit"
          className="w-full py-3 mt-6 bg-gradient-red hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded-md font-semibold text-lg transition-colors"
        >
          Submit Application
        </button>
      </form>
    </section>
  );
};

export default InternshipForm;
