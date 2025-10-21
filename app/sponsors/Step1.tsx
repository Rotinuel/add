export default function Step1() {
  return (
    <form className="grid md:grid-cols-2 gap-6">
      <div>
        <label className="block text-gray-700 font-medium mb-1">Company</label>
        <input type="text" className="w-full border rounded px-3 py-2" />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Company Website (optional)
        </label>
        <input type="text" className="w-full border rounded px-3 py-2" />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">First name</label>
        <input type="text" className="w-full border rounded px-3 py-2" />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-1">Last name</label>
        <input type="text" className="w-full border rounded px-3 py-2" />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">Email Address</label>
        <input type="email" className="w-full border rounded px-3 py-2" />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-1">Phone number</label>
        <input type="tel" className="w-full border rounded px-3 py-2" placeholder="+234..." />
      </div>

      <div className="md:col-span-2">
        <label className="block text-gray-700 font-medium mb-1">Company Description</label>
        <textarea className="w-full border rounded px-3 py-2 h-24" />
      </div>
    </form>
  );
}
