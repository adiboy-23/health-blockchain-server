"use client";
import React, { useState } from "react";
import { Button } from "@nextui-org/button";
import { useRouter } from 'next/navigation'; 

const API_ENDPOINT = "YOUR_API_ENDPOINT"; // Replace with your actual API endpoint
const API_KEY = "YOUR_API_KEY"; // Replace with your actual API key

function MedicalForm() {
  const [formData, setFormData] = useState({
    patientName: "",
    age: "",
    gender: "",
    disease: "",
    contactNumber: "",
    bloodGroup: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitData = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      alert("Medical information stored successfully!");
    } catch (error) {
      console.error("Error storing medical info:", error);
      alert("Failed to store medical information. Please try again.");
    }
  };

  const router = useRouter(); 

  const handleButtonClick = () => {
    router.push('/operations'); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={submitData}
        className="bg-white p-8 shadow-md rounded-lg max-w-lg w-full"
      >
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-500">Medical Information Form</h1>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Patient Name</label>
          <input
            type="text"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Gender</label>
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Disease</label>
          <input
            type="text"
            name="disease"
            value={formData.disease}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Contact Number</label>
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2">Blood Group</label>
          <input
            type="text"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex justify-center">
          <Button color="primary" auto type="submit" onClick={handleButtonClick}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default MedicalForm;