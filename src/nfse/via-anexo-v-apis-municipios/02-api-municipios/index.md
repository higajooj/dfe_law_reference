<!-- p.04 -->

# 2. API Municípios

- **Protocolo de comunicação:** TLS 1.0, TLS 1.1 e TLS 1.2 com autenticação mútua
- **Formato para troca de mensagens:** JSON
- **Formato dos documentos da NFS-e Via:** XML 1.0 (https://www.w3.org/TR/REC-xml)
- **Codificação de caracteres:** UTF-8
- **Certificado digital:** Emitido por Autoridade Certificadora ICP-Brasil, tipo A1 ou A3, CNPJ, com “Autenticação do Cliente”
- **Padrão de compactação dos documentos XML para troca de mensagens:** GZip com representação base64binary

## Considerações de Segurança

- Ambos os endpoints utilizam certificados digitais para autenticação
- Os certificados devem estar configurados no servidor
- O acesso aos dados é restrito por município
