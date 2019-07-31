import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from '@fortawesome/free-solid-svg-icons';

export class Settings extends Component {
    render() {
        return (
            <div>
                <h2><FontAwesomeIcon color='#f5c440' icon={faCogs} /> Settings</h2>
            </div>
        )
    }
}

export default Settings