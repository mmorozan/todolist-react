import React, { Component } from 'react';

class Form extends Component {
    state = {
        valueInput: ''
    }

    onClickHandler = () => {
        const {onButtonClick} = this.props;
        const {valueInput} = this.state;
        
        onButtonClick(valueInput);
        this.setState({valueInput: ''});
    }

    render() {
        return (
            
            <label htmlFor="" className="d-flex">
                <input className='form-control' type='text' value={this.state.valueInput} onChange={(e) => {this.setState({ valueInput: e.target.value})}} />
                <button className='btn btn-primary' onClick={this.onClickHandler}>ADD</button>
            </label>
        )
    }
}

export default Form;