<!-- p.21 -->
# 8. Tabela de códigos de erros e descrições de mensagens de erros

| Código | RESULTADO DO PROCESSAMENTO DA SOLICITAÇÃO |
|---:|---|
| 142 | Rejeição: Ambiente de Contingência EPEC bloqueado para o Emitente |
| 121 | Rejeição: SEFAZ do emitente não permite Ambiente de Contingência EPEC |
| 203 | Rejeição: Emissor não habilitado para emissão de NF-e |
| 208 | Rejeição: CNPJ do destinatário inválido |
| 209 | Rejeição: IE do emitente inválida |
| 210 | Rejeição: IE do destinatário inválida |
| 212 | Rejeição: Data de emissão NF-e posterior a data de recebimento |
| 228 | Rejeição: Data de Emissão muito atrasada |
| 229 | Rejeição: IE do emitente não informada |
| 230 | Rejeição: IE do emitente não cadastrada |
| 231 | Rejeição: IE do emitente não vinculada ao CNPJ |
| 232 | Rejeição: IE do destinatário não informada |
| 233 | Rejeição: IE do destinatário não cadastrada |
| 234 | Rejeição: IE do destinatário não vinculada ao CNPJ |
| 236 | Rejeição: Chave de Acesso com dígito verificador inválido |
| 237 | Rejeição: CPF do destinatário inválido |
| 240 | Rejeição: Irregularidade fiscal do emitente |
| 241 | Rejeição: Um número da faixa já foi utilizado |
| 249 | Rejeição: UF da Chave de Acesso diverge da UF autorizadora |
| 250 | Rejeição: UF diverge da UF autorizadora |
| 252 | Rejeição: Ambiente informado diverge do Ambiente de recebimento |
| 266 | Rejeição: Série utilizada não permitida no Web Service |
| 302 | Uso Denegado: Irregularidade fiscal do destinatário |
| 303 | Uso Denegado: Destinatário não habilitado a operar na UF |
| 305 | Rejeição: Destinatário bloqueado na UF |
| 306 | Rejeição: IE do destinatário não está ativa na UF |
| 370 | Rejeição: Processo de emissão pelo Fisco com tipo de Emissão inválido |
| 417 | Rejeição: Total do ICMS superior ao valor limite estabelecido |
| 418 | Rejeição: Total do ICMS ST superior ao valor limite estabelecido |
| 455 | Rejeição: Órgão Autor do evento diferente da UF da Chave de Acesso |
| 466 | Rejeição: Evento com Tipo de Autor incompatível |
| 467 | Rejeição: Dados da NF-e divergentes do EPEC [tag:xxxx] |
| 468 | Rejeição: NF-e com Tipo Emissão = 4, sem EPEC correspondente |
| 484 | Rejeição: Chave de Acesso com tipo de emissão diferente de 4 (posição 35 da Chave de Acesso) |
| 485 | Rejeição: Duplicidade de numeração do EPEC (Modelo, CNPJ ou CPF, Série e Número) |
| 489 | Rejeição: CNPJ informado inválido (DV ou zeros) |
| 490 | Rejeição: CPF informado inválido (DV ou zeros) |
| 495 | Rejeição: CPF do emitente com Série incompatível |
| 572 | Rejeição: Erro Atributo ID do evento não corresponde a concatenação dos campos (“ID” + tpEvento + chNFe + nSeqEvento) |
| 573 | Rejeição: Duplicidade de Evento |
| 574 | Rejeição: Autor do evento diverge do emissor da NF-e |
| 577 | Rejeição: A data do evento não pode ser menor que a data de emissão da NF-e |
| 578 | Rejeição: A data do evento não pode ser maior que a data do processamento |
| 594 | Rejeição: O número de sequencia do evento informado é maior que o permitido |
| 614 | Rejeição: Chave de Acesso inválida (Código UF inválido) |
| 615 | Rejeição: Chave de Acesso inválida (Ano < 06 ou Ano maior que Ano corrente) |
| 616 | Rejeição: Chave de Acesso inválida (Mês < 1 ou Mês > 12) |
| 617 | Rejeição: Chave de Acesso inválida (CNPJ/CPF zerado ou dígito inválido) |
| 618 | Rejeição: Chave de Acesso inválida (modelo diferente de 55/65) |
| 619 | Rejeição: Chave de Acesso inválida (número NF = 0) |
| 628 | Rejeição: Total da NF superior ao valor limite estabelecido pela SEFAZ [Limite] |
| 633 | Rejeição: Ambiente de autorização inválido para emissão pelo PAA |
| 659 | Rejeição: Ano-Mês da Data de Emissão diverge do Ano_Mês da Chave de Acesso |
| 661 | Rejeição: NF-e já existente para o número do EPEC informado |
| 662 | Rejeição: Numeração do EPEC está inutilizada na Base de Dados da SEFAZ |
| 624 | Rejeição: IE Destinatário não vinculada ao CPF |
| <!-- p.22 -->691 | Rejeição: Chave de Acesso da NF-e diverge da Chave de Acesso do EPEC [Chave EPEC: xxxxxxxxx] |
| 692 | Rejeição: Existe EPEC registrado para esta Série e Número [Chave EPEC: xxxxxxxxxxx] |
| 720 | Rejeição: Na operação com Exterior deve ser informada tag idEstrangeiro |
| 721 | Rejeição: Operação interestadual deve informar CNPJ ou CPF |
| 792 | Rejeição: Informada a IE do destinatário para operação com destinatário no Exterior |

OBS.:

1. Recomendado a não utilização de caracteres especiais ou acentuação nos textos das mensagens de erro.
2. Recomendado que o campo xMotivo da mensagem de erro para o código 999 seja informado com a mensagem de erro do aplicativo ou do sistema que gerou a exceção não prevista.
