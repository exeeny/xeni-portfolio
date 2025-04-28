import { motion } from "motion/react";

const languagesAndFrameworks = [
    "Python",
    "C",
    "JavaScript",
    "PHP",
    "React",
    "Express.js",
    "Laravel",
  ];
  
  const tools = [
    "Tailwind CSS",
    "Bootstrap",
    "SQL",
    "MongoDB",
    "Git",
  ];
  
const Skills = (props) => {
    return (
        <div className="rounded-lg bg-mainbg w-full md:max-w-xl h-full flex flex-col">

          {/* Modal Header */}
          <div {...props.listeners} className="cursor-default md:cursor-move flex justify-between items-center rounded-lg bg-secondary p-4 text-white">
            <h2 className="text-2xl font-bold " >Skills</h2>
            <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
              onPointerDown={(e) => e.stopPropagation()}
              onClick={() => props.setIsOpenSkills(!props.isOpenSkills)}
              className="text-2xl cursor-pointer"
            >
              ×
            </motion.button>
          </div>


        <div className="p-6 flex-1 flex flex-col items-center justify-center text-text">
          {/* Languages & Frameworks */}
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold text-primary mb-3">Languages & Frameworks</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {languagesAndFrameworks.map((item) => (
                <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9, rotate: 3 }}
                  key={item}
                  className="px-3 py-1 text-lg bg-background border-2 border-accent rounded-md shadow-sm cursor-pointer"
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold text-primary m-3">Tools</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((item) => (
                <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9, rotate: 3 }}
                  key={item}
                  className="px-3 py-1 text-lg bg-background border-2 border-accent rounded-md shadow-sm cursor-pointer
                  "
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>

          {/* About Me */}
    <div className="mt-8 text-center max-w-md">
      <h3 className="text-2xl font-bold text-primary mb-3">Important!</h3>
      <p className="text-lg text-text">
        I am more of a web developer specializing in building websites and web applications using <span className="text-primary font-semibold">React</span> and <span className="text-primary font-semibold">PHP</span>. 
        You can find some of my projects on my <a href="https://github.com/exeeny" target="_blank" rel="noopener noreferrer" className="text-accent underline hover:text-primary transition">GitHub</a>!
      </p>
    </div>



          </div>

        </div>

      
    )
}

export default Skills;