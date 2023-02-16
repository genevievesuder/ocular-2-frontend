import { useState, useContext } from 'react'
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { UserContext } from '../../context/UserContext';

const Login = ({setToggleAuth}) => {
  const {handleLogin} = useContext(UserContext)
  let welcomeMsgs = ["hi", "we missed you", "hope you're doing well", "glad to see you again", "you look great today", "let's learn something new today", "you came to the right place", "hi, there", "happy learning!"]
  let welcomeMsg = welcomeMsgs[Math.floor(Math.random()*welcomeMsgs.length)];

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = ({target: {name, value}}) => {
        setFormData(currentUser => ({
            ...currentUser,
            [name]: value
        }))
    }

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
          <form onSubmit={(e) => handleLogin(e, formData)}>
            <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                // html input attribute
                name="email"
                type="email"
                placeholder="johndoe@email.com"
                onChange={handleChange}
                value={formData.email}
                />
            </FormControl>
            <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                // html input attribute
                name="password"
                type="password"
                placeholder="password"
                onChange={handleChange}
                value={formData.password}
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