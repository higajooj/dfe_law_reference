# 1.1.7 Padrão de Assinatura Digital

O sistema utiliza um subconjunto do padrão de assinatura XML, definido pelo http://www.w3.org/TR/xmldsig-core/.

A assinatura digital do documento eletrônico deverá ser realizada na tag do XML que contém o atributo "ID" e deve atender aos seguintes padrões adotados:

- **Padrão de assinatura:** XML Digital Signature, utilizando o formato Enveloped (http://www.w3.org/TR/xmldsig-core/)
- **Certificado digital:** emitido por AC credenciada no ICP-Brasil (http://www.w3.org/2000/09/xmldsig#X509Data)
- **Cadeia de certificação:** EndCertOnly (Incluir na assinatura apenas o certificado do usuário final)
- **Tipo do certificado:** A1 ou A3
- **Tamanho da chave criptográfica:** compatível com os certificados A1 e A3 (1024 e 2048 bits)
- **Função criptográfica assimétrica:** RSA(http://www.w3.org/2001/04/xmldsig-more#rsa-sha256)
- **Função de message digest:** SHA-2 (http://www.w3.org/2001/04/xmlenc#sha256)
- **Codificação:** Base64 (http://www.w3.org/2000/09/xmldsig#base64)
<!-- p.06 -->
- **Transformações exigidas:** útil para realizar a canonicalização do XML enviado, para realizar a validação correta da assinatura digital. São elas:
  - Enveloped (http://www.w3.org/2000/09/xmldsig#enveloped-signature)
  - C14N (http://www.w3.org/TR/2001/REC-xml-c14n-20010315)

As informações necessárias à identificação do assinante estão presentes dentro do certificado digital, tornando desnecessária a sua representação individualizada no arquivo XML.
