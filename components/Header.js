
import Image from "next/image"
import HeaderItem from "./HeaderItem"
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LidhtningBoltIcon,
  LightningBoltIcon,
  SearchIcon,
  TicketIcon,
  UserIcon,
} from "@heroicons/react/outline";


function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
        <div className="flex flex-grow justify-evenly max-w-2xl">
          <HeaderItem title="HOME" Icon={HomeIcon} />
          <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
          <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
          <HeaderItem title="COLLECTION" Icon={CollectionIcon} />
          <HeaderItem title="SERACH" Icon={SearchIcon} />
          <HeaderItem title="ACOUNT" Icon={UserIcon} />
        </div>
        
        <img 
        className="object-contain"
        src="ticket.png"
        width={80}
        height={30}/>
    </header>
  )
}

export default Header