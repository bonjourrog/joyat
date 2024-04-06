import {useRoutes} from 'react-router-dom';
import Home from '../Home/index.tsx';
import Contact from '../Contact/index.tsx';
const AppRoutes = ()=>{
    let routes =useRoutes([
        {path:"/", element:<Home/>},
        {path:"/contact", element: <Contact/>}
    ]);

    return routes;
}

export default AppRoutes;