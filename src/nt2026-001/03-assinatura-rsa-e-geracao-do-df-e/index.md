<!-- p.5 -->
# 3. Assinatura RSA e Geração do DF-e pelo PAA

O Emitente deverá solicitar o vínculo a um PAA homologado no portal da SEFAZ Virtual RS. O resultado dessa solicitação entregará um par de chaves RSA (chave pública e chave privada) para este Emitente.

<!-- p.6 -->
Com a chave privada, a aplicação do PAA deverá assinar o valor do atributo “Id” da NFe / Evento (convertido para array de bytes) com padrão de assinatura assimétrica RSA SHA1 originando um “SignatureValue” no formato base64.

A chave pública deverá ser informada no grupo “RSAKeyValue” no padrão XML Signature para chaves RSA.

Passos a executar:

| Ator | Ação |
|---|---|
| Emitente | Solicitar o vínculo com o PAA no portal DF-e da SVRS com CPF do responsável pela empresa autenticado na plataforma gov.br |
| PAA / Emitente | Obter no portal ou Web Service o par de chaves RSA (chave privada e chave pública) e a série a ser utilizada pelo PAA para este Emitente. |
| PAA | Utilizar a chave privada para assinar o conteúdo da tag “Id” do DF-e (RSA SHA1 base64). |
| PAA | Informar a chave pública no padrão XML Signature no grupo “RSAKeyValue”. |
| PAA | Assina o DF-e com certificado X509 padrão ICP-Brasil |
| PAA | Transmitir o DF-e para o Ambiente Centralizado de Autorização (SVRS) |

A qualquer tempo o Emitente poderá solicitar o término do vínculo e utilização do PAA acessando o Portal da SVRS. A administração tributária e o PAA também poderão comandar o encerramento do vínculo. A perda do vínculo tem efeito imediato a partir do momento da solicitação por qualquer interveniente.

**Observação**: O processo de assinatura e envio do pedido de Autorização do DF-e ~~emissão na plataforma de emissão simplificada~~ está disciplinado no Manual de Orientações do PAA – MOPAA disponível em https://dfe-portal.svrs.rs.gov.br/pes.

> **Revogado/Descontinuado:** o trecho “emissão na plataforma de emissão simplificada” está riscado na NT original.
