const NavItem = ({
  to,
  label,
  asLink = true,
  isMobile
}: {
  label: string
  isMobile: boolean
  to?: string
  asLink?: boolean
}) => {
  const margin = isMobile ? 'mx-0 my-4' : 'mx-4 my-0'

  return (
    <p className={`nav-item-text capitalize ${margin}`}>
      {asLink ? <a href={to}>{label}</a> : label}
    </p>
  )
}

export default NavItem
