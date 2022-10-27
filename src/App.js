import { RouterProvider } from 'react-router-dom';
import router from './routes/routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <section>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </section>
  );
}

export default App;
