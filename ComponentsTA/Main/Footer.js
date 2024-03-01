import React from "react";
import "../style/stleFooter.css"

const Footer = () => {
    return (
        <div className="footer" id="footer">
            <h1>ReFood</h1>
            <p>Made By Ramdan</p>
            <pre>
                <ul>
                    <li>
                        <span className="icon-phone"></span> : 0812-8213-9658
                    </li>
                    <li>
                        <span className="icon-mail"></span> : ramdaniqop@gmail.com
                    </li>
                    <li>
                        <span className="icon-user"></span> : magentakey.github
                    </li>
                </ul>
            </pre>
        </div>
    )
}
export default Footer