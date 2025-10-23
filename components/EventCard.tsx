// // components/EventCard.tsx
// import { FC } from 'react';
// import { CalendarDays, MapPin, Users } from 'lucide-react';

// interface EventCardProps {
//   sdate: string;
//   edate: string;
//   title: string;
//   venue: string;
//   bgColor?: string;
//   isPlaceholder?: boolean;
//   price: number;
//   description: string;
// }

// const EventCard: FC<EventCardProps> = ({ sdate, edate,  title, venue, bgColor = "bg-white", isPlaceholder, price, description }) => {
//   if (isPlaceholder) {
//     return (
//       <div className="w-full h-56 bg-gray-300 rounded-xl flex items-center justify-center text-gray-600">
//         <span>Image Placeholder</span>
//       </div>
//     );
//   }

//   return (
//     <div className={`rounded-xl p-6 text-black ${bgColor}`}>
//       {/* Title */}
//       <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-900">
//         <span role="img" aria-label="icon">🏢</span> {title}
//       </h2>

//       {/* price */}
//       <div className="bg-green-700 text-white text-center text-2xl font-bold py-3 rounded-md mb-4">
//         ₦{price.toLocaleString("en-NG", { minimumFractionDigits: 2 })}
//       </div>

//       {/* info list */}
//       <ul className='text-gray-700 text-sm mb-4 space-y-2'>
//         {/* location */}
//         <li className="flex items-center gap-2">
//           <MapPin className='w-4 h-4 mr-2' />
//           {venue}
//         </li>
//       <li className="flex items-center mb-4">
//         <CalendarDays className="mr-2" />
//         <span className="text-sm">{sdate} - {edate}</span>
//       </li>
//       </ul>

//       {/* description */}
//       <p className='text-gray-600 text-sm mb-6'>{description}</p>

//       {/* Button */}
//       <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md font-semibold transition-colors">
//         View More
//       </button>
//     </div>
//   );
// };

// export default EventCard;



"use client";

import { FC } from "react";
import { CalendarDays, MapPin } from "lucide-react";

interface EventCardProps {
  sdate: string;
  edate: string;
  title: string;
  venue: string;
  bgColor?: string;
  isPlaceholder?: boolean;
  price: number;
  description: string;
  onViewMore?: () => void;
}

const EventCard: FC<EventCardProps> = ({
  sdate,
  edate,
  title,
  venue,
  bgColor = "bg-white",
  isPlaceholder,
  price,
  description,
  onViewMore,
}) => {
  if (isPlaceholder) {
    return (
      <div className="w-full h-56 bg-gray-300 rounded-xl flex items-center justify-center text-gray-600">
        <span>Image Placeholder</span>
      </div>
    );
  }

  return (
    <div
      className={`rounded-xl p-6 text-black ${bgColor} shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between`}
    >
      {/* Title */}
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-900">
        <span role="img" aria-label="icon">🏢</span> {title}
      </h2>

      {/* Price */}
      <div className="bg-green-700 text-white text-center text-2xl font-bold py-3 rounded-md mb-4">
        ₦{price.toLocaleString("en-NG", { minimumFractionDigits: 2 })}
      </div>

      {/* Info list */}
      <ul className="text-gray-700 text-sm mb-4 space-y-2">
        {venue && (
          <li className="flex items-center gap-2">
            <MapPin className="w-4 h-4 mr-2" />
            {venue}
          </li>
        )}
        <li className="flex items-center mb-4">
          <CalendarDays className="mr-2 w-4 h-4" />
          <span className="text-sm">
            {sdate || "TBA"} {edate && ` - ${edate}`}
          </span>
        </li>
      </ul>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-6 flex-grow">{description}</p>

      {/* Button */}
      <button
        onClick={onViewMore}
        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md font-semibold transition-colors"
      >
        View More
      </button>
    </div>
  );
};

export default EventCard;
