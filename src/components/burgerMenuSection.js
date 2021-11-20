import { burgerMenuItem } from '../functions.js';

import burger1Image from '../images/menu1.png';
import burger2Image from '../images/menu2.png';
import burger3Image from '../images/menu3.png';
import burger4Image from '../images/menu4.png';
import burger5Image from '../images/menu5.png';
import burger6Image from '../images/menu6.png';
import burger7Image from '../images/menu7.png';
import burger8Image from '../images/menu8.png';

const burgerMenuSection = () => {

    const menuSection = document.createElement('section');
    menuSection.setAttribute('id', 'menu');
    document.getElementById('content').appendChild(menuSection);

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    menuSection.appendChild(menuContainer);

    menuContainer.appendChild(
        burgerMenuItem(
            burger1Image,
            'REGULAR BEEF BURGER',
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
            '$42.00'
        )
    );
    menuContainer.appendChild(
        burgerMenuItem(
            burger2Image,
            'BLACK BEEF BURGER',
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
            '$45.00'
        )
    );
    menuContainer.appendChild(
        burgerMenuItem(
            burger3Image,
            'BIG MEETY',
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
            '$15.00'
        )
    );
    menuContainer.appendChild(
        burgerMenuItem(
            burger4Image,
            'CHICKEN BURGER',
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
            '$20.00'
        )
    );
    menuContainer.appendChild(
        burgerMenuItem(
            burger5Image,
            'CHICKEN BURGER',
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
            '$20.00'
        )
    );
    menuContainer.appendChild(
        burgerMenuItem(
            burger6Image,
            'CHICKEN BURGER',
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
            '$20.00'
        )
    );
    menuContainer.appendChild(
        burgerMenuItem(
            burger7Image,
            'CHICKEN BURGER',
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
            '$20.00'
        )
    );
    menuContainer.appendChild(
        burgerMenuItem(
            burger8Image,
            'CHICKEN BURGER',
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
            '$20.00'
        )
    );
    
}

export {
    burgerMenuSection
};