import React from 'react';
import './DrawerStyle.css'
import { Drawer } from '@mui/material';
import logo from '../../Pages/Drawer/logoold.webp'
import {MdDashboard ,MdOutlineVideoSettings ,MdLocalLibrary,MdPayment} from 'react-icons/md';
import {IoIosContact} from 'react-icons/io'
import {PiBookBookmarkLight} from 'react-icons/pi';
import {GrGallery} from 'react-icons/gr'
import { SiBookstack } from 'react-icons/si';
import { Link } from 'react-router-dom';
const DrawerDasboard = (props) => {

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (

        <>
            <div className='drawaradmin-nav'>
                <MdDashboard onClick={handleDrawerOpen} />
                <span className='component-title'>{props.componentName}</span>
            </div>
            <Drawer
                anchor="left"
                onClose={handleDrawerClose}
                open={open}
                
            >
                
                <div className="admin-sidebar">
                    <img src={logo} alt="Display Logo" className='admin-sidebar-logo' />
                        <button className="sidebar-row" onClick={handleDrawerClose}>
                            <li className='sidebar-icons' ><MdDashboard/></li>
                            <li className='sidebar-title' >Dashboard </li>
                        </button>
                        <Link to={'/allpurchases'}  className="sidebar-row"  onClick={handleDrawerClose}>
                            <li className='sidebar-icons' ><PiBookBookmarkLight /></li>
                            <li className='sidebar-title' >All Purchases</li>
                        </Link >
                        <button className="sidebar-row"  onClick={handleDrawerClose}>
                            <li className='sidebar-icons' ><SiBookstack/></li>
                            <li className='sidebar-title' >Courses</li>
                        </button>
                        <button className="sidebar-row" onClick={handleDrawerClose}>
                            <li className='sidebar-icons' ><MdOutlineVideoSettings /></li>
                            <li className='sidebar-title' >Videos</li>
                        </button>
                        <button className="sidebar-row" onClick={handleDrawerClose}>
                            <li className='sidebar-icons' ><MdLocalLibrary /></li>
                            <li className='sidebar-title' >Lerning Path</li>
                        </button>
                        <button className="sidebar-row"  onClick={handleDrawerClose}>
                            <li className='sidebar-icons' ><IoIosContact /></li>
                            <li className='sidebar-title' >Contact</li>
                        </button>
                        <button className="sidebar-row"  onClick={handleDrawerClose}>
                            <li className='sidebar-icons' ><GrGallery/></li>
                            <li className='sidebar-title' >Gallery</li>
                        </button>
                        <button className="sidebar-row"  onClick={handleDrawerClose}>
                            <li className='sidebar-icons' ><MdPayment /></li>
                            <li className='sidebar-title' >Pricing</li>
                        </button>
                    
                </div>
            </Drawer>

        </>


    );
}
export default DrawerDasboard;