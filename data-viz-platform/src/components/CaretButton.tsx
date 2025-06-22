type CaretButtonProps = {
  onClick?: () => void;
  className?: string;
};

export default function CaretButton({onClick, className = "" }: CaretButtonProps) {

  return (
    <button type="button" onClick={onClick } className={`pl-2 pr-2 pt-1 pb-1 border border-[#C8E972] text-[#C8E972] ml-80  hover:bg-gray-700 rounded-full transform transition-transform ${className}`} aria-label="Toggle details">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
      </svg>
    </button>
  )
};
