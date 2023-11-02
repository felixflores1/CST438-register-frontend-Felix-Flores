import React, { useState } from 'react';

const EditStudent = (props) => {
    const [studentName, setStudentName] = useState(props.student.name);

    const handleNameChange = (event) => {
        setStudentName(event.target.value);
    };

    const handleSave = () => {
  
        console.log('Updated student name:', studentName);

    };

    return (
        <div>
            <h2>Edit Student</h2>
            <label htmlFor="studentName">Student Name:</label>
            <input
                type="text"
                id="studentName"
                value={studentName}
                onChange={handleNameChange}
            />
            <button onClick={handleSave}>Save</button>
        </div>
    );
}

export default EditStudent;
