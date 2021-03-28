import React, {Component} from 'react';
import Typing from "../Typing";
import {withRouter} from 'react-router-dom';
import ReactLoading from "react-loading";


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password :'',
            passed: false,
            visible: false,
            modalVisible : false
        }
        this.goLogin = this.goLogin.bind(this);
        this.signUp = this.signUp.bind(this);
    }

     goLogin(){

        // const {user,password} = this.state;
        //
        // console.error("user: " + user + " pass : "+ password);

         this.setState({ visible : true})
             fetch('https://spring-eu.herokuapp.com/authenticate', {
                 method: 'POST',
                 headers :{
                     Accept: 'application/json', 'Content-Type' : 'application/json',
                 },
                 body: JSON.stringify({
                     username : this.state.user,
                     password : this.state.password,
                 })
             } )
                 .then((res)=>res.json())
                 .then((res) => {

                     this.setState({ visible : false})

                     if(res.message !== "INVALID_CREDENTIALS" ){


                         this.props.history.push(
                             '/home',
                             [
                             { username: this.state.user,
                               password: this.state.password}]
                         )

                     }else {
                         alert("hatalı username password")
                     }

                     console.error("Token : " + res.token);
                 })


        // try {
        //     let response = await fetch('https://spring-eu.herokuapp.com/authenticate', {
        //         method: 'POST',
        //         headers :{
        //             Accept: 'application/json', 'Content-Type' : 'application/json',
        //         },
        //         body: JSON.stringify({
        //             username : this.state.user,
        //             password : this.state.password,
        //         })
        //     } );
        //
        //     let responseJson = await response.json();
        //
        //     if( responseJson.token !==  null && responseJson.token !== undefined){
        //         console.log('Token : '+ responseJson.token)
        //
        //     }
        // }catch (error){
        //
        //     alert('yüklenemedi')
        // }

    }

    signUp(){
        this.setState({ visible : true})
        fetch('https://spring-eu.herokuapp.com/sign-up', {
            method: 'POST',
            headers :{
                Accept: 'application/json', 'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                username : this.state.user,
                password : this.state.password,
            })
        } )
            .then((res) => {

                this.setState({ visible : false})

                if(res.status === 201){

                    alert('Başka bir kullanıcı ismi ile dene');

                }else {
                    alert("user eklendi")
                }
                this.props.history.push("/");

            })
    }

    render() {
        if(!this.state.loading){
           return (
                  <div>
                      <Typing
                          placeHolder = "User"
                          onChangeText = { value =>{this.setState({user: value.target.value})}}
                          value = {this.state.user}
                      />

                      <Typing
                          placeHolder = "Password"
                          onChangeText = {value =>  {this.setState({password: value.target.value})}}
                          value = {this.state.password}
                      />

                      <button className={'login'} onClick={this.goLogin}> LoginPage! </button>
                      <button className={'login'} onClick={this.signUp}> SignUp! </button>

                      {/*<NavLink className={'login'} to="/home" >Login!</NavLink>*/}
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

export default withRouter(Login);
