
import Image from "next/image"
import HeaderItem from "./HeaderItem"
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LidhtningBoltIcon,
  LightningBoltIcon,
  LogoutIcon,
  SearchIcon,
  TicketIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Link from 'next/link'



function Header() {
  const handleClick = (e) => {
    e.preventDefault()
    // router.push("/login")
  }
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
        <div className="flex flex-grow justify-evenly max-w-2xl">

        <Link href="/">
          <a><HeaderItem title="HOME" Icon={HomeIcon} onClick={handleClick}/></a>
        </Link>
          
      
          <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
          {/* <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} /> */}
          <HeaderItem title="COLLECTION" Icon={CollectionIcon} />
          <HeaderItem title="SEAECH" Icon={SearchIcon} />
          
          <Link href="/login">
          <a><HeaderItem title="ACCOUNT" Icon={UserIcon} onClick={handleClick}/></a>
        </Link>
        <Link href="/logout">
          <a><HeaderItem title="LOGOUT" Icon={LogoutIcon} onClick={handleClick}/></a>
        </Link>

        {/* <HeaderItem title="LOGOUT" Icon={LogoutIcon} /> */}

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