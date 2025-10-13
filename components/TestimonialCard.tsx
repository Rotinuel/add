import Image from "next/image";

type TestimonialProps = {
  name: string;
  image?: string;
  role: string;
  message: string;
  rating: number;
};

const TestimonialCard = ({ name, image, role, message, rating }: TestimonialProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
      <div className="flex items-center mb-4">
        <div className="relative w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
          {image ? (
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
              sizes="48px"
            />
          ) : (
            <div className="flex items-center justify-center h-full w-full text-gray-400 text-sm">
              No Img
            </div>
          )}
        </div>
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
      <blockquote className="italic text-gray-700 mb-4">&quot;{message}&quot;</blockquote>
      <div className="text-green-500 text-sm">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
