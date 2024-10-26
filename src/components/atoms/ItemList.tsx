// import { useState } from "react";

interface ItemListProps {
  items: string[];
  onRemoveItem: (item: string) => void;
}

export const ItemList: React.FC<ItemListProps> = ({ items, onRemoveItem }) => {
  
  // const [itemsArray, setItemsArray] = useState<string[]>(['Elemento 1', 'Elemento 2', 'Elemento 3']);
  // // const [itemsArray, setItemsArray] = useState<string[]>(items);
  
  // const handleClick = (item:string) => {
  //   // Filtramos el array para eliminar el elemento clickeado
  //   setItemsArray(itemsArray.filter(i => i !== item));

  const handleClick = (item: string) => {
    onRemoveItem(item); // Llama al callback para eliminar el ítem
  };

    return (
      <ul className="flex flex-col gap-1">
        {items.map((item, index) => (
          <li
            key={index}
            className="bg-custom-light  h-[44px] pt-[10px] pr-[12px] pb-[10px] pl-[10px] 
          rounded-md gap-1 border-custom-xlight border-2 flex justify-between"
          >
            {item}
            <button onClick={() => handleClick(item)} className="bg-custom-light border-custom-xlight border-2 p-1 rounded-sm flex items-center hover:border-custom-white hover:bg-custom-bold">-</button>
          </li>
        ))}
      </ul>
    );
};