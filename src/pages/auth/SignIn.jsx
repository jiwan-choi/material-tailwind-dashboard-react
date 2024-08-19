import { Card, Input, Checkbox, Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function SignIn() {
    return (
        <section className="flex h-screen items-center justify-center ">
            <div className="w-[343px] justify-center items-center">
                <div className="text-center">
                    <Typography className="font-semibold text-4xl">DAS SDL</Typography>
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
                            Password
                        </Typography>
                        <Input
                            type="password"
                            placeholder="********"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 h-[48px] text-base"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                    </div>
                    <Button className="mt-[40px] h-[48px] text-[20px]" fullWidth>
                        로그인
                    </Button>

                    <div className="flex items-center justify-between ">
                        <Typography variant="paragraph" className="text-center  mt-4 font-semibold	">
                            <Link to="/auth/forgotPassword">비밀번호 찾기</Link>
                        </Typography>
                        <Typography variant="paragraph" className="text-center  mt-4 font-semibold	">
                            <Link to="/auth/signUp">계정 생성</Link>
                        </Typography>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default SignIn;
