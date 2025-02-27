import { ArrowLeft, Ghost } from 'lucide-react'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col gap-2 justify-center items-center h-screen'>
      <Ghost className='w-20 h-20 text-purple-400' />
      <h2 className='text-2xl lg:text-3xl font-bold'>Page Not Found</h2>
      <p className='text-gray-600'>Could not find requested resource</p>
      <Link href="/" className='text-sm flex items-center gap-1 hover:text-purple-700'><ArrowLeft className='w-4 h-4' /> Return Home</Link>
    </div>
  )
}