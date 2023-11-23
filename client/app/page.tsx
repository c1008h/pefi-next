'use client'
import React from 'react';

import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h2>HELLO!</h2>
      </main>
    </>

  )
}
