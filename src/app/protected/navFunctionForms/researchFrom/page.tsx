'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useUser } from '@stackframe/stack';// Adjust according to your auth setup

export default function CreateResearch() {
  
  
  useUser({ or: 'redirect' });
  const userDetails = useUser();
  const userName = userDetails?.id as string;

  const searchParams = useSearchParams();
  const idparam = searchParams.get('college');
  const [form, setForm] = useState({
    nameResearch: '',
    smallDescription: '',
    properDescription: '',
    membersEmail: '',
    websiteLink: '',
    internshipVacancy: false,
    isFunded: false,
    collegeName: idparam || '',
    postBy: userName,
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setForm({
      ...form,
      [name]: newValue,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/Research', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        router.back(); // Navigate back after successful submission
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
      }
    } catch (error) {
      console.error('Request failed:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-slate-50 mt-4 rounded-lg max-w-[50%]">
      <h1 className="text-2xl font-bold mb-6 text-center">Create Public Research</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="nameResearch" className="block text-base font-medium text-gray-700">Research Title</label>
          <input
            id="nameResearch"
            type="text"
            name="nameResearch"
            value={form.nameResearch}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="smallDescription" className="block text-base font-medium text-gray-700">Research Description</label>
          <textarea
            id="smallDescription"
            name="smallDescription"
            value={form.smallDescription}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
          />
        </div>
        <div>
          <label htmlFor="properDescription" className="block text-base font-medium text-gray-700">Detailed Information</label>
          <textarea
            id="properDescription"
            name="properDescription"
            value={form.properDescription}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={6}
          />
        </div>
        <div>
          <label htmlFor="membersEmail" className="block text-base font-medium text-gray-700">Members Emails</label>
          <input
            id="membersEmail"
            type="text"
            name="membersEmail"
            value={form.membersEmail}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="websiteLink" className="block text-base font-medium text-gray-700">Website Link (Optional)</label>
          <input
            id="websiteLink"
            type="text"
            name="websiteLink"
            value={form.websiteLink}
            onChange={handleChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="collegeName" className="block text-base font-medium text-gray-700">College Name</label>
          <input
            id="collegeName"
            type="text"
            name="collegeName"
            value={form.collegeName}
            readOnly
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md bg-gray-100 shadow-sm"
          />
        </div>
        <div>
          <label htmlFor="internshipVacancy" className="block text-base font-medium text-gray-700">Internship Vacancy</label>
          <input
            id="internshipVacancy"
            type="checkbox"
            name="internshipVacancy"
            checked={form.internshipVacancy}
            onChange={handleChange}
            className="mt-1"
          />
        </div>
        <div>
          <label htmlFor="isFunded" className="block text-base font-medium text-gray-700">Is Funded?</label>
          <input
            id="isFunded"
            type="checkbox"
            name="isFunded"
            checked={form.isFunded}
            onChange={handleChange}
            className="mt-1"
          />
        </div>
        <div className="flex items-center justify-center">
          <button type="submit" className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Create Research Post
          </button>
        </div>
      </form>
    </div>
  );
}
