import { useState } from "react"

interface InputItemProps {
  // onAddItem: (item: string) => void;
  onAddItem: (item: string) => void;
}

export const InputItem: React.FC<InputItemProps>  = ({ onAddItem }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => { setInputValue(e.target.value) }

  const handleAddClick = () => {
    if (inputValue.trim()) {
      onAddItem(inputValue);
      setInputValue(''); // Limpiar el input después de agregar
    }
  
  };

  return (
    <div className="flex justify-around gap-1">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Agregar nueva tarea"
        className="bg-custom-light w-[338px] h-[44px] flex pt-[10px]
        pr-[12px] pb-[10px] pl-[10px] rounded-2xl items-center placeholder:text-custom-white 
        flex-grow basis-0 border-custom-xlight border-2 focus:border-custom-white focus:outline-none focus:bg-custom-bold focus:placeholder-slate-50"
      />
      <button onClick={handleAddClick} className="bg-custom-light w-[338px] h-[44px] flex pt-[10px]
        pr-[12px] pb-[10px] pl-[10px] rounded-2xl items-center
        flex-shrink-0 basis-0 border-custom-xlight border-2 text-center font-semibold text-green-950 focus:outline-none focus:border-custom-white" >AGREGAR</button>
    </div>
  );
}