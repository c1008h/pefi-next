'use client'
import React from 'react';

import Navbar from "../components/Navbar"
import MainLayout from '@/layouts/MainLayout';
import { Container } from 'postcss';
import ContainerTemplate from '@/template/ContainerTemplate';

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <h2>HELLO!</h2>
    // </main>
    <MainLayout>
      <ContainerTemplate>

      </ContainerTemplate>
      <ContainerTemplate title="Benefits: " >
        
      </ContainerTemplate>
      <ContainerTemplate title="Features">

      </ContainerTemplate>
      <ContainerTemplate title="Testimonials">

      </ContainerTemplate>
      <ContainerTemplate>

      </ContainerTemplate>
    </MainLayout>
  )
}
