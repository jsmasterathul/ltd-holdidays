import Head from "next/head";
import { useEffect, useState } from "react";

import LoginForm from "./auth/login";
import ProfileSection from "./profile/profile";
import authContext from "../contexts/auth-context";

export default function Layout({ children, home }) {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [user, setUser] = useState(false);

  useEffect(() => {
    if (user) {
      setShowLoginForm(false);
    }
  }, [user]);

  const getLoginForm = () => (
    <div onClick={() => setShowLoginForm(true)}>
      Sign-In
      {showLoginForm && <LoginForm />}
    </div>
  );
  const getProfileSection = () => <ProfileSection />;

  return (
    <authContext.Provider value={{ user, setUser }}>
      <div>
        <Head>
          <link rel="icon" href="/images/Logo.png" />
        </Head>
        <header>
          <div className="fixed w-screen bg-white bg-opacity-60">
            <div className="flex p-4 items-center">
              <div>
                <img src="/images/Logo.png" className="w-48" />
              </div>
              <div className="ml-auto pr-8 cursor-pointer">
                {user ? getProfileSection() : getLoginForm()}
              </div>
            </div>
          </div>
        </header>
        <main>{children}</main>
      </div>
    </authContext.Provider>
  );
}
