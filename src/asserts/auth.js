// import { ButtonGroup } from "@material-ui/core";
// import React, {useState} from "react";
// import {auth} from '../firebase-config'
// import { createUserWithEmailAndPassword, onAuthStateChanged, signOut,signInWithEmailAndPassword} from 'firebase/auth'
// // import { Navbar, Products} from './index'

// function App() {
//     const [RegisteredUser, setRegisteredUser] = useState('')
//     const [UserRegisterPassword, setUserRegisterPassword] = useState('')
//     const [LoginUser, setLoginUser] = useState('')
//     const [UserPassword, setPassword] = useState('')

//     const [user, setUser] = useState({})
//     onAuthStateChanged(auth, (currentUser)=> {
//         setUser(currentUser)
//     })

//     const Register = async() => {
//         try {
//             const user = await createUserWithEmailAndPassword(auth,RegisteredUser,UserRegisterPassword)
//             console.log(user)
//         } catch (error) {
//             console.log(error.message)
//         }
        
//     }
//     const Login = async() => {
//         try {
//             const user = await signInWithEmailAndPassword(auth,LoginUser,UserPassword)
//             console.log(user)
//         } catch (error) {
//             console.log(error.message)
//         }
//     }
//     const SignOut = async() => {
//         await signOut(auth);   
//     }

//   return (
//     <div>
//       <h1>Login and Register page</h1>
//       <div>
//         <label for="register">register</label>
//         <input className="register" onChange={(event) => setRegisteredUser(event.target.value)} value={RegisteredUser}></input>
//         <label for="password">password</label>
//         <input className="password"  onChange={(event) => setUserRegisterPassword(event.target.value)} value={UserRegisterPassword}></input>
//         <button onClick={Register}>Register</button>
//       </div>
//       <div>
//         <label for="login">Login</label>
//         <input className="login"  onChange={(event) => setLoginUser(event.target.value)} value={LoginUser}></input>
//         <label for="password">password</label>
//         <input className="password"  onChange={(event) => setPassword(event.target.value)} value={UserPassword}></input>

//         <button onClick={Login}>Login</button>
//       </div>
//       <h3>user: {user?.email}</h3>
//       <div>
//         <button onClick={SignOut}>Signout</button>
//         <h3>Signout</h3>
//       </div>
//       {/* <Navbar></Navbar>
//             <Products></Products> */}
//     </div>
//   );
// }

// export default App;
