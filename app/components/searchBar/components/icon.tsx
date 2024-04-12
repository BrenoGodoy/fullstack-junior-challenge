export default function Icon({children}: any) {
  return (
    <div className="flex flex-wrap mb-5 mr-16">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 bg-custom-secondary-500 text-white rounded-full">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
      </svg>
      <span className="ml-2">{children}</span>
    </div>
  )
}