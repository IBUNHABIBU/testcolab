import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProject } from '../redux/actions/actions';

const Admin = () => {
  const [skillsModal, setSkillsModal] = useState(false);
  const [projectModal, setProjectModal] = useState(false);
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const [projectData, setProjectData] = useState({
    title: '',
    github: '',
    demo: '',
    languages: '',
    screenshot: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'screenshot') {
      setProjectData((prevData) => ({
        ...prevData,
        [name]: e.target.files[0],
      }));
    } else {
      setProjectData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('project[title]', projectData.title);
    formData.append('project[github]', projectData.github);
    formData.append('project[demo]', projectData.demo);
    formData.append('project[languages]', projectData.languages);
    formData.append('project[screenshot]', projectData.screenshot);
    console.log(formData, projectData);

    axios.post('http://localhost:3000/api/v1/projects', formData,
      {
        headers: { 'content-type': 'multipart/form-data' },
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.status === 'created') {
          setMessage('Project added successfully');
          setProjectModal(false);
          dispatch(addProject(res.data));
        }
      });
  };

  const handleClick = () => {
    setSkillsModal(true);
  };

  const handleClickProject = () => {
    setProjectModal(true);
  };

  const handleCloseModal = () => {
    setSkillsModal(false);
  };
  const handleCloseProject = () => {
    setProjectModal(false);
  };
  return (
    <div className="admin">
      <h2>Admin Panel</h2>
      <div className="admin__buttons">
        <button className="btn skills" type="submit" onClick={handleClick}>Add Skills</button>
        <button className="btn project" type="submit" onClick={handleClickProject}>Add Project</button>
      </div>

      {skillsModal && (
        <div className="modal">
          <div className="modal__content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h3>Add Skill</h3>
            <form className="form">
              <label htmlFor="skill-name">Skill Name:</label>
              <input type="text" id="skill-name" name="skill-name" />

              <button type="submit" className="btn">Add Skill</button>
            </form>
          </div>
        </div>
      )}
      {projectModal && (
      <div className="modal">
        <div className="modal__content">
          <span className="close" onClick={handleCloseProject}>&times;</span>
          <h3>Add Skill</h3>
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="skill-name">Project title:</label>
            <input type="text" id="skill-name" name="title" onChange={handleChange} />
            <label htmlFor="skill-name">Githb Link:</label>
            <input type="text" id="skill-name" name="github" onChange={handleChange} />
            <label htmlFor="skill-name">Live Demo link:</label>
            <input type="text" id="skill-name" name="demo" onChange={handleChange} />
            <label htmlFor="skill-name">Languages used:</label>
            <input type="text" id="skill-name" name="languages" onChange={handleChange} />
            <label htmlFor="skill-name"> Project Screenshot:</label>
            <input type="file" id="skill-name" name="screenshot" onChange={handleChange} />
            <button type="submit" className="btn">Add Skill</button>
          </form>
        </div>
      </div>
      )}
    </div>
  );
};

export default Admin;
