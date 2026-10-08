# 2.1.8 Validação da estrutura XML das Mensagens dos Web Services

As informações são enviadas ou recebidas do Web Service através de mensagens no padrão XML definido na documentação descrita nessa Nota Técnica.

As alterações de leiaute e da estrutura de dados XML realizadas nas mensagens são controladas através da atribuição de um número de versão para a mensagem.

Um Schema XML é uma linguagem que define o conteúdo do documento XML, descrevendo os seus elementos e a sua organização, além de estabelecer regras de preenchimento de conteúdo e de obrigatoriedade de cada elemento ou grupo de informação.

A validação da estrutura XML da mensagem é realizada por um analisador sintático (parser) que verifica se a mensagem atende as definições e regras de seu Schema XML.

<!-- p.11 -->

Qualquer divergência da estrutura XML da mensagem em relação ao seu Schema XML provoca um erro de validação do Schema XML.

A primeira condição para que a mensagem seja validada com sucesso é que ela seja submetida ao Schema XML correto.

Assim, o aplicativo do contribuinte deve estar preparado para gerar as mensagens no leiaute em vigor, devendo ainda informar a versão do leiaute da estrutura XML da mensagem no campo `versaoDados` do elemento `mdfeCabecMsg` do SOAP Header.

<!-- REVISAR p.11: no exemplo, o namespace aparece em minúsculas (mdfeDistribuicaoDFe), diferente dos demais exemplos (MDFeDistribuicaoDFe); transcrito como no original -->

```xml
<soap12:Header>
  <mdfeCabecMsg xmlns="http://www.portalfiscal.inf.br/mdfe/wsdl/mdfeDistribuicaoDFe">
    <cUF>35</cUF>
    <versaoDados>1.00</versaoDados>
  </mdfeCabecMsg>
</soap12:Header>
```
