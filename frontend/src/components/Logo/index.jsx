import Link from "next/link"

const Logo = () => {
  return (
    <Link legacyBehavior href="/">
      <a className="logo">Jim's Corporation</a>
    </Link>
  )
}

export default Logo