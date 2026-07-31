"use client";
import { workExperience } from "@/data";
import { motion } from "framer-motion";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        Work that <span className="text-blue">shipped</span>
      </h1>
      <p className="mx-auto mt-5 max-w-2xl text-center text-lg leading-8 text-white-100">
        A concise record of the products, systems, and outcomes I contributed to
        across employment, freelance work, and teaching.
      </p>
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
                  <h1 className="text-2xl text-start md:text-3xl font-bold">
                    {exp.title}
                  </h1>
                  <p className="text-start text-lg font-semibold mt-3 text-cyan-100">
                    {exp.company} / {exp.yearstart} - {exp.yearend}
                  </p>
                  <p className="text-start text-lg text-white-100 mt-3 leading-8">
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
