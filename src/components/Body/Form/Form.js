import React, { Component } from 'react';

class Form extends Component {
    
    render() {
        const {onButtonClick, onChangeInput} = this.props;

        return (
            <label htmlFor="" className="d-flex">
                <input className='form-control' id='todoInput' type='text' value={this.props.valueInput} onChange={(e) => {onChangeInput(e.target.value)}} />
                <button className='btn btn-primary' onClick={onButtonClick}>ADD</button>
            </label>
        )
    }
}

export default Form;