import { motion } from "motion/react";
import { p } from "motion/react-client";

const languagesAndFrameworks = [
    "C",
    "Python",
    "JavaScript",
    "PHP",
    "React",
    "Express.js",
    "Laravel",
    "Symfony",
    "SQL"
  ];
  
  const tools = [
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Tailwind CSS",
    "Bootstrap",
    "Git",
  ];

  const otherSkills = [
    "audio/video editing",
    "Scriptwriting and production for TV, radio, and digital platforms",
    "Social media content creation and management",
    "Translation and subtitling of video/live broadcasts",
    "Article writing and editing"


  ]
  
const Skills = (props) => {
    return (
        <div className="rounded-lg bg-mainbg w-full md:max-w-xl h-full flex flex-col md:h-140">

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


        <div className="overflow-y-auto flex flex-col items-center p-3">
          {/* Languages & Frameworks */}
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold text-primary mb-3">Languages & Frameworks & Libraries</h3>
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
        I'm leaning more towards web development, building websites and web applications using <span className="text-primary font-semibold">React</span> and <span className="text-primary font-semibold">PHP</span>. 
        You can find some of my projects on my <a href="https://github.com/exeeny" target="_blank" rel="noopener noreferrer" className="text-accent underline hover:text-primary transition">GitHub</a>!
      </p>
    </div>

    {/* other info */}
    <div className="mt-8 text-center max-w-md">
    <h3 className="text-2xl font-bold text-primary mb-3">What else i can do?</h3>
    <ul className="text-lg text-text">
       {otherSkills.map((item) => (
        <li>☆ {item}</li>
       )

      )}
      </ul>
    </div>



          </div>

        </div>

      
    )
}

export default Skills;