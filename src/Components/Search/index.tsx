import './Search.css';
import { IoSearch } from "react-icons/io5";
import {Select, notification} from 'antd';
import { SearchProps } from './Search.props';
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../Context/App';
import { getLotS } from '../../controller/firebase/cities';

const Search: React.FC<SearchProps> = ({outline, showBtn})=>{
    const [api, contextHolder] = notification.useNotification();
    const {selectedCity, setSelectedCity, setLots} = useContext(AppContext);
    const handleSearch = ()=>{
        api.info({
            message:"Ciudad no seleccionada",
            description:"Por favor, selecciona una ciudad para continuar",
        });
    }    
    useEffect(()=>{
        getLotS().then(elem=>{
            if(elem.length>0){
                setLots(elem);    
            }
        }).catch(e=>{
            console.log(e);
        });
    },[selectedCity]);
    return <form className='search-box'>
        <div className='search-box__icon'>
            <IoSearch className='icon'/>
        </div>
        <Select onSelect={(title, _)=>setSelectedCity(title)} allowClear value={selectedCity?selectedCity:undefined} placeholder="Seleccione una ciudad" showSearch className='search-box__cities' options={[
            {title:"Puerto Peñasco", value:"Puerto Peñasco"},
            // {title:"La Paz", value:"La Paz"},
            // {title:"Los Cabos", value:"Los Cabos"}
        ]}/>
        {contextHolder}
        {
            showBtn ? <Link onClick={()=>{handleSearch()}} to={selectedCity&&'/results'} className={`search-box__btn ${outline ? 'search-box__btn--outline' : 'search-box__btn--solid'}`}>BUSCAR</Link> : null
        }
    </form>
}
export default Search;