import './header.css';
import { headerMenus } from '../../data';

function Header(props) {
    return ( 
        <div className="header-container">
            <div className='title'>{props.selectedOption}</div>
            {headerMenus.map((item,ind)=>{
                return(
                    <div key={ind}>
                        <img src={item.icon} alt={item.name} />
                    </div>
                );
            })}
        </div>
    );
}

export default Header;