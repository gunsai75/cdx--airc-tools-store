'use client'

import { Button } from '@/components/ui/button'
import { CircleX } from 'lucide-react'
import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        setTimeout(() => {
           throw error
        },300)
        console.error(error)
    }, [error])

    return (
    <div className='flex flex-col gap-2 justify-center items-center h-screen'>
               <h2 className='text-2xl lg:text-3xl font-bold'>Something went wrong</h2>
      <p className='text-gray-600'>{error.message}</p>
            <CircleX  className='w-20 h-20 text-red-700' />

            <Button
                onClick={
                    () => reset()
                }
                className='text-sm rounded-full bg-purple-700 px-4 py-2 text-white hover:bg-purple-600'
            >
                Try again
            </Button>
        </div>
    )
}