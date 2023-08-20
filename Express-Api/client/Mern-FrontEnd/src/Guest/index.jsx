import React from 'react'
import GuestNav from './Components/GuestNav.jsx'
import {
    Navigate,
    Route,
    Routes,
} from "react-router-dom";
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx'


export default function Guest() {
    return (
        <>
            <GuestNav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Navigate to='/login' replace={true} />} />
            </Routes>
        </>
    )
}





// import React, { useContext, useState } from "react";
// import axios from "axios";
// import { GlobalContext } from "../Context/context";
// import Cookies from "js-cookies";

// export default function Guest() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const { state, dispatch } = useContext(GlobalContext);

//   const LoginUser = (e) => {
//     e.preventDefault();
//     const payload = { email, password };
//     console.log(payload);
//     axios
//       .post("http://localhost:3500/api/login", payload)
//       .then((json) => {
//         Cookies.setItem("token", json.data.token);

//         dispatch({
//           type: "LOGIN",
//           token: json.data.token,
//         });
//       })

//       .catch((error) => console.log(error.message));
//   };

//   return (
//     <div className="container">
//       <div
//         className="d-flex justify-content-center align-items-center"
//         style={{ height: "100vh", width: "100%" }}
//       >
//         <form className="logn" onSubmit={LoginUser}>
//           <div className="mb-3">
//             <label htmlFor="exampleInputEmail1" className="form-label">
//               Email address
//             </label>
//             <input
//               type="email"
//               className="form-control"
//               id="exampleInputEmail1"
//               aria-describedby="emailHelp"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <div id="emailHelp" className="form-text text-light">
//               We'll never share your email with anyone else
//             </div>
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">
//               Password
//             </label>
//             <input
//               type="password"
//               className="form-control"
//               id="exampleInputPassword1"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           <button type="submit" className="btn butn">
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
