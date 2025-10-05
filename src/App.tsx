
import { useState } from 'react';
import './App.css'
import Builder from './components/Builder'
import Sidebar from './components/SidebarLeftBuilder/SidebarLeft';


const App = () => {

  const [addNodeHandler, setAddNodeHandler] = useState<((type: string) => void) | null>(null);
  
  const handleAddNode = (type: string) => {
    if (addNodeHandler) {
      addNodeHandler(type);
    }
  };

  return (
    <div className='w-full min-h-screen flex'>
      <Sidebar 
        className='bg-fuchsia-950 '
        onAddNode={handleAddNode} />
      <Builder 
        onSetHandler={(handler) => setAddNodeHandler(() => handler)} 
        className='flex-1'
      />
    </div>
  );
}

export default App;
