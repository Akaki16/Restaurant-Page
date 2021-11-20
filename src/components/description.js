const description = () => {

    const description = document.createElement('div');
    const descText = document.createElement('p');
    descText.textContent = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiuoptio, eaque reruProvident similique accusantium nemo autem. Veritatis
    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
    tenetur error, harum nesciunt ipsum debitis quas aliquid.
    `;
    description.appendChild(descText);
    description.setAttribute('id', 'desc');
    document.getElementById('content').appendChild(description);

}

export {
    description
};