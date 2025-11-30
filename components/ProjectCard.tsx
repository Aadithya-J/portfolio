import React from 'react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <a href={project.link || "#"}>
      <div className="group relative block overflow-hidden">
        <div className="relative bg-gradient-to-br from-stone-800 to-stone-900 rounded-lg border border-stone-700/50 p-12 transition-all duration-500 hover:border-stone-600 hover:bg-gradient-to-br hover:from-stone-700 hover:to-stone-800 min-h-[400px] flex flex-col">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-stone-400 mb-6">{project.category}</p>
            
            <h3 className="text-2xl font-serif font-medium text-stone-100 mb-5 group-hover:text-stone-50 transition-colors">
              {project.title}
            </h3>

            <p className="text-stone-300 text-sm leading-relaxed mb-10">
              {project.description}
            </p>
          </div>

          {project.tech && project.tech.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-auto pt-10 border-t border-stone-700/50">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 bg-stone-700/50 border border-stone-600/50 text-stone-200 text-xs font-medium rounded hover:bg-stone-700 transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          <div className="flex justify-between items-center pt-6 mt-6 border-t border-stone-700/50">
            <span className="text-xs text-stone-500 font-medium">{project.year}</span>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowUpRight className="text-stone-400 group-hover:text-stone-100 transition-colors" size={20} />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};