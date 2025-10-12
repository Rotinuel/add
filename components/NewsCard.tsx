type NewsCardProps = {
  image?: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  link: string;
};

const NewsCard = ({ image, category, title, excerpt, date, link }: NewsCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-sm">
      <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
        {/* Replace with <img src={image} alt={title} /> when using real images */}
        Image Placeholder
      </div>
      <div className="p-4 flex flex-col justify-between h-56">
        <p className="text-green-600 font-medium text-sm">{category}</p>
        <h3 className="font-semibold text-lg text-black mt-1">{title}</h3>
        <p className="text-gray-600 text-sm mt-2">{excerpt}</p>
        <div className="flex justify-between items-center mt-auto text-sm pt-4">
          <span className="text-gray-500">{date}</span>
          <a href={link} className="text-green-600 font-medium hover:underline">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
