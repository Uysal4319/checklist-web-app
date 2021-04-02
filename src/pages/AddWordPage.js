import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import ReactLoading from "react-loading";
import Typing from "../components/Typing";


class AddWordPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: '',
            loading: false,
            itemText: '',

        }
        this.addItems = this.addItems.bind(this);
        this.tokenAdress = ''
    }


    addItems() {
        this.setState({
            loading: true
        })
        const tokenBody = this.state.itemText + '&&' + this.tokenAdress;
        fetch('https://spring-eu.herokuapp.com/addItem', {
            method: 'POST',
            headers: {
                Accept: 'text/plain',
                'Content-Type': 'text/plain',
                Authorization: 'Bearer ' + this.tokenAdress
            },
            body: tokenBody
        }).then((res) => {
            console.error(":Res : " + res);
            this.setState({
                loading: false
            })
        })
    }


    componentDidMount() {
        const {token} = this.props.location.state
        this.setState({
            token: token
        })

        this.tokenAdress = token;
    }


    render() {
        if (!this.state.loading) {
            return (
                <div>
                    <nav className={'navBar'}>
                        <Link to={{ pathname: '/home', state: { token: this.state.token} }}>Check List</Link>
                        <Link to={{ pathname: '/addWord', state: { token: this.tokenAddress} }}>Add Word</Link>
                        <Link to="/users">Users</Link>
                    </nav>
                    <div style={{
                        position: 'absolute', left: '50%', top: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}>
                    <Typing
                        placeHolder="Enter Item"
                        onChangeText={value => {
                            this.setState({itemText: value.target.value})
                        }}
                        value={this.state.itemText}
                    />

                    <button className={'login'} onClick={this.addItems}> Add Word</button>

                    {/*<button className={'login'} onClick={this.signUp}>  Cancel and Check List Page </button>*/}
                    </div>

                </div>
            );
        } else {

            return (
                <div style={{
                    position: 'absolute', left: '50%', top: '50%',
                    transform: 'translate(-50%, -50%)'
                }}>
                    <ReactLoading className={'loading'} type="bars" color="gray"/>
                </div>
            );

        }

    }
}


export default withRouter(AddWordPage);
