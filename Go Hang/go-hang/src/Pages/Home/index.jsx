import { useState } from 'react'
import {FaEye, FaEyeSlash} from 'react-icons/fa'
import './styles.css'

function Home() {

  const [campoVazio, setCampoVazio] = useState('')
  const campoOcupado = campoVazio.length > 0

  const [mostrarSenha, setMostrarSenha] = useState(false)

  return (
    <div className='flex justify-center items-center w-full h-screen'>
      <div className='fixed inset-0 bg-black/90'></div>
      <form className='flex flex-col items-center gap-4 py-8 px-4 w-80 h-120 border border-white/10 rounded-md bg-[rgba(255,255,255,0.05)] shadow-md shadow-black/5 backdrop-blur-sm z-50'>
        <h1 className='text-4xl text-white/90'>Go<span className='text-blue-600/85 underline'>Hang</span></h1>

        <div className='flex flex-col justify-center items-center gap-8 w-full'>

          <div className='flex items-center w-full py-1 px-2 text-white border-b border-white/40 focus-within:border-blue-600 transition-colors duration-300'>
          <div className='flex w-full'>
              <input name='nome' type="text" value={campoVazio} onChange={(e) => setCampoVazio(e.target.value)} placeholder='Username' className="px-2 outline-none w-full placeholder:text-white" />
            </div>
            <div className='mr-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>
          </div>

          <div className='flex items-center w-full py-1 px-2 text-white border-b border-white/40 focus-within:border-blue-600'>
            <input name='email' type="text" placeholder='E-mail' className='px-2 outline-none w-full placeholder:text-white' />
            <div className='mr-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </div>
          </div>

            <div className='flex items-center w-full py-1 px-2 text-white border-b border-white/40 focus-within:border-blue-600'>
              <input name='senha' type={mostrarSenha ? 'text' : 'password'} placeholder='Password' className='px-2 outline-none w-full placeholder:text-white' />
              <button type='button' className='mr-2 cursor-pointer hover:text-blue-600/80 transition-colors duration-200' onClick={() => setMostrarSenha(prev => !prev)}>
                  {mostrarSenha ? <FaEyeSlash size={22} /> : <FaEye size={22} /> }
              </button>
            </div>

            <div className='flex items-center gap-4 text-xl text-white'>
              <i class="ri-google-fill flex justify-center items-center w-8 h-8 bg-white text-black rounded-md hover:-translate-y-0.5 transition-transform duration-200 cursor-pointer"></i>
              <i class="ri-facebook-circle-fill flex justify-center items-center w-8 h-8 bg-white text-black rounded-md hover:-translate-y-0.5 transition-transform duration-200 cursor-pointer"></i>
              <i class="ri-github-line flex justify-center items-center w-8 h-8 bg-white text-black rounded-md hover:-translate-y-0.5 transition-transform duration-200 cursor-pointer"></i>
            </div>

          <div className='flex justify-between gap-2 w-full  text-sm text-white/50'>
            <a href='#' className='hover:text-white duration-300'>Problems logging in?</a>
          </div>

          <button className='bg-white/80 text-black py-2 w-full font-semibold rounded-2xl cursor-pointer transition-all duration-200 hover:bg-white hover:-translate-y-0.5 hover:shadow-xs hover:shadow-black/40'>Sign Up</button>
        </div>
      </form>
    </div>
  )
}

export default Home