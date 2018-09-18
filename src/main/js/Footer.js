import React from 'react';

import { commonResources } from './resources/CommonResources';

export default class Footer extends React.Component{
    render() {
        const footerStyle = {
            backgroundColor: "#333",
            height: "100px",
            position: "relative",
            marginTop: "-150px",
            height: "150px",
            clear: "both",
            paddingTop: "20px",
            verticalAlign: "middle",
            color: "lightgray"
        };
        return (
            <footer style={footerStyle}>
                <div className="text-center">
                    <a href="#/contact">{commonResources.links.contact}</a>
                    <p>&copy; Copyright 2018 Maxime Clauss<br/>All rights reserved.</p>
                </div>
            </footer>
		)
	}
}
