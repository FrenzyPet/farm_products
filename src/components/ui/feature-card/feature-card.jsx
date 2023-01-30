
import './feature-card.css';
import Title, { titleSize } from '../title/title';

const FeatureCard = ({ features }) => {
  return (
    <div className='feature-card' style={ features.category === 'farm' ? { backgroundColor: `#e1edce` } : { backgroundColor: `#f8ddd7` }}>
      <div className='feature-card__title'>
        <span className='feature-card__icon'></span>
        <span className='feature-card__category' style={ features.category === 'farm' ? { backgroundColor: `#88aa4d` } : { backgroundColor: `#f75531` }}>{features.category === 'farm' ? 'Фермерские продукты' : 'Магазинные продукты'}</span>
        <Title size={titleSize.SMALL}>{features.title}</Title>
      </div>
      <p className='feature-card__text'>{features.description}</p>
    </div>
  );
}

export default FeatureCard;