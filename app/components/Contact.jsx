import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Snackbar,
  SnackbarContent,
  CircularProgress,
  Slide,
} from "@mui/material";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const botToken = "7664954552:AAF7H7sjGICerimFr_xxrVGU8ly0Luj-SuQ"; // Telegram bot token
  const chatId = "5250272118"; // Telegram chat ID

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const text = `
      📩 Yangi xabar!  
      👤 Ism: ${formData.name}  
      📧 Email: ${formData.email}  
      ✉️ Xabar: ${formData.message}  
    `;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: chatId, text }),
        }
      );

      if (response.ok) {
        setOpenSnackbar(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Xatolik yuz berdi, qaytadan urinib ko‘ring!");
      }
    } catch (error) {
      alert("Xabar yuborishda xatolik yuz berdi!");
    }

    setLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      id="contact"
      className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Connect With Me
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="text-center text-5xl font-Ovo"
      >
        Get in Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        I'd love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </motion.p>

      <motion.form
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="grid md:grid-cols-2 gap-6 mt-10 mb-8"
        >
          <motion.input
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90 "
          />
          <motion.input
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white  dark:bg-darkHover/30 dark:border-white/90 "
          />
        </motion.div>
        <motion.textarea
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          rows="6"
          name="message"
          placeholder="Enter Your Message"
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6  dark:bg-darkHover/30 dark:border-white/90 "
        ></motion.textarea>

        <motion.button
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 }}
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
          disabled={loading}
        >
          {loading ? (
            <CircularProgress size={20} color="inherit" />
          ) : (
            "Submit Now"
          )}
          {!loading && (
            <Image src={assets.right_arrow_white} alt="" className="w-4" />
          )}
        </motion.button>
      </motion.form>

      {/* Muvaffaqiyatli xabar Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        TransitionComponent={Slide} // Animatsiya
        anchorOrigin={{ vertical: "top", horizontal: "right" }} // O'ng yuqorida chiqadi
      >
        <SnackbarContent
          message="✅ Xabar muvaffaqiyatli yuborildi!"
          sx={{
            backgroundColor: "#4caf50",
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
            borderRadius: "8px",
          }}
        />
      </Snackbar>
    </motion.div>
  );
};

export default Contact;
