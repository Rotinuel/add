import TestimonialCard from './TestimonialCard';

const testimonials = [
    {
        name: "Chioma Adeleke",
        role: "ADD Partner",
        message: "We partnered with their smaller activations before, and the professionalism was outstanding.",
        rating: 5,
    },
    {
        name: "Emeka Nwosu",
        role: "Vendor Partner",
        message: "The team behind this has never disappointed vendors. Past events/competition were smooth and profitable.Looking forward to this historic December edition.",
        rating: 5,
    },
    {
        name: "Sarah Johnson",
        role: "Miss Add Contestant",
        image: "/test/Sarah.png",
        message: "I sold at their last trade exhibition — it was well-coordinated and had a great crowd. This maiden Abuja Detty December looks even bigger. Already booked my spot!",
        rating: 5,
    },
    {
        name: "David Okonkwo",
        role: "Disapora Attendee",
        message: "Even though it’s the first edition, there’s a strong track record. Their past concerts and fairs gave brands real visibility. We expect nothing less this December.",
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
