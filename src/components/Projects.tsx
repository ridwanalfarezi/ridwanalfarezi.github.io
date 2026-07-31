"use client";
import { projects } from "@/data";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";
import { PinContainer } from "./ui/3d-pin";

const Projects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        Selected work with <span className="text-blue">proof behind it</span>
      </h1>
      <p className="mx-auto mt-5 max-w-2xl text-center text-lg leading-8 text-white-100">
        Explore live products, the decisions behind them, and the workflows I
        was responsible for delivering.
      </p>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-16 gap-y-8 mt-10">
        {projects.map(({ id, slug, title, des, img, link }) => (
          <div
            key={id}
            className="sm:h-[39rem] lg:min-h-[36rem] h-[36rem] flex items-center justify-center sm:w-[570px] lg:w-[40vw] w-[80vw]"
          >
            <PinContainer title={link} href={link} id={id}>
              <div className="relative flex items-center justify-center sm:w-[570px] lg:w-[40vw] w-[80vw] overflow-hidden lg:h-[30vh] mb-10 sm:h-[40vh] h-[30vh]">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="bg" />
                </div>
                <img src={img} alt={title} className="z-10 absolute bottom-0" />
              </div>
              <h1 className="font-bold lg:text-3xl md:text-2xl text-xl line-clamp-2">
                {title}
              </h1>
              <p className="mt-3 line-clamp-3 text-lg leading-relaxed">
                {des}
              </p>
              <div className="flex items-center justify-end mt-7 mb-3">
                <div className="flex items-center gap-4">
                  {slug && (
                    <Link
                      href={`/projects/${slug}`}
                      onClick={(event) => event.stopPropagation()}
                      className="text-base font-semibold text-cyan-300 underline-offset-4 hover:underline"
                    >
                      Case study
                    </Link>
                  )}
                  <div className="flex justify-center items-center gap-3">
                    <p className="flex lg:text-2xl text-lg text-blue-100">
                      View Project
                    </p>
                    <FaLocationArrow color="#06b6d4" />
                  </div>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
