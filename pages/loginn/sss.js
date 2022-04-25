
// import Header from '../../components/Header'
// import Link from 'next/link'
// import { useRouter } from 'next/router'
// import { useState } from 'react'
// import axios from 'axios'
// import config from '../../config/config'


    


    
// export default function SignIn({ token }) {
// const handleClick = (e) => {
//         e.preventDefault() }
// const [username, setUsername] = useState('')
//     const [password, setPassword] = useState('')
// const [status, setStatus] = useState('')
// const login = async (req, res) => {
//     try {
//         let result = await axios.post(`${config.URL}/login`,
//             { username, password },
//             { withCredentials: true })
//         console.log('result: ', result)
//         console.log('result.data:  ', result.data)
//         console.log('token:  ', token)
//         setStatus(result.status + ': ' + result.data.user.username)
//     }
//     catch (e) {
//         console.log('error: ', JSON.stringify(e.response))
//         setStatus(JSON.stringify(e.response).substring(0, 80) + "...")
//     }
// }
//   return (
//       <div>
//           <Header />
          
//           <div className="mt-20 flex justify-center max-w-[400px] p-[70px] mx-auto rounded-lg  "
//     style={{
//         background: `rgba(128,128,128,0.3)`,
//     }}>
//         <form className='grid'>
//             <h1 className='text-left font-semibold text-2xl mb-[25px]'>SIGN IN</h1>
//             <input type="email" placeholder='Email' className='outline-none h-[40px] p-2 mb-3 text-black rounded-md' />
//             <input type="password" placeholder='Password' className='outline-none h-[40px] p-2 mb-3 text-black rounded-md'/>
//             {/* <Link href="/">
//             <a> */}
//             <button type='submit' className='flex justify-center px-4 py-3 border-none mt-5 text-base rounded-md bg-[#e50914]'>Sign In</button>
//             {/* </a>
//             </Link> */}
            

//             <div className='flex justify-center mt-[30px]'>
//                 <span className='text-gray-500'>New to account ? </span>
//           <Link href="/register">
//           <a className='cursor-pointer hover:underline'>Sign Up Now</a>
//         </Link>
        
//             </div>
//         </form>
        
    
//       </div>
//       <div>
//                     Status:  {status}
//                 </div>
//           </div>
              
          
        
    
//   )
// }

// export function getServerSideProps({ req, res }) {
//     return { props: { token: req.cookies.token || "" } };
// }