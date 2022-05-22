import './dashboard.css';
import Sidebar from "../../components/sidebar/sidebar";
import Header from '../../components/header/header';
import ContentBody from '../../components/contentBody/contentBody';
import { useState } from 'react';

function Dashboard() {
    const handleSidebarChange=(option)=>{
        setSelectedOption(option);
    }
    const [selectedOption, setSelectedOption]=useState('home');
    return (
        <div className="dashboard-container">
            <div className="header-section">
                <Header selectedOption={selectedOption}/>
            </div>
            <div className="sidebar-section">
                <Sidebar handleSidebarChange={handleSidebarChange} selectedOption={selectedOption}/>
            </div>
            <div className="main-section">
                <ContentBody selectedOption={selectedOption}/>
            </div>
        </div>
    );
}

export default Dashboard;