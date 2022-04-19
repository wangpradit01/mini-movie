
import Image from "next/image"
import HeaderItem from "./HeaderItem"
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LidhtningBoltIcon,
  SearchIcon,
  TicketIcon,
  UserIcon,
} from "@heroicons/react/outline";


function Header() {
  return (
    <header>
        <div>
          <HeaderItem title="HOME" Icon={HomeIcon} />
        </div>
        
        <img 
        className="object-contain"
        src="ticket.png"
        width={50}
        height={50}/>
    </header>
  )
}

export default Header