"use client"
import React from 'react'
import { useAuth } from '@clerk/clerk-react';
import { currentUser } from '@clerk/nextjs/server';
export default async function page() {
    const user = await currentUser();

  if (!user) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h1>Họ và tên: {user.firstName} {user.lastName}</h1>
      <p>Email: {user.emailAddresses[0].emailAddress}</p>
    </div>
  )
}
