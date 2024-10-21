"use client"
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const Sidebar = () => {
  return (
    <aside className="flex flex-col items-center justify-center w-64 h-full bg-#6a6a6a border-2 border-#6a6a6a-600 m-5 p-0">
      <nav>
        <ul className='flex flex-col items-center justify-center'>
          <li><Link href="/"><Button variant="ghost">All Tasks</Button></Link></li>
          <li><Link href="/"><Button variant="ghost">Pending</Button></Link></li>
          <li><Link href="/"><Button variant="ghost">Completed</Button></Link></li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar