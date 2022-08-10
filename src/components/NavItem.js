import {NavLink} from "react-router-dom";
import '../index.css'
const NavItem = (props) =>{
	const hideMenu = () =>{
     props.hideMenu();
    }
	return(
		<li class="nav-item my_menu">
          <NavLink class="nav-link" to={props.href} onClick={hideMenu}>{props.name}</NavLink>
        </li>
	);
}
export default NavItem;