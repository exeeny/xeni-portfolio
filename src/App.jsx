import { useState } from 'react'
import './App.css'
import About from './components/About';
import Skills from './components/Skills';
import Links from './components/Links';
import { Info, Lightbulb, Link } from 'lucide-react'
import { DndContext } from '@dnd-kit/core';
import { restrictToWindowEdges } from '@dnd-kit/modifiers';
import Draggable from './components/Draggable';
import { AnimatePresence, motion } from 'motion/react';
import useMobile from './hooks/useMobile';
import { MobileWrapper } from './components/MobileWrapper';
import { Wrapper } from './components/Wrapper';
import { Background } from './components/Background';


function App() {

  const [isOpenAbout, setIsopenAbout] = useState(false);
  const [isOpenSkills, setIsOpenSkills] = useState(false);
  const [isOpenLinks, setIsOpenLinks] = useState(false)

  const [coordinates, setCoordinates] = useState({
    about: { x: 100, y: 50 },
    skills: { x: 150, y: 100 },
    links: { x: 200, y: 150 },
  });
  const [openOrder, setOpenOrder] = useState([])
  const isMobile = useMobile()


  return ( <>
    <Background />


    <DndContext
      onDragEnd={({ delta, active }) => {
        setCoordinates(prev => {
          const id = active.id;
          setOpenOrder((prev) => [...prev.filter(id => id !== active.id), active.id]);
          return {
            ...prev,
            [id]: {
              x: prev[id].x + delta.x,
              y: prev[id].y + delta.y,
            },
          };
        });
      }}
      modifiers={[restrictToWindowEdges]}>
        



      <div className="flex flex-col gap-2 min-h-screen justify-center items-center ">

        <div className="w-full h-screen md:max-w-3xl md:mx-auto md:rounded-lg md:shadow-md md:h-auto bg-mainbg flex flex-col ">
          {/* heading */}
          <div className="flex flex-start font-medium text-center rounded-lg shadow-sm shadow-accent">
            <div className="p-4 text-text text-2xl font-normal">home</div>
          </div>

          {/* info */}
          <div className='flex flex-1 flex-col items-center justify-center'>

            <div className="flex justify-between flex-col items-center md:flex-row p-4">
              <img className="h-auto max-w-xs m-4" src="https://i.pinimg.com/originals/fd/30/84/fd30846b19ff684f079d23b217a481e8.gif" alt="" />
              <div className="m-2 flex flex-col items-center w-sm">
                <h1 className="mb-2 text-5xl font-bold tracking-tight text-primary">hi, i'm Xeni!</h1>
                <p className="font-normal text-text text-2xl p-2">Beginner developer passionate about learning and building cool things╰(▔∀▔)╯</p>
              </div>
            </div>

            {/* buttons */}
            <div className="links flex justify-around m-2 w-full">

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scpale: 0.95 }} onClick={() => {
                  setIsopenAbout(!isOpenAbout);
                  setOpenOrder((prev) => [...prev.filter(id => id !== 'about'), 'about']);
                }

                } className="cursor-pointer inline-flex gap-1 text-lg font-bold text-text p-2 bg-secondary border-0 rounded-sm "><Info />about</motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }} onClick={() => {
                  setIsOpenSkills(!isOpenSkills);
                  setOpenOrder((prev) => [...prev.filter(id => id !== 'skills'), 'skills']);
                }


                } className="cursor-pointer inline-flex items-center gap-1 text-lg font-bold text-text p-2 bg-secondary border-0 rounded-sm "><Lightbulb />skills</motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }} onClick={() => {
                  setIsOpenLinks(!isOpenLinks);
                  setOpenOrder((prev) => [...prev.filter(id => id !== 'links'), 'links']);
                }

                } className="cursor-pointer items-center inline-flex gap-1 text-lg font-bold text-text bg-secondary border-0 rounded-sm p-2"><Link />contacts</motion.button>

            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpenAbout && (
            isMobile ? (
              <MobileWrapper>
                <About setIsopenAbout={setIsopenAbout} isOpenAbout={isOpenAbout} />
              </MobileWrapper>
            ) : (
              <Draggable top={coordinates.about.y} left={coordinates.about.x} zIndex={openOrder.indexOf('about') + 1} id="about">
                {(listeners) => (
                  <Wrapper>
                    <About setIsopenAbout={setIsopenAbout} isOpenAbout={isOpenAbout} listeners={listeners} />
                  </Wrapper>
                )}
              </Draggable>
            )
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isOpenSkills && (
            isMobile ? <MobileWrapper>
              <Skills setIsOpenSkills={setIsOpenSkills} isOpenSkills={isOpenSkills} />
            </MobileWrapper> :
              <Draggable top={coordinates.skills.y} left={coordinates.skills.x}
                zIndex={openOrder.indexOf('skills') + 1} id='skills'>
                {(listeners) => (
                  <Wrapper>
                    <Skills setIsOpenSkills={setIsOpenSkills} isOpenSkills={isOpenSkills} listeners={listeners} />
                  </Wrapper>
                )}

              </Draggable>
          )

          }
        </AnimatePresence>

        <AnimatePresence>
          {isOpenLinks && (
            isMobile ? <MobileWrapper>
              <Links setIsOpenLinks={setIsOpenLinks} isOpenLinks={isOpenLinks} />
            </MobileWrapper> :
              <Draggable top={coordinates.links.y} left={coordinates.links.x}
                zIndex={openOrder.indexOf('links') + 1} id='links'>
                {(listeners) => (
                  <Wrapper>
                    <Links setIsOpenLinks={setIsOpenLinks} isOpenLinks={isOpenLinks} listeners={listeners} />
                  </Wrapper>
                )}

              </Draggable>
          )
          }
        </AnimatePresence>

      </div>
    </DndContext>
    </>

  )
}

export default App
