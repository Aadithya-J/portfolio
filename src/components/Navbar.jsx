import logo from '../assets/Logo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import CodeforcesLogo  from '../assets/codeforces.svg?react'


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 h-4">
      <div className="flex flex-shrink-0 items-center">
        <img src = {logo} className = "object-cover h-14 w-14" alt = "logo"/>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin className="h-6 w-6 text-blue-400" />
        <FaGithub className="h-6 w-6" />
        <CodeforcesLogo className="h-6 w-6" />
      </div>
    </nav>
  )
}

export default Navbar