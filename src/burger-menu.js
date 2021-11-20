import { headLine } from './components/headline.js';
import { menuTab } from './components/menu.js';
import { burgerMenuSection } from './components/burgerMenuSection.js';
import { footer } from './components/footer.js';

const renderBurgerMenu = () => {

    menuTab();
    headLine('Menu');
    burgerMenuSection();
    footer();

}

export {
    renderBurgerMenu
};