import Title, { titleSize } from '../../ui/title/title';
import './about.css';

const About = () => {
  return (
    <section className='about'>
      <div className='about__wrapper'>
        <Title size={titleSize.BIG}>Магазин фермерских<br/> продуктов с доставкой</Title>
        <p className='about__text'>Все продукты изготавливаются под заказ. Фермеры<br/>начинают готовить продукты за день до отправки заказа<br/>клиентам. Именно поэтому мы принимаем заказы заранее<br/>и доставляем продукты максимально свежими.</p>
      </div>
    </section>
  );
}

export default About;