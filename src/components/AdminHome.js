import React, { useState, useEffect } from 'react';

const AdminHome = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        // Fetch the list of students when the component mounts
        fetchStudents();
    }, []);

    const fetchStudents = () => {
        fetch('/api/students') 
            .then((response) => response.json())
            .then((data) => {
                setStudents(data);
            })
            .catch((error) => {
                console.error('Error fetching students:', error);
            });
    };

    return (
        <div>
            <div style={{ margin: 'auto' }}>
                <h3>Student List</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Student ID</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminHome;
