// import {useState, useEffect} from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';


const Login = ({setToggleAuth, setUser}) => {

  let welcomeMsgs = ["hi", "we missed you", "hope you're doing well", "glad to see you again", "you look great today", "let's learn something new today", "you came to the right place", "hi, there", "happy learning!"]
  let welcomeMsg = welcomeMsgs[Math.floor(Math.random()*welcomeMsgs.length)];

    // const [user, setUserObj] = useState({
    //     email: "",
    //     password: "",
    // });

    // const handleChange = ({target: {name, value}}) => {
    //     setUserObj(currentUser => ({
    //         ...currentUser,
    //         [name]: value
    //     }))
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(user)
    //     fetch("http://localhost:9393/login",{
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json"
    //       },
    //       body: JSON.stringify(user)
    //     })
    //     .then(resp => {
    //       if (resp.ok) {
    //         resp.json().then(userObj => {
    //           setCurrentUser(userObj.user)
    //           setMessage("User successfully logged in!")
    //         })
    //       } else {
    //         resp.json().then(messageObj => setMessage(messageObj.message))
    //       }
    //     })
    // }

  return (
    <CssVarsProvider>
      <main className="sign-in-background">
        <Sheet
          sx={{
            width: 300,
            mx: 'auto', // margin left & right
            my: 4, // margin top & botom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <b className="login-welcome">Welcome back</b>
            </Typography>
            <Typography level="body2">✦{welcomeMsg}✦<br/><br/>Sign in to continue</Typography>
          </div>
          <form>
          {/* NEED TO ADD THIS TO FORM --> onSubmit={handleSubmit} */}
            <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                // html input attribute
                name="email"
                type="email"
                placeholder="johndoe@email.com"
                // onChange={handleChange}
                // value={user.email}
                />
            </FormControl>
            <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                // html input attribute
                name="password"
                type="password"
                placeholder="password"
                // onChange={handleChange}
                // value={user.password}
                />
            </FormControl>
            <Button type="submit" sx={{ mt: 1 /* margin top */ }}>Log in</Button>
            </form>
          <Typography
            endDecorator={<Link onClick={() => setToggleAuth(currentVal => !currentVal)}>Sign up</Link>}
            fontSize="sm"
            sx={{ alignSelf: 'center' }}
          >
            Don&apos;t have an account?
          </Typography>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}

export default Login;