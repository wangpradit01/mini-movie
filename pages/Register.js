import React from 'react'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import Link from 'next/link'



function Register() {
    const router = useRouter()
    const handleClick = (e) => {
        e.preventDefault() 
        router.push(href)
    }
  return (
      <div>
          <Header />
          
          <div className="mt-20 max-w-[400px] p-[70px] mx-auto rounded-lg  "
    style={{
        background: `rgba(128,128,128,0.3)`,
    }}>
        <form className='grid'>
            <h1 className='text-left font-semibold text-xl mb-[25px]'>SIGN UP</h1>
            <input type="username" placeholder='Username' className='outline-none h-[40px] p-2 mb-3 text-black rounded-md' />
            <input type="email" placeholder='Email' className='outline-none h-[40px] p-2 mb-3 text-black rounded-md' />
            <input type="password" placeholder='Password' className='outline-none h-[40px] p-2 mb-3 text-black rounded-md'/>
            <Link href="/login">
          <a>
          <button type='submit' className='w-full px-4 py-3 border-none text-base rounded-md bg-[#e50914]'>SUMMIT</button>
          </a>
        </Link>
            <p className="p-2 text-center">OR</p>
            
            <Link href="/login">
          <a>
          <button type='submit' className='w-full px-4 py-3 border-none text-base rounded-md bg-[#e50914]'>Sign In</button>
          </a>
        </Link>
                
            
        </form>
        
    
      </div>
          </div>
              
          
        
    
  )
}

export default Register