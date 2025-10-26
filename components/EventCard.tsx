"use client";

import { useState } from 'react'
import Image from "next/image";

import { CalendarDays, MapPin } from "lucide-react";
import EventBookingModal from './EventBookingModal';

interface EventCardProps {
  id?: string;
  sdate: string;
  edate: string;
  title: string;
  venue: string;
  price: number;
  description: string;
  image?: string;
}

export default function EventCard ({
  id,
  sdate,
  edate,
  title,
  venue,
  price,
  description,
  image,
}: EventCardProps) {
  
  const [open, setOpen] = useState(false); 


  return (
    <>
    <div
      className={`rounded-xl text-black shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between`}
    >
      {/* Image Section */}
      <div className="relative w-full h-48">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-t-lg"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
            No Image
          </div>
        )}
      </div>

      {/* Title */}
      {/* <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-900">
        <span role="img" aria-label="icon">🏢</span> {title}
      </h2>

      {/* Price */}
      {/* <div className="bg-green-700 text-white text-center text-2xl font-bold py-3 rounded-md mb-4">
        ₦{price.toLocaleString("en-NG", { minimumFractionDigits: 2 })}
      </div> */}

      {/* Info list */}
      {/* <ul className="text-gray-700 text-sm mb-4 space-y-2">
        {venue && (
          <li className="flex items-center gap-2">
            <MapPin className="w-4 h-4 mr-2" />
            {venue}
          </li>
        )} */}
        
        
        {/* <li className="flex items-center mb-4">
          <CalendarDays className="mr-2 w-4 h-4" />
          <span className="text-sm">
            {sdate || "TBA"} {edate && ` - ${edate}`}
          </span>
        </li> */}


        {/* <li className="flex items-center mb-4">
          <CalendarDays className="mr-2 w-4 h-4" />
          <span className="text-sm">
            {sdate
              ? edate && edate !== sdate
                ? `${sdate} - ${edate}` // Range
                : sdate // Single date
              : "TBA"}
          </span>
        </li>
      </ul> */}

      {/* Description */}
      {/* <p className="text-gray-600 text-sm mb-6 flex-grow">{description}</p> */}

      {/* Button */}
      {/* <button
        onClick={onViewMore}
        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md font-semibold transition-colors"
      >
        View More
      </button> */}
      {/* Card Body */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        {/* Title */}
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-900">
           {title}
        </h2>

        {/* Info list */}
        <ul className="text-gray-700 text-sm mb-4 space-y-2">
          {venue && (
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 mr-2" />
              {venue}
            </li>
          )}
          <li className="flex items-center">
            <CalendarDays className="mr-2 w-4 h-4" />
            <span className="text-sm">
              {sdate
                ? edate && edate !== sdate
                  ? `${sdate} - ${edate}` // Range
                  : sdate // Single date
                : "TBA"}
            </span>
          </li>
          {/* Price */}
        <div className="text-green-500 text-2xl">
          ₦{price.toLocaleString("en-NG", { minimumFractionDigits: 2 })}
        </div>
        {/* Description */}
        <p className="text-gray-600 text-sm mb-6 flex-grow">{description}</p>
        </ul>        

        {/* Button */}
        <button
          onClick={() => setOpen(true)}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md font-semibold transition-colors"
        >
          Get Tickets
        </button>
      </div>
    </div>
    {/* Booking Modal */}
      <EventBookingModal
        open={open}
        onClose={() => setOpen(false)}
        event={{ id: id || "", title, price }}
      />
      </>

  );
};
