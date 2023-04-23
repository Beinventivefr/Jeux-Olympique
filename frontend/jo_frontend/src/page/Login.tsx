import React, {useContext, useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import {Form, Button, Container, Row, Col} from "react-bootstrap";
import JsonContext from "../context/JsonContext";
import jwtDecode, {JwtPayload} from "jwt-decode";
import Cookies from 'js-cookie';

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    // @ts-ignore
    const {setToken} = useContext(JsonContext);

    function handleSubmit(event: { preventDefault: () => void; }) {

        event.preventDefault();

        const { VITE_SERVER_ADDRESSES} = import.meta.env;

        if (username && password) {
            axios
                .post(`${VITE_SERVER_ADDRESSES}/dj-rest-auth/login/`, {
                    username,
                    password,
                })
                .then((response) => {

                    const token = response.data.key;
                    Cookies.set('TOKEN', token);
                    alert("on récupère le token !!!")
                    console.log("token : ", token)

                    setToken(token) // j'enregistre le token dans le context de l'application
                    alert("enregistrement !!!")
                    console.log("enregistrement du token : ", token)

                    navigate("/");

                })
                .catch((error) => {
                    if (error?.response?.status == 401) {
                        alert("Unauthorized access");
                    } else {
                        console.error(error);
                    }
                });
        } else {
            alert("Merci de vous connectez")
            navigate("/login")
        }
    }

    return (
        <Form className="app" id="stripe-login" method="POST" onSubmit={handleSubmit}>
            <Form.Group as={Col} md={6} controlId="formEmail">
                <Form.Label>Username:&nbsp;</Form.Label>
                <Form.Control
                    type="text"
                    name="username"
                    placeholder="username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
            </Form.Group>

            <Form.Group as={Col} md={6} controlId="formPassword">
                <Form.Label>Password:&nbsp;</Form.Label>
                <Form.Control
                    type="password"
                    name="password"
                    placeholder="***********"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Se connecter
            </Button>
        </Form>

    );
}


//REMARQUE :
// En React, il y a deux façons de définir un composant : avec la syntaxe de classe ou avec la syntaxe de fonction. 
//Dans la syntaxe de classe, on définit un composant en étendant la classe React.Component, et en implémentant une méthode render() qui retourne le code JSX du composant. 
//Dans la syntaxe de fonction, on définit un composant comme une simple fonction qui retourne le code JSX.

// La syntaxe de fonction est apparue avec la version 16.8 de React et a introduit les hooks, qui sont des fonctions qui permettent de gérer l'état et le cycle de vie d'un composant fonctionnel. 
//Les hooks permettent d'avoir un code plus simple, plus lisible et plus facile à maintenir, car ils permettent d'éviter la complexité de la programmation orientée objet et de la syntaxe de classe.
