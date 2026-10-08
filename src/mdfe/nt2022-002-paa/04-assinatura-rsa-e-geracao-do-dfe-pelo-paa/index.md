<!-- p.05 -->

# 4 Assinatura RSA e Geração do DFe pelo PAA

A empresa emitente usuária do serviço de Provedor de Assinatura e Autorização deverá solicitar o vínculo a um Provedor homologado no portal da SEFAZ Virtual RS, o resultado dessa solicitação entregará um par de chaves RSA (chave pública e chave privada) para o emitente.

Com a chave privada, a aplicação do PAA deverá assinar o conteúdo do atributo Id do MDFe / Evento (convertido para array de bytes) com padrão de assinatura assimétrica RSA SHA1 originando um SignatureValue no formato base64.

A chave pública deverá ser informada no grupo RSAKeyValue no padrão XML Signature para chaves RSA.

Passos a executar:

| Responsável | Descrição |
|---|---|
| Emitente | Responsável pela empresa deverá acessar o portal DFe da SVRS com seu CPF (login plataforma gov.br) |
| Emitente | Solicitar o vínculo com o Provedor de Assinatura e Autorização disponibilizado pelo portal. |
| PAA | Obter via WS o par de chaves RSA (chave privada e chave pública) do Emitente |
| Emitente | Emitir seus documentos fiscais no software fornecido pelo PAA |
| PAA | Gerar o arquivo XML do DFe a partir das informações comerciais fornecida pelo Emitente no SW disponibilizado |
| PAA | Assinar o conteúdo da tag Id do DFe com a chave RSA (SHA1 base64) |
| PAA | Informar a chave pública no padrão XML Signature no grupo RSAKeyValue |
| PAA | Assinar o DFe com certificado X509 padrão ICP-Brasil do PAA |
| PAA | Transmitir o DFe para o serviço de autorização da SVRS |
| PAA | Tratar o retorno do serviço de autorização e fornecer o feedback para o emitente |

A qualquer tempo o Emitente poderá solicitar o término do vínculo e utilização do PAA acessando o portal da SVRS. A administração tributária e o PAA também poderão comandar o encerramento do vínculo.
