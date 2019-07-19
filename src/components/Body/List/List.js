import React, {Component} from 'react';

class List extends Component {
    render() {
        let list = <li className="list-group-item">Пусто</li>;
        if(this.props.list[0]){
            list = this.props.list.map((item, index) => {
                return <li className="list-group-item">{item.name}</li>
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