import React, {Component} from 'react';
import {Link} from "react-router-dom";
import CheckItem from "../components/CheckItem/CheckItem";
import ReactLoading from "react-loading";


class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checklist : [],
            token : '',
            loading :false
        }

    }
     checkList = [
         {
             text : 'Hello World 1 ',
             status : false
         }, {
             text : 'Hello World 2 ',
             status : false
         }, {
             text : 'Hello World 3 ',
             status : false
         }, {
             text : 'Hello World 4 ',
             status : false
         }, {
             text : 'Hello World 5 ',
             status : false
         }, {
             text : 'Hello World 6 ',
             status : false
         }, {
             text : 'Hello World 7 ',
             status : false
         }, {
             text : 'Hello World 8sdfghsrtghsfrtghrthyrtyhy ',
             status : false
         }

    ]


     getItems(token ){


        fetch('https://spring-eu.herokuapp.com/findAllItem', {
            method: 'POST',
                    headers :{
                        Accept: 'application/json',
                        'Content-Type' : 'application/json',
                        Authorization : 'Bearer ' + token
                    },
                    body: token
                } )
            .then((res)=>res.json())
            .then((res) => {

                this.setState({
                    token : res
                })
                console.error(":Res : " + res);
                this.checkList = res;
                this.setState({
                    loading: true
                })
            })


        // try {
        //     let response = await fetch('https://spring-eu.herokuapp.com/findAllItem', {
        //     method: 'POST',
        //         headers :{
        //             Accept: 'application/json', 'Content-Type' : 'application/json',
        //             Authorization : 'Bearer ' + token
        //         },
        //         body: token
        //     } );
        //
        //
        //     let responseJson = await response.json();
        //     console.error(responseJson.toString());
        //
        //     this.setState({
        //         isLoading : false,
        //         checkList :responseJson,
        //     })
        // }catch (error){
        //     this.setState({
        //         isLoading : false
        //     });
        //     alert('yüklenemedi')
        // }

    }


    componentDidMount() {
        fetch('https://spring-eu.herokuapp.com/authenticate', {
            method: 'POST',
            headers :{
                Accept: 'application/json', 'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                username : 'ertu',
                password : 'ertu',
            })
        } )
            .then((res)=>res.json())
            .then((res) => {

                // this.props.dispatch({type: 'app/updateState',payload: {token : res.token}});
                this.setState({
                    token : res.token
                })
                console.error("Token : " + res.token);
                this.getItems(res.token);
            })





        // fetch("https://spring-eu.herokuapp.com/findAllItem")
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             console.log(result)
        //             this.setState({
        //                 isLoaded: true,
        //                 checkList: result
        //             });
        //         },
        //
        //         (error) => {
        //             this.setState({
        //                 isLoaded: true,
        //             });
        //         }
        //     )
    }

    selectItems(){
        // alert("elemanı seçildi")
    }
    rightClick(){
        alert("sağa tıklanı")
    }

        render() {
        if(this.state.loading){
            return (
                <div>
                    <nav className={'navBar'} >
                        <Link to="/home">Check List</Link>
                        <Link to="/about">Item Ekle</Link>
                        <Link to="/users">Users</Link>
                    </nav>

                    {
                        this.checkList.map( item => {
                                return <CheckItem text = {item.text}/>
                            }

                        )
                    }

                </div>
            );
        } else {

            return (
                <div  style={{
                    position: 'absolute', left: '50%', top: '50%',
                    transform: 'translate(-50%, -50%)'
                }}>
                    <ReactLoading className={'loading'} type="bars" color="gray" />
                </div>
            );

        }

    }
}

export default HomePage;
