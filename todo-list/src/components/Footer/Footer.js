import React from 'react';
import './Footer.css';

const RED = "#ff0000";
const BLUE = "#0000ff";
const GRAY = "#678c89";

const Footer = () => {

    const submitThemeColor =(color) => {
        return null;
    }

    return(
        <div className="footer">
            <div className="vertical-center">
                <span>Choose Theme</span>
                <button onClick={() => submitThemeColor(RED)} className="dot red"/>
                <button onClick={() => submitThemeColor(BLUE)} className="dot blue"/>
                <button onClick={() => submitThemeColor(GRAY)} className="dot gray"/>
            </div>
        </div>
    )
}

export default Footer;