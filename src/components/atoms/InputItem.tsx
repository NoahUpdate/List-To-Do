import { useState, useRef } from "react"

interface InputItemProps {
  // onAddItem: (item: string) => void;
  onAddItem: (item: string) => void;
}

export const InputItem: React.FC<InputItemProps>  = ({ onAddItem }) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null); // Referencia al input
  const buttonRef = useRef<HTMLButtonElement>(null); // Referencia al botón

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => { setInputValue(e.target.value) }

  const handleAddItem  = () => {
    if (inputValue.trim()) {
      onAddItem(inputValue);
      setInputValue(''); // Limpiar el input después de agregar
      inputRef.current?.focus(); // Volver a enfocar el input
    }
  
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddItem();
      buttonRef.current?.focus(); // Focaliza el botón al presionar Enter
    }
  };

  const handleButtonKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Tab") {
      inputRef.current?.focus(); // Volver al input si se presiona Tab
      e.preventDefault(); // Prevenir el comportamiento predeterminado del Tab
    }
  };

  return (
    <div className="flex justify-around gap-1">
      <input
        ref={inputRef} // Asigna la referencia al input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown} // Agrega el manejador de eventos para "Enter"
        placeholder="Agregar nueva tarea"
        className="bg-custom-light w-[338px] h-[44px] flex pt-[10px]
        pr-[12px] pb-[10px] pl-[10px] rounded-2xl items-center placeholder:text-custom-white 
        flex-grow basis-0 border-custom-xlight border-2 focus:border-custom-white focus:outline-none focus:bg-custom-bold focus:placeholder-slate-50"
        />
      <button
        ref={buttonRef} // Asigna la referencia al botón
        onClick={handleAddItem}
        onKeyDown={handleButtonKeyDown} // Manejar la tecla Tab
        className="bg-custom-light w-[338px] h-[44px] flex pt-[10px]
        pr-[12px] pb-[10px] pl-[10px] rounded-2xl items-center
        flex-shrink-0 basis-0 border-custom-xlight border-2
        text-center font-semibold text-green-950 focus:outline-none focus:border-custom-white" >AGREGAR</button>
    </div>
  );
}