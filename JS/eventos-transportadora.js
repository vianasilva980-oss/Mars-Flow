export function initTransportadoraEvents() {
    const inputLogo = document.getElementById('tr-logo');
    
    if (inputLogo) {
        inputLogo.addEventListener('change', async (e) => {
            const file = e.target.files[0];
            if (!file) return;

            const statusDiv = document.getElementById('tr-status-api');
            const preview = document.getElementById('tr-logo-preview');
            const placeholder = document.getElementById('tr-preview-placeholder');
            const hiddenBase64 = document.getElementById('tr-logo-base64');

            // Feedback: Processando
            statusDiv.style.display = "block";
            statusDiv.style.backgroundColor = "#ffc107";
            statusDiv.innerText = "⏳ PROCESSANDO EM PYTHON...";
            preview.style.display = "none";
            placeholder.style.display = "none";

            const formData = new FormData();
            formData.append('image', file);

            try {
                const response = await fetch('/api/convert', { method: 'POST', body: formData });
                const data = await response.json();

                if (data.base64) {
                    // Feedback: Sucesso
                    statusDiv.style.backgroundColor = "#28a745";
                    statusDiv.style.color = "#fff";
                    statusDiv.innerText = "✅ IMAGEM CONVERTIDA!";
                    
                    preview.src = data.base64;
                    preview.style.display = "inline-block";
                    hiddenBase64.value = data.base64;
                }
            } catch (err) {
                statusDiv.style.backgroundColor = "#dc3545";
                statusDiv.innerText = "❌ ERRO NA API";
            }
        });
    }
}
