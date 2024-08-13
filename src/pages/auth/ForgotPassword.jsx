import { Card, Input, Checkbox, Button, Typography } from "@material-tailwind/react";
import emailValidation from "../../../public/img/emailValidation.png";
import { Link } from "react-router-dom";

export function ForgotPassword() {
    const logo = <img src={emailValidation} alt="로고" width={120} height={120}></img>;
    return (
        <section className="flex justify-center">
            <div className="w-full lg:w-3/5 mt-24">
                <div className="text-center">
                    <Typography variant="h2" className="font-bold mb-4">
                        비밀번호 찾기
                    </Typography>
                </div>
                <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
                    <div className="mb-1 flex flex-col gap-4">
                        <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                            Email
                        </Typography>
                        <Input
                            type="email"
                            size="lg"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                            name
                        </Typography>
                        <Input
                            type="text"
                            size="lg"
                            placeholder="name"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                    </div>
                    <Button className="mt-6" fullWidth>
                        비밀번호 찾기
                    </Button>
                </form>
            </div>
        </section>
    );
}
export default ForgotPassword;
