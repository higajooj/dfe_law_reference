<!-- p.04 -->

# 2 Geração de XML com envio ao Ambiente de Autorização

O PAA receberá o pedido de emissão no formato que seu software estiver construído e providenciará a geração do XML do documento fiscal eletrônico preenchendo o grupo infPAA. Neste grupo será alimentada a tag SignaturaValue <!-- REVISAR p.04: "SignaturaValue" possivelmente grafia de SignatureValue; mantido conforme fonte --> assinando o atributo Id do DFe com a chave criptográfica no padrão RSA fornecida pela administração tributária. O DFe também deverá receber a assinatura digital qualificada com certificado ICP-Brasil do PAA.

O PAA deverá transmitir o XML do DFe para o ambiente de autorização onde será submetido a todas as regras de validação estabelecidas no MOC. O documento poderá ser autorizado ou rejeitado, devendo o PAA guardar o protocolo de autorização e atuar nos casos em que houver rejeição.
