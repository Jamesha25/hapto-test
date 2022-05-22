import './sidebar.css';
import arnold from '../../assets/sidebarIcons/arnold.jpg';
import { sidebarMenus } from '../../data';

function Sidebar(props) {
    return (
        <div className='sidebar-container'>
            <header>
                Team Leap
            </header>
            <div className='line'/>
            {sidebarMenus.map((item,ind)=>{
                return(
                    <div key={ind} className={props.selectedOption===item.name?'menus active':'menus'} onClick={()=>props.handleSidebarChange(item.name)}>
                        <img src={item.icon} alt={item.name}/>
                        <span>{item.name}</span>
                    </div>
                );
            })}
            <footer>
                <img src={arnold} alt='propic'/>
                <label>Holden McGroin</label>
            </footer>
        </div>
    );
}

export default Sidebar; 