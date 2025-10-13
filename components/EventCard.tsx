// components/EventCard.tsx
import { FC } from 'react';
import { CalendarDays, MapPin, Users } from 'lucide-react';
import { BiCategory } from 'react-icons/bi';

interface EventCardProps {
  date: string;
  type: string;
  title: string;
  venue: string;
  bgColor?: string;
  capacity: number;
  isPlaceholder?: boolean;
  price: number;
  description: string;
}

const EventCard: FC<EventCardProps> = ({ date, type, title, venue, capacity, bgColor = "bg-white", isPlaceholder, price, description }) => {
  if (isPlaceholder) {
    return (
      <div className="w-full h-56 bg-gray-300 rounded-xl flex items-center justify-center text-gray-600">
        <span>Image Placeholder</span>
      </div>
    );
  }

  return (
    <div className={`rounded-xl p-6 text-black ${bgColor}`}>
      {/* Title */}
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-900">
        <span role="img" aria-label="icon">🏢</span> {title}
      </h2>
      {/* Calender */}
      <p className="text-sm mb-2">{type}</p>

      {/* price */}
      <div className="bg-fuchsia-700 text-white text-center text-2xl font-bold py-3 rounded-md mb-4">
        ₦{price.toLocaleString("en-NG", { minimumFractionDigits: 2 })}
      </div>

      {/* info list */}
      <ul className='text-gray-700 text-sm mb-4 space-y-2'>
        {/* location */}
        <li className="flex items-center gap-2">
          <MapPin className='w-4 h-4 mr-2' />
          {venue}
        </li>
        {/* categories */}
        <li className="flex items-center gap-2">
          <BiCategory className='w-4 h-4 mr-2' />
          {type}
        </li>
      <li className="flex items-center mb-4">
        <CalendarDays className="mr-2" />
        <span className="text-sm">{date}</span>
      </li>
      <li className="flex items-center text-sm">
        <Users className="w-4 h-4 mr-2" />
        {capacity} capacity
      </li>
      </ul>
      
      {/* description */}
      <p className='text-gray-600 text-sm mb-6'>{description}</p>

      {/* Button */}
      <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md font-semibold transition-colors">
        View More
      </button>
    </div>
  );
};

export default EventCard;
