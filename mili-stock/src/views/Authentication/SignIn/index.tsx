import { Box, Button, Card, CardActions, CardContent, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import { useCookies } from 'react-cookie';
import { useUserStore } from '../stores';

interface Props {
    setAuthView: (authView: boolean) => void,
}

export default function SignIn(props: Props) {
    const [userEmail, setUserEmail] = useState<string>('');
    const [userPassword, setUserPassword] = useState<string>('');

    const [cookies, setCookies] = useCookies();
    const { user, setUser } = useUserStore();

    const { setAuthView } = props;
    
    // POST 로그인 정보 to backend
    const signInHandler = () => {
        if (userEmail.length === 0 || userPassword.length === 0) {
            alert('이메일과 비밀번호를 입력하세요.');
            return;
        }

        const data = {
            userEmail,
            userPassword
        }
        axios
            .post("https://8080-taeyon998-milistockback-k69f7818zph.ws-us103.gitpod.io/api/auth/signIn", data)
            .then((response) => {
                const responseData = response.data;
                console.log(responseData.data)
                if (!response.data.result) {
                    alert('로그인에 실패했습니다.');
                    return;
                }

                // Make Cookie
                const { token, exprTime, user } = responseData.data;
                const expires = new Date();
                expires.setMilliseconds(expires.getMilliseconds() + exprTime);

                setCookies('token', token, { expires });
                setUser(user);
            })
            .catch((error) => {
                alert('로그인에 실패했습니다.');
            });
    };

    // 로그인 UI
    return (
        <Card sx={{ minWidth: 275, maxWidth: "50vw", padding: 5 }}>
            <Box>
                <Typography variant='h5'>로그인</Typography>
            </Box>
            {user != null && (<>{user.userNickname}</>)}
            <CardContent>
                <Box>
                    <TextField fullWidth label="이메일 주소" type="email" variant="standard" onChange={(e) => setUserEmail(e.target.value)} />
                    <TextField fullWidth label="비밀번호" type="password" variant="standard" onChange={(e) => setUserPassword(e.target.value)} />
                </Box>
            </CardContent>
            <CardActions>
                <Button fullWidth onClick={() => signInHandler()} variant="contained">로그인</Button>
            </CardActions>
            <Box component ='div' display='flex' mt={2}>
                <Typography ml={1} onClick={() => setAuthView(true)}>
                    회원가입
                </Typography>
            </Box>
        </Card>
    )
}
