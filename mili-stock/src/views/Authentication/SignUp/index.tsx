import React, { useState } from 'react'
import axios from "axios"
import { Box, TextField, CardContent, Card, CardActions, Button, Typography } from '@mui/material';

interface Props {
    setAuthView: (authView: boolean) => void,
}

export default function SignUp(props: Props) { // parameter "props", which must be object that has function setAuthView
    const [userEmail, setUserEmail] = useState<string>('');
    const [userPassword, setUserPassword] = useState<string>('');
    const [userPasswordCheck, setUserPasswordCheck] = useState<string>('');
    const [userNickname, setUserNickname] = useState<string>('');
    const [userPhoneNumber, setUserPhoneNumber] = useState<string>('');
    const [userAddress, setUserAddress] = useState<string>('');
    const [userAddressDetail, setUserAddressDetail] = useState<string>('');

    const { setAuthView } = props;

    const signUpHandler = () => {
        const data = {
            userEmail,

            userPassword,

            userPasswordCheck,

            userNickname,

            userPhoneNumber,

            userAddress,

            userAddressDetail
        }
        axios
            .post('https://8080-taeyon998-milistockback-0po8sqohyzw.ws-us102.gitpod.io/api/auth/signUp', data)
            .then((response) => {})
            .catch((error) => {})
    }
    return (
        <Card sx={{ minWidth: 275, maxWidth: "50vw", padding: 5 }}>
            <Box>
                <Typography variant='h5'>회원가입</Typography>
            </Box>
            <CardContent>
                <Box>
                    <TextField fullWidth label="이메일 주소" type="email" variant="standard" onChange={(e)=>setUserEmail(e.target.value)}/>
                    <TextField fullWidth label="비밀번호" type="password" variant="standard" onChange={(e)=>setUserPassword(e.target.value)}/>
                    <TextField fullWidth label="비밀번호 확인" type="password" variant="standard" onChange={(e)=>setUserPasswordCheck(e.target.value)}/>
                    <TextField fullWidth label="닉네임" variant="standard" onChange={(e)=>setUserNickname(e.target.value)}/>
                    <TextField fullWidth label="휴대폰 번호" variant="standard" onChange={(e)=>setUserPhoneNumber(e.target.value)}/>
                    <TextField fullWidth label="주소" variant="standard" onChange={(e)=>setUserAddress(e.target.value)}/>
                    <TextField fullWidth label="상세주소" variant="standard" onChange={(e)=>setUserAddressDetail(e.target.value)}/>                     
                
                </Box>
            </CardContent>
            <CardActions>
                <Button fullWidth onClick={() => signUpHandler()} variant="contained">회원가입</Button>    
            </CardActions>
            <Box component ='div' display='flex' mt={2}>
                <Typography ml={1} onClick={() => setAuthView(false)}>
                    로그인
                </Typography>
            </Box>
        </Card>
    )
}
