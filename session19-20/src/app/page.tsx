import React from 'react'
import { useAuth } from '@clerk/clerk-react';
import { useRouter } from 'next/router';
export default function page() {
  const { signOut, isSignedIn } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push('http://localhost:3000//sign-in');
  };
  return (
    <div>
      <h1>Trang chủ</h1>
      {isSignedIn ? (
        <button onClick={handleSignOut}>Đăng xuất</button>
      ) : (
        <button onClick={() => router.push('http://localhost:3000//sign-in')}>Đăng nhập</button>
      )}
    </div>

  )
}
