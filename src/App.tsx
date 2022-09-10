import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import ArticlesPage from './Pages/ArticlesPage';
import { ProtectedRoute } from './routes/ProtectedRoute';
import Plans from './Pages/Plans';
import NotFound from './Pages/NotFound';
import ArticlePage from './Pages/ArticlePage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/articles' element={<ProtectedRoute />}>
          <Route path='/articles' element={<ArticlesPage />} />
        </Route>
        <Route path='/articles/:id' element={<ProtectedRoute />}>
          <Route path='/articles/:id' element={<ArticlePage />} />
        </Route>
        <Route path='/plans' element={<ProtectedRoute />}>
          <Route path='/plans' element={<Plans />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
