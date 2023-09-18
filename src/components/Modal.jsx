import React, { useState } from "react";

import "./Modal.css";

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      students: "",
      tutors: "",
      classes: "",
      subjects: "",
    }
  );
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (formState.students && formState.tutors && formState.classes && formState.subjects) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(","));
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); {/*this will prevent the page from resetting */}

    if (!validateForm()) return;

    onSubmit(formState);

    closeModal();
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal">
        <form>
          {/*this is for Students */}
          <div className="form-group">
            <label htmlFor="students">Students</label>
            <input 
            type="text"
            name="students" 
            onChange={handleChange} 
            value={formState.students}
            />
          </div>

          {/*this is for Tutors assigned */}
          <div className="form-group">
            <label htmlFor="tutors">Tutors Assigned</label>
            <input
              name="tutors"
              onChange={handleChange}
              value={formState.tutors}
            />
          </div>

          {/*this is for Classes per week */}
          <div className="form-group">
            <label htmlFor="classes">Classes per week</label>
            <input 
              name="classes"
              onChange={handleChange}
              value={formState.classes}
            />
          </div>

          {/*this is for Subjects taken */}
          <div className="form-group">
            <label htmlFor="subjects">Subjects</label>
            <input
              name="subjects"
              onChange={handleChange}
              value={formState.subjects}
            />
          </div>

          {errors && <div className="error">{`Please include: ${errors}`}</div>}
          <button type="submit" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};