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