import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const AnimatedFrame = ({ children }) => {
  const colours = ["#ff0000", "#ffde59", "#1800ad", "#ff0000"];
  const borderDiv = useRef(null)

  useEffect(() => {
        let i = 0;
        setInterval(() => {
          borderDiv.current.style.borderImageSource = `linear-gradient(to right, ${colours[i % 4]}, ${colours[(i + 1) % 4]}, ${colours[(i + 2) % 4]}, ${colours[(i + 3) % 4]})`;
          i++;
        }, 15000);
  });

  return (
    <div className="relative max-w-80 min-h-50 rounded-2xl overflow-hidden h-full p-1">
      <motion.div
        ref={borderDiv}
        className="absolute inset-0 rounded-lg"
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        style={{
          border: "2px dotted",
          borderImageSlice: 1,    
          borderImageSource: `linear-gradient(to right, #ff0000, #ffde59, #1800ad, #ff0000)`,
        }}
      />
      {children}
    </div>
  );
};

export default AnimatedFrame;
