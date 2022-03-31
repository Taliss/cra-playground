import { useLocation, NavLink, NavLinkProps } from 'react-router-dom';

export default function QueryNavLink({ to, ...props }: NavLinkProps) {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}
