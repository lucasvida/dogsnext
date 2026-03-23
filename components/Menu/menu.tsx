import Link from "next/link";

const Menu = () => {
  return (
    <nav>
      <ul className="menu">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/sobre">Sobre</Link></li>
        <li><Link href="/contato">Contato</Link></li>
      </ul>
    </nav>
  )
}

export default Menu;