import React from 'react'
import Link from "next/link"

const Discover = () => {
const discover = [
  {name: "Collection",
    link: "collection"
  },
  {name: "Search",
    link: "search"
  },
  {name: "Author Profile",
    link: "author-profile"
  },
  {name: "NFT Details",
    link: "NFT-details"
  },
  {name: "Account Setting",
    link: "account-setting"
  },
  {name: "Connect Wallet",
    link: "connect-wallet"
  },
  {name: "Blog",
    link: "blog"
  }
]

  return (
	<div className=''>    
		{discover.map((el, i) => (
      <div key = {i+1} className= "discover">
        <Link href={{pathname:`${el.link}`}}>
          {el.name}
          </Link>
      </div>
    ))}
	</div>
  )
}

export default Discover;
