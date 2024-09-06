import React from 'react';
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFound from './pages/NotFound';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';


const App = () => {
    const addJob = async (newJob) => {
        const res = await fetch('http://localhost:8080/jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newJob)
        });
        return;
    }

    const editJob = async (updatedJob, id) => {
        const res = await fetch(`http://localhost:8080/jobs/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedJob)
        });
        return;
    }

    const deleteJob = async (id) => {
        const res = await fetch(`http://localhost:8080/jobs/${id}`, {
            method: 'DELETE'
        });
        return;
    }
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path='/jobs' element={<JobsPage />} />
                <Route path='/edit-job/:id' element={<EditJobPage editJobSubmit={editJob} />} loader={jobLoader} />
                <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
                <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />

                <Route path='*' element={<NotFound />} />
            </Route>
        )
    )
    return (
        <>
            {/* <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={
                        <>
                            <Hero title="test title" subtitle="this is subtitle" />
                            <HomeCards />
                            <JobListings />
                            <ViewAllJobs />
                        </>
                    } />
                    <Route path='*' element={<Hero title="test title" subtitle="this is subtitle" />} />
                </Routes>
            </BrowserRouter> */}
            <RouterProvider router={router} />
        </>
    )
}

export default App
