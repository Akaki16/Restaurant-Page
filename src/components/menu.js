import { menuItem } from '../functions.js';

const menuTab = () => {
    const menuTab = document.createElement('nav');
    menuTab.classList.add('menu-tab');
    const tabItem1 = menuItem('About', 'about');
    const tabItem2 = menuItem('Menu', 'menu');
    const tabItem3 = menuItem('Contact', 'contact');
    menuTab.appendChild(tabItem1);
    menuTab.appendChild(tabItem2);
    menuTab.appendChild(tabItem3);
    document.getElementById('content').appendChild(menuTab);
}

export {
    menuTab
};