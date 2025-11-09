import React from "react";
import assets from "../assets/assets";
import Title from "./Title";
import { motion } from "motion/react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const servicesData = [
    {
      title: "Advertising",
      description:
        "We turn bold ideas into powerful digital campaigns that connect, engage, and convert audiences effectively.",
      icon: assets.ads_icon,
    },
    {
      title: "Content Marketing",
      description:
        "We craft and distribute compelling content that builds trust, drives traffic, and strengthens your brand presence.",
      icon: assets.marketing_icon,
    },
    {
      title: "Social Media Management",
      description:
        "From strategy to execution, we manage your social presence to grow followers, boost engagement, and elevate your online image.",
      icon: assets.social_icon,
    },
    {
      title: "Content Writing",
      description:
        "We deliver high-quality, SEO-optimized content that tells your brand's story with clarity and impact.",
      icon: assets.content_icon,
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="services"
      className="relative flex flex-col  sm:px-12
1g:px-24 xl:px-40 items-center gap-7 px-4 pt-30 text-gray-700 dark:text-white "
    >
      <img
        src={assets.bgImage2}
        className="absolute -top-110 -left-70 -z-1 dark:hidden"
        alt=""
      />
      <Title
        title="How can we help?"
        desc="For Strategy to execution , we craft digital solution that move your business forward."
      />
      <div className="flex flex-col md:grid grid-cols-2">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
