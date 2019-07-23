import React,{Component} from 'react';

class Header extends Component {
    render() {
        const { countList } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Todo list {countList}</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;