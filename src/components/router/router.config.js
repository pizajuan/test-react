import Home from '../router-components/Home';
import User from '../router-components/User';
import Hobbies from '../router-components/Hobbies';

export const appRoutes = [
    {
      path: "/home",
      component: Home
    },
    // {
    //   path: "/user",
    //   component: User
    // },
    {
      path: "/user/:id?",
      component: User,
      routes: [
        {
          path: "/user/:id/hobbies",
          component: Hobbies
        }
      ]
    }
  ];
