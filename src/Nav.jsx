import {useState} from 'react';
import logo from './assests/logo.svg'
import broadcast from './assests/broadcast.svg'

const Nav = () => {

  const [activeItem, setActiveItem] = useState('Home');

  const handleNavItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <nav className="flex items-center justify-center space-x-24 py-2 text-md bg-black text-white">
      
      <ul className="flex space-x-10 space-y-3 text-gray-200">
      <img className="cursor-pointer" src={logo}/>
        {['Compass', 'Explore', 'Academy', 'NFTs', 'For Projects'].map((item) => (
          <li
            key={item}
            className={`cursor-pointer relative pb-2 ${
              activeItem === item ? ' text-white' : ''
            }`}
            onClick={() => handleNavItemClick(item)}
          >
            {item}
            {activeItem === item && (
              <span className="absolute bottom-0 left-0 w-full h-1 rounded-xl bg-white"></span>
            )}
          </li>
        ))}
      </ul>
      <div className="flex gap-5"
      ><i class="fa fa-search" aria-hidden="true"></i>
        <input
          type="text"
          placeholder="Search for ecosystems,trending quests etc,."
          className="rounded-xl w-96 bg-[#0f172a] text-gray-400 placeholder-gray-400"
        />
        <img src={broadcast} alt="" />
        <button className='bg-white text-black rounded-md w-20 h-7 font-semibold'>Sign In</button>
      </div>
    </nav>
  );
}

export default Nav