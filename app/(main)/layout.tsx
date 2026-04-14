import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/ui/themes'
import React from 'react'

const Layout = ({children} : {children : React.ReactNode}) => {
  return (
    <ClerkProvider appearance={{theme : dark}}>
        {children}
    </ClerkProvider>
  )
}

export default Layout