import { Routes, Route } from "react-router-dom";
import { ChartPieIcon, UserIcon, UserPlusIcon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { Navbar, Footer } from "@/widgets/layout";
import routes from "@/routes";

export function Auth() {
    const navbarRoutes = [
        {
            name: "dashboard",
            path: "/dashboard/home",
            icon: ChartPieIcon,
        },
        {
            name: "profile",
            path: "/dashboard/home",
            icon: UserIcon,
        },
        {
            name: "SignUp",
            path: "/auth/SignUp",
            icon: UserPlusIcon,
        },
        {
            name: "SignIn",
            path: "/auth/SignIn",
            icon: ArrowRightOnRectangleIcon,
        },
        {
            name: "SignUpValidation",
            path: "/auth/SignUpValidation",
            icon: ArrowRightOnRectangleIcon,
        },
        {
            name: "ForgotPassword",
            path: "/auth/ForgotPassword",
            icon: ArrowRightOnRectangleIcon,
        },
        {
            name: "ForgotPasswordValidation",
            path: "/auth/ForgotPasswordValidation",
            icon: ArrowRightOnRectangleIcon,
        },
    ];

    return (
        <div className="relative min-h-screen w-full">
            <Routes>{routes.map(({ layout, pages }) => layout === "auth" && pages.map(({ path, element }) => <Route exact path={path} element={element} />))}</Routes>
        </div>
    );
}

Auth.displayName = "/src/layout/Auth.jsx";

export default Auth;
