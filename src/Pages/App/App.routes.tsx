import {useRoutes} from 'react-router-dom';
import Home from '../Home/index.tsx';
import Contact from '../Contact/index.tsx';
import Search from '../Results/index.tsx';
const AppRoutes = ()=>{
    let routes =useRoutes([
        {path:"/", element:<Home/>},
        {path:"/contact", element: <Contact/>},
        {path:"/results", element: <Search/>}
    ]);

    return routes;
}

export default AppRoutes;