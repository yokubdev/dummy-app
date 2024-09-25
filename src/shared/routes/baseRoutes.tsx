import { Suspense } from 'react';
import { Navigate } from 'react-router-dom';

import * as Layouts from '@/pages/Layouts';

export const baseRoutes = [
  {
    path: '/',
    children: [
      {
        path: '',
        element: <Layouts.Main />
      },
      {
        path: '404',
        element: <Suspense>404</Suspense>
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to="/404" />
  }
];
