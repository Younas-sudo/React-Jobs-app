import React from "react";
import Homepages from "./pages/homepages";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NoFoundPage';
import JobPage, { jobLoader } from './pages/JobPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Homepages />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path='/jobs/:id' element={<JobPage />} loader={jobLoader}/>
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
