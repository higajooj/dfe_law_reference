<!-- p.56 -->
# 8.11. Tabela de códigos de erros e descrições de mensagens de erros

| CÓDIGO | RESULTADO DO PROCESSAMENTO DA SOLICITAÇÃO |
|---|---|
| 108 | Serviço Paralisado Momentaneamente (curto prazo) |
| 109 | Serviço Paralisado sem Previsão |
| 128 | Lote de Evento Processado |
| 135 | Evento registrado e vinculado a NF-e |
| 136 | Evento registrado, mas não vinculado a NF-e |

| CÓDIGO | MOTIVOS DE NÃO ATENDIMENTO DA SOLICITAÇÃO |
|---|---|
| 203 | Rejeição: Emissor não habilitado para emissão da NF-e |
| 213 | Rejeição: CNPJ-Base do Emitente difere do CNPJ-Base do Certificado Digital |
| 214 | Rejeição: Tamanho da mensagem excedeu o limite estabelecido |
| 215 | Rejeição: Falha Schema XML |
| 222 | Rejeição: Protocolo de Autorização de Uso difere do cadastrado |
| 225 | Rejeição: Falha no Schema XML do lote de NFe |
| 236 | Rejeição: Chave de Acesso com dígito verificador inválido |
| 238 | Rejeição: Cabeçalho - Versão do arquivo XML superior a Versão vigente |
| 239 | Rejeição: Cabeçalho - Versão do arquivo XML não suportada |
| 240 | Rejeição: Cancelamento/Inutilização - Irregularidade Fiscal do Emitente |
| 242 | Rejeição: Cabeçalho - Falha no Schema XML |
| 249 | Rejeição: UF da Chave de Acesso diverge da UF autorizadora |
| 250 | Rejeição: UF diverge da UF autorizadora |
| 252 | Rejeição: Ambiente informado diverge do Ambiente de recebimento |
| 280 | Rejeição: Certificado Transmissor inválido |
| 281 | Rejeição: Certificado Transmissor Data Validade |
| 282 | Rejeição: Certificado Transmissor sem CNPJ |
| 283 | Rejeição: Certificado Transmissor - erro Cadeia de Certificação |
| 284 | Rejeição: Certificado Transmissor revogado |
| 285 | Rejeição: Certificado Transmissor difere ICP-Brasil |
| 286 | Rejeição: Certificado Transmissor erro no acesso a LCR |
| 290 | Rejeição: Certificado Assinatura inválido |
| 291 | Rejeição: Certificado Assinatura Data Validade |
| 292 | Rejeição: Certificado Assinatura sem CNPJ |
| 293 | Rejeição: Certificado Assinatura - erro Cadeia de Certificação |
| 294 | Rejeição: Certificado Assinatura revogado |
| 295 | Rejeição: Certificado Assinatura difere ICP-Brasil |
| 296 | Rejeição: Certificado Assinatura erro no acesso a LCR |
| 297 | Rejeição: Assinatura difere do calculado |
| 298 | Rejeição: Assinatura difere do padrão do Sistema |
| 402 | Rejeição: XML da área de dados com codificação diferente de UTF-8 |
| 404 | Rejeição: Uso de prefixo de namespace não permitido |
| 409 | Rejeição: Campo cUF inexistente no elemento nfeCabecMsg do SOAP Header |
| 410 | Rejeição: UF informada no campo cUF não é atendida pelo Web Service |
| 411 | Rejeição: Campo versaoDados inexistente no elemento nfeCabecMsg do SOAP Header |
| 489 | Rejeição: CNPJ informado inválido (DV ou zeros) |
| 490 | Rejeição: CPF informado inválido (DV ou zeros) |
| 491 | Rejeição: O tpEvento informado inválido |
| 492 | Rejeição: O verEvento informado inválido |
| 493 | Rejeição: Evento não atende o Schema XML específico |
| 494 | Rejeição: Chave de Acesso inexistente |
| 516 | Rejeição: Falha no schema XML – inexiste a tag raiz esperada para a mensagem |
| 517 | Rejeição: Falha no schema XML – inexiste atributo versao na tag raiz da mensagem |
| 545 | Rejeição: Falha no schema XML – versão informada na versaoDados do SOAPHeader diverge da versão da mensagem |
| 572 | Rejeição: Erro Atributo ID do evento não corresponde a concatenação dos campos (“ID” + tpEvento + chNFe + nSeqEvento) |
| 573 | Rejeição: Duplicidade de Evento |
| 574 | Rejeição: O autor do evento diverge do emissor da NF-e |
| 575 | Rejeição: O autor do evento diverge do destinatário da NF-e |
| 576 | Rejeição: O autor do evento não é um órgão autorizado a gerar o evento |
| 577 | Rejeição: A data do evento não pode ser menor que a data de emissão da NF-e |
| 578 | Rejeição: A data do evento não pode ser maior que a data do processamento |
| 579 | Rejeição: A data do evento não pode ser menor que a data de autorização para NF-e não emitida em contingência |
| 580 | Rejeição: O evento exige uma NF-e autorizada |
| 587 | Rejeição: Usar somente o namespace padrão da NF-e |
| 588 | Rejeição: Não é permitida a presença de caracteres de edição no início/fim da mensagem ou entre as tags da mensagem |
| 594 | Rejeição: O número de sequência do evento informado é maior que o permitido |
| 614 | Rejeição: Chave de Acesso inválida (Código UF inválido) |
| 615 | Rejeição: Chave de Acesso inválida (Ano < 05 ou Ano maior que Ano corrente) |
| 616 | Rejeição: Chave de Acesso inválida (Mês < 1 ou Mês > 12) |
| 617 | Rejeição: Chave de Acesso inválida (CNPJ zerado ou dígito inválido) |
| 618 | Rejeição: Chave de Acesso inválida (modelo diferente de 55) |
| 619 | Rejeição: Chave de Acesso inválida (número NF = 0) |
| 636 | Rejeição: O tipo do evento de cancelamento não corresponde ao tipo do evento a ser cancelado |
| 637 | Rejeição: ID do evento (idPedido) inválido |
| 638 | Rejeição: A quantidade de Pedidos de Prorrogação 1º prazo excede o valor limite de 20 Pedidos de Prorrogação autorizados e sem resposta do Fisco. |
| 639 | Rejeição: A quantidade de Pedidos de Prorrogação 2° prazo excede o valor limite de 20 Pedidos de Prorrogação autorizados e sem resposta do Fisco. |
| 640 | Rejeição: ID do Pedido de Prorrogação inválido |
| 641 | Rejeição: A data do evento não pode ser menor que a data de autorização para o evento |
| 808 | Rejeição: Evento Fisco emitido por contribuinte |
| 809 | Rejeição: ID do Pedido de Prorrogação ou Cancelamento não existe na base de dados ou não há um pedido de prorrogação deferido para o tipo: [tpEvento] |
| 810 | Rejeição: tpEvento do Evento Fisco não corresponde ao tpEvento do Evento de Pedido de Prorrogação ou de Cancelamento |
| 811 | Rejeição: Pedido de Prorrogação deferido impede o cancelamento da NF-e |
