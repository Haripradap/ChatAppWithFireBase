import { auth, provider } from '../firebase-config.js';
import { signInWithPopup } from 'firebase/auth'

import Cookies from 'universal-cookie';
const cookies = new Cookies()

const Auth = (props) => {
    const {setIsAuth} = props;

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            cookies.set("auth-Token", result.user.refreshToken);
            setIsAuth(true);
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className="auth">
        <p>Sign In With Google</p>
        <button onClick={signInWithGoogle}>Sign In</button>
    </div>
  )
}

export default Auth