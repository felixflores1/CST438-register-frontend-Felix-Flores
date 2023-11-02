import React, { useState } from 'react';

const AddStudent = () => {
    const [studentName, setStudentName] = useState('');

    const handleNameChange = (event) => {
        setStudentName(event.target.value);
    };

    const handleAddStudent = () => {
        console.log('Added student name:', studentName);

    };

    return (
        <div>
            <h2>Add Student</h2>
            <label htmlFor="studentName">Student Name:</label>
            <input
                type="text"
                id="studentName"
                value={studentName}
                onChange={handleNameChange}
            />
            <button onClick={handleAddStudent}>Add Student</button>
        </div>
    );
}

export default AddStudent;
