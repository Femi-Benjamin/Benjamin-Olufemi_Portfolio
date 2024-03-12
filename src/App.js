import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Spline from "@splinetool/react-spline";
import 'react-vertical-timeline-component/style.min.css';
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from "react";
import ben from "./images/ben.jpg";
import {
  IoMenu,
  IoLogoGithub,
  IoLogoLinkedin,
  IoCallOutline,
  IoMailOutline
} from "react-icons/io5"
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import {
  Experience,
  Projects,
  SocialLinks,
  SkillData
} from "./data";



function App() {
  const [isActive, setIsActive] = useState(false);


  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dmxq6sb', 'template_m7vyxnm', form.current, {
      publicKey: 'TNqEZSn8KabiXckMt',
    })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


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
                About_Me
              </a>
              <a
                href="#skills"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
              >
                Tech_Stack
              </a>
              <a
                href="#projects"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
              >
                My_Projects
              </a>
              <a
                href="#contacts"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
              >
                Contact_Me
              </a>
              <motion.a
                whileTap={{ scale: 0.8 }}
                href="https://drive.google.com/file/d/1ZG_0SUKMdOg2J59cIQZg6NsvcKTTSGu_/view?usp=sharing"
                target="_blank" rel="noopener noreferrer"
                className="ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 
                rounded-xl hover:border-gray-100 duration-100 ease-in-out"
              >
                Download
              </motion.a>
            </div>

            {/* Action Menu */}
            <motion.div
              whileTap={{ scale: 0.5 }}
              className="block md:hidden  ml-auto cursor-pointer"
              onClick={() => setIsActive(!isActive)}
            >
              <IoMenu className="text-2xl text-textBase " />
            </motion.div>

            {/* Mobile Navigation */}
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
                  About_Me
                </a>
                <a
                  href="#skills"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                >
                  Tech_Stack
                </a>
                <a
                  href="#projects"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  My_Projects
                </a>
                <a
                  href="#contacts"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  Contact_Me
                </a>
                <motion.a
                  whileTap={{ scale: 0.8 }}
                  href="https://drive.google.com/file/d/1ZG_0SUKMdOg2J59cIQZg6NsvcKTTSGu_/view?usp=sharing"
                  target="_blank" rel="noopener noreferrer"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase 
                  px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  Download
                </motion.a>
              </motion.div>
            )}
          </div>
        </nav>

        <div className="relative md:top-[106px] top-24" id="home">
          <Spline scene="https://prod.spline.design/Z31F8KCKhr798Pgt/scene.splinecode" />
          {/* <Spline scene="https://prod.spline.design/dU1g6MsQncpoBhAh/scene.splinecode" /> */}
          <div className="absolute bottom-10 w-full flex justify-center items-center">
            <div className="xl:block hidden">
              <div className="shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl">
                <p className="text-white">Press and drag to orbit</p>
              </div>
            </div>
          </div>
        </div>


        {/* MAIN SECTION */}
        <main className="w-[80%] md:mt-10">
          {/* About Section */}
          <section
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:my-28 my-20 md:pt-0 pt-20"
            id="about"
          >
            {/* image box */}
            <div className="w-full h-420 flex items-center justify-center">
              <div
                className="w-275 h-340 relative bg-zinc-600 rounded-md">
                <img
                  src={ben}
                  alt=""
                  className="w-full h-full absolute -right-4 top-4 object-cover rounded-lg drop-shadow-2xl"
                />
              </div>
            </div>


            {/* CONTENT BOX */}
            <div className="w-full h-420 flex items-center justify-center">
              <div>
                <h1 className="text-3xl text-textBase md:text-justify text-center md:py-5 md:pt-0 pt-20 pb-3 font-bold">
                  Hello, 👋🏽
                </h1>
                <h1 className="text-3xl text-textBase md:text-justify text-center md:pb-5 pb-2 font-extrabold">
                  I am <span className="text-zinc-300">Benjamin</span>
                </h1>
                <p className="text-lg text-textBase text-justify">
                  A frontend developer and web designer,
                  I love converting designs to code.
                  I specialize in creating interactive and user-friendly web applications using modern technologies like React.js, Next.js, JavaScript, and CSS (Tailwind CSS).
                  <br />
                  Throughout this journey, I have gained expertise in designing and developing visually appealing and functional websites.
                  With a keen eye for design and a knack for problem-solving, I'm dedicated to crafting websites that not only look good
                  but also work seamlessly to provide the best user experience.
                </p>
                <div className="items-center md:flex md:justify-center">
                  <motion.a
                    href="https://drive.google.com/file/d/1ZG_0SUKMdOg2J59cIQZg6NsvcKTTSGu_/view?usp=sharing"
                    target="_blank" rel="noopener noreferrer"
                    whileTap={{ scale: 0.8 }}
                    class="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 
                    focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80">
                    <span class="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0
                    text-center">
                      Download
                    </span>
                  </motion.a>
                </div>
              </div>
            </div>
          </section>


          {/* TIMELINE SECTION */} {/* mapped */}
          <section className="w-full flex items-center justify-center md:pt-0 pt-14">
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


          {/* SKILLS SECTION */}
          <section className="my-24" id='skills'>
            <div className="min-w-6xl mx-auto px-4">
              <h2 className="mb-4 text-center md:text-3xl text-2xl text-textBase font-medium uppercase">My Tech Stack</h2>
              <p className='mb-6 text-textBase text-center md:text-xl text-lg'>Here are some technologies I've used!</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {SkillData.map((skill, index) => (
                  <div key={index} className="flex items-center justify-center hover:bg-gray-900  p-4 border border-gray-900
                  hover:border-gray-800 rounded-lg">
                    <img
                      src={skill.imgSrc}
                      alt={skill.name}
                      className="h-12 w-12"
                    />
                    <span className="ml-2 text-lg text-gray-200">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>


          {/* PROJECT SECTION */} {/* mapped */}
          <h1 className="text-center md:text-3xl text-2xl text-textBase font-medium uppercase mt-24"
            id="projects">Explore My Projects</h1>
          <section className="flex flex-wrap items-center justify-evenly md:my-16 md:pt-0 pt-10 gap-4"
          >
            {Projects && Projects.map(n => (
              <motion.div
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
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


          {/* HIRE ME SECTION */}
          <section className="grid md:grid-cols-2 my-12 md:my-12 py-20 gap-4 relative" id="contacts">
            <div className="z10">
              <h5 className="font-bold mb-4 md:text-3xl text-2xl text-textBase fontmedium uppercase">
                Connect with Me
              </h5>
              <p className="text[#ADB7BE] text-gray-300 mb-4 max-w-md md:text-xl text-lg">
                {/* */}
                Are you in search for a user interface (UI) designer who excels in both crafting engaging
                and interactive user interfaces and also translates complex technical terms into clear,
                understandable language? <br />
                Feel free to reach out if you have any questions or want to collaborate with me!
                my inbox is always open.
                Look no further! I'm here and ready to assist you.
              </p>

              <a href="https://github.com/Femi-Benjamin">
                <img src={IoLogoGithub} alt="" />
              </a>


              <a href="https://www.linkedin.com/in/benjamin-olufemi-7524ab226/">
                <img src={IoLogoLinkedin} alt="" />
              </a>

              <div className="text-[#ADB7BE] max-w-md text-xl mt-10 md:mb-0 mb-6">
                <div className="flex gap-3 mb-7 items-center">
                  <IoCallOutline />
                  <h1>08160989601, 07054405537</h1>
                </div>


                <a href="mailto:benjaminolufemi16@gmail.com" className="flex gap-3 items-center">
                  <IoMailOutline />
                  <h1>benjaminolufemi16@gmail.com</h1>
                </a>
              </div>
            </div>

            <div>
              <form
                ref={form} onSubmit={sendEmail}
                className="flex flex-col gap-4 ">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-md text-white pb-3">
                    Your Name
                  </label>
                  <input
                    // name="name"
                    type="text"
                    name="user_name"
                    id="name"
                    required
                    placeholder="Enter your name"
                    className="md:bg-[#18191E] bg-transparent md:border-none border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg w-full p-4 outline-none "
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="text-white block mb-2 text-md font-medium"
                  >
                    Your email
                  </label>
                  <input
                    // name="email"
                    type="email"
                    name="user_email"
                    id="email"
                    required
                    className="md:bg-[#18191E] bg-transparent md:border-none border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg w-full p-4 outline-none"
                    placeholder="jacob@google.com"
                  />
                </div>

                <div className="mb-6 z-10">
                  <label
                    htmlFor="message"
                    className="text-white block text-md mb-2 font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    // name="message"
                    name="message"
                    id="message"
                    required="required"
                    className="md:bg-[#18191E] bg-transparent md:border-none border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3 outline-none"
                    placeholder="Let's talk about..."
                  />
                </div>

                <div className="items-center md:flex md:justify-center">
                  <button
                    type="submit" value="Send"
                    whileTap={{ scale: 0.8 }}
                    class="w-full md:w-auto relative md:mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80">
                    <span class="w-full md:w-auto relative px-10 py-3.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Send Message
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </section>

          {/* CONTACT ME SECTION */} {/* mapped */}
          <section
            className="flex flex-col items-center justify-center w-full bg-navBar pt-10 md:px-0 px-3 rounded-xl">
            <p className="md:text-2xl text-xl text-gray-400 capitalize md:text-left text-center">follow me on social media for more content</p>
            <div className="flex items-center justify-center w-full my-10 flex-wrap gap-4">
              {
                SocialLinks && SocialLinks.map(n => (
                  <motion.a
                    whileTap={{ scale: 0.8 }}
                    key={n.id}
                    className="w-full md:w-auto px-3 md:px-10 py-5 border border-gray-800 rounded-2xl hover:border-zinc-600 
                    duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3 hover:bg-navBar" href={n.link}
                    target="_blank" rel="noopener noreferrer">
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
