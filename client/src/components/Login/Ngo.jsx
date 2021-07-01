import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from "react-router-dom";
import Input from '../Input/Input';
import Button from '../Button/Button';
import { useHistory } from 'react-router';

const Ngo = (props) => {
    const { ngoLogin } = useAuth();
    const history = useHistory();

    const [login, setLogin] = useState({
        email: '',
        password: '',
    });

    const ngoLoginHandler = () => {
        ngoLogin({ email: login.email, password: login.password });
        history.push('/dashboard');
    };

    return (
        <>
            <Input
                label='Email'
                type='email'
                value={login.email}
                disabled={!props.login}
                onChange={(e) => {
                    if (e.target.value.length > 0 || login.password.length > 0) props.setLogin(false);
                    else props.setLogin(true);
                    setLogin((p) => ({
                        email: e.target.value,
                        password: p.password,
                    }));
                }}
            />
            <br/>
            <Input
                label='Password'
                type='password'
                value={login.password}
                disabled={!props.login}
                onChange={(e) => {
                    if (e.target.value.length > 0 || login.email.length > 0) props.setLogin(false);
                    else props.setLogin(true);
                    setLogin((p) => ({
                        email: p.email,
                        password: e.target.value,
                    }));
                }}
            />
            <br/>
            <p>Don't have an account? <Link to={`/register`}>Register</Link></p>
            <br/>
            <br/>
            <Button variant='primary' disabled={!props.login} onClick={ngoLoginHandler}>
                Login
            </Button>
        </>
    );
};

export default Ngo;
