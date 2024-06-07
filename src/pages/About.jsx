
import React from 'react';
import logo from '../assets/logo.png'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">About Enlighten Corner</h1>
        <img
          src={logo}  // Replace with the path to your image
          alt="Enlighten Corner"
          className="w-50 h-64 object-cover rounded-lg mb-6 ml-72"
        />
        <p className="text-lg text-gray-700 mb-4">
          Welcome to Enlighten Corner, your go-to destination for insightful articles, thought-provoking discussions, and enlightening content. Our mission is to inspire, educate, and engage our readers through well-researched and compelling writing on a variety of topics.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          At Enlighten Corner, we believe in the power of knowledge and the importance of staying informed. Our team of dedicated writers and experts work tirelessly to bring you the latest trends, analysis, and opinions across a wide range of subjects.
        </p>
        <p className="text-lg text-gray-700">
          Thank you for visiting Enlighten Corner. We hope you find our blog both enjoyable and enlightening. Feel free to explore our articles and join the conversation!
        </p>
      </div>
    </div>
  );
};

export default About;
