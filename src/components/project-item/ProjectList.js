import React from 'react';
import ProjectItem from './ProjectItem';
import { projects } from './mock';

import './ProjectList.css';

const ProjectList = () => {
  return (
    <div className='project-list'>
      {projects.map((pro) => (
        <ProjectItem project={pro} key={pro?.id} />
      ))}
    </div>
  );
};

export default ProjectList;
