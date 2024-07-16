"use client";

import { useAuth } from "@/lib/contexts/AuthContext";
import Link from "next/link";
import React from "react";

const LoginButton = () => {
  const { user, isLoading,  handleSignInWithGoogle, handleLogout } =
    useAuth();

  //TODO UI change karni hai
  if (isLoading) {
    <div
      class="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-200 bg-opacity-50"
      id="loading-ui"
    >
      <div class="animate-spin rounded-full border-4 border-t-4 border-blue-500 h-12 w-12 mb-4"></div>
      <p class="text-lg text-gray-600">Loading...</p>
    </div>;
  }

  if (user) {
    return <div className="flex gap-4 items-center">
      <button
        onClick={() => {
          handleLogout();
        }}
        className="bg-black text-white px-4 py-2 rounded-full flex items-center gap-2"
      >
        Logout
      </button>

      <Link href="/admin">

      <div className="flex gap-4 ">
        <img className="object-cover h-10 w-10 rounded-full" src={user?.photoURL} alt="" />
        <div className="">
          <h1 className="font-bold">{user?.displayName}</h1>
          <h1 className="text-sm text-gray-500">{user?.email}</h1>
        </div>
        
      </div>
    </Link>

    </div>
  }

  return (
    <button
      onClick={() => {
        handleSignInWithGoogle();
      }}
      className="bg-black text-white px-4 py-2 rounded-full flex items-center gap-2"
    >
      <img className="h-7" src="/google.png" alt="" />
      Sign in With Google
    </button>
  );
};

export default LoginButton;
