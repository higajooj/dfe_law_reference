<!-- p.14 -->

# 7 Evento de Apropriação do Crédito Presumido

**Função**: Evento a ser gerado pelo tomador do serviço de transporte realizado por:

- Transportador Autônomo de Cargas (TAC) em CTe com tipo de emissão Nota Fiscal Fácil (tpEmis=3) ou Emissão pelo PAA (procEmi=4)
- Transportador MEI (CRT=4)

**Autor do Evento**: Tomador do Serviço do CTe emitido pelo TAC (NFF ou PAA) e pelo MEI (CRT=4)

**Modelo**: CTe (modelo 57)

**Código do Tipo de Evento**: 211110 (Este serviço exige CTe autorizado)

**Autorização do Evento**: Exclusiva no ambiente da SVRS

**Schema: evApropriaCredPres.xsd**

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **#** | **evApropriaCredPres** | **Raiz** | **detEvento** | **G** | **1-1** | | **Schema XML de validação do evento de 211110** |
| | descEvento | E | evApropriaCredPres | C | 1-1 | 29 | Apropriação Credito Presumido |
| | vBCCredPres | E | evApropriaCredPres | N | 1-1 | 13v2 | Valor da base de cálculo do item<br><br>Valor total da base de cálculo da operação do crédito presumido<br><br>Valor total do crédito presumido do IBS. Informar zero quando não houver crédito presumido de IBS.<br><br>Valor total do crédito presumido da CBS. Informar zero quando não houver crédito presumido de CBS. |
| | cCredPres | E | evApropriaCredPres | N | 1-1 | 2 | Código de Classificação do Crédito presumido, conforme tabela cCredPres (Anexo IV) |
| | **gIBSCredPres** | **G** | **evApropriaCredPres** | **G** | **0-1** | | **Grupo de Informações do Crédito Presumido do IBS** |
| | pCredPres | E | gIBSCredPres | N | 1-1 | 3v2-4 | Percentual do Crédito Presumido |
| | vCredPres | E | gIBSCredPres | N | 1-1 | 13v2 | Valor do Crédito Presumido |
| | **gCBSCredPres** | **G** | **evApropriaCredPres** | **G** | **0-1** | | **Grupo de Informações do Crédito Presumido da CBS** |
| | pCredPres | E | gCBSCredPres | N | 1-1 | 3v2-4 | Percentual do Crédito Presumido |
| | vCredPres | E | gCBSCredPres | N | 1-1 | 13v2 | Valor do Crédito Presumido |
| | xDecPag | E | evApropriaCredPres | C | 0-1 | - | Declaração de Pagamento ao TAC/MEI.<br>Preencher conforme exigência do indicador ind_xDecPag da tabela cCredPres, mediante o uso de um dos literais apresentados a seguir:<br><br>“Declaro, para fins de apropriação do crédito presumido solicitado, relativo à operação registrada no documento fiscal eletrônico a que se refere este evento: I – já ter efetuado o pagamento integral do valor da prestação do serviço ao transportador, nos termos do art. 126, § 5º, II, da Lei Complementar nº 214, de 16 de janeiro de 2025; II – estar ciente de que a prestação de declaração falsa sujeita-me às penalidades administrativas e sanções penais previstas na legislação, sem prejuízo do estorno do crédito indevidamente apropriado com os acréscimos legais.” (texto com acentuação)<br><br>ou<br><br>“Declaro, para fins de apropriacao do credito presumido solicitado, relativo a operacao <!-- p.15 -->registrada no documento fiscal eletronico a que se refere este evento: I – ja ter efetuado o pagamento integral do valor da prestacao do servico ao transportador, nos termos do art. 126, paragrafo 5o, II, da Lei Complementar no 214, de 16 de janeiro de 2025; II – estar ciente de que a prestacao de declaracao falsa sujeita-me as penalidades administrativas e sancoes penais previstas na legislacao, sem prejuizo do estorno do credito indevidamente apropriado com os acrescimos legais.” (texto sem acentuação) |

| # | Regra de Validação | Aplic | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| 01 | Verificar se o nSeqEvento é maior que o valor permitido (1) | Obrig. | 636 | Rej. | Rejeição: O número sequencial do evento é maior que o permitido |
| 02 | Verificar se CTe já está cancelado | Obrig. | 218 | Rej. | Rejeição: CTe já está cancelado na base de dados da SEFAZ<br>[nProt:999999999999999][dhCanc: AAAA-MM-DDTHH:MM:SS TZD]. |
| 03 | Verificar se CTe possui CTe de substituição associado | Obrig. | 664 | Rej. | Rejeição: Evento não permitido para CTe Substituído |
| 04 | - Verificar se o CNPJ/CPF do Autor é diferente do CNPJ/CPF do tomador do CTe | Obrig. | 755 | Rej. | Rejeição: Autor do evento deve ser o tomador do serviço do CTe |
| 05 | Verificar se o CTe é do tipo de emissão Nota Fiscal Fácil (tpEmis=3), gerado pelo Provedor de Assinatura e Autorização – PAA (procEmi=4) ou se o CRT informado pelo emitente é igual a MEI (CRT=4) | Obrig. | 1060 | Rej. | Rejeição: Apropriação de crédito presumido permitida apenas para CTe emitido por TAC ou MEI. |
| 06 | O código de crédito Presumido informado deve existir<br>**Observação:** Consultar tabela de Crédito Presumido do IBS e da CBS. | Obrig. | 1061 | Rej. | Rejeição: Código de Crédito Presumido (cCredPres) inexistente |
| 07 | O cCredPres informado deve permitir apropriação via evento | Obrig. | 1062 | Rej. | Rejeição: Código de Crédito Presumido (cCredPres) não aceita apropriação por evento |
| 08 | O cCredPres informado deve possuir indicador de utilização com CTe | Obrig, | 1063 | Rej. | Rejeição: Código de Crédito Presumido (cCredPres) não permitido para CTe |
| 09 | Se cCredPres possui indicador que **NÃO PERMITE** o uso de crédito presumido para o IBS, o grupo gIBSCredPres **NÃO DEVE** ser informado. | Obrig. | 1064 | Rej. | Rejeição: Crédito Presumido para o IBS informado indevidamente |
| 10 | Se cCredPres possui indicador que **EXIGE** o uso de crédito presumido para o IBS, o grupo gCredPresIBS **DEVERÁ SER INFORMADO** | Obrig, | 1065 | Rej. | Rejeição: Crédito Presumido para o IBS não informado |
| 11 | Se informado gIBSCredPres:<br>- O valor de gIBSCredPres/vCredPres deve corresponder ao resultado de vBCCredPres multiplicado por gIBSCredPres/pCredPres.<br>**Observação**: Aceitar uma tolerância de 0,01 a mais ou a menos. | Obrig, | 1066 | Rej. | Rejeição: Valor do crédito presumido do IBS difere do calculado |
| 12 | Se cCredPres possui indicador que **NÃO PERMITE** o uso de crédito presumido para o CBS, o grupo gCBSCredPres **NÃO DEVE** ser informado. | Obrig. | 1067 | Rej. | Rejeição: Crédito Presumido para a CBS informado indevidamente |
| 13 | Se cCredPres possui indicador que **EXIGE** o uso de crédito presumido para o CBS, o grupo gCredPresCBS **DEVERÁ SER INFORMADO** | Obrig. | 1068 | Rej. | Rejeição: Crédito Presumido para a CBS não informado |
| 14 | Se informado gCBSCredPres:<br>- O valor de gCBSCredPres/vCredPres deve corresponder ao resultado de vBCCredPres multiplicado por gCBSCredPres/pCredPres.<br>**Observação**: Aceitar uma tolerância de 0,01 a mais ou a menos. | Obrig, | 1069 | Rej. | Rejeição: Valor do crédito presumido da CBS difere do calculado |
| 15 | Se o cCredPres possuir indicador que **EXIGE** o preenchimento da Declaração de Pagamento ao Fornecedor:<br>A Declaração de Pagamento ao Fornecedor **DEVERÁ SER** informada. (campo: xDecPag) | Obrig. | 1070 | Rej. | Rejeição: Declaração de Pagamento ao Fornecedor não informada |
| 16 | <!-- p.16 -->Se o cCredPres possuir indicador que **NÃO PERMITE** o preenchimento da Declaração de Pagamento ao Fornecedor:<br>A Declaração de Pagamento ao Fornecedor **NÃO DEVERÁ SER INFORMADA**. (campo: xDecPag) | Obrig. | 1071 | Rej. | Rejeição: Declaração de Pagamento ao Fornecedor informada indevidamente |

## Final do Processamento

Se o evento de apropriação de crédito presumido do DFe for homologado o status de retorno deverá ser cStat=135.
