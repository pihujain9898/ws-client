import React from 'react';
import { Toaster } from 'react-hot-toast';

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <Toaster
      position="top-right"
      gutter={8}
      toastOptions={{
        style: {
          border: '1px solid #3b7aff',
          padding: '8px 16px',
          background: 'white',
          color: '#1e3a8a',
        },
      }}
    />
    {children}
  </>
);