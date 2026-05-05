'use client'
import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
        const { 
        data: session, 
    } = authClient.useSession() 

    console.log(session)

   const user = session?.user

    const handleSignOut = () =>{
        authClient.signOut()

    }
    return (
        <div className='border p-5 bg-zinc-700'>
            <div className='flex gap-10 justify-center text-white'>
                <Link href={'/'}>Home</Link>
                <Link href={'/models'}>Models</Link>
                <Link href={'/signup'}>Sign up</Link>
                <Link href={'/signin'}>Sign in</Link>
                <div className=' text-red-400 font-bold text-xl'>{user?.name}</div>
                <Button onClick={handleSignOut} variant='danger'>SignOut</Button>
            </div>

        </div>
    );
};

export default Navbar;