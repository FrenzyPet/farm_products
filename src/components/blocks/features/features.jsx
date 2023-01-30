import './features.css';
import Title from '../../ui/title/title';
import FeatureCard from '../../ui/feature-card/feature-card';
import Button from '../../ui/button/button';

const Features = ({ state }) => {
  return (
    <section className='features'>
      <Title>Почему фермерские продукты лучше?</Title>
      <ul className='features__list'>
        {state.map( item => {
          return (
            <li className='features__item' key={item.id}>
            <FeatureCard features={item}/>
          </li>
          )}
        )}
      </ul>
      <Button text='Купить' minWidth={260}/>
    </section>
  );
}

export default Features;