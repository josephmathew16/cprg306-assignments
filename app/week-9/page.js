"use client"; 
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";
import { useEffect } from "react";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Handle GitHub login
  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <main className="min-h-screen p-4 bg-gray-100">
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Shopping List App
        </h1>
        
        {user ? (
          <div className="space-y-4">
            <p className="text-gray-700">
              Welcome, {user.displayName} ({user.email})
            </p>
            <button
              onClick={handleLogout}
              className="w-full p-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
            <Link 
              href="/week-9/shopping-list"
              className="block w-full p-2 text-center bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Continue to Shopping List
            </Link>
          </div>
        ) : (
          <button
            onClick={handleLogin}
            className="w-full p-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition-colors"
          >
            Login with GitHub
          </button>
        )}
      </div>
    </main>
  );
}