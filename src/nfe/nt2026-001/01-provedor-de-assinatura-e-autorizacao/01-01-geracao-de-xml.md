<!-- p.4 -->
# 1.1. Geração de XML com envio ao Ambiente Centralizado de Autorização

O PAA receberá o pedido de emissão no formato que seu software estiver construído e providenciará a geração do XML do documento fiscal eletrônico preenchendo o grupo “infPAA”. Neste grupo será alimentada a tag “SignatureValue” assinando o valor do atributo “Id” do DF-e com a chave criptográfica no padrão RSA fornecida pela administração tributária. O DF-e também deverá receber a assinatura digital qualificada com certificado ICP-Brasil do PAA.

<!-- p.5 -->
O PAA deverá transmitir o XML do DF-e para o Ambiente Centralizado de Autorização (SVRS) onde será submetido a todas as regras de validação estabelecidas no MOC. O documento poderá ser autorizado ou rejeitado, devendo o PAA guardar o protocolo de autorização e atuar nos casos em que houver rejeição.
