"use client"

import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import { useUser } from '@stackframe/stack';
import { useSearchParams } from 'next/navigation';

interface Event {
  nameCompany: string;
  namePosition: string;
  smallDescription: string;
  properDescription: string;
  websiteLink?: string;
  PostedBy? : string;
  // Add other fields as needed
}

const Page = () => {
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const userExist = useUser();
  const searchParams = useSearchParams()
  const collegeName = searchParams.get('college');

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`/api/JobDetails/${collegeName}`);
        if (!response.ok) {
          throw new Error('Failed to fetch event');
        }
        const data = await response.json();
        setEvent(data);
      } catch (error) {
        console.error('Error fetching event:', error);
        setError('Failed to load event data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [collegeName]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="border-t-4 border-blue-500 border-solid w-12 h-12 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>No event data available.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Left panel */}
      <div className="md:w-1/3 bg-white p-8 flex flex-col justify-between">
        <div>
          <Link href="/events" className="text-blue-500 hover:underline mb-8 inline-block">
            ← Back
          </Link>
          <h1 className="text-4xl font-bold mb-4"> Company : {event.nameCompany}</h1>
          <p className="text-gray-600">Position: {event.namePosition}</p>
          <p className="text-gray-600"> posted By {event.PostedBy}</p>
        </div>
      </div>

      {/* Right panel */}
      <div className="md:w-2/3 p-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">{event.properDescription}</h2>
          </div>
          <p className="text-gray-700 mb-6">{event.smallDescription}</p>
          <h3 className="text-xl font-semibold mb-2">Detailed Description</h3>
          <p className="text-gray-700 mb-6">{event.properDescription}</p>
          {event.websiteLink && (
            <p className="mb-6">
              Official Website:{' '}
              <a href={event.websiteLink} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                {event.websiteLink}
              </a>
            </p>
          )}
          <div className="flex space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Share
            </button>
            <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page