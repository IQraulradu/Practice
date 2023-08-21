const inputElement= document.getElementById('YourName');
        const placeholderText = inputElement.getAttribute('placeholder'); 
        inputElement.addEventListener('focus', function()
        {
           this.removeAttribute('placeholder');
           
           setTimeout(() =>
           {
            this.setAttribute('placeholder', placeholderText);

           }, 4000);
        });
const inputEmailElement = document.getElementById('YourEmail');
const placeholderEmailText = inputEmailElement.getAttribute('placeholder');
        inputEmailElement.addEventListener('focus', function()
        {
           this.removeAttribute('placeholder');
           
           setTimeout(() =>
           {
            this.setAttribute('placeholder', placeholderEmailText);

           }, 3500);
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
