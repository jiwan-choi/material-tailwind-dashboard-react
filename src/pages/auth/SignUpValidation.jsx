import { Card, Input, Checkbox, Button, Typography } from "@material-tailwind/react";
import emailValidation from "../../../public/img/emailValidation.png";
import { Link } from "react-router-dom";

export function SignUpValidation() {
    const logo = <img src={emailValidation} alt="로고" width={120} height={120}></img>;
    return (
        <section className="flex h-screen items-center justify-center ">
            <div className="justify-center items-center">
                <div className="text-center">
                    <Typography className="font-semibold text-4xl">이메일 주소를 인증해주세요</Typography>
                </div>
                <form className="mt-[85px] mx-auto">
                    <div className="flex flex-col items-center">
                        {logo}
                        <Typography className="text-[#777777] mt-[30px] font-medium text-2xl font-semibold" align="center">
                            관리자에게 이메일 인증을 위한 메일이 발송 되었습니다. <br />
                            <Typography color="black" className="mt-[34px] mb-[34px] font-bold text-[28px] underline	" align="center">
                                가입 계정 : name@email.com
                            </Typography>
                            <Typography className=" text-2xl font-semibold	 " align="center">
                                검토 후, 승인 완료 시 서비스 이용이 가능하며
                                <Typography className="text-2xl mt-[20px] font-semibold	" align="center">
                                    가입 한 계정주소로 안내 해 드립니다.
                                </Typography>
                            </Typography>
                        </Typography>
                    </div>
                </form>
            </div>
        </section>
    );
}
export default SignUpValidation;
