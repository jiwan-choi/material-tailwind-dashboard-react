import { Card, Input, Checkbox, Button, Typography } from "@material-tailwind/react";

export function NewPassword() {
    return (
        <section className="flex h-screen items-center justify-center ">
            <div className="w-[343px] justify-center items-center">
                <div className="text-center">
                    <Typography className="font-semibold text-4xl">새로운 비밀번호</Typography>
                </div>
                <form className="mt-[57px] mx-auto">
                    <div className="flex flex-col">
                        <Typography color="blue-gray" className="mb-[12px] font-semibold text-xl">
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

                        <Typography color="blue-gray" className="mb-[12px] mt-[16px] font-semibold text-xl	">
                            Verify Password
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
                        재설정
                    </Button>
                </form>
            </div>
        </section>
    );
}
export default NewPassword;
