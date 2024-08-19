import { Card, Input, Checkbox, Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function SignUp() {
    return (
        <section className="flex h-screen items-center justify-center ">
            <div className="w-[343px] justify-center items-center">
                <div className="text-center">
                    <Typography className="font-semibold text-4xl">Sign Up</Typography>
                </div>
                <form className="mt-[57px] mx-auto">
                    <div className="flex flex-col">
                        <Typography color="blue-gray" className="mb-[12px] font-semibold text-xl	">
                            Email
                        </Typography>
                        <Input
                            type="email"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 h-[48px] text-base"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography color="blue-gray" className="mb-[12px] mt-[16px] font-semibold text-xl	">
                            Name
                        </Typography>
                        <Input
                            type="text"
                            placeholder="name"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900  h-[48px]"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                    </div>
                    <div className="flex mt-[19px] gap-10 ml-1">
                        <div class="flex items-center">
                            <input
                                id="default-radio-1"
                                type="radio"
                                value=""
                                name="default-radio"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-500 dark:text-gray-300">
                                개발담당자
                            </label>
                        </div>
                        <div class="flex items-center">
                            <input
                                checked
                                id="default-radio-2"
                                type="radio"
                                value=""
                                name="default-radio"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label for="default-radio-2" class="ms-2 text-sm font-medium text-gray-500 dark:text-gray-300">
                                보안담당자
                            </label>
                        </div>
                    </div>
                    <Button className="mt-[40px] h-[48px] text-[20px]" fullWidth>
                        회원가입
                    </Button>

                    <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
                        Already have an account?
                        <Link to="/auth/sign-in" className="text-gray-900 ml-1">
                            Sign In
                        </Link>
                    </Typography>
                </form>
            </div>
        </section>
    );
}

export default SignUp;
