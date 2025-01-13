import "./global.css";
import style from "./App.module.css";
import {
    Outlet,
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import HomePage from "./components/HomePage/HomePage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
        </Route>
    )
);

function RootLayout() {
    return (
        <div className={style.app}>
            <Navbar />
            <Outlet />
        </div>
    );
}

export default function App() {
    return <RouterProvider router={router} />;
}
