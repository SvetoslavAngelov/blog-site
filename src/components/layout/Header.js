import React from "react"
import {Link} from "gatsby"

const menuData = [
    {title: "Home", link: "page-2"}, 
    {title: "Projects", link: "page-2"}, 
    {title: "About", link: "page-2"}]

export default function Header() {
    return (
        <>
            {menuData.map((item, index) => (
                <Link to={item.link} key={index}>
                {item.title}
                </ Link>
            ))}
        </>
    )
}