import React, { useState, useEffect } from 'react';
import API from './api';
import { useParams } from 'react-router-dom';

function MarkAttendance() {
  const { classId } = useParams();
  const [students, setStudents] = useState([]);
  const [date, setDate] = useState('');
  const [attendance, setAttendance] = useState({});

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await API.get(`/students/${classId}`);
        setStudents(res.data);
      } catch (err) {
        alert('Failed to fetch students');
      }
    };
    fetchStudents();
  }, [classId]);

  const handleAttendanceChange = (studentId, status) => {
    setAttendance((prev) => ({ ...prev, [studentId]: status }));
  };

  const handleSubmit = async () => {
    try {
      const entries = Object.entries(attendance);
      for (const [studentId, status] of entries) {
        await API.post('/attendance', {
          studentId,
          classId,
          date,
          status,
        });
      }
      alert('Attendance marked successfully!');
    } catch (err) {
      alert('Failed to mark attendance');
    }
  };

  return (
    <div className="container">
      <h2>Mark Attendance</h2>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      /><br /><br />
      <ul>
        {students.map((stu) => (
          <li key={stu.id}>
            {stu.name}
            <select
              onChange={(e) =>
                handleAttendanceChange(stu.id, e.target.value)
              }
            >
              <option value="">Select</option>
              <option value="present">Present</option>
              <option value="absent">Absent</option>
            </select>
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit}>Submit Attendance</button>
    </div>
  );
}

export default MarkAttendance;
