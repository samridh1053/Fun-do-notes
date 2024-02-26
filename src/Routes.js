import Login from './Pages/login.js';
import Signup from './Pages/signup.js';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import NoteContainer from './components/NotesContainer.js'
import ArchiveContainer from './components/ArchiveContainer.js'
import TrashContainer from './components/TrashContainer.js'
import Dashboard from './components/Dashboard.js';

export const Routers = () => {

    const AppRoutes = createBrowserRouter([
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/",
            element: <Signup />
        },
        {
            path: "/dashboard",
            element: <Dashboard />,

            children: [
                { path: "notes", element: <NoteContainer /> },
                { path: "archive", element: <ArchiveContainer /> },
                { path: "trash", element: <TrashContainer /> }
            ],
        },
    ])
    return (
        <RouterProvider router={AppRoutes} ></RouterProvider>
    )
}