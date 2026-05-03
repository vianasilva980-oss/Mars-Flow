import azure.functions as func
import base64
import json
import io
from PIL import Image  # Biblioteca Pillow para redimensionar

def main(req: func.HttpRequest) -> func.HttpResponse:
    try:
        # 1. Tenta pegar a imagem do corpo da requisição (vinda do seu JS)
        file = req.files.get('image')
        
        if not file:
            return func.HttpResponse(
                json.dumps({"error": "Nenhuma imagem foi enviada"}),
                status_code=400,
                mimetype="application/json"
            )

        # 2. Abre a imagem usando a biblioteca Pillow
        img = Image.open(file.stream)

        # 3. Redimensiona a imagem (Otimização crucial para o Excel)
        # O limite de caracteres no Excel é ~32k. Redimensionar para 150px 
        # garante que a imagem caiba na célula sem ser cortada.
        img.thumbnail((150, 150))

        # 4. Salva a imagem processada em um buffer de memória
        buffered = io.BytesIO()
        img.save(buffered, format="PNG") # Salvamos em PNG para manter transparência
        
        # 5. Converte para a String Base64 final
        img_base64 = base64.b64encode(buffered.getvalue()).decode('utf-8')
        base64_data = f"data:image/png;base64,{img_base64}"

        # 6. Retorna o JSON para o seu site no Azure
        return func.HttpResponse(
            json.dumps({"base64": base64_data}),
            mimetype="application/json",
            status_code=200
        )

    except Exception as e:
        return func.HttpResponse(
            json.dumps({"error": str(e)}),
            status_code=500,
            mimetype="application/json"
        )
