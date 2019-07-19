import React, { Component } from 'react';

class Form extends Component {
    state = {
        valueInput: ''
    }

    changeInput = (value) => {
        this.setState({
            valueInput: value
        });
    }
    render() {
        const {onButtonClick} = this.props;
        return (
            <label htmlFor="" className="d-flex">
                <input className='form-control' id='todoInput' type='text' value={this.state.valueInput} onChange={e => this.changeInput(e.target.value)} />
                <button className='btn btn-primary' onClick={ () => {onButtonClick(this.state.valueInput)} }>ADD</button>
            </label>
        )
    }
}

export default Form;