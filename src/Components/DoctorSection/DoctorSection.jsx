import React from 'react';
import './DoctorSection.css';

import doctor1 from "../../Images/doctor/doctor1.jpg";
import doctor2 from "../../Images/doctor/doctor2.jpg";
import doctor3 from "../../Images/doctor/doctor3.jpg";
import doctor4 from "../../Images/doctor/doctor4.jpg";

function DoctorSection() {
  const doctors = [
    { 
        department: "Dental",
        name: "Deyel Fernando",
        title: "Chief Medical Officer",
        imgSrc: doctor1
      },
      { 
        department: "Cardiology",
        name: "Pramodh Adhikari",
        title: "Senior Cardiologist",
        imgSrc: doctor2
      },
      { 
        department: "Neurology",
        name: "Merlin De Silva",
        title: "Neurosurgeon",
        imgSrc: doctor3
      },
      { 
        department: "Orthopedics",
        name: "Meth Medha De Mel",
        title: "Orthopedic Specialist",
        imgSrc: doctor4
      },
      { 
          department: "Orthopedics",
          name: "Chathurika Wimalarachci",
          title: "Orthopedic Specialist",
          imgSrc: doctor4
        },
        { 
          department: "Orthopedics",
          name: "Pumudi Wijerathne",
          title: "Orthopedic Specialist",
          imgSrc: doctor4
        },
  ];

  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-8">Doctors</h1>
      <div className="doctors-container">
        {doctors.map((doctor, index) => (
          <div key={index} className="doctor-card">
            <img src={doctor.imgSrc} alt={doctor.name} className="doctor-image" />
            <h3 className="doctor-name">{doctor.name}</h3>
            <p className="doctor-role">{doctor.title}</p>
            <p className="text-blue-500 font-medium">{doctor.department}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default DoctorSection;