import './podsContainer.css'
import { podsMenus } from '../../../data';
import {useState} from 'react';
import Boards from '../podMenus/boards/boards';
import FilterContainer from '../filterContainer/filterContainer';
function PodsContainer() {

    const [selectedPodOption,setSelectedPodOption]=useState('all pods');
    const [showFilter, setShowFilter]=useState(false);

    const handlePodMenuChange = (podOption) =>{
        console.log(podOption)
        setSelectedPodOption(podOption);
    }
    const renderSelectedPodMenu=(menu)=>{
        switch (menu) {
            case 'boards':
            return(
                <Boards/>
            );
    
            default:
            return(
                <h1 style={{textTransform:'capitalize'}}>"{menu}" option of pods Layout not found</h1>
            );
        }
    }
    return ( 
        <div className='pods-container'>
            <header>
                {podsMenus.map((item,ind)=>{
                    return(
                        <div key={ind} className={selectedPodOption===item.name?'menus active':'menus'} onClick={()=>{handlePodMenuChange(item.name)}}>
                            <img src={item.icon} alt={item.name}/>
                            <label>{item.name}</label>
                            {selectedPodOption===item.name && <div className='line'/>}
                        </div>
                    );
                })}
                <div className='button-containers'>
                    <div style={{background:'#715BC8'}} onClick={()=>setShowFilter(!showFilter)}>Filter</div>
                    <div style={{background:'#5433FF'}} onClick={()=>setShowFilter(!showFilter)}>New Task</div>
                </div>
            </header>
            <div className='line'></div>
            {renderSelectedPodMenu(selectedPodOption)}
            {showFilter && <FilterContainer setShowFilter={setShowFilter}/>}
        </div>
    );
}

export default PodsContainer;