import { NavLink } from "react-router-dom";
import Logged from "../Loged/Logged";


const Header = () => {
    return (
        <div>

           <NavLink style={
            {
                'marginRight':'20px'
            }
           } to='/'>Home</NavLink>
           <NavLink to='/login'>Login</NavLink>

           <Logged></Logged>
        </div>
    );
};

export default Header;