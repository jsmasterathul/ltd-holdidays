import "../../styles/Home.module.css";
import { useEffect, useState, useContext, useRef } from "react";
//use useRef to get the instance of ui

import { auth, firebaseAuthObject } from "../../config/firebase";
import authContext from "../../contexts/auth-context";

export default function LoginForm() {
  const { setUser } = useContext(authContext);
  const ui = useRef(null);
  const [showSuccessLogin, setShowSuccessLogin] = useState(false);

  useEffect(async () => {
    const firebaseui = await import("firebaseui");

    console.log("ui", firebaseui.auth.AuthUI.getInstance());

    // firebase auth ui should be instantiated only if its not already loaded.
    if (!firebaseui.auth.AuthUI.getInstance()) {
      // delay the import until window object is ready
      ui.current = new firebaseui.auth.AuthUI(auth);
      ui.current.start("#firebaseui", {
        callbacks: {
          signInSuccessWithAuthResult: function (authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.

            return false;
          },
          uiShown: function () {
            // The widget is rendered.
            // Hide the loader. check
            document.getElementById("loader").style.display = "none";
          },
        },
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: "popup",
        signInOptions: [firebaseAuthObject.EmailAuthProvider.PROVIDER_ID],
      });
    } else {
      firebaseui.auth.AuthUI.getInstance().start("#firebaseui", {
        callbacks: {
          signInSuccessWithAuthResult: function (authResult, redirectUrl) {
            console.log("autn", authResult);
            if (authResult) {
              setShowSuccessLogin(true);
            }
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.

            return false;
          },
          uiShown: function () {
            // The widget is rendered.
            // Hide the loader. check
            document.getElementById("loader").style.display = "none";
          },
        },
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: "popup",
        signInOptions: [firebaseAuthObject.EmailAuthProvider.PROVIDER_ID],
      });
    }

    // store the user in context.
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        console.log(user.displayName);
      } else {
        setUser(null);
      }
    });
  });

  return (
    <>
      <div id="firebaseui" className="w-96" />
      <div id="loader">Loading...</div>
      {showSuccessLogin && <>Success </>}
    </>
  );
}

// export default function LoginForm() {
//   const [renderAuth, setRenderAuth] = useState(false);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       setRenderAuth(true);
//     }
//   });

//   return renderAuth ? <LoginFinal /> : null;
// }
