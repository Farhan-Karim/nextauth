"use client";
import Link from "next/link";
import React from "react";

const Register = () => {

  const handleRegistration = async(e:any) =>{
    e.preventDefault();
    const email =  e.target[0].value;
    const password = e.target[1].value;
    console.log("email, password")
  }
  return (
    <main className="flex lg:h-[100wh]">
      <div className="w-full lg:w-[60%] p-8 md:p-14 flex items-center justify-center lg:justify-start">
        <div className="p-8 w-[600px]">
          <h1 className="text-6xl font-semibold">Sign Up</h1>
          <p className="mt-6 ml-1">
            Already have an account?
            <Link href="/login">Login</Link>
          </p>
          <div className="bg-black text-white w-full py-4  mt-10 rounded-full transition-transform hover:bg-black/[0.5] active:scale-90 flex justify-center items-center gap-4 cursor-pointer group:">
            <span className="font-medium text-white group-hover:text-white">Login with Github</span>
          </div>
          <form onSubmit={handleRegistration}>
            <div className="mt-10 pl-1 flex flex-col">
              <label htmlFor="">Email</label>
                <input type="email" required className="font-medium border-b border-black p-4 outline-0"/>
            </div>
            <div className="mt-10 pl-1 flex flex-col">
              <label htmlFor="">Password</label>
                <input type="password" required className="font-medium border-b border-black p-4 outline-0"/> 
            </div>
            <button className="bg-black text-white w-full py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.5]">Sign Up</button>
          </form>
        </div>
      </div>
      <div className="w-[40%]  bg-slate-400 bg-cover bg-right-top hidden lg:block"
      style={{backgroundImage: "url('/book.jpg')"}}></div>
    </main>
  );
};

export default Register;
