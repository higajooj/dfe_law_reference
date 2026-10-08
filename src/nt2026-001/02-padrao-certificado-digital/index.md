<!-- p.5 -->
# 2. Padrão de Certificado Digital para Assinatura Avançada

O certificado digital utilizado para assinatura avançada das mensagens seguirá padrão RSA (com par de chaves) gerados pela Plataforma de Emissão Simplificada - PES para o Emitente que efetuar seu credenciamento e vinculação com o Provedor de Assinatura e Autorização no portal da SEFAZ Virtual RS identificando-se com Usuário e Senha da plataforma gov.br.

O PAA poderá obter o par de chaves (pública e privada) do usuário diretamente no módulo de administração no portal da Plataforma de Emissão Simplificada, selecionando a opção para obter os dados do cliente (Emitente).

Os certificados seguirão a especificação OpenSSL e serão gerados de forma única para a relação de cada PAA com o Emitente vinculado no portal. A especificação produz um par de chaves (pública e privada) no formato PEM RSA 1024 bits.

As chaves são transformadas na estrutura RSA para assinatura digital XML com a seguinte definição:
