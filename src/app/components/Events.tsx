import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Events: React.FC<{ collegeName: string }> = ({ collegeName }) => {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`/api/eventsApi/${collegeName}`);
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [collegeName]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-3/4">
        <div className="border-t-4 border-blue-500 border-solid w-12 h-12 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="relative p-6 bg-slate-50 h-3/4 shadow-lg rounded-lg overflow-y-scroll">
      <h2 className="text-2xl font-bold mb-4 ">Events Content</h2>
      <div className="absolute top-4 right-4">
        <Button variant="primaryBtn">
          <Link href={`/navFunctionForms/eventForm/?college=${collegeName}`}>
            Create Event
          </Link>
        </Button>
      </div>
      <div className="mt-16">
        {events.length > 0 ? (
          <ul className="space-y-4">
            {events.map((event) => (
              <li key={event.id} className="p-4 border border-gray-200 rounded-md">
                <h3 className="text-lg font-semibold">{event.nameEvent}</h3>
                <p className="text-gray-600">{event.smallDescription}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No events found for {collegeName}.</p>
        )}
      </div>
    </div>
  );
};

export default Events;
