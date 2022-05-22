import './contentBody.css';
import PodsContainer from '../../utils/pods/podsContainer/podsContainer';

function ContentBody(props) {
    switch (props.selectedOption) {
        case 'pods':
            return ( 
            <div className='contentBody-container'>
                <PodsContainer/>
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