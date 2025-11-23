import { Link as LinkIcon } from "@geist-ui/icons";
import Link from "next/link";
import { projects } from "@/constants/projects";

export default function Projects() {
  return (
    <div className="main-container flex flex-1 items-center flex-col h-full w-full p-6 bg-background">
      <div className="w-full sm:w-[80%]">
        <h1 className="text-xl sm:text-3xl font-semibold mt-10">Projects</h1>
        <p className="font-light my-10 opacity-75">
          Here's a selection of the projects I've worked on over the years. Some
          of them are still online, while others are no longer available. I've
          included links to the live projects where possible, as well as a brief
          description of each project.
        </p>
        <div>
          {projects.map((project) => {
            return (
              <div key={project.id} className="mb-15">
                <h3 className="font-medium">{project.name}</h3>
                <p className="font-light text-sm my-3 opacity-75 text-justify">
                  {project.description}
                </p>
                <div className="flex flex-row items-center gap-2 flex-wrap mt-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs p-2 bg-gray-100 dark:bg-gray-50 text-[#171717] rounded-md opacity-75"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {(project.links && project.links.length > 0) && (
                  <div className="mt-6 flex flex-row items-center">
                    <LinkIcon size={16} />
                    {project.links.map((link, idx) => (
                      <Link
                        href={link.url}
                        key={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 text-sm"
                      >
                        <span>{`${link.label}${
                          project.links && idx + 1 !== project.links.length
                            ? ", "
                            : ""
                        }`}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
