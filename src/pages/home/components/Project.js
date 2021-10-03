import React from 'react';
import Section from '../../../components/section/Section';
import ProjectList from '../../../components/project-item/ProjectList';
import './Project.css';

const Project = () => {
  return (
    <Section className='project' id='projects'>
      <div className='project-heading'>
        <h3>Some of my recent works</h3>
        <h1 className='home-title'>Projects</h1>
      </div>
      <div className='project-list'>
        <ProjectList />
      </div>
    </Section>
  );
};

export default Project;
