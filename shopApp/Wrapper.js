import React from 'react';
import Router from './Router';
import AuthProvider from './src/context/AuthProvider';

export default () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};
