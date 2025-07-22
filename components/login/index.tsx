'use client'

import Image from "next/image";
import AuthTabs from "./auth-tab";

const LoginPage = () => {
    return (
        <div className="h-[100vh] bg-cover bg-no-repeat flex flex-col items-center pt-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1492409678553-da87ed48ffee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMTEwOHwwfDF8YWxsfHx8fHx8fHx8MTc1MzE5MDY0Nnw&ixlib=rb-4.1.0&q=80&w=1080')" }}>
            <Image src={"https://res.cloudinary.com/dmajhtvmd/image/upload/assets/images/login_register/header2.png"} width={261} height={163} alt="" />
            <AuthTabs />
        </div>
    );
}

export default LoginPage;