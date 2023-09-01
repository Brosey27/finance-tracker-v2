import { auth } from "@/lib/firebase";

import React, { useContext } from "react";
import { authContext } from "@/lib/store/auth-context";
import { FcGoogle } from "react-icons/fc";
import { signInAnonymously } from "firebase/auth";


function SignIn() {
  const { googleLoginHandler } = useContext(authContext);
 

  // Function to sign in with a demo account (anonymous sign-in)
  const demoAccountSignIn = async () => {
    try {
      // Sign in anonymously
      await signInAnonymously(auth);

      // After signing in anonymously, navigate to the main page
      router.push("/main-page"); // Replace with your actual main page route
    } catch (error) {
      console.error("Error signing in with demo account:", error);
    }
  };

  // Function to create a demo user document in Firestore
  const createDemoUser = async () => {
    try {
      // Generate a unique user ID (since anonymous users don't have email/password)
      const uniqueUserId = generateUniqueUserId();

      // Define the data for the demo user
      const demoUserData = {
        displayName: "Demo User",
        email: null, // Anonymous users have no email
        // Add other demo user data fields as needed
      };

      // Add the demo user data to Firestore
      await setDoc(doc(db, "users", uniqueUserId), demoUserData);
    } catch (error) {
      console.error("Error creating demo user:", error);
    }
  };

  // Helper function to generate a unique user ID
  const generateUniqueUserId = () => {
    // Generate a unique ID based on your application's logic
    // For example, you can use a combination of timestamp and random numbers
    return "demo_" + Date.now() + Math.floor(Math.random() * 1000);
  };

  return (
    <main className="container max-w-2xl px-6 mx-auto">
      <h1 className="mb-6 text-6xl font-bold text-center">Finance Tracker</h1>

      <div className="flex flex-col overflow-hidden shadow-md shadow-slate-500 bg-slate-800 rounded-2xl">
        <div className="h-52">
          <img
            className="object-cover w-full h-full"
            src="https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg"
            alt="Finance Tracker"
          />
        </div>

        <div className="px-4 py-4">
          <h3 className="text-2xl text-center">Please sign in to continue</h3>

          <button
            onClick={googleLoginHandler}
            className="flex self-start gap-2 p-4 mx-auto mt-6 font-medium text-white align-middle bg-gray-700 rounded-lg"
          >
            <FcGoogle className="text-2xl" /> Sign in with Google
          </button>

          <button
            onClick={demoAccountSignIn}
            className="flex self-start gap-2 p-4 mx-auto mt-3 font-medium text-white align-middle bg-gray-700 rounded-lg"
          >
            Sign in with Demo Account
          </button>
        </div>
      </div>
    </main>
  );
}

export default SignIn;