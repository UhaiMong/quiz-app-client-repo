import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routers } from './Routs/Mainrout';

function App() {
  return (
    <div>
      <RouterProvider router={routers}/>
    </div>
  );
}

export default App;
