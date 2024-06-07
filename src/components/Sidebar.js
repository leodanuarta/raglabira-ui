// app/components/Sidebar.js

// import React from 'react';
import * as React from "react";
import { UserItem } from "./UserItem";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import {Cookie, Inbox, MessagesSquare, Settings, ShieldCheck, UserRound} from "lucide-react"


export function Sidebar() {

  const menuList = [
    {
      group: "General",
      items: [
        {
          link: "/",
          icon: <UserRound />,
          text: "Profile"
        },
        {
          link: "/",
          icon : <Inbox />,
          text: "Inbox"
        },
        {
          link: "/",
          icon:<MessagesSquare />,
          text: "Logs"
        },
       
      ]
    },
    {
      group: "Settings",
      items: [
        {
          link: "/",
          icon:<Settings />,
          text: "General Settings"
        },
        {
          link: "/",
          icon: <Cookie />,
          text: "Privacy"
        },
        {
          link: "/",
          icon: <ShieldCheck />,
          text: "Term and Condition"
        },
      ]
    },
  ]


  return ( 
    <div className="fixed flex flex-col gap-4 w-[300px] min-w-[300px] border-r min-h-screen p-4">
        <div>
            <UserItem/>
        </div>
        <div className="grow">
        <Command style={{overflow: "visible"}}>
          <CommandList>  
            {menuList.map((menu, key) => (
              <CommandGroup key={key} heading={menu.group}>
                {menu.items.map((option, optionKey) => 
                  <CommandItem key={optionKey} className="flex gap-2 cursor-pointer">
                    {option.icon}
                    {option.text}
                  </CommandItem>
                )}
              </CommandGroup> 
            ))}
          </CommandList>
        </Command>

        </div>
        <div>Setting / Notif</div>
    </div>
  );
}
 