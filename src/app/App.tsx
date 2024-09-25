import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';

import { router } from '@/pages/router';

function App() {
  return (
    <NextUIProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </NextUIProvider>
  );
}

export default App;
