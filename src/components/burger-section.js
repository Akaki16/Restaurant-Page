import burgerImage from '../images/burger.png';

const burgerSection = () => {

    const burgerImageSection = document.createElement('div');
    burgerImageSection.setAttribute('id', 'burger-image');
    document.getElementById('content').appendChild(burgerImageSection);
    const burgerImg = document.createElement('img');
    burgerImg.setAttribute('id', 'burger');
    burgerImg.src = burgerImage;
    burgerImg.alt = 'burger-image';
    burgerImageSection.appendChild(burgerImg);

}

export {
    burgerSection
};