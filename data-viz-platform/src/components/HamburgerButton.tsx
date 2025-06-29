export type HamburgerButtonProp = {
  onClick?: () => void;
  className?: string;
}

export default function HamburgerButton({onClick, className = ""}: HamburgerButtonProp) {


  return (
  <button type="button" aria-label="Toggle menu" onClick={onClick} className={`${className}`}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-6">
    <path fill-rule="evenodd" d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75ZM2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8Zm0 4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
    </svg>
    </button>
  )
}
