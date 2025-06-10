import React, { useEffect, useState } from 'react';
import API from './api';
import { useNavigate } from 'react-router-dom';

function Classes() {
  const [classes, setClasses] = useState([]);
  const navigate = useNavigate();
  const teacherId = localStorage.getItem('teacherId');

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const res = await API.get(`/classes/${teacherId}`);
        setClasses(res.data);
      } catch (err) {
        alert('Failed to fetch classes');
      }
    };
    fetchClasses();
  }, [teacherId]);

  return (
    <div className="container">
      <h2>Your Classes</h2>
      <button onClick={() => navigate('/create-class')}>Create Class</button>
      <ul>
        {classes.map((cls) => (
          <li key={cls.id}>
            {cls.class_name} - {cls.total_students} students
            <br />
            <button onClick={() => navigate(`/add-student/${cls.id}`)}>Add Students</button>
            <button onClick={() => navigate(`/mark-attendance/${cls.id}`)}>Mark Attendance</button>
            <button onClick={() => navigate(`/display-students/${cls.id}`)}>Display Students</button> {/* ✅ New button */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Classes;
