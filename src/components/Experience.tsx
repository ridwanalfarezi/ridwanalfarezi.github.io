"use client";
import { workExperience } from "@/data";
import { motion } from "framer-motion";
import { Button } from "./ui/MovingBorders";
const Experience = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        My <span className="text-blue">work experience</span>
      </h1>
      <div className="w-full mt-12 grid grid-cols-1 gap-10">
        {workExperience.map((exp) => (
          <motion.div
            key={exp.id}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Button
              borderRadius="1.75rem"
              duration={Math.floor(Math.random() * 10000 + 10000)}
              className="flex-1 text-white border-neutral-200 dark:border-slate-800"
            >
              <div className="flex flex-col items-center p-3 py-6 md:p-5 lg:p-10 gap-5">
                <div className="lg:ms-5">
                  <h1 className="text-xl text-start md:text-2xl font-bold">
                    {exp.title}
                  </h1>
                  <p className="text-start text-md font-semibold mt-3">
                    {exp.company} • {exp.yearstart} - {exp.yearend}
                  </p>
                  <p className="text-start text-white-100 mt-3 font-semibold leading-loose">
                    {exp.desc}
                  </p>
                </div>
              </div>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
