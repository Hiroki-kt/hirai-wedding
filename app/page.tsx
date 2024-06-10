'use client'
import Image from 'next/image'
import Top from 'pages/top'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Top></Top>
    </main>
  )
}

export const runtime = 'edge'
