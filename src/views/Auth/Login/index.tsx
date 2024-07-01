import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Login.module.scss";

const LoginViews = () => {
    const { push } = useRouter();
    const handleLogin = () => {
      push('/product');
    };

  return (
    <div className={styles.login}>
      <h1 className='mb-3 text-3xl'>Login Page</h1>
      <button onClick={() => handleLogin()}>Login</button>
      <p style={{ color: 'red', border: '1px solid red', borderRadius: '10px' }}>
        Don&apos;t have an account?{' '}
        <Link href={'/auth/register'}>Register Here</Link>
      </p>
    </div>
  );
};

export default LoginViews;