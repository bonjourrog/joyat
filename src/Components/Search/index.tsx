import './Search.css';
import { SearchProps } from 'antd/es/input';
import { IoSearch } from "react-icons/io5";
import {Select} from 'antd';

const Search: React.FC<SearchProps> = ()=>{
    return <form className='search-box'>
        <div className='search-box__icon'>
            <IoSearch className='icon' />
        </div>
        <Select allowClear placeholder="Seleccione una ciudad" showSearch className='search-box__cities' options={[
            {title:"Puerto Peñasco", value:"Puerto Peñasco"},
            {title:"La Paz", value:"La Paz"},
            {title:"Los Cabos", value:"Los Cabos"},
            {title:"Guadalajara", value:"Guadalajara"},
        ]}/>
        <button className='search-box__btn'>BUSCAR</button>
    </form>
}
export default Search;