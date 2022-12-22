import { RouterProvider } from 'react-router-dom';
import router from './routes/routes';
import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import LoaderPrimary from './components/LoaderPrimary';

function App() {
  const [siteLoading, setSiteLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setSiteLoading(false), 1000);
  }, []);

  if (siteLoading) {
    return (
      <div className="w-screen h-screen bg-[#f1f3f5] flex items-center justify-center">
        <LoaderPrimary></LoaderPrimary>
      </div>
    );
  }
  return (
    <section>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </section>
  );
}

export default App;
