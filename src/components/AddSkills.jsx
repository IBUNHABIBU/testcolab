import React from 'react'

const AddSkills = () => {

  return (
    <div><div className="modal">
          <div className="modal__content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h3>Add Skill</h3>
            <form className="form">
              <label htmlFor="skill-name">Skill Name:</label>
              <input type="text" id="skill-name" name="skill-name" />

              <button type="submit" className="btn">Add Skill</button>
            </form>
          </div>
        </div></div>
  )
}

export default AddSkills