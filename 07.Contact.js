const inputElement= document.getElementById('YourName');
        const placeholderText = inputElement.getAttribute('placeholder'); 
        inputElement.addEventListener('focus', function()
        {
           this.removeAttribute('placeholder');
           
           setTimeout(() =>
           {
            this.setAttribute('placeholder', placeholderText);

           }, 3500);
        });

        const inputEmailElement = document.getElementById('YourEmail');
        const placeholderEmailText = inputElement.getAttribute('placeholder');
        inputEmailElement.addEventListener('focus', function()
        {
           this.removeAttribute('placeholder');
           
           setTimeout(() =>
           {
            this.setAttribute('placeholder', placeholderEmailText);

           }, 3500);
        });
