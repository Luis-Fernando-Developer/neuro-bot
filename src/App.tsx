
import './App.css'
import Builder from './components/Builder'
import Sidebar from './components/SidebarLeftBuilder/SidebarLeft';


function App() {
  
  return (
    <div className='w-full min-h-screen flex  '>
      <Sidebar className='bg-fuchsia-950 p-2 min-h-full ' />
      <Builder className='w-full h-screen ' />
    </div>
  )
}

export default App;
