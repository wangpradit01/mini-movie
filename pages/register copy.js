import React from 'react'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import Link from 'next/link'
import { useState } from 'react'

export default function Register({ token }) {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState('')

    const profileUser = async () => {
        console.log('token: ', token)
        const users = await axios.get(`${config.URL}/profile`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        console.log('user: ', users.data)
    }

    const register = async (req, res) => {
        try {
            let result = await axios.post(`${config.URL}/register`,
                { username, email, password })
            console.log('result: ', result)
            console.log('result.data:  ', result.data)
            console.log('token:  ', token)
            setStatus(result.data.message)
        }
        catch (e) {
            console.log(e)
        }

    }


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
            <input type="username" placeholder='Username' className='outline-none h-[40px] p-2 mb-3 text-black rounded-md' onChange={(e) => setUsername(e.target.value)} />
            <input type="email" placeholder='Email' className='outline-none h-[40px] p-2 mb-3 text-black rounded-md' onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='Password' className='outline-none h-[40px] p-2 mb-3 text-black rounded-md'onChange={(e) => setPassword(e.target.value)} />
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
        
        Status:  {status}
      </div>
          </div>
              
          
        
    
  )

}}


export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}