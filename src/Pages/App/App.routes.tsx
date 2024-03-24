import {useRoutes} from 'react-router-dom';
import Home from '../Home';
const AppRoutes = ()=>{
    let routes =useRoutes([
        {path:"/home", element:<Home/>}
    ]);

    return routes;
}

export default AppRoutes;