"use client";

export default function UnforgettableEvents() {
  return (
    <section className="py-10 bg-white text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4 text-gray-900">
          Unforgettable Events
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-12">
          From electrifying concerts to cultural showcases, experience the best of
          Nigerian entertainment this December.
        </p>

        {/* Optional - Add Event Grid (if you want to list featured events) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {/* Example Event Card */}
          <div className="bg-gray-50 rounded-2xl shadow-sm p-6 hover:shadow-md transition">
            <img
              src="/images/concert.jpg"
              alt="Concert Event"
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Music Concert
            </h3>
            <p className="text-gray-600 text-sm">
              Dance the night away with Nigeria’s top performers.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl shadow-sm p-6 hover:shadow-md transition">
            <img
              src="/images/fashion.jpg"
              alt="Fashion Event"
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Fashion Parade
            </h3>
            <p className="text-gray-600 text-sm">
              Experience stunning African creativity and design.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl shadow-sm p-6 hover:shadow-md transition">
            <img
              src="/images/food.jpg"
              alt="Food Event"
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Food Festival
            </h3>
            <p className="text-gray-600 text-sm">
              Taste the best of local and continental cuisines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
