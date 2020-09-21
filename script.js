document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const select = document.getElementById('cars'),
        output = document.getElementById('output');

    const getDate = (url) => {
      return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
          if (request.readyState !== 4) {
            return;
          }
          if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
             resolve(data);
          } else {
            reject();
          }
        });
        request.open('GET', url);
        request.setRequestHeader('Content-type', 'application/json');
        request.send();
      });
    };

    select.addEventListener('change', () => {
      getDate('./cars.json')
       .then((data)=> {
         data.cars.forEach(item => {
           if (item.brand === select.value) {
             const {brand, model, price} = item;
             output.innerHTML = `Тачка ${brand} ${model} <br>
             Цена: ${price}$`;
           }
         });
       })
       .catch(output.innerHTML = 'Произошла ошибка');
   });

});