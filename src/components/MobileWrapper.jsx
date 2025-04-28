import React from 'react'
import { motion } from "motion/react";

export const MobileWrapper = ({children}) => {
  return (
    <motion.div initial={{ opacity: 0, y: "100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: "100%" }}
                    className="fixed inset-0 w-full h-full  z-50 p-4 overflow-auto">
                        {children}
    </motion.div>
  )
}
