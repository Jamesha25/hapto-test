import './boards.css'
import PodsCard from '../../podsCard/podsCard';


function Boards() {
    let sampleValues=[
        {
            type:"to do",
            color:'#8833FF',
            works:[
                {
                    label:'design',
                    priority:'high priority',
                    messege:'Complete user research for new website',
                    due:'4 days',
                },
                {
                    label:'design',
                    priority:'high priority',
                    messege:'Complete user research for new website',
                    due:'4 days',
                },
                {
                    label:'design',
                    priority:'high priority',
                    messege:'Complete user research for new website',
                    due:'4 days',
                },
                {
                    label:'design',
                    priority:'high priority',
                    messege:'Complete user research for new website',
                    due:'4 days',
                }
            ]
        },
        {
            type:"in progress",
            color:'#33BFFF',
            works:[
                {
                    label:'design',
                    priority:'high priority',
                    messege:'Complete user research for new website',
                    due:'4 days',
                },
                {
                    label:'design',
                    priority:'high priority',
                    messege:'Complete user research for new website',
                    due:'4 days',
                },
                {
                    label:'design',
                    priority:'high priority',
                    messege:'Complete user research for new website',
                    due:'4 days',
                }
            ]
        },
        {
            type:"review",
            color:'#FFCB33',
            works:[
                {
                    label:'design',
                    priority:'high priority',
                    messege:'Complete user research for new website',
                    due:'4 days',
                },
                {
                    label:'design',
                    priority:'high priority',
                    messege:'Complete user research for new website',
                    due:'4 days',
                },
                {
                    label:'design',
                    priority:'high priority',
                    messege:'Complete user research for new website',
                    due:'4 days',
                }
            ]
        },
        {
            type:"done",
            color:'#29CC39',
            works:[
                {
                    label:'design',
                    priority:'high priority',
                    messege:'Complete user research for new website',
                    due:'4 days',
                },
            ]
        },
        
    ];
    
    return (
        <div className='boards-container'>
            {sampleValues.map((item,ind)=>{
                return(
                    <div className='column' key={ind}>
                        <div className='title' style={{borderLeft:`${item.color} solid 5px`}}>{item.type}</div>
                        {item.works.map((task)=>{
                            return(
                                <PodsCard color={item.color} work={task}/>
                            );
                        })}
                        {item.type==="done" && 
                            <div className='moveHereCard'>
                                move card here
                            </div>
                        }
                    </div>
                );
            })}
        </div>
    );
}

export default Boards;