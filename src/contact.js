import { contactForm } from './components/contactForm.js';
import { footer } from './components/footer.js';
import { headLine } from './components/headline.js';
import { menuTab } from './components/menu.js';

const renderContactPage = () => {

    menuTab();
    headLine('Contact');
    contactForm();
    footer();

}

export {
    renderContactPage
};