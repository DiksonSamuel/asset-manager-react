import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RouterPath from './routerPath';
import Pages from '../pages';
import LayoutHOC from '../components/LayoutHOC';

const MainRouter = () => {
  return (
    <div className='flex flex-1 h-screen'>
      <Router>
        <Routes>
          <Route path={RouterPath.DASHBOARD} element={<LayoutHOC Component={Pages.Dashboard} />} />
          <Route path={RouterPath.ASSETS} element={<LayoutHOC Component={Pages.Assets} />} />
        </Routes>
      </Router>
    </div>

  )
}

export default MainRouter;