import React, { useState } from 'react'
import axios from "axios"
import { Box, TextField, CardContent, Card, CardActions, Button } from '@mui/material';

export default function SignUp() {
    const [userEmail, setUserEmail] = useState<string>('');
    const [userPassword, setUserPassword] = useState<string>('');
    const [userPasswordCheck, setUserPasswordCheck] = useState<string>('');
    const [userNickname, setUserNickname] = useState<string>('');
    const [userPhoneNumber, setUserPhoneNumber] = useState<string>('');
    const [userAddress, setUserAddress] = useState<string>('');
    const [userAddressDetail, setUserAddressDetail] = useState<string>('');

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
            .then((response) => {})
            .catch((error) => {})
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
                      
                    
                </Box>
            </CardContent>
            <CardActions>
                <Button fullWidth onClick={() => signUpHandler()} variant="contained">회원가입</Button>    
            </CardActions>
        </Card>
    )
}
