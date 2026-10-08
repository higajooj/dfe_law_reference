<!-- p.21 -->

# 5 Tabela de Códigos e Descrições de Mensagens de Erros

**Resultado do processamento da solicitação**

| Código | Resultado do processamento da solicitação |
|---|---|
| 108 | Serviço Paralisado Momentaneamente (curto prazo) |
| 109 | Serviço Paralisado sem Previsão |
| 137 | Nenhum documento localizado |
| 138 | Documento localizado |

**Motivos de não atendimento da solicitação**

| Código | Motivos de não atendimento da solicitação |
|---|---|
| 214 | Rejeição: Tamanho da mensagem excedeu o limite estabelecido |
| 215 | Rejeição: Falha no schema XML |
| 239 | Rejeição: Cabeçalho - Versão do arquivo XML não suportada |
| 242 | Rejeição: Elemento mdfeCabecMsg inexistente no SOAP Header |
| 243 | Rejeição: XML Malformado |
| 252 | Rejeição: Ambiente informado diverge do Ambiente de recebimento |
| 280 | Rejeição: Certificado Transmissor inválido |
| 281 | Rejeição: Certificado Transmissor Data Validade |
| 283 | Rejeição: Certificado Transmissor - erro Cadeia de Certificação |
| 284 | Rejeição: Certificado Transmissor revogado |
| 285 | Rejeição: Certificado Transmissor difere ICP-Brasil |
| 286 | Rejeição: Certificado Transmissor erro no acesso a LCR |
| 287 | Rejeição: Certificado Transmissor sem CNPJ ou CPF |
| 402 | Rejeição: XML da área de dados com codificação diferente de UTF-8 |
| 404 | Rejeição: Uso de prefixo de namespace não permitido |
| 409 | Rejeição: Campo cUF inexistente no elemento mdfeCabecMsg do SOAP Header |
| 410 | Rejeição: UF informada no campo cUF não é atendida pelo Web Service |
| 411 | Rejeição: Campo versaoDados inexistente no elemento mdfeCabecMsg do SOAP Header |
| 489 | Rejeição: CNPJ informado inválido (DV ou zeros) |
| 490 | Rejeição: CPF informado inválido (DV ou zeros) |
| 491 | Rejeição: CNPJ-Base consultado difere do CNPJ-Base do Certificado Digital |
| 492 | Rejeição: CPF consultado difere do CPF do Certificado Digital |
| 493 | Rejeição: Número do NSU informado superior ao maior NSU da base de dados do Ambiente Nacional |
| 598 | Rejeição: Usar somente o namespace padrao do MDF-e |
| 599 | Rejeição: Não é permitida a presença de caracteres de edição no início/fim da mensagem ou entre as tags da mensagem |
| 678 | Rejeição: Consumo indevido |
| 730 | Rejeição: NSU solicitado muito antigo<br>[NSUMin: 999999999999999] |
