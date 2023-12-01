import Link from "next/link"

const Logo = () => {
  return (
    <Link legacyBehavior href="/">
      <a className="logo">Jim's</a>
    </Link>
  )
}

export default Logo