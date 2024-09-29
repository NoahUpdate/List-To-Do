import './App.css';
import { Card } from '@organisms';
import { SearchInput } from '@molecules';

function App() {
  return (
    <div
      className="bg-my-image bg-cover bg-top bg-no-repeat 
		h-screen w-screen flex items-center justify-center"
    >
      <Card>
        <SearchInput>456</SearchInput>
        <SearchInput>456</SearchInput>
      </Card>

      
    </div>
  );
}

export default App;
