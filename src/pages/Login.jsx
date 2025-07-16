import kakaoLogo from '../assets/kakao-icon.svg';

export const Login = () => {
  return (
    <main className="flex flex-col items-center justify-center h-full flex-1 bg-white">
      <h1 className="text-[#191919] text-2xl font-semibold text-center mb-8">
        카카오톡으로 간편하게 로그인하고 <br />
        서비스를 이용해보세요!
      </h1>
      <button className="flex items-center justify-center gap-2 w-[280px] py-3 cursor-pointer rounded-md bg-[#FEE500] text-[#191919] hover:opacity-90 transition">
        <img src={kakaoLogo} alt="kakao" className="w-6 h-6" />
        <span className="text-base font-semibold">카카오로 계속하기</span>
      </button>
    </main>
  );
};
