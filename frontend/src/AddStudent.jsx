import React, { useState, useEffect } from 'react';
import API from './api';
import { useParams } from 'react-router-dom';

function AddStudent() {
  const { classId } = useParams();
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const res = await API.get(`/students/${classId}`);
      setStudents(res.data);
    } catch (err) {
      alert('Failed to fetch students');
    }
  };

  useEffect(() => {
    fetchStudents();
  }, [classId]);

  const handleAdd = async () => {
    try {
      await API.post('/students', {
        classId,
        student_name: studentName,
      });
      setStudentName('');
      fetchStudents();
    } catch (err) {
      alert('Failed to add student');
    }
  };

  return (
    <div className="container">
      <h2>Add Student</h2>
      <input
        type="text"
        placeholder="Student Name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      /><br/>
      <button onClick={handleAdd}>Add</button>
      <h3>Students</h3>
      <ul>
        {students.map((stu) => (
          <li key={stu.id}>{stu.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default AddStudent;
