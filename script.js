document.getElementById('queryForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const country = document.getElementById('country').value;
  const sector = document.getElementById('sector').value;
  const topic = document.getElementById('topic').value;

  const resultBox = document.getElementById('result');
  resultBox.innerHTML = "<p><em>Sending request...</em></p>";

  try {
    const response = await fetch('http://127.0.0.1:5000/generate-report', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ country, sector, topic })
    });

    const data = await response.json();

    resultBox.innerHTML = `
      <h3>${data.status.toUpperCase()}</h3>
      <p><strong>Country:</strong> ${data.country}</p>
      <p><strong>Sector:</strong> ${data.sector}</p>
      <p><strong>Topic:</strong> ${data.topic}</p>
      <p><em>${data.message}</em></p>
    `;
  } catch (error) {
    resultBox.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
  }
});
