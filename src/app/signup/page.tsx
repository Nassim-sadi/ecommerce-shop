'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignupPage() {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        validateForm();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name, email, password]);
    // Validate form
    const validateForm = () => {
        let errors: any = {};

        if (!name) {
            errors.name = 'Name is required.';
        }

        if (!email) {
            errors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is invalid.';
        }

        if (!password) {
            errors.password = 'Password is required.';
        } else if (password.length < 6) {
            errors.password = 'Password must be at least 6 characters.';
        }

        setErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    };


    const [buttonEnabled, setButtonEnabled] = useState(false);

    const handleSignup = async () => {
        if (isFormValid) {
            try {
                const response = await axios.post('/api/signup', user)
                console.log("user created successfully", response.data);
                toast.success('user created successfully')

            } catch (error: any) {
                console.log('signup failed ' + error.message);
                toast.error(error.response.data.error)
            }
        }
    }
    return (
        <div className='flex'>

            <label htmlFor='username'>Username</label>
            <input
                type='text'
                name='username'
                value={user.username}
                onChange={(e) => {
                    setUser({ ...user, username: e.target.value });
                    setName(e.target.value)
                }}
                required
            />
            <label htmlFor='email'>email</label>
            <input
                type='text'
                name='email'
                value={user.email}
                onChange={(e) => {
                    setUser({ ...user, email: e.target.value });
                    setEmail(e.target.value)
                }}
                required
            />
            <label htmlFor='password'>password</label>
            <input
                type='password'
                name='password'
                value={user.password}
                onChange={(e) => {
                    setUser({ ...user, password: e.target.value });
                    setPassword(e.target.value)

                }}
                required
            />
            {isFormValid ? 'true' : 'false'}
            <button type='submit' onClick={handleSignup} className="btn" disabled={!isFormValid}>{isFormValid ? "Sign Up" : "No sign up"} </button>


            <div>
                <ToastContainer />
            </div>
        </div>

    );
}
