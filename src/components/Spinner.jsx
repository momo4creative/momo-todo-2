import { motion } from "framer-motion";
const Spinner = () => {
  return (
    <motion.div
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
    >
      <motion.svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        animate={{ strokeDashoffset: [560, 280, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="50" cy="50" r="45" strokeWidth={10} strokeDasharray={280} />
      </motion.svg>
    </motion.div>
  );
};

export default Spinner;

// import { motion } from "framer-motion";
// const Spinner = () => {
//   return (
//     <div className="">
//       <motion.div
//         className="w-10 h-10"
//         animate={{ rotate: [0, 360] }}
//         transition={{ duration: 4, repeat: Infinity, easings: "linear" }}
//       >
//         <motion.svg
//           xmlns="http://www.w3.org/2000/svg"
//           stroke="currentColor"
//           fill="none"
//           viewBox="0 0 38 38"
//           animate={{ strokeDashoffset: [202, 101, 0] }}
//           transition={{ duration: 2, repeat: Infinity, easings: "linear" }}
//         >
//           <circle
//             cx="19"
//             cy="19"
//             r="16"
//             strokeWidth={4}
//             strokeDasharray={101}
//           />
//         </motion.svg>
//       </motion.div>
//     </div>
//   );
// };

// export default Spinner;
