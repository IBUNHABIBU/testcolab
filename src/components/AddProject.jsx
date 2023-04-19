import React from 'react'

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
    <div>AddProject</div>
  )
}

export default AddProject