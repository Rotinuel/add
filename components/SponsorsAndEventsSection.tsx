import Image from "next/image";

const sponsors = [
    { name: "Abuja Continental", logo: "/sponsors/AC.png" },
    { name: "Brave iocns", logo: "/sponsors/BRAVEICONS.png" },
    { name: "KYROS AUTOMOBILE", logo: "/sponsors/KYROS.png" },
    { name: "PFIPC", logo: "/sponsors/PFIPC.png" },
    { name: "WTC", logo: "/sponsors/WTC.png" },
];

export default function SponsorsAndEventsSection() {
    return (
        <section className="w-full bg-white py-12 md:py-16">
            {/* SPONSORS SECTION */}
            <div className="text-center mb-10">
                <p className="text-gray-600 font-medium mb-6">Proudly sponsored by</p>

                <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 px-4">
                    {sponsors.map((sponsor) => (
                        <div
                            key={sponsor.name}
                            className="bg-gray-900 hover:bg-gray-200 transition rounded-lg flex items-center justify-center h-20 w-32 md:w-40 shadow-sm"
                        >
                            <Image
                                src={sponsor.logo}
                                alt={sponsor.name}
                                width={120}
                                height={60}
                                className="object-contain transition duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
