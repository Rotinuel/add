import TestimonialCard from './TestimonialCard';

const testimonials = [
    {
        name: "Chioma Adeleke",
        role: "Event Attendee 2024",
        message: "Abuja Detty December was absolutely incredible! The energy, the music, the culture – everything was perfect. I've already booked my tickets for 2025!",
        rating: 5,
    },
    {
        name: "David Okonkwo",
        role: "Miss ADD Contestant",
        message: "Participating in the Miss ADD contest was life-changing. The organization, professionalism, and support from the community was outstanding. Highly recommend!",
        rating: 5,
    },
    {
        name: "Sarah Johnson",
        role: "Diaspora Attendee",
        message: "It felt like coming home. The warmth, the culture, and the people made it unforgettable. Definitely a must-experience event.",
        rating: 5,
    },
    {
        name: "Emeka Nwosu",
        role: "Vendor Partner",
        message: "Partnering with ADD opened up massive visibility for my brand. The crowd engagement was off the charts.",
        rating: 5,
    },
];

const TestimonialsSection = () => {
    return (
        <section className="py-16 bg-gray-50 text-center">
            <h2 className="text-3xl font-bold mb-4">What People Say</h2>
            <p className="text-gray-600 mb-12">
                Hear from our amazing community of attendees, contestants, and partners.
            </p>
            <div className="flex flex-wrap justify-center gap-8 px-4">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} {...testimonial} />
                ))}
            </div>
        </section>
    );
};

export default TestimonialsSection;
