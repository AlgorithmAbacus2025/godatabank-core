document.getElementById('queryForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const country = document.getElementById('country').value;
  const sector = document.getElementById('sector').value;
  const topic = document.getElementById('topic').value;

  // Simulate backend processing for now
  const resultBox = document.getElementById('result');
  resultBox.innerHTML = `
    <h3>Report Preview</h3>
    <p><strong>Country:</strong> ${country}</p>
    <p><strong>Sector:</strong> ${sector}</p>
    <p><strong>Topic:</strong> ${topic}</p>
    <p><em>Report generation in progress...</em></p>
  `;

  // In real version: send request to backend with fetch()
});
