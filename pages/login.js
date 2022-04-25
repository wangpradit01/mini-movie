// import Head from 'next/head'
// import Layout from '../components/layout'
import { useState , useEffect } from 'react'
// import Navbar from '../components/navbar'
// import styles from '../styles/Home.module.css'
import axios from 'axios'
import config from '../config/config'
import Link from 'next/link'
import Header from '../components/Header'



export default function Login({ token }) {

        const handleClick = (e) => {
            e.preventDefault() }

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState('')

    const login = async (req, res) => {
        try {
            let result = await axios.post(`${config.URL}/login`,
                { username, password },
                { withCredentials: true })
            
            console.log(result.data)
            localStorage.setItem('accessToken', result.data.token)
            // console.log('result: ', result)
            // console.log('result.data:  ', result.data)
            // console.log('token:  ', token)
            setStatus(result.status + ': ' + result.data.user.username)
        }
        catch (e) {
            console.log('error: ', JSON.stringify(e.response))
            setStatus(JSON.stringify(e.response).substring(0, 80) + "...")
        }
    }

    const loginForm = () => (
        <div >

            
            <div>
                {/* Username: */}
            </div>
            <div className='flex flex-col outline-none h-[40px] p-2 mb-3 text-black rounded-mb'>
                <input type="text"
                    name="username"
                    placeholder="username"
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                {/* Password: */}
            </div>
            <div className='flex flex-col outline-none h-[40px] p-2 mb-3 text-black rounded-mb'>
                <input type="password"
                    name="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)} />
            </div>
        </div>
    )

    const copyText = () => {
        navigator.clipboard.writeText(token)
    }


    // const userLogout = () => { 

    //     localStorage.removeItem('accessToken')
    // }


    useEffect(() => {


        if(localStorage.getItem('accessToken') !== null) {

            //  check login
            console.log('user are logged in ')
        } else {

            console.log('user are not logged in ')
        }

    } , [])

    return (
       
           <div>
               <Header />
            <div className='mt-20 justify-center max-w-[400px] p-[70px] mx-auto rounded-lg'
            style={{background : `rgba(128,128,128,0.3)`}}>
               
                <h1 className='font-semibold text-2xl'>SIGN IN</h1>
                <div>
                    {/* <b>Token:</b> {token.substring(0, 15)}...
                <button onClick={copyText}> Copy token </button> */}
                </div>
                <br/>
                <div>
                    Status:  {status}
                </div>
                <br />
                {loginForm()}
                <div className='flex justify-center px-4 py-3 border-none mt-5 text-base rounnded-md bg-[#e50914]'>
                    <button onClick={login}>SIGN IN</button>
                </div>
                <div className='flex justify-center mt-[30px]'>
                    <p className='text-gray-500'>New to account ? </p>
                <Link href="/register">
          <a className='cursor-pointer hover:underline'>Sign Up Now</a>
        </Link></div>
                
            </div></div>
       
    )
}

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}
