import { Github, Heart, Mail } from "lucide-react";
import { motion } from "motion/react";


const Links = (props) => {
    return (

        <div className="rounded-lg bg-mainbg w-full md:max-w-xl shadow-lg h-full md:h-120 flex flex-col">

            {/* Modal Header */}
            <div {...props.listeners} className="cursor-default md:cursor-move flex justify-between items-center rounded-lg bg-primary p-4 text-white">
                <h2 className="text-2xl font-bold">Contacts</h2>
                <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
                    onPointerDown={(e) => e.stopPropagation()}
                    onClick={(e) => 
                        props.setIsOpenLinks(!props.isOpenLinks)
                        
                    
                }
                    className="text-2xl cursor-pointer"
                >
                    ×
                </motion.button>
            </div>

            <div className="p-6 flex flex-1 flex-col gap-4 items-center justify-center text-text ">

                <div className="text-xl md:text-base mb-4 text-center">
                    You can contact me via my work <span className="text-secondary">email</span>, and feel free to check out some of my projects on <span className="text-secondary">GitHub</span>.

                </div>

                <Heart className="text-secondary" />

                <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold tracking-tight text-accent dark:text-white flex items-center gap-2">
                        <Mail />
                        <a href="mailto:xenicravcenco@gmail.com" className="hover:underline">xenicravcenco@gmail.com</a>
                    </h1>

                </div>


                <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold tracking-tight text-accent dark:text-white flex items-center gap-2">
                        <Github />
                        <a href="https://github.com/exeeny" target="_blank" rel="noopener noreferrer" className="hover:underline">
                            github.com/exeeny
                        </a>
                    </h1>


                </div>
            </div>
        </div>


    )
}

export default Links;