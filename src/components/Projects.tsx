import { projects } from "@/data";
import { FaLocationArrow } from "react-icons/fa";
import { PinContainer } from "./ui/3d-pin";

const Projects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        Some of <span className="text-blue">selection projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-16 gap-y-8 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="sm:h-[35rem] lg:min-h-[32.5rem] h-[32.5rem] flex items-center justify-center sm:w-[570px] lg:w-[40vw] w-[80vw]"
          >
            <PinContainer title={link} href={link} id={id}>
              <div className="relative flex items-center justify-center sm:w-[570px] lg:w-[40vw] w-[80vw] overflow-hidden lg:h-[30vh] mb-10 sm:h-[40vh] h-[30vh]">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="bg" />
                </div>
                <img src={img} alt={title} className="z-10 absolute bottom-0" />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX-${5 * index * 2}px` }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center gap-3">
                  <p className="flex lg:text-xl md:text-xs text-sm text-blue-100">
                    View Project
                  </p>
                  <FaLocationArrow color="#06b6d4" />
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
