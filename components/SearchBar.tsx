import { Search } from "lucide-react"

const SearchBar = () => {
  return (
    <div className="hidden sm:flex items-center gap-2 rounded-md ring-1 ring-green-200 px-2 py-1 shadow-md text-white">
        <Search className="w-4 h-4 text-white"/>
        <input id="search" placeholder="search..." className="text-sm outline-0"/>
    </div>
  )
}

export default SearchBar