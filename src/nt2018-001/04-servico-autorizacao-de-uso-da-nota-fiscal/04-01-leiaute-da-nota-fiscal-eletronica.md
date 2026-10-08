<!-- p.12 -->
# 4.1 Leiaute da Nota Fiscal Eletrônica (Anexo I do MOC)

Esta Nota Técnica não altera o leiaute da NF-e, mas para efeito de documentação, são introduzidas as alterações abaixo:

## B. Identificação da NF-e (Não altera leiaute)

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| 11 | B07 | serie | Série do Documento Fiscal | E | B01 | N | 1-1 | 1-3 | Série do Documento Fiscal, preencher com zeros na hipótese de a NF-e não possuir série. Série na faixa:<br>- [000-889]: Aplicativo do Contribuinte; Emitente=CNPJ; Assinatura pelo e-CNPJ do contribuinte (procEmi<>1,2);<br>- [890-899]: Emissão no site do Fisco (NFA-e - Avulsa); Emitente= CNPJ / CPF; Assinatura pelo e-CNPJ da SEFAZ (procEmi=1);<br>- [900-909]: Emissão no site do Fisco (NFA-e); Emitente= CNPJ; Assinatura pelo e-CNPJ da SEFAZ (procEmi=1), ou Assinatura pelo e-CNPJ do contribuinte (procEmi=2);<br>- [910-919]: Emissão no site do Fisco (NFA-e); Emitente= CPF; Assinatura pelo e-CNPJ da SEFAZ (procEmi=1), ou Assinatura pelo e-CPF do contribuinte (procEmi=2);<br>- [920-969]: Aplicativo do Contribuinte; Emitente=CPF; Assinatura pelo e-CPF do contribuinte (procEmi<>1,2); |
