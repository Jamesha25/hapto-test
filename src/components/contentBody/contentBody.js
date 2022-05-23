import './contentBody.css';
//sidebar menus
import Home from '../../utils/home/home';
import MyTasks from '../../utils/myTasks/myTasks';
import Pods from '../../utils/pods/podsContainer/podsContainer';
import Goals from '../../utils/goals/goals';
import Projects from '../../utils/projects/projects';
import Profile from '../../utils/profile/profile';

function ContentBody(props) {
    switch (props.selectedOption) {
        case 'home':
        return ( 
        <div className='contentBody-container'>
            <Home/>
        </div>
        );
        case 'my tasks':
        return ( 
        <div className='contentBody-container'>
            <MyTasks/>
        </div>
        );
        case 'pods':
        return ( 
        <div className='contentBody-container'>
            <Pods/>
        </div>
        );
        case 'goals':
        return ( 
        <div className='contentBody-container'>
            <Goals/>
        </div>
        );
        case 'projects':
        return ( 
        <div className='contentBody-container'>
            <Projects/>
        </div>
        );
        case 'profile':
        return ( 
        <div className='contentBody-container'>
            <Profile/>
        </div>
        );
        default:
        return ( 
            <div className='contentBody-container'>
                <h1 style={{textTransform:'capitalize'}}>"{props.selectedOption}" layout not found</h1>
            </div>
        );
    }
    
}

export default ContentBody;