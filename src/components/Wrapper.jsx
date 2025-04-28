import React from 'react'
import { motion } from "motion/react";

export const Wrapper = ({ children }) => {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.5 }}
    transition={{
      duration: 0.8,
      ease: [0, 0.71, 0.2, 1.01],
    }}>
                        {children}
    </motion.div>
  )
}
