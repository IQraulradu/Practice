const inputElement= document.getElementById('YourName');
        const placeholderText = inputElement.getAttribute('placeholder'); 
        inputElement.addEventListener('focus', function()
        {
           this.removeAttribute('placeholder');
           
           setTimeout(() =>
           {
            this.setAttribute('placeholder', placeholderText);

           }, 2500);
        });
const inputEmailElement = document.getElementById('YourEmail');
const placeholderEmailText = inputEmailElement.getAttribute('placeholder');
        inputEmailElement.addEventListener('focus', function()
        {
           this.removeAttribute('placeholder');
           
           setTimeout(() =>
           {
            this.setAttribute('placeholder', placeholderEmailText);

           }, 2500);
        });

        const inputPhoneElement = document.getElementById('YourPhone');
        const placeholderPhoneText = inputPhoneElement.getAttribute('placeholder');
        inputPhoneElement.addEventListener('focus', function()
        {
           this.removeAttribute('placeholder');
           
           setTimeout(() =>
           {
            this.setAttribute('placeholder', placeholderPhoneText);

           }, 2500);
        });

        const inputMessageElement = document.getElementById('YourMessage');
        const placeholderMessageText = inputMessageElement.getAttribute('placeholder');
        inputMessageElement.addEventListener('focus', function()
        {
           this.removeAttribute('placeholder');
           
           setTimeout(() =>
           {
            this.setAttribute('placeholder', placeholderMessageText);

           }, 2500);
        });

