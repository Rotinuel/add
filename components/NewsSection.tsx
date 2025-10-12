import NewsCard from "./NewsCard";

const newsItems = [
  {
    category: "Entertainment",
    title: "Burna Boy Confirmed as Headliner for ADD 2025 Opening Concert",
    excerpt: "Grammy-winning artist Burna Boy will headline the opening concert of Abuja Detty December 2025, promising an unforgettable night of...",
    date: "Fri, Aug 22",
    link: "#",
  },
  {
    category: "Community",
    title: "International Diaspora Support Reaches All-Time High for ADD 2025",
    excerpt: "Early ticket sales show unprecedented international interest, with diaspora bundle purchases from over 50 countries worldwide.",
    date: "Fri, Aug 22",
    link: "#",
  },
  {
    category: "Competition",
    title: "Miss ADD 2025: Meet the Top 5 Finalists",
    excerpt: "After weeks of intensive competition, five outstanding young women have emerged as finalists for the Miss ADD 2025 crown.",
    date: "Fri, Aug 22",
    link: "#",
  },
];

const NewsSection = () => {
  return (
    <section className="py-16 bg-gray-50 text-center px-4">
      <h2 className="text-3xl font-bold mb-2">Latest News</h2>
      <p className="text-gray-600 mb-10">Stay updated with the latest announcements and press coverage.</p>

      <div className="flex flex-wrap justify-center gap-8">
        {newsItems.map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
