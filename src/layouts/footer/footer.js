import template from './footer.html';
export class Footer {
    constructor() {
        console.log(` footer constructor`);
        document.getElementById('body').insertAdjacentHTML('afterbegin', template);

    }
}