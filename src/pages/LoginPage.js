import '../App.css';
import React from "react";
import Header from "../components/Header/Header";
import Login from "../components/Login/Login";

function LoginPage() {
    return (
        <div className="App">
            <header className={'App-header'}>
                <Header/>
            </header>
            <body className={'App-body'}>
            <Login/>
            </body>
        </div>
    );
}

export default LoginPage;
