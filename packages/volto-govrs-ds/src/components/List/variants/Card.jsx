import React from 'react';
import './Card.scss';
import CardComponent from '../../Card/Card';

export default function Card({
  items = [],
  itemKey = (i, idx) => (i && (i.id ?? i.key)) ?? idx,
  perRow = 3,
}) {
  return (
    <div
      className="list-card"
      role="list"
      style={{ '--list-card-cols': perRow }}
    >
      {items.map((item, idx) => (
        <article
          role="listitem"
          key={itemKey(item, idx)}
          className="list-card__item"
        >
          <CardComponent
            title={item.title}
            description={item.description}
            image={item.image}
            imageAlt={item.imageAlt}
            size={item.size}
            disabled={item.disabled}
            href={item.href}
            children={item.children}
            acao={item.acao}
            onLike={item.onLike}
            onShare={item.onShare}
            itens={item.itens}
            bodyImg={item.bodyImg}
            bodyImgAlt={item.bodyImgAlt}
          />
        </article>
      ))}
    </div>
  );
}
