import React from 'react';
import '../../styles/Students.css';
import { aosAnimation } from '../Section';

interface IndividualStudentsProps {
    students: { key: string; name: string; description: string; image: string }[];
}

const IndividualStudents = ({ students }: IndividualStudentsProps) => {
    const listOfStudents = students.map((student) => {
        return (
            <div className="student" key={student.key} aos-init="true" data-aos-once="false" data-aos={aosAnimation}>
                <p className="student-name">{student.name.toLowerCase()}</p>
                <img className="student-image" src={student.image} alt={`Image of ${student.name}`} />
                <p className="student-description">{student.description.toLowerCase()}</p>
            </div>
        );
    });

    return <>{listOfStudents}</>;
};

export default IndividualStudents;
