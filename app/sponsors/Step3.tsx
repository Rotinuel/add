export default function Step3() {
  const objectives = [
    "Lead Generation",
    "Brand Awareness",
    "Thought Leadership",
    "Community Engagement",
    "Talent/Recruitment",
    "Media Exposure",
    "Product Sampling",
    "Others",
  ];

  return (
    <form className="grid md:grid-cols-2 gap-6">
      <div>
        <p className="font-medium text-gray-700 mb-3">
          Please share more about your objectives or any ideas for activating your brand at Bolé Festival 2025
        </p>
        <div className="space-y-2">
          {objectives.map((obj) => (
            <label key={obj} className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <span>{obj}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <p className="font-medium text-gray-700 mb-3">
          Let us know how you envision your involvement and what success looks like for your brand.
        </p>
        <textarea className="w-full border rounded px-3 py-2 h-40" />
      </div>
    </form>
  );
}
