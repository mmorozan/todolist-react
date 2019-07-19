import React, { Component } from 'react';
import List from './List';
import Form from './Form';

class Body extends Component {
    state = {
        list: [],
    }

    addList = (list, inputValue) => {
        let listsCopy = list.slice();
        
        listsCopy.push({name: inputValue, done: false});

        this.setState({list: listsCopy, valueInput: ''});
    }
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Form onButtonClick={this.addList.bind(this, this.state.list)}/>
                    </div>
                    <div className="col-12">
                        <List list={this.state.list} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Body;