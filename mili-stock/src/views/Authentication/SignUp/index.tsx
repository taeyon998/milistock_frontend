import React, { useState } from 'react'
import axios from "axios"
import { Box, TextField, CardContent, Card, CardActions, Button } from '@mui/material';

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
        <Card sx={{ minWidth: 275, maxWidth: "50vw" }}>
            <CardContent>
                <Box>
                    <TextField fullWidth label="이메일 주소" type="email" variant="standard" />
                    <TextField fullWidth label="비밀번호" type="password" variant="standard" />
                    <TextField fullWidth label="비밀번호 확인" type="password" variant="standard" />
                    <TextField fullWidth label="닉네임" variant="standard" />
                    <TextField fullWidth label="휴대폰 번호" variant="standard" />
                    <TextField fullWidth label="주소" variant="standard" />
                    <TextField fullWidth label="상세주소" variant="standard" />
                    <h3>{requestResult}</h3>        
                    
                </Box>
            </CardContent>
            <CardActions>
                <Button fullWidth onClick={() => signUpHandler()} variant="contained">회원가입</Button>    
            </CardActions>
        </Card>
    )
}
