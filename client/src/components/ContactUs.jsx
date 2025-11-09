import React from "react";
import Title from "./Title";
import { motion } from "motion/react";
import assets from "../assets/assets";
import toast from "react-hot-toast";

const ContactUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", "c9f9f763-8e98-4f41-9b75-8767ec4f6be1");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you for your submission");
        event.target.reset();
      } else {
        console.log("Error", data);
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
      id="contact-us"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700
     dark:text-white pt-30"
    >
      <Title
        title={"Reach Out to us."}
        desc={
          "From strategy to excution  we craft digital solution that move your business forward "
        }
      />

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
        viewport={{ once: true }}
        onSubmit={onSubmit}
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
      >
        <div>
          <p className="mb-2 text-sm font-medium ">Your Name</p>
          <div className="flex pl-3 rounded-lg text-gray-300 border dark:border-gray-600 ">
            <img src={assets.person_icon} alt="" />
            <input
              type="text"
              name="name"
              placeholder="Enter your name...."
              required
              className="w-full p-3 text-sm outline-none "
            />
          </div>
        </div>
        <div>
          <p className="mb-2 text-sm font-medium ">Your Email</p>
          <div className="flex pl-3 rounded-lg text-gray-300 border dark:border-gray-600 ">
            <img src={assets.email_icon} alt="" />
            <input
              type="email"
              name="email"
              placeholder="Enter your email...."
              required
              className="w-full p-3 text-sm outline-none "
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <p className="mb-2 text-sm font-medium ">Message</p>
          <textarea
            rows={8}
            placeholder="Enter your message..."
            required
            name="message"
            className="w-full p-3 text-sm outline-none rounded-lg text-gray-300 border dark:border-gray-600  "
          />
        </div>
        <button
          type="submit"
          className="w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-105 transition-all"
        >
          Submit <img src={assets.arrow_icon} alt="" className="w-4" />
        </button>
      </motion.form>
    </motion.div>
  );
};

export default ContactUs;
