import NavItem from './NavItem'

const NavMenu = ({ isMobile }: { isMobile: boolean }) => {
  const links: { to: string; label: string }[] = [
    { to: '#home', label: 'Home' },
    { to: '#whatisgpt3', label: 'What is GPT3?' },
    { to: '#possibility', label: 'Open AI' },
    { to: '#features', label: 'Case Studies' },
    { to: '#blog', label: 'Library' }
  ]

  return (
    <>
      {links.map(({ to, label }) => (
        <NavItem key={to} to={to} label={label} isMobile={isMobile} />
      ))}
    </>
  )
}

export default NavMenu
