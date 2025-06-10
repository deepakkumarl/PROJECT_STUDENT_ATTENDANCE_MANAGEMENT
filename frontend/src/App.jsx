import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Classes from './Classes';
import CreateClass from './CreateClass';
import AddStudent from './AddStudent';
import MarkAttendance from './MarkAttendance';
import DisplayStudent from './DisplayStudent'; // ✅ Import the new component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/create-class" element={<CreateClass />} />
        <Route path="/add-student/:classId" element={<AddStudent />} />
        <Route path="/mark-attendance/:classId" element={<MarkAttendance />} />
        <Route path="/display-students/:classId" element={<DisplayStudent />} /> {/* ✅ New route */}
      </Routes>
    </Router>
  );
}

export default App;
