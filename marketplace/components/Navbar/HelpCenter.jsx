import React from 'react'
import Link from 'next/link'

const HelpCenter = () => {
  const helpCenter = [
    {
      name: "About",
      link: "about"
    },
    {
      name: "Contact Us",
      link: "contact-us"
    },
    {
      name: "Sign Up",
      link: "sign-up"
    },
    {
      name: "Subscription",
      link: "subscription"
    }
  ]
  return (
    <div>
      {helpCenter.map((el, i) => (
        <div key={i + 1} className="px-4 py-2 transition-all duration-[0.3s] ease-in z-[2222222] hover:bg-blue-400 hover:text-blue-900 rounded-md">
          <Link href={{ pathname: `${el.link}` }}>
            {el.name}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default HelpCenter
