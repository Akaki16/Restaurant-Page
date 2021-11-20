import { formGroup } from "../functions";

const contactForm = () => {

    const contactForm = document.createElement('form');
    contactForm.setAttribute('id', 'my-form');
    document.getElementById('content').appendChild(contactForm);
    contactForm.appendChild(
        formGroup(
            'name',
            'Your name',
            'text',
            'Enter your name',
            true
        )
    );
    contactForm.appendChild(
        formGroup(
            'last_name',
            'Last Name',
            'text',
            'Enter your last name',
            true
        )
    );
    contactForm.appendChild(
        formGroup(
            'phone_number',
            'Phone Nuber',
            'number',
            'Enter your phone number',
            true
        )
    );
    contactForm.appendChild(
        formGroup(
            'email_address',
            'Email Address',
            'email',
            'Enter your email address',
            true
        )
    );

    const submitBtn = document.createElement('div');
    submitBtn.classList.add('form-group');
    const btn = document.createElement('button');
    btn.type = 'submit';
    btn.textContent = 'Submit';
    submitBtn.appendChild(btn);
    contactForm.appendChild(submitBtn);

}

export {
    contactForm
};