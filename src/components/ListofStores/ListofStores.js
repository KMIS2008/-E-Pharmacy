import { nanoid } from "nanoid";
import sprite from '../../images/sprite.svg';

export const ListofStores = ({ stores }) => {
    return (
        <ul>
            {stores.map(store => (
                <li key={nanoid()}>
                    <h5>{store.name}</h5>
                    <svg>
                        <use xlinkHref={sprite + '#icon-star'} />
                    </svg>
                    <p>{store.description}</p>

                    <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.address)}`} target="_blank" rel="noreferrer noopener">
                        <svg>
                            <use xlinkHref={sprite + '#icon-map-pin'} />
                        </svg>
                    </a>
                    <p>{store.address}</p>

                    <a href={`tel:${store.phone}`} target="_blank" rel="noreferrer noopener">
                        <svg>
                            <use xlinkHref={sprite + '#icon-phone'} />
                        </svg>
                    </a>
                    <p>{store.phone}</p>
                </li>
            ))}
        </ul>
    );
};