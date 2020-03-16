import React from 'react'
import { useParams } from 'react-router-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import * as appRoutes from '../router/router.config';

export default function User() {
    console.log(useParams);
    let { id } = useParams();
    console.log(id);
    let userInfo;
    let hobbiesLink;
    if (id) {
        userInfo =
            <div>
                <h3>User Page</h3>
                <p>User Id: {id}</p>
            </div>;
        hobbiesLink = "/user/" + {id} + "/hobbies";
    } else {
        userInfo =
            <div>
                <h3>Users Page</h3>
            </div>;
        hobbiesLink = "/user/hobbies";    
    }
    return (
        <div>
            {userInfo}
            <ul>
                <li>
                    <Link to={hobbiesLink}>Hobbies</Link>
                </li>
            </ul>
            {/* <Switch>
                {appRoutes.appRoutes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </Switch> */}
        </div>
    )
}

// class User extends Component {
//     render() {
//         return (
//             <div>
//                 <h3>User</h3>
//             </div>  
//         )
//     }
// }

// export default User
