import React, {Component} from 'react';

class List extends Component {

    render() {
        const { changeStatusListItem } = this.props;
        if(!this.props.list.length){
            return null;
        }

        let list = [];

        list = this.props.list.map((item, index) => {console.log(item);
            return <li 
                        key={index} 
                        className={ item.done ? "list-group-item crossed-out" : "list-group-item"} 
                        onClick={() => changeStatusListItem(item.id)}
                    >{item.name}</li>
        })
                
        return(
            <ul className="list-group">
               {list}
            </ul>
        )
    }
}

export default List;