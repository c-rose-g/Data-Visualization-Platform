type EditVariablesButtonProps = {
 onClick?: () => void;
 className?: string;
}
export default function EditVariablesButton({onClick, className = "font-roobert border bg-[#242424] border-[#5a5a5a] rounded-md shadow-[1px_1px_0_rbg(0,0,0)] shadow-black p-2 text-[12px]"}: EditVariablesButtonProps) {
  return (
  <button onClick={onClick} id="edit-variables-btn" className={`${className}`} type="button">Edit Variables</button>
  )
}
