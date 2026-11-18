# 2. Receptor Público Nacional NFS-e Via – (Ambiente Nacional NFS-e Via)

O sistema NFS-e Via é um conjunto de serviços desenhados para a gestão de notas fiscais de serviços eletrônicas relacionadas à exploração de vias – NFS-e Via e seus eventos (Cancelamento, cancelamento por substituição, manifestação do adquirente).

Este documento descreve os métodos de API disponíveis para interação com o sistema.

- **Protocolo de comunicação:** TLS 1.0, TLS 1.1 e TLS 1.2 com autenticação mútua
- **Formato para troca de mensagens:** JSON
- **Formato dos documentos da NFS-e Via:** XML 1.0 (https://www.w3.org/TR/REC-xml)
- **Codificação de caracteres:** UTF-8
- **Certificado digital:** Emitido por Autoridade Certificadora ICP-Brasil, tipo A1 ou A3, CNPJ, com “Autenticação do Cliente”
- **Padrão de assinatura dos documentos XML:** XMLDSIG (https://www.w3.org/TR/xmldsig-core/)
- **Padrão de compactação dos documentos XML para troca de mensagens:** GZip com representação base64binary
