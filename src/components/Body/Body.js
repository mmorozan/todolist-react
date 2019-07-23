import React, { Component } from 'react';
import List from './List';
import Form from './Form';

class Body extends Component {
    state = {
        list: [],
        id: 0
    }

    addList = (value) => {
        let listsCopy = this.state.list.slice();
        let index = this.state.id + 1;
        const { setCount } = this.props;
        
        listsCopy.push({name: value, done: false, id: index});
        setCount(listsCopy.length);
        this.setState({list: listsCopy, id: index});
    }
    
    changeInput = (value) => {
        this.setState({
            valueInput: value
        });
    }

    changeStatusListItem = (id) => {
        const newList = this.state.list.slice()
        const item = newList.find((item)=>item.id === id);
        if(item){
            item.done = !item.done;
            this.setState({list:newList})
        }
    }
    
    
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Form 
                            onButtonClick = {this.addList}
                            onChangeInput = {this.changeInput}
                        />
                    </div>
                    <div className="col-12">
                        <List 
                            list={this.state.list}
                            idInput={this.state.id}
                            changeStatusListItem = {this.changeStatusListItem}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Body;