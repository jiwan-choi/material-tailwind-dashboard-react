import { Card, Input, Checkbox, Button, Typography } from "@material-tailwind/react";
import emailValidation from "../../../public/img/emailValidation.png";
import { Link } from "react-router-dom";

export function SignUpValidation() {
    const logo = <img src={emailValidation} alt="로고" width={120} height={120}></img>;
    return (
        <section className="flex justify-center">
            <div className="w-full lg:w-3/5 mt-24">
                <div className="text-center">
                    <Typography variant="h2" className="font-bold mb-4">
                        이메일 주소를 인증해주세요.
                    </Typography>
                </div>
                <form className="flex flex-col mt-8 mb-2 mx-auto w-96 max-w-screen-lg ">
                    <div className="mb-1 flex flex-col gap-4 items-center">
                        {logo}
                        <Typography variant="small" color="gray" className="-mb-3 font-medium" align="center">
                            이메일 인증을 위한 메일이 발송 되었습니다.
                            <br />
                            회원가입 완료를 위한 이메일 인증을 진행 해 주세요.
                            <br />
                            <br />
                            {/* 가입 이메일 주소 : ${} */}
                            <Typography variant="big" color="black" className="-mb-3 font-bold" align="center">
                                가입 이메일 주소 : name@email.com
                            </Typography>
                            <br />
                            <br />
                            이메일이 올바르게 도착하지 않은 경우
                            <br />
                            하단에 '이메일 다시 보내기' 버튼을 클릭해주세요.
                        </Typography>
                        <Button className="mt-6 " fullWidth>
                            이메일 다시 보내기
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
}
export default SignUpValidation;
