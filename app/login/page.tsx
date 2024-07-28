import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div className='flex justify-center mt-[120px]'>
        <Card className='w-[648px] h-[476px] flex flex-col items-center justify-center'>
            <CardTitle className='w-[528px] text-5xl mb-8 text-center mx-[60px]'>Welcome to Workflo!</CardTitle>
            <CardContent className='w-[528px] mx-[60px]'>
                <Input className='mb-6' type='email' placeholder='Your Email' />
                <Input className= 'mb-[22px]' type='password' placeholder='Password' />
                <button className= 'border bg-primary text-primary-foreground w-full py-2 rounded-md'>Login</button>
            </CardContent>
            <CardFooter><p>Don’t have an account? Create a <Link className='font-bold underline' href='/signup'>new account.</Link></p></CardFooter>
        </Card>
    </div>
  )
}

export default Login  