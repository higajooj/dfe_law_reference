<!-- p.04 -->

# 3 Padrão de Certificado Digital para Assinatura Avançada

O certificado digital utilizado para assinatura avançada das mensagens seguirá padrão RSA (com par de chaves) gerados pela Plataforma de Emissão Simplificada para o usuário contribuinte que efetuar seu credenciamento e vinculação com o Provedor de Assinatura e Autorização no portal da SEFAZ Virtual RS identificando-se pelo usuário e senha da plataforma gov.br.

O PAA poderá obter o par de chaves pública e privada do seu usuário de forma automatizada acessando o serviço DFeDistPAA descrito no Manual de Orientações do PAA (MOPAA).

<!-- p.05 -->

Os certificados seguirão a especificação OpenSSL e serão gerados de forma única para a relação de cada PAA com o contribuinte vinculado no portal. A especificação produz um par de chaves (pública e privada) no formato PEM RSA 1024 bits.

As chaves são transformadas na estrutura RSA para assinatura digital XML com a seguinte definição:

- **3.1** Chave Privada RSA (PrivateKey)
- **3.2** Chave Pública RSA (PublicKey)
