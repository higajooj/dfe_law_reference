<!-- p.10 -->

# 2.1.7 Informações de controle e área de dados das mensagens

As informações de controle das chamadas dos Web Services são armazenadas no elemento `mdfeCabecMsg` do SOAP Header e servem para identificar a UF de origem do emissor e a versão do leiaute da estrutura XML armazenada na área de dados da mensagem:

<!-- REVISAR p.10: namespace de mdfeCabecMsg aparece como MdfeRecepcao, enquanto o namespace de mdfeDadosMsg usa MDFeDistribuicaoDFe; transcrito como no original -->

```xml
<soap12:Header>
  <mdfeCabecMsg xmlns="http://www.portalfiscal.inf.br/mdfe/wsdl/MdfeRecepcao">
    <cUF>string</cUF>
    <versaoDados>string</versaoDados>
  </mdfeCabecMsg>
</soap12:Header>
```

A informação armazenada na área de dados é um documento XML que deve atender o leiaute definido na documentação do Web Service acessado:

```xml
<soap12:Body>
  <mdfeDadosMsg xmlns="http://www.portalfiscal.inf.br/mdfe/wsdl/MDFeDistribuicaoDFe">xml</mdfeDadosMsg>
</soap12:Body>
```
