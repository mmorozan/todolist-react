import React, { Component } from 'react';
import List from './List';
import Form from './Form';

class Body extends Component {
    state = {
        list: [],
        valueInput: '',
        id: 0
    }

    addList = () => {
        let listsCopy = this.state.list.slice();
        let index = this.state.id + 1;
        
        listsCopy.push({name: this.state.valueInput, done: false, id: index});

        this.setState({list: listsCopy, valueInput: '', id: index});
    }
    
    changeInput = (value) => {
        this.setState({
            valueInput: value
        });
    }

    changeStatusList = () => {
        this.setState()
        console.log(this.state);
        console.log(this);
        // console.log('some');
    }
    
    
    render() {
        console.log(this.state);
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Form 
                            valueInput = {this.state.valueInput}
                            onButtonClick = {this.addList}
                            onChangeInput = {this.changeInput}
                        />
                    </div>
                    <div className="col-12">
                        <List 
                            list={this.state.list}
                            idInput={this.state.id}
                            changeStatusList = {this.changeStatusList}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Body;