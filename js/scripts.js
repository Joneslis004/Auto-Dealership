const navElement = document.querySelector('#theNav');
const btnElement = document.querySelector('#theButton');

btnElement.addEventListener('click', () => {
    btnElement.classList.toggle('open');
    navElement.classList.toggle('open');
})


document.addEventListener('DOMContentLoaded', () => {
  // Fetch JSON and display reviews
  fetch('reviews.json')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('cards');
      
      data.forEach(item => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('quote-card');

        cardDiv.innerHTML = `
          <p>"${item.quote}"</p>
          <h4>- ${item.name}</h4>
        `;

        container.appendChild(cardDiv);
      });
    })
    .catch(error => console.error('Error loading reviews:', error));
});
