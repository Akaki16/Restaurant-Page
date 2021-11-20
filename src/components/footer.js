const footer = () => {

    const footer = document.createElement('footer');
    footer.setAttribute('id', 'footer');
    const footerContent = document.createElement('div');
    footerContent.innerHTML = 'Burger Restaurant, &copy; 2021';
    footer.appendChild(footerContent);
    document.getElementById('content').appendChild(footer);

}

export {
    footer
};