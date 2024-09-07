'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface College {
    id: string;
    collegeName: string;
  }

export default function CreateEvent() {
  const [form, setForm] = useState({
    nameEvent: '',
    smallDescription: '',
    properDescription: '',
    websiteLink: '',
    collegeId: 'National ', 
  });

  const [colleges, setColleges] = useState([]);  // State for colleges list
  const router = useRouter();

  // Fetch colleges on component mount
  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const response = await fetch('/api/getColleges');  // Fetch from API route
        const data = await response.json();
        setColleges(data);
      } catch (error) {
        console.error('Error fetching colleges:', error);
      }
    };
    fetchColleges();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/Events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        router.push('/');  // Redirect to home or events page
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
      }
    } catch (error) {
      console.error('Request failed:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Create Event</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Event Name</label>
          <input
            type="text"
            name="nameEvent"
            value={form.nameEvent}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Small Description</label>
          <textarea
            name="smallDescription"
            value={form.smallDescription}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Proper Description</label>
          <textarea
            name="properDescription"
            value={form.properDescription}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Website Link (optional)</label>
          <input
            type="text"
            name="websiteLink"
            value={form.websiteLink}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        
        {/* College dropdown */}
       

        <div>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">
            Create Event
          </button>
        </div>
      </form>
    </div>
  );
}
