import React, { useState } from 'react';
import API from './api';
import { useNavigate } from 'react-router-dom';

function CreateClass() {
  const [className, setClassName] = useState('');
  const [totalStudents, setTotalStudents] = useState('');
  const navigate = useNavigate();
  const teacherId = parseInt(localStorage.getItem('teacherId'), 10); // Ensure teacherId is an integer

  const handleCreate = async () => {
    try {
      // Sending teacherId, class_name (className), and total_students to backend
      await API.post('/classes', {
        teacherId,
        class_name: className, // Correctly mapping to backend
        total_students: totalStudents,
      });
      alert('Class created');
      navigate('/classes');
    } catch (err) {
      console.error('Error:', err.response?.data || err.message);
      alert('Failed to create class');
    }
  };

  return (
    <div className="container">
      <h2>Create Class</h2>
      <input
        type="text"
        placeholder="Class Name"
        value={className}
        onChange={(e) => setClassName(e.target.value)}
      /><br/>
      <input
        type="number"
        placeholder="Total Students"
        value={totalStudents}
        onChange={(e) => setTotalStudents(e.target.value)}
      /><br/>
      <button onClick={handleCreate}>Create</button>
    </div>
  );
}

export default CreateClass;
