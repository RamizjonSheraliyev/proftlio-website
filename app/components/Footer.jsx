import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react"
const Footer = ({ isDarkMode }) => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    className="mt-20">
      <motion.div
       initial={{ opacity: 0, y: -20 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.5, delay: 0.4 }}
       className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt=""
          className="w-36 mx-auto mb-2 "
        />

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-6 "
          />
          sheraliyevramiz2@gmail.com
        </div>
      </motion.div>
      <motion.div
       initial={{ opacity: 0, y: -20 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.5, delay: 0.6 }}
       className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <motion.p
         initial={{ opacity: 0, y: -20 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, delay: 0.7 }}
        >2025 Ramiz Sheraliyev. All rights reserved</motion.p>
        <motion.ul
         initial={{ opacity: 0, y: -20 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, delay: 0.8 }}
         className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <motion.li
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.8 }}
          >
            <a target="blank" href="https://github.com/RamizjonSheraliyev">
              Github
            </a>
          </motion.li>
          <li>
            <a
              target="blank"
              href="https://www.linkedin.com/in/ramiz-sheraliyev-84415b34a/"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              target="blank"
              href="https://www.instagram.com/ramiz_sheraliyev/"
            >
              Instagram
            </a>
          </li>
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
