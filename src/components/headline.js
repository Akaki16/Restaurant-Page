const headLine = (text) => {

    const headLine = document.createElement('div');
    headLine.textContent = text;
    headLine.classList.add('headline');
    document.getElementById('content').appendChild(headLine);

}

export {
    headLine
};