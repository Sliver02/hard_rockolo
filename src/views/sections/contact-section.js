import {BaseView} from '../base-view.js';
import {html} from '@polymer/lit-element';

class ContactSection extends BaseView {

    static get properties() {
        return {

        };
      }
    
    constructor() {
        super();

    }
          
    render() {
        return html`
            <div class="contact">
                <form class="contact__form" name="contact" action="POST" data-netlify="true" data-netlify-honeypot="bot-field">

                    <div style="diplay: none;" hidden>
                        <label>Don't fill this if u're human:  <input name="bot-field"> </label>
                    </div>

                    <div class="contact__name">
                        <label for="name">Chi sono*</label>
                        <input name="name" id="name" type="text" required>
                    </div>

                    <div class="contact__email">
                        <label for="email">E-Mail*</label>
                        <input name="email" id="email" type="email" required>
                    </div>

                    <div class="contact__phone">
                        <label for="phone">Telefono</label>
                        <input name="phone" id="phone" type="tel">
                    </div>

                    <div class="contact__subject">
                        <label for="subject">Titolo*</label>
                        <input name="subject" id="subject" type="text" required>
                    </div>

                    <div class="contact__message">
                        <label for="message">Perché vi scrivo*</label>
                        <textarea name="message" id="message" type="text" required></textarea>
                    </div>

                    <input class="btn" type="submit" value="Invia">
                </form>
            </div>
        `;
    }

    // encode(data) {
    //     return Object.keys(data)
    //     .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    //     .join('&')
    // }

    // handleSubmit() {
    //     fetch('/', {
    //         method: 'post',
    //         headers: {
    //             'Content-type': 'application/x-www-form-urlencoded'
    //         },
    //         body: this.encode({
    //             'form-name': 'contact',
    //             ...this.form
    //         })
    //     })
    //     .then(() => {
    //         console.log('success: message sent');
    //         alert('success: message sent');
    //     })
    //     .catch(e => {
    //         console.error(e);
    //         alert('error: message not sent');
    //     })
    // }
}

customElements.define('contact-section', ContactSection);