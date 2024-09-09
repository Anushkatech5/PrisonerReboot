// src/pages/FirstPopUp.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const FirstPopUp = () => {
  const steps = [
    {
      imgSrc: 'clipboard-icon.png',
      title: 'Enter Details',
      description: 'Start by entering your basic details!',
    },
    {
      imgSrc: 'search-icon.png',
      title: 'Search',
      description: 'Our search engine will find the relevant schemes.',
    },
    {
      imgSrc: 'apply-icon.png',
      title: 'Select & Apply',
      description: 'Select and apply for the best suited scheme.',
    },
  ];

  const navigate = useNavigate();

  const handleOkClick = () => {
    navigate('/dashboard'); // Navigate to dashboard on button click
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <section className="text-center my-12">
        <h2 className="text-2xl font-bold mb-8">Easy steps to apply for Government Schemes</h2>
        <div className="flex flex-col md:flex-row justify-center gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 w-64 md:w-52 rounded-lg shadow-lg text-center transition-transform transform hover:translate-y-[-10px] hover:bg-blue-50"
            >
              <img
                src={step.imgSrc}
                alt={step.title}
                className="w-16 h-16 mb-4 transition-transform transform hover:scale-110"
              />
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        <button
          onClick={handleOkClick}
          className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          OK
        </button>
      </section>
    </div>
  );
};

export default FirstPopUp;
