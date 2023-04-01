import {useState, useContext} from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { UserContext } from '../../context/UserContext';



const Signup = ({setToggleAuth}) => {
    const {handleSignup} = useContext(UserContext)
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        password_confirmation: ""
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
              <b className="login-welcome">Welcome</b>
            </Typography>
            <Typography level="body2">Sign up & join our growing community</Typography>
          </div>
          <form onSubmit={(e) => handleSignup(e, formData)}>
            <FormControl>
                <FormLabel>Username</FormLabel>
                <Input
                // html input attribute
                name="username"
                type="username"
                placeholder="johndoe"
                onChange={handleChange}
                value={formData.username}
                />
            </FormControl>
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
            <FormControl>
                <FormLabel>Password Confirmation</FormLabel>
                <Input
                // html input attribute
                name="password_confirmation"
                type="password"
                placeholder="password"
                onChange={handleChange}
                value={formData.password_confirmation}
                />
            </FormControl>

            <Button type="submit" sx={{ mt: 1 /* margin top */ }}>Sign Up</Button>
            </form>
          <Typography
            endDecorator={<Link onClick={() => setToggleAuth(currentVal => !currentVal)}>Sign in</Link>}
            fontSize="sm"
            sx={{ alignSelf: 'center' }}
          >
            Already have an account?
          </Typography>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}

export default Signup;
