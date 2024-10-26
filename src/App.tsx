import './App.css';
import { Card } from '@organisms';
import { InputItem, ItemList } from '@atoms';
import { useState } from'react';

function App() {
  const [items, setItems] = useState<string[]>([]);

  const handleAddItem = (item: string) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const handleRemoveItem = (item: string) => {
    setItems((prevItems) => prevItems.filter(i => i !== item));
  };

  return (
    <div
      className="bg-my-image bg-cover bg-top bg-no-repeat 
		h-screen w-screen flex items-center justify-center"
    >
      <Card>
        <h1 className='text-center font-semibold text-green-950'>LISTA DE TAREAS</h1>
        <div className="flex-grow">
        <ItemList items={items} onRemoveItem={handleRemoveItem} />
        </div>
        <InputItem onAddItem={(handleAddItem)}/>
      </Card>

      
    </div>
  );
}

export default App;
