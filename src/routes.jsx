import { HomeIcon, UserCircleIcon, TableCellsIcon, InformationCircleIcon, ServerStackIcon, RectangleStackIcon } from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "@/pages/dashboard";
import { SignIn, SignUp, SignUpValidation, ForgotPassword, ForgotPasswordValidation, NewPassword } from "@/pages/auth";

const icon = {
    className: "w-5 h-5 text-inherit",
};

export const routes = [
    {
        layout: "dashboard",
        pages: [
            {
                icon: <HomeIcon {...icon} />,
                name: "dashboard",
                path: "/home",
                element: <Home />,
            },
            {
                icon: <UserCircleIcon {...icon} />,
                name: "profile",
                path: "/profile",
                element: <Profile />,
            },
            {
                icon: <TableCellsIcon {...icon} />,
                name: "tables",
                path: "/tables",
                element: <Tables />,
            },
            {
                icon: <InformationCircleIcon {...icon} />,
                name: "notifications",
                path: "/notifications",
                element: <Notifications />,
            },
        ],
    },
    {
        title: "auth pages",
        layout: "auth",
        pages: [
            {
                icon: <ServerStackIcon {...icon} />,
                name: "SignIn",
                path: "/signIn",
                element: <SignIn />,
            },
            {
                icon: <RectangleStackIcon {...icon} />,
                name: "SignUp",
                path: "/signUp",
                element: <SignUp />,
            },
            {
                icon: <RectangleStackIcon {...icon} />,
                name: "SignUpValidation",
                path: "/signUpValidation",
                element: <SignUpValidation />,
            },
            {
                icon: <RectangleStackIcon {...icon} />,
                name: "ForgotPassword",
                path: "/forgotPassword",
                element: <ForgotPassword />,
            },
            {
                icon: <RectangleStackIcon {...icon} />,
                name: "ForgotPasswordValidation",
                path: "/forgotPasswordValidation",
                element: <ForgotPasswordValidation />,
            },
            {
                icon: <RectangleStackIcon {...icon} />,
                name: "NewPassword",
                path: "/newPassword",
                element: <NewPassword />,
            },
        ],
    },
];

export default routes;
