import React, { useState, useEffect } from 'react';
import API from './api';
import { useParams } from 'react-router-dom';

function DisplayStudent() {
  const { classId } = useParams();
  const [students, setStudents] = useState([]);
  const [date, setDate] = useState('');
  const [attendance, setAttendance] = useState([]);

  const fetchAttendance = async () => {
    try {
      const res = await API.get(`/attendance`, {
        params: { classId, date },
      });
      setAttendance(res.data);
    } catch (err) {
      alert('Failed to fetch attendance');
    }
  };

  return (
    <div className="container">
      <h2>Students Attendance</h2>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={fetchAttendance}>Load</button>
      <ul>
        {attendance.map((student) => (
          <li key={student.id}>
            {student.name} - {student.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayStudent;
