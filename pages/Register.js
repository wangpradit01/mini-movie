
import { useState } from 'react'
// import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import axios from 'axios'
import config from '../config/config'

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

    const registerForm = () => (
        <div className={styles.gridContainer}>
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
                {/* Email: */}
            </div>
            <div className='flex flex-col outline-none h-[40px] p-2 mb-3 text-black rounded-mb'>
                <input type="email"
                    name="email"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)} />
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


    return (
        <div>
   <Header />
      
   <div className='mt-20 justify-center max-w-[400px] p-[70px] mx-auto rounded-lg'
            style={{background : `rgba(128,128,128,0.3)`}}>
              
                <h1 className='font-semibold text-2xl'>Register</h1>
                <div>
                {/* <button
                        onClick={() => { navigator.clipboard.writeText(token) }}>
                        Copy token
                </button> */}
                </div>
                <br />
            Status:  {status}
                <br /><br />
                <div >
                    {registerForm()}
                </div>

                <div className='flex justify-center px-4 py-3 border-none mt-5 text-base rounnded-md bg-[#e50914]'>
                    <button onClick={register}>Register</button>
                </div>
            </div>
            </div>
    )
}

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}