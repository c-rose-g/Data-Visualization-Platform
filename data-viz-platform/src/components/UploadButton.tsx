type UploadButtonProps = {
 onClick?: () => void;
 className?: string;
};

export default function UploadButton({onClick, className = "border bg-[#242424] border-[#5a5a5a] rounded-md shadow-[1px_1px_0_rbg(0,0,0)] shadow-black p-3 text-[#B9B9B9"}: UploadButtonProps) {
  return (
   <button type="button" id="upload-btn" onClick={onClick} aria-label="Upload button" className={`${className}`}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-5">
  <path d="M7.25 10.25a.75.75 0 0 0 1.5 0V4.56l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06l2.22-2.22v5.69Z" />
  <path d="M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z" />
</svg>

   </button>
   /*<button id="upload-btn" onClick={handleUpload} className="border bg-[#242424] border-[#5a5a5a] rounded-md shadow-[1px_1px_0_rbg(0,0,0)] shadow-black p-2" type="button">{<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-[#B9B9B9]">
          <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06l-3.22-3.22V16.5a.75.75 0 0 1-1.5 0V4.81L8.03 8.03a.75.75 0 0 1-1.06-1.06l4.5-4.5ZM3 15.75a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
          </svg>}
          </button> */
  )
}
