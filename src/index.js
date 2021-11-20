import './styles.css';

import { menuTab } from './components/menu.js';
import { headLine } from './components/headline.js';
import { burgerSection } from './components/burger-section';
import { description } from './components/description.js';
import { renderBurgerMenu } from './burger-menu.js';
import { renderContactPage } from './contact.js';
import { footer } from './components/footer';

const renderDefaultPage = () => {
    /* render components */
    menuTab();
    headLine('Burger Royal');
    burgerSection();
    description();
    footer();

}

renderDefaultPage();

const tabSwitch = () => {

    // tab swtich logic
    document.addEventListener('click', e => {
        const targetPage = e.target.dataset.value;
        if (targetPage === 'menu') {
            document.getElementById('content').textContent = '';
            renderBurgerMenu();
        } else if (targetPage === 'contact') {
            document.getElementById('content').textContent = '';
            renderContactPage();
        } else if (targetPage === 'about') {
            document.getElementById('content').textContent = '';
            renderDefaultPage();
        }
    });

}

tabSwitch();