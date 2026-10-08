<!-- p.19 -->
# 8. Tabela de códigos de erros e descrições de mensagens de erros

| Código | RESULTADO DO PROCESSAMENTO DA SOLICITAÇÃO |
|---|---|
| 108 | Serviço Paralisado Momentaneamente (curto prazo) |
| 109 | Serviço Paralisado sem Previsão |
| 124 | EPEC Autorizado |
| 128 | Lote de Evento Processado |
| 135 | Evento registrado e vinculado a NFC-e |
| 136 | Evento registrado, mas não vinculado a NFC-e |
| 142 | Ambiente de Contingência EPEC bloqueado para o Emitente |
| 203 | Rejeição: Emissor não habilitado para emissão de NFC-e |
| 206 | Rejeição: NFC-e já está inutilizada na Base de Dados da SEFAZ |
| 209 | Rejeição: IE do emitente inválida |
| 212 | Rejeição: Data de emissão NFC-e posterior a data de recebimento |
| 213 | Rejeição: CNPJ-Base do Autor difere do CNPJ-Base do Certificado Digital |
| 214 | Rejeição: Tamanho da mensagem excedeu o limite estabelecido |
| 215 | Rejeição: Falha Schema XML |
| 228 | Rejeição: Data de Emissão muito atrasada |
| 229 | Rejeição: IE do emitente não informada |
| 230 | Rejeição: IE do emitente não cadastrada |
| 231 | Rejeição: IE do emitente não vinculada ao CNPJ |
| 236 | Rejeição: Chave de Acesso com dígito verificador inválido |
| 237 | Rejeição: CPF do destinatário inválido |
| 238 | Rejeição: Cabeçalho - Versão do arquivo XML superior a Versão vigente |
| 239 | Rejeição: Cabeçalho - Versão do arquivo XML não suportada |
| 241 | Rejeição: Um número da faixa já foi utilizado |
| 242 | Rejeição: Elemento nfeCabecMsg inexistente no SOAP Header |
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
| 298 | Rejeição: Assinatura difere do padrão do Projeto |
| 301 | Rejeição: Irregularidade Cadastral do Emitente |
| 402 | Rejeição: XML da área de dados com codificação diferente de UTF-8 |
| 404 | Rejeição: Uso de prefixo de namespace não permitido |
| 408 | Rejeição: Evento não disponível para Autor pessoa física |
| 409 | Rejeição: Campo cUF inexistente no elemento nfeCabecMsg do SOAP Header |
| 410 | Rejeição: UF informada no campo cUF não é atendida pelo WebService |
| 411 | Rejeição: Campo versaoDados inexistente no elemento nfeCabecMsg do SOAP Header |
| 417 | Rejeição: Total do ICMS superior ao valor limite estabelecido |
| 455 | Rejeição: Órgão Autor do evento diferente da UF da Chave de Acesso |
| 466 | Rejeição: Evento com Tipo de Autor incompatível |
| 467 | Rejeição: Dados da NFC-e divergentes do EPEC |
| 468 | Rejeição: NFC-e com Tipo Emissão = 4, sem EPEC correspondente |
| 484 | Rejeição: Chave de Acesso com tipo de emissão diferente de 4 (posição 35 da Chave de Acesso) |
| 485 | Rejeição: Duplicidade de numeração do EPEC (Modelo, CNPJ, Série e Número) |
| 489 | Rejeição: CNPJ informado inválido (DV ou zeros) |
| <!-- p.20 --> 490 | Rejeição: CPF informado inválido (DV ou zeros) |
| 491 | Rejeição: O tpEvento informado inválido |
| 492 | Rejeição: O verEvento informado inválido |
| 493 | Rejeição: Evento não atende o Schema XML específico |
| 516 | Rejeição: Falha Schema XML, inexiste a tag raiz esperada para a mensagem |
| 517 | Rejeição: Falha Schema XML, inexiste atributo versão na tag raiz da mensagem |
| 539 | Rejeição: Duplicidade de NFC-e com diferença na Chave de Acesso [...] |
| 545 | Rejeição: Falha no schema XML – versão informada na versaoDados do SOAP Header diverge da versão da mensagem |
| 572 | Rejeição: Erro Atributo ID do evento não corresponde a concatenação dos campos (“ID” + tpEvento + chNFe + nSeqEvento) |
| 574 | Rejeição: O autor do evento diverge do emissor da NFC-e |
| 577 | Rejeição: A data do evento não pode ser menor que a data de emissão da NFC-e |
| 578 | Rejeição: A data do evento não pode ser maior que a data do processamento |
| 587 | Rejeição: Usar somente o namespace padrão da NFC-e |
| 588 | Rejeição: Não é permitida a presença de caracteres de edição no início/fim da mensagem ou entre as tags da mensagem |
| 594 | Rejeição: O número de sequencia do evento informado é maior que o permitido |
| 614 | Rejeição: Chave de Acesso inválida (Código UF inválido) |
| 615 | Rejeição: Chave de Acesso inválida (Ano menor que 06 ou Ano maior que Ano corrente) |
| 616 | Rejeição: Chave de Acesso inválida (Mês menor que 1 ou Mês maior que 12) |
| 617 | Rejeição: Chave de Acesso inválida (CNPJ zerado ou dígito inválido) |
| 618 | Rejeição: Chave de Acesso inválida (modelo diferente de 65) |
| 619 | Rejeição: Chave de Acesso inválida (número NF = 0) |
| 628 | Rejeição: Total da NF superior ao valor limite estabelecido pela SEFAZ [Limite] |
| 659 | Rejeição: Ano-Mês da Data de Emissão diverge do Ano-Mês da Chave de Acesso |
| 661 | Rejeição: NFC-e já existente para o número do EPEC informado |
| 662 | Rejeição: Numeração do EPEC está inutilizada na Base de Dados da SEFAZ |
| 719 | Rejeição: NFC-e com valor total superior ao permitido para destinatário não identificado [Limite] |

OBS.:

1. Recomendado a não utilização de caracteres especiais ou acentuação nos textos das mensagens de erro.
2. Recomendado que o campo xMotivo da mensagem de erro para o código 999 seja informado com a mensagem de erro do aplicativo ou do sistema que gerou a exceção não prevista.
