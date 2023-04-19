import React from 'react';

const AddProject = () => {
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
  return (
    <div>
      {' '}
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
    </div>
  );
};

export default AddProject;
