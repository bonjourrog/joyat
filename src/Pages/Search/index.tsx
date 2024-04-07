import { SearchProps } from 'antd/es/input';
import './Search.css';
import Header from '../../Components/Header';

const Search: React.FC<SearchProps> = ()=>{
    return <div className='search'>
        <section className='search__header'>
            <Header showNavigation={false}/>
        </section>
        <section>

        </section>
    </div>
}
export default Search;