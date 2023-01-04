import React from 'react'

import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SidebarData = [
    {
        title: "Home",
        path: "/home",
        icon: <AiIcons.AiFillHome/>,
        class: "nav-text",
    },
    {
        title: "Upload",
        path: "/upload",
        icon: <RiIcons.RiContactsBookUploadFill/>,
        class: "nav-text",
    },
    {
        title: "User Profile",
        path: "/profile",
        icon: <FaIcons.FaUserEdit/>,
        class: "nav-text",
    },
    {
        title: "Settings",
        path: "/settings",
        icon: <IoIcons.IoMdSettings/>,
        class: "nav-text",
    },
]

