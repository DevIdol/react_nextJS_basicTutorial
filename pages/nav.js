import Link from 'next/link'
const Nav = (props) => {
  return (
    <ul>
      <li style={{ display: 'inline-block', margin: 10 }}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li style={{ display: 'inline-block', margin: 10 }}>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
    </ul>
  )
}
export default Nav
