import React from 'react';
import { projects } from './mock';
import './ProjectItem.css';

const ProjectItem = ({ project }) => {
  return (
    <div className='project-item'>
      <div className='project-item__img'>
        <img src={project?.imgUrl} alt='app' />
      </div>
      <div className='project-item__info'>
        <h3>{project?.name}</h3>
        <div className='project-item__description'>
          <p> {project?.description} </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
