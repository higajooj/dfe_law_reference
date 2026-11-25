<!-- p.14 -->

# 3 Mensagens de Rejeição

| Código | RESULTADO DO PROCESSAMENTO DA SOLICITAÇÃO |
|---|---|
| 108 | Serviço Paralisado Momentaneamente (curto prazo) |
| 109 | Serviço Paralisado sem Previsão |
| 137 | Nenhum documento localizado |
| 138 | Documento localizado |
| 214 | <!-- p.15 -->Rejeição: Tamanho da mensagem excedeu o limite estabelecido |
| 215 | Rejeição: Falha no schema XML |
| 238 | Rejeição: Cabeçalho - Versão do arquivo XML superior a Versão vigente |
| 239 | Rejeição: Cabeçalho - Versão do arquivo XML não suportada |
| 242 | Rejeição: Cabeçalho - Falha no Schema XML |
| 252 | Rejeição: Ambiente informado diverge do Ambiente de recebimento |
| 280 | Rejeição: Certificado Transmissor inválido |
| 281 | Rejeição: Certificado Transmissor Data Validade |
| 283 | Rejeição: Certificado Transmissor - erro Cadeia de Certificação |
| 284 | Rejeição: Certificado Transmissor revogado |
| 285 | Rejeição: Certificado Transmissor difere ICP-Brasil |
| 286 | Rejeição: Certificado Transmissor erro no acesso a LCR |
| 402 | Rejeição: XML da área de dados com codificação diferente de UTF-8 |
| 404 | Rejeição: Uso de prefixo de namespace não permitido |
| 409 | Rejeição: Campo cUF inexistente no elemento nfeCabecMsg do SOAP Header |
| 410 | Rejeição: UF informada no campo cUF não é atendida pelo Web Service |
| 411 | Rejeição: Campo versaoDados inexistente no elemento nfeCabecMsg do SOAP Header |
| 472 | Rejeição: CPF consultado difere do CPF do Certificado Digital |
| 473 | Rejeição: Certificado Transmissor sem CNPJ ou CPF |
| 489 | Rejeição: CNPJ informado inválido (DV ou zeros) |
| 490 | Rejeição: CPF informado inválido (DV ou zeros) |
| 589 | Rejeição: Número do NSU informado superior ao maior NSU da base de dados do Ambiente Nacional |
| 593 | Rejeição: CNPJ-Base consultado difere do CNPJ-Base do Certificado Digital |
| 656 | Rejeição: Consumo Indevido |

**OBS.:**

1. Recomendado a não utilização de caracteres especiais ou acentuação nos textos das mensagens de erro.
2. Recomendado que o campo xMotivo da mensagem de erro para o código 999 seja informado com a mensagem de erro do aplicativo ou do sistema que gerou a exceção não prevista.
