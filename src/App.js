import Spline from "@splinetool/react-spline";
import 'react-vertical-timeline-component/style.min.css';
import { useState } from "react";
import ben from "./images/ben.jpg"
import {
  IoMenu,
  IoLogoGithub
} from "react-icons/io5"
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import {
  Experience,
  Projects,
  SocialLinks
} from "./data";
import { AnimatePresence, motion } from 'framer-motion'

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <AnimatePresence initial={false}>
      <div className="flex w-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20">
        {/* Navigation */}
        <nav className="w-full px-6 z-50  fixed inset-x-0 top-5 flex justify-center items-center">
          <div className="w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center">
            <p className="text-lg text-slate-200 font-medium">
              Benjamin Olufemi
            </p>

            <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
              <a
                href="#home"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
              >
                Projects
              </a>
              <a
                href="#contacts"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
              >
                Contact
              </a>
              <motion.a
                whileTap={{ scale: 0.8 }}
                href="/"
                className="ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out"
              >
                Download
              </motion.a>
            </div>


            <motion.div
              whileTap={{ scale: 0.5 }}
              className="block md:hidden  ml-auto cursor-pointer"
              onClick={() => setIsActive(!isActive)}
            >
              <IoMenu className="text-2xl text-textBase " />
            </motion.div>


            {isActive && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1.1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ delay: '0.1', type: 'spring' }}
                className="p-4 w-275 bg-navBar rounded-lg fixed top-28 right-16 flex flex-col items-center justify-evenly gap-6 md:hidden">
                <a
                  href="#home"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  Projects
                </a>
                <a
                  href="#contacts"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  Contact
                </a>
                <motion.a
                  whileTap={{ scale: 0.8 }}
                  href="/"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  Download
                </motion.a>
              </motion.div>
            )}
          </div>
        </nav>

        <div className="relative top-24" id="home">
          <Spline scene="https://prod.spline.design/dU1g6MsQncpoBhAh/scene.splinecode" />
          {/* <Spline scene="https://prod.spline.design/OpUtbD7UMt7HAaDW/scene.splinecode" /> */}
          <div className="absolute bottom-10 w-full flex justify-center items-center">
            <div className="shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl ">
              <p className="text-white">Press and drag to orbit</p>
            </div>
          </div>
        </div>

        {/* MAIN SECTION */}
        <main className="w-[80%] mt-10">
          {/* About Section */}
          <section
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24"
            id="about"
          >
            {/* image box */}
            <div className="w-full h-420 flex items-center justify-center">
              <div className="w-275 h-340 relative bg-zinc-600 rounded-md">
                <img
                  src={ben}
                  alt=""
                  className="w-full h-full absolute -right-4 top-4 object-cover rounded-lg drop-shadow-2xl"
                />
              </div>
            </div>

            {/* content box */}
            <div className="w-full h-420 flex items-center justify-center">
              <div>
                <p className="text-lg text-textBase text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos illo reiciendis, eaque enim vel molestias nulla voluptatem incidunt accusantium expedita et deserunt minus dicta alias, fuga nisi repellat, quia doloribus.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius odio, beatae incidunt neque doloribus reiciendis eum quos eligendi, explicabo adipisci nobis provident corrupti officia corporis! Quis, veritatis fugiat. Eligendi, eius!
                </p>

                <div className="items-center md:flex md:justify-center">
                  <motion.button
                    whileTap={{ scale: 0.8 }}
                    class="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80">
                    <span class="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Download
                    </span>
                  </motion.button>
                </div>
              </div>
            </div>
          </section>

          {/* Timeline */} {/* mapped */}
          <section className="w-full flex items-center justify-center">
            <VerticalTimeline>
              {
                Experience && Experience.map(n => (
                  <VerticalTimelineElement
                    key={n.id}
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(21, 24, 31)', color: '#888' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(21, 24, 31)' }}
                    date={n.date}
                    iconStyle={{ background: 'rgb(21, 24, 31)', color: '#888' }}
                    icon={n.iconsSrc}
                  >
                    <h3 className="vertical-timeline-element-title">
                      {n.title}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {n.location}
                    </h4>
                    <p>
                      {n.description}
                    </p>
                  </VerticalTimelineElement>
                ))
              }
            </VerticalTimeline>
          </section>

          {/* Projects Section */} {/* mapped */}
          <section className="flex flex-wrap items-center justify-evenly my-24 gap-4"
            id="projects">
            {Projects && Projects.map(n => (
              <motion.div
                whileHover={{ scale: 0.9 }}
                key={n.id}
                className="border border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] xl:max-w-[475px] hover:border-zinc-600 duration-100 ease-in-out">
                <p className="text-lg text-textBase font-medium uppercase">
                  {/* {n.name} */}
                  {n.name.length > 24 ? `${n.name.slice(0, 24)}...` : n.name}
                  <img
                    className="w-full h-full object-cover rounded-md my-4"
                    src={n.imageSrc} alt="" />
                </p>
                <div className="flex flex-1 items-center justify-between">
                  <p className="text-lg text-gray-300 textcenter">Technologies
                    <span className="block  text-sm text-gray-500">{n.techs}</span>
                  </p>

                  <a href={n.github}>
                    <motion.div
                      whileTap={{ scale: 0.8 }}>
                      <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />
                    </motion.div>
                  </a>
                </div>
              </motion.div>
            ))}
          </section>

          {/* Contact */} {/* mapped */}
          <section
            id="contacts"
            className="flex flex-col items-center justify-center w-full my-24">
            <p className="text-2xl text-gray-400 capitalize">follow me on</p>
            <div className="flex items-center justify-center w-full my-10 flex-wrap gap-4">
              {
                SocialLinks && SocialLinks.map(n => (
                  <motion.a
                    whileTap={{ scale: 0.8 }}
                    key={n.id}
                    className="w-full md:w-auto px-3 md:px-10 py-5 border border-zinc-800 rounded-2xl hover:border-zinc-600 
                  duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3 hover:bg-navBar" href="/">
                    {n.iconSrc}
                    <p className="text-lg text-textBase">{n.name}</p>
                  </motion.a>
                ))
              }
            </div>
          </section>

        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
