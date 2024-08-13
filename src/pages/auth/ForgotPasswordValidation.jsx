import { Card, Input, Checkbox, Button, Typography } from "@material-tailwind/react";
import emailValidation from "../../../public/img/emailValidation.png";
import { Link } from "react-router-dom";

export function ForgotPasswordValidation() {
    const logo = <img src={emailValidation} alt="로고" width={120} height={120}></img>;
    return (
        <section className="flex justify-center">
            <div className="w-full lg:w-3/5 mt-24">
                <div className="text-center">
                    <Typography variant="h2" className="font-bold mb-4">
                        새로운 비밀번호 요청
                    </Typography>
                </div>
                <form className="flex flex-col mt-8 mb-2 mx-auto w-96 max-w-screen-lg ">
                    <div className="mb-1 flex flex-col gap-4 items-center">
                        {logo}
                        <Typography variant="small" color="gray" className="-mb-3 font-medium" align="center">
                            담당자에게 새로운 비밀번호 요청 메일이 발송 되었습니다.
                            <br />
                            잠시만 기다려주세요.
                            <br />
                            <br />
                            <Typography variant="big" color="black" className="-mb-3 font-bold" align="center">
                                가입 된 이메일 주소 : name@email.com
                            </Typography>
                            <br />
                        </Typography>
                        <Button className="mt-6 " fullWidth>
                            비밀번호 재요청
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
}
export default ForgotPasswordValidation;
