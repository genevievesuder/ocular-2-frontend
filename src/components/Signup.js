import {useState, useEffect} from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';



const Signup = ({setUser, setToggleAuth}) => {
    // const [user, setUserObj] = useState({
    //     username: "",
    //     email: "",
    //     password: "",
    //     password_confirmation: ""
    // });

    // const handleChange = ({target: {name, value}}) => {
    //     setUserObj(currentUser => ({
    //         ...currentUser,
    //         [name]: value
    //     }))
    // }

        
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     fetch("http://localhost:9393/users", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json"
    //       },
    //       body: JSON.stringify(user)
    //     })
    //        .then(response => {
    //         if (response.status === 201) {
    //           response.json()
    //           .then(userObj => {
    //             // debugger
    //             setCurrentUser(userObj.user)
    //            })
    //         } else {
    //           response.json()
    //           .then(messageObj => alert(messageObj.message))
            
    //        }})
    //       .catch(error => alert(error))
    //       setUserObj({
    //         username: "",
    //         email: "",
    //         password: "",
    //         password_confirmation: ""
    //       })
    //   }


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
          <form >
          {/* ADD THIS LINE TO FORM --> onSubmit={handleSubmit} */}
            <FormControl>
                <FormLabel>Username</FormLabel>
                <Input
                // html input attribute
                name="username"
                type="username"
                placeholder="johndoe"
                // onChange={handleChange}
                // value={user.username}
                />
            </FormControl>
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
            <FormControl>
                <FormLabel>Password Confirmation</FormLabel>
                <Input
                // html input attribute
                name="password_confirmation"
                type="password"
                placeholder="password"
                // onChange={handleChange}
                // value={user.password_confirmation}
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
