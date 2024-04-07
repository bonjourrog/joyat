import './Results.css';
import Header from '../../Components/Header';
import { ResultsProps } from './Results.props';

const Results: React.FC<ResultsProps> = ()=>{
    return <div className='results'>
        <section className='results__header'>
            <Header showNavigation={false}/>
            <img src="" alt=""/>
        </section>
        <section>
            Hola
        </section>
    </div>
}
export default Results;