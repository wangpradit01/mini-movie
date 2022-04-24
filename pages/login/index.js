
import Header from '../../components/Header'
import Link from 'next/link'
// import { useRouter } from 'next/router'

function SignIn() {
    const handleClick = (e) => {
        e.preventDefault() }
  return (
      <div>
          <Header />
          
          <div className="mt-20 justify-center max-w-[400px] p-[70px] mx-auto rounded-lg  "
    style={{
        background: `rgba(128,128,128,0.3)`,
    }}>
        <form className='grid'>
            <h1 className='text-left font-semibold text-2xl mb-[25px]'>SIGN IN</h1>
            <input type="email" placeholder='Email' className='outline-none h-[40px] p-2 mb-3 text-black rounded-md' />
            <input type="password" placeholder='Password' className='outline-none h-[40px] p-2 mb-3 text-black rounded-md'/>
            <button type='submit' className='px-4 py-3 border-none mt-5 text-base rounded-md bg-[#e50914]'>Sign In</button>

            <div className='flex justify-center mt-[30px]'>
                <span className='text-gray-500'>New to account ? </span>
          <Link href="/Register">
          <a className='cursor-pointer hover:underline'>Sign Up Now</a>
        </Link>
        
            </div>
        </form>
        
    
      </div>
          </div>
              
          
        
    
  )
}

export default SignIn