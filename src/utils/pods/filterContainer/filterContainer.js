import './filterContainer.css';

function FilterContainer(props) {
    const renderItem=(type, name, ...options)=>{
        switch (type) {
            case 'checkbox':
            return(
                <div style={{padding:5}}>
                    <input type='checkbox'/>
                    <label style={{marginLeft:10}}>{name}</label>
                </div>
            );
            case 'dropDown':
            return(
                <>
                    <div style={{textTransform:'capitalize', marginBottom:5}}>{name}</div>
                    <select style={{width:'100%'}}>
                        <option selected disabled>Select</option>
                        {options.map((item,ind)=>{
                            return(
                                <option key={ind}>{item}</option>
                            );
                        })}
                    </select>
                </>
            );
            default:
            break;
        }
        
    }
    const tickOptions=[
        {topic:'status', values:["active","in progress", "on Hold"]},
        {topic:'task type', values:["general","meeting", "report"]}
    ];
    const ddOptions=[
        {topic:'dept', values:["marketing","technical", "support"]},
        {topic:'member', values:["trainee","junior", "senior"]}
    ]
    return (
        <div className='filter-container'>
            <header>
                <span>Filter</span>
                <span style={{color:'red',cursor:'pointer'}} onClick={()=>props.setShowFilter(false)}>Cancel</span>
            </header>
            <div className='filter-body'>
                {tickOptions.map((item,ind)=>{
                    return(
                        <div key={ind} style={{textTransform:'capitalize',color: '#1D2121', fontSize:14}}>
                            <div style={{margin:'5px 0px'}}>{item.topic}</div>
                            <ol>
                                {item.values.map((item,ind)=>{
                                    return(
                                        <li key={ind}>{renderItem('checkbox',item)}</li>
                                    );
                                })}
                            </ol>
                        </div>
                    );
                })}
            </div>
            <div style={{padding:'5px 15px'}}>
                {ddOptions.map((item,ind)=>{
                    return(
                        <div style={{padding:'10px 0px'}}>
                            {renderItem('dropDown', item.topic, ...item.values)}
                        </div>
                    );
                })}
            </div>
            <div className='btn-area'>
                <div className='btn' onClick={()=>props.setShowFilter(false)}>Save</div>
            </div>
        </div>
    );
}

export default FilterContainer;