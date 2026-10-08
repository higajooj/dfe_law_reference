<!-- p.7 -->
# 4.1 Leiaute da Nota Fiscal Eletrônica (Anexo I do MOC)

Esta Nota Técnica não altera o leiaute da NFC-e, mas para efeito de documentação, são destacadas as séries que serão utilizadas para emissão de NFC-e com sistema próprio. Deverá ser utilizada a mesma série reservada [920-969] da NF-e, conforme documentado na NT 2018.001.

## B. Identificação da NF-e (Não altera leiaute)

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| 11 | B07 | serie | Série do Documento Fiscal | E | B01 | N | 1-1 | 1-3 | Série do Documento Fiscal, preencher com zeros na hipótese de a NF-e não possuir série. Série na faixa:<br>- [000-889]: Aplicativo do Contribuinte; Emitente=CNPJ; Assinatura pelo e-CNPJ do contribuinte (procEmi<>1,2);<br>- [890-899]: Emissão no site do Fisco (NFA-e Avulsa); Emitente= CNPJ / CPF; Assinatura pelo e-CNPJ da SEFAZ (procEmi=1);<br>- [900-909]: Emissão no site do Fisco (NFA-e); Emitente= CNPJ; Assinatura pelo e-CNPJ da SEFAZ (procEmi=1), ou Assinatura pelo e-CNPJ do contribuinte (procEmi=2);<br>- [910-919]: Emissão no site do Fisco (NFA-e); Emitente= CPF; Assinatura pelo e-CNPJ da SEFAZ (procEmi=1), ou Assinatura pelo e-CPF do contribuinte (procEmi=2);<!-- p.8 --><br>- [920-969]: Aplicativo do Contribuinte; Emitente=CPF; Assinatura pelo e-CPF do contribuinte (procEmi<>1,2); |
