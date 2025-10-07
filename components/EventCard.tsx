// components/EventCard.tsx
import { FC } from 'react';
import { CalendarDays, MapPin, Users } from 'lucide-react';

interface EventCardProps {
  date: string;
  type: string;
  title: string;
  venue: string;
  capacity: number;
  bgColor?: string;
  isPlaceholder?: boolean;
}

const EventCard: FC<EventCardProps> = ({ date, type, title, venue, capacity, bgColor = "bg-green-900", isPlaceholder }) => {
  if (isPlaceholder) {
    return (
      <div className="w-full h-56 bg-gray-300 rounded-xl flex items-center justify-center text-gray-600">
        <span>Image Placeholder</span>
      </div>
    );
  }

  return (
    <div className={`rounded-xl p-6 text-white ${bgColor}`}>
      <div className="flex items-center mb-4">
        <CalendarDays className="mr-2" />
        <span className="text-sm">{date}</span>
      </div>
      <p className="text-sm mb-2">{type}</p>
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <div className="flex items-center text-sm mb-1">
        <MapPin className="w-4 h-4 mr-2" />
        {venue}
      </div>
      <div className="flex items-center text-sm">
        <Users className="w-4 h-4 mr-2" />
        {capacity} capacity
      </div>
    </div>
  );
};

export default EventCard;
