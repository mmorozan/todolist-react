import React, {Component} from 'react';

class List extends Component {

    render() {
        const { changeStatusList } = this.props;
        let list = [];

        if(this.props.list.length){
            list = this.props.list.map((item, index) => {
                return <li key={index} className="list-group-item" onClick={changeStatusList}>{item.name}</li>
            })
        } 
                
        return(
            <ul className="list-group">
               {list}
            </ul>
        )
    }
}

export default List;