import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects } from '../redux/actions/fetch';

const Projects = () => {
  const projects = useSelector((state) => state.project);
  console.log(projects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
  }, []);

  return (
    <div className="project">

      {
        projects.map((project) => {
          const {
            id, title, github, demo, languages, imageUrl,
          } = project;
          return (
            <div className="project__card" key={id}>
              <img src={imageUrl} alt="title" className="project__image" />
              <div className="project__details">
                <h3 className="project__details__title">{title}</h3>
                <div className="project__details__links">
                  <a href={demo} target="_blank" className="btn link" rel="noreferrer">live demo</a>
                  <a href={github} target="_blank" className="btn link" rel="noreferrer">github link</a>
                </div>
                <p className="project__details__language">
                  <strong>Built with: </strong>
                  {languages}
                </p>
              </div>
            </div>
          );
        })
}
    </div>
  );
};

export default Projects;
