import { BriefcaseBusiness, Globe, University } from "lucide-react";
import { motion } from "motion/react";

const About = (props) => {
  return (

    <div className="rounded-lg flex flex-col bg-mainbg w-full md:max-w-2xl shadow-lg h-full md:h-120">


      {/* Header */}
      <div {...props.listeners} className="cursor-default md:cursor-move sticky top-0 flex justify-between items-center text-sm font-medium bg-accent p-4 rounded-lg text-white z-10">
        <h2 className="text-xl sm:text-2xl font-bold">about</h2>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onPointerDown={(e) => e.stopPropagation()}
          onClick={() => props.setIsopenAbout(!props.isOpenAbout)}
          className="text-2xl cursor-pointer"
        >
          ×
        </motion.button>
      </div>

      <div className="overflow-y-auto p-4 sm:p-6">
        {/* Education Section */}
        <section className="text-text">
          <h3 className="text-2xl font-bold tracking-tight text-secondary flex items-center gap-2">
            <University />
            Education
          </h3>
          <div className="flex flex-col sm:flex-row sm:justify-between mt-2 text-lg font-semibold">
            <div>
              Ivane Javakhishvili Tbilisi State University
              <br />
              Tbilisi, Georgia
            </div>
            <div>2020 – 2024</div>
          </div>
          <p className="mt-2 text-base">
            Bachelor of Applied Science (BASc), Journalism, Media Studies and Communication
          </p>
        </section>

        {/* Language Section */}
        <section className="mt-6">
          <h3 className="text-2xl font-bold tracking-tight text-secondary flex items-center gap-2">
            <Globe />
            Language Proficiency
          </h3>
          <ul className="mt-2 space-y-1 list-disc list-inside text-text text-base">
            <li>Russian — Native</li>
            <li>English — B2</li>
            <li>Georgian — A2+</li>
          </ul>
        </section>

        {/* Work Experience Section */}
        <section className="mt-6 text-text">
          <h3 className="text-2xl font-bold tracking-tight text-secondary flex items-center gap-2">
            <BriefcaseBusiness />
            Work Experience
          </h3>

          <div className="flex flex-col sm:flex-row sm:justify-between mt-2 font-semibold text-lg">
            <h4>Translive Logistics</h4>
            <span className="text-lg">April 2024 – July 2024</span>
          </div>

          <p className="mt-1 text-primary font-medium">
            Position: Logistics Manager
          </p>

          {/* <ul className="mt-2 space-y-1 list-disc list-inside text-text text-base ">
            <li>Managed end-to-end supply chain operations including transportation, inventory, and warehouse coordination.</li>
            <li>Added and onboarded new transportation companies and drivers into the customer database.</li>
          </ul> */}

          <div className="flex flex-col sm:flex-row sm:justify-between mt-2 font-semibold text-lg">
            <h4>Itransition</h4>
            <span className="text-lg">May 2025 – July 2025</span>
          </div>

          <p className="mt-1 text-primary font-medium">
            Commercial Software Development Intern (PHP)
          </p>
        </section>

        <section className="mt-6">

          <h3 className="text-2xl font-bold tracking-tight text-secondary flex items-center gap-2">
            <Globe className="text-current" />
            Other Experiences
          </h3>
          <ul className="mt-2 space-y-1 list-disc list-inside text-text text-base">
            <li>Content creator for social media</li>
            <li>Translator and subtitles-maker for videos/live broadcasts using professional soft (Eng-Ru)</li>

          </ul>


        </section>
      </div>






    </div>


  )
}

export default About;