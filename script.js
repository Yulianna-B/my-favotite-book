fetch('book.json')
.then(response => {
    if (!response.ok) {
        throw new Error('Network error:' + response.status);
    }
    return response.json();
})

.then(data => {
    const book = document.getElementById('book-info');
    book.innerHTML = `
    <p><Title: ${data.title}</p>
      <p><Author: ${data.author}</p>
        <p><Year: ${data.year}</p>
        `;
})

.catch(error => {
document.getElementById('book-info').textContent = "Data loading error" + error;
});