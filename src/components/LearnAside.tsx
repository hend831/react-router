import { NavLink } from "react-router-dom"


const LearnAside = () => {
  return (
    <aside className="px-3">
      <nav className=" my-7">
      <ul className="flex flex-col">
        <li className="hover:text-blue-500 duration-200 cursor-pointer">
          <NavLink to="/learn" end>Quick start</NavLink>
        </li>
        <li className="hover:text-blue-500 duration-200 cursor-pointer">
          <NavLink to="/learn/thinking-in-react">thinking in react</NavLink>
        </li>
        <li className="hover:text-blue-500 duration-200 cursor-pointer">
          <NavLink to="/learn/instalition">instalition</NavLink>
        </li>
        
      </ul>
    
    </nav>
    </aside>
  )
}

export default LearnAside
