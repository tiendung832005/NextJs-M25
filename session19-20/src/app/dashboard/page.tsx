"use client"
import React from 'react'
import { useRouter } from 'next/router';
import { useAuth } from '@clerk/clerk-react';
export default function page() {
    const { isSignedIn } = useAuth();
    const router = useRouter();
  
    if (!isSignedIn) {
      
      router.push('http://localhost:3000/sign-in');
      return null;
    }
  return (
    <div>
        <b>Protected Route</b>
    </div>
  )
}
