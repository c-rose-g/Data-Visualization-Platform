type EditVariablesPanelProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function EditVariablesPanel({isOpen, onClose}: EditVariablesPanelProps) {

  return (
    <div
      className={`fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'}`}
      onClick={onClose}
    >
      {/* Semi-transparent background */}
      <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity" />
      {/* Slide-over panel */}
      <div
        className={`absolute top-0 right-0 h-full w-[440px] bg-[#0E0D0D] border-l border-[#5A5A5A] shadow-xl \ transform transition-transform duration-300 ease-in-out \${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#5A5A5A]">
          <h3 className="text-lg font-semibold text-white">Edit Variables</h3>
          <button
            onClick={onClose}
            className="p-2 rounded hover:bg-gray-700"
            aria-label="Close panel"
          >
            {/* X icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {/* Content area */}
        <div className="px-6 py-4 overflow-auto h-[calc(100%-64px)]">
          {/* TODO: Add variable editing form elements here */}
        </div>
      </div>
    </div>
  )
}
