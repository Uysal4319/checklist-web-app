import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import CheckItem from "../components/CheckItem/CheckItem";
import ReactLoading from "react-loading";


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checklist: [],
            token: '',
            loading: false,
            item:null,
            selected :false
        }
        this.getItems = this.getItems.bind(this);
        this.tokenAddress = ''
    }
    checkList = [
        {
            text : 'Hello World 1 ',
            status : false
        }

    ]

    getItems(token) {
        this.tokenAddress = token;
        fetch('https://spring-eu.herokuapp.com/findAllItem', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            },
            body: token
        })
            .then((res) => res.json())
            .then((res) => {
                console.error(":Res : " + res);
                this.checkList = res;
                this.setState({
                    loading: true
                })
            })
    }


    componentDidMount() {
        const {location} = this.props
        const {token} = this.props.location.state

        const rightToken = location.state[0] === undefined || location.state[0] === null ? token : location.state[0].token

        this.setState({
            token: rightToken
        })

        this.tokenAddress = rightToken;
        this.getItems(rightToken);
    }

    selectItems() {
        // alert("elemanı seçildi")
    }

    rightClick() {
        alert("sağa tıklanı")
    }

    onSelected (item) {
        console.debug(item.id);
        this.setState({
            item: item
        })
    }

    onDeleted(item) {

        console.debug(item.id);

        this.setState({
            loading: false
        })

        fetch('https://spring-eu.herokuapp.com/delete', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + this.tokenAddress
            },
            body: JSON.stringify({
                id: item.id,
                text: item.text,
                status: item.status,
                username: this.tokenAddress
             }
            )
        }).then((res) => {
                console.error(":Res : " + res);
                this.getItems(this.tokenAddress)
            })
    }

    render() {
        if (this.state.loading) {
            return (
                <div>
                    <nav className={'navBar'}>
                        <Link to="/home">Check List</Link>
                        <Link to={{ pathname: '/addWord', state: { token: this.tokenAddress} }}>Add Word</Link>
                        <Link to="/users">Users</Link>
                    </nav>

                    {
                        this.checkList.map(item  => {
                            return <CheckItem article={item}
                                              selected ={this.state.item}
                                              onSelectedItems ={() =>this.onSelected(item)}
                                              onDeletedItems ={() =>this.onDeleted(item)}/>


                            }
                        )
                    }

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


export default withRouter(HomePage);
