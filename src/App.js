import { RouterProvider } from 'react-router-dom';
import router from './routes/routes';
import './App.css';

function App() {
  return (
    <section>
      <RouterProvider router={router}></RouterProvider>
    </section>
  );
}

export default App;
