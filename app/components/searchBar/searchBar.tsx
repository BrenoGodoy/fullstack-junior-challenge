import Icon from "./components/icon";

export default function SearchBar() {
  return (
    <form className="flex flex-col items-start mt-10">
        <div className="relative w-3/4">
            <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm bg-[#D0D0D240]" placeholder="Search" required />
            <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-custom-primary-500 rounded-md">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search</span>
            </button>
        </div>
        <div className="flex flex-col mt-10">
          <div className="flex flex-wrap">
            <Icon>Fresh Vegetables</Icon>
            <Icon>100% Guarantee</Icon>
          </div>
          <div className="flex flex-wrap">
            <Icon>Cash on Delivery</Icon>
            <Icon>Fast Delivery</Icon>
          </div>
        </div>
    </form>
  )
}