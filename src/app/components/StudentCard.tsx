import React from 'react';

interface StudentProps {
  name: string;
  age: number;
  rollNumber: string;
  studentClass: string;
}

const StudentCard: React.FC<StudentProps> = ({ name, age, rollNumber, studentClass }) => {
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden mx-auto my-4 p-4">
      <div className="p-4">
      <p className="text-gray-700"><b>Name:</b> {name}</p>
        <p className="text-gray-700"><b>Age:</b> {age}</p>
        <p className="text-gray-700"><b>Roll Number:</b> {rollNumber}</p>
        <p className="text-gray-700"><b>Class:</b> {studentClass}</p>
      </div>
    </div>
  );
};

export default StudentCard;
