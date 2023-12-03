import Link from "next/link"
import { Avatar, AvatarImage } from "../ui/avatar"

  

  const links = [{ href: 'track', label:'Track' }]

 export async function NavBar(){

    return (
        <div className="shadow">
            <div className="containe mx-auto flex items-center py-1 space-x-4">
            <Link href="/" className="py-1 px-2 hover:bg-slate-100 rounded">
            <span className="font-semibold">Time tracker</span>
              </Link >
              <nav>
              <ul>{
              links.map (({href,label}) => (
                <li key ={href}>
                    <Link 
                    className="py-1 px-2 hover:bg-slate-100 rounded text-blue-500 hover:text-blue-700"
                    href={href}>{label} 
                    </Link>
                    </li>
                    ))
              }
              </ul>
           
              </nav>
              <span>
              
              </span>
              </div>

        </div>

    )

 }