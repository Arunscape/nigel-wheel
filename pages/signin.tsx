import { Box, TextInput, Checkbox, Group, Button, Modal } from "@mantine/core";
import { useForm } from "@mantine/hooks";
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'


import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { firebaseauth } from "../util/firebase";

const uiConfig = {
    // Redirect to / after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    // signInFlow: 'redirect',
    // GitHub as the only included Auth Provider.
    // You could add and configure more here!
    signInOptions: [
        {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
        },
        firebase.auth.GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD
    ],

};


const SignIn = (props: any) => {

    const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

    // Listen to the Firebase Auth state and set the local state.
    useEffect(() => {
        const unregisterAuthObserver = firebaseauth.onAuthStateChanged(user => {
            setIsSignedIn(!!user);
        });
        return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
    }, []);

    if (!isSignedIn) {
        return (
            <div>
                <h1>My App</h1>
                <p>Please sign-in:</p>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseauth} />
            </div>
        );
    }
    return (
        <div>
            <h1>My App</h1>
            <p>Welcome {JSON.stringify(firebaseauth.currentUser)}! You are now signed-in!</p>
            <Button onClick={() => firebaseauth.signOut()}>Sign-out</Button>
            <Button component="a" href="/">
                Play Gaem
            </Button>
        </div>
    );

}

export default SignIn;

