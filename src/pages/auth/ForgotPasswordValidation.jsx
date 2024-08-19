import { Card, Input, Checkbox, Button, Typography } from "@material-tailwind/react";
import emailValidation from "../../../public/img/emailValidation.png";
import { Link } from "react-router-dom";

export function ForgotPasswordValidation() {
    const logo = <img src={emailValidation} alt="로고" width={120} height={120}></img>;
    return (
        <section className="flex h-screen items-center justify-center ">
            <div className="justify-center items-center">
                <div className="text-center">
                    <Typography className="font-semibold text-4xl">비밀번호를 확인해주세요.</Typography>
                </div>
                <form className="mt-[85px] mx-auto">
                    <div className="flex flex-col items-center">
                        {logo}
                        <Typography className="text-[#777777] mt-[30px] font-medium text-2xl font-semibold" align="center">
                            아래 계정으로 비밀번호가 발송 되었습니다.
                            <Typography color="black" className="mt-[34px] mb-[34px] font-bold text-[28px] underline	" align="center">
                                name@email.com
                            </Typography>
                        </Typography>
                    </div>
                    <Button className="mt-[40px] h-[48px] text-[20px]" fullWidth>
                        <Link to="/auth/signIn" className="mt-[40px] h-[48px] text-[20px]" fullWidth>
                            로그인 하러가기
                        </Link>
                    </Button>
                </form>
            </div>
        </section>
    );
}
export default ForgotPasswordValidation;
