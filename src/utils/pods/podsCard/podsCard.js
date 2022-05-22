import './podsCard.css'

function PodsCard(props) {
    return ( 
        <div className="podscard-container">
            <header>
                <span>
                    <span className='bullet' style={{background:props.color, color:props.color}}/>
                    <label>{props.work.label}</label>
                </span>
                <span style={{fontWeight:800, color:'#A8A8A8'}}>:</span>
            </header>
            <div className='messege'>{props.work.messege}</div>
            <footer>
                <span className='btn' style={{background:props.color}}>{props.work.priority}</span>
                <span style={{color: '#1D2121', fontSize:12.5}}>due in {props.work.due}</span>
            </footer>
        </div>
    );
}

export default PodsCard;