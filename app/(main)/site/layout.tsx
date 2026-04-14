import React from 'react'
import Navigation from '@/components/site/navigation'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/ui/themes'

const layout = ({children} : {children: React.ReactNode}) => {  
    return (
        
        <ClerkProvider appearance={{theme:dark}}>
            <main className='h-screen w-screen bg-background text-foreground'>
        <Navigation />
        {children}
    </main>
        </ClerkProvider>
    
    )
}

export default layout