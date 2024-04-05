import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <div>
      <ul className="flex justify-between m-10 items-center bg-slate-400 p-5">
        <div>
          <Link href="/">
            <li>Nextauth</li>
          </Link>
        </div>
        <div className="flex gap-10">
          <Link href="/home">
            <li className=" hover:text-cyan-300">Home</li>
          </Link>
          <Link href="/login">
            <li className=" hover:text-cyan-300">Login</li>
          </Link>
          <Link href="/register">
            <li className=" hover:text-cyan-300">Register</li>
          </Link>
        </div>
      </ul>
    </div>
  );
};
