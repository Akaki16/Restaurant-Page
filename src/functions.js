// tab menu item
const menuItem = (itemText, attrValue) => {
    const menuItem = document.createElement('li');
    menuItem.textContent = itemText;
    menuItem.setAttribute('data-value', attrValue);
    return menuItem;
}

const burgerMenuItem = (img, name, description, price) => {
    const item = document.createElement('div');
    item.classList.add('menu-item');
    const itemImg = document.createElement('img');
    itemImg.src = img;
    itemImg.alt = name;
    item.appendChild(itemImg);
    const itemDesc = document.createElement('article');
    itemDesc.textContent = description;
    item.appendChild(itemDesc);
    const itemPrice = document.createElement('h4');
    itemPrice.textContent = price;
    item.appendChild(itemPrice);
    return item;
}

const formGroup = (labelArg, labelText, inputType, inputPlaceholder, req) => {

    const form_group = document.createElement('div');
    form_group.classList.add('form-group');
    const label = document.createElement('label');
    label.setAttribute('for', labelArg);
    label.textContent = labelText;
    form_group.appendChild(label);
    const input = document.createElement('input');
    input.type = inputType;
    input.autocomplete = 'off';
    input.name = labelArg;
    input.placeholder = inputPlaceholder;
    input.required = req;
    form_group.appendChild(input);
    return form_group;
}

export {
    menuItem,
    burgerMenuItem,
    formGroup
};