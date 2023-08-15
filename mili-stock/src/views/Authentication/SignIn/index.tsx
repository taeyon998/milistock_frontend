import { Box, Card, CardContent, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'

export default function SignIn() {
    const [email, setUserEmail] = useState<string>('');
    const [password, setUserPassword] = useState<string>('');

    const signInHandler = () => {
        if (email.length === 0 || password.length === 0) {
            alert('이메일과 비밀번호를 입력하세요.');
            return;
        }

        const data = {
            email,
            password
        }
        axios
            .post("", data)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                alert('로그인에 실패했습니다.');
            });
    };
    return (
        <Card sx={{ minWidth: 275, maxWidth: "50vw" }}>
            <CardContent>
                <Box>
                    <TextField fullWidth label="이메일 주소" type="email" variant="standard" onChange={(e) => setUserEmail(e.target.value)} />
                    <TextField fullWidth label="비밀번호" type="password" variant="standard" onChange={(e) => setUserPassword(e.target.value)} />
                </Box>
            </CardContent>
        </Card>
    )
}
