type SearchIconProps = {
  className?: string;
};

export default function SearchIcon({className= ""}: SearchIconProps) {
  return (
   <button type="button" aria-label="search button" className={`${className}`}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  </svg>
  </button>

  )
}
