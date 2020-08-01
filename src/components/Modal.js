import React from "react";
import { motion } from "framer-motion";
function Modal({ selectedImg, setSelectedImg }) {
  return (
    <motion.div
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={(e) => {
        if (e.target.classList.contains("backdrop")) {
          setSelectedImg(null);
        }
      }}
    >
      <motion.img
        src={selectedImg}
        alt="enlarge pic"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
}

export default Modal;
