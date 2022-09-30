import React, { Component } from 'react';
import './button.css';

class Button extends Component {
    constructor(props) {
        super(props);

        this.state = {
            customText: props.customText,
        }
    }

    render() {
        const Button = ({customText}) => {
            return (
                <div className='purpleButton'>
                    <span>{customText}</span>
                </div>
            );
        }

        return (
            <Button customText={this.state.customText} />
        ); 
    }
}

export default Button;