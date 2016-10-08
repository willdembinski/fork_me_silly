import React from 'react';
import SettingsMenuItem from '../SettingsMenuItem';

const itemStyles = () => {
    return {}
};

const SettingsMenu = ({ menuItems, activeId,onSettingsComponentClick }) => {
    return (<div className="col-md-2"><ul style={itemStyles()} className='sidebar-nav'>
            {
                menuItems.map((menuItem,idx)=>{
                    return (
                        <SettingsMenuItem menuItem={menuItem} key={idx} idx={idx} onClick={() => onSettingsComponentClick(idx)} />
                    )
                })
            }
        </ul></div>)
}


export default SettingsMenu;
