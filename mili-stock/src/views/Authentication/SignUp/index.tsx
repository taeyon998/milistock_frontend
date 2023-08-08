import React, { useState } from 'react'
import axios from "axios"
import { TextField } from '@mui/material';

export default function SignUp() {
    const [requestResult, setRequestResult] = useState<string>('');

    const signUpHandler = () => {
        const data = {
            "userEmail": "taeyon@naver.com",

            "userPassword": "awer1234",

            "userPasswordCheck": "awer1234",

            "userNickname": "Hogwart Kim",

            "userPhoneNumber": "010-1111-1111",

            "userAddress": "서울시",

            "userAddressDetail": "서초구"
        }
        axios
            .post('https://8080-taeyon998-milistockback-u79iumy3s7k.ws-us102.gitpod.io/api/auth/signUp', data)
            .then((response) => {
                setRequestResult('Success!');
            })
            .catch((error) => {
                setRequestResult('Failed!');
            })
    }
    return (
        <div>
            <TextField id="standard-basic" label="Standard" variant="standard" />
            <h3>{requestResult}</h3>
            <button onClick={() => signUpHandler()}>회원가입</button>
        </div>
    )
}
