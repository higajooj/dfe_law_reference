<!-- p.59 -->
# 6.5 Evento de Pagamento da Operação de Transporte

- **Função:** evento que deverá permitir informar o pagamento do TAC-Agregado ou equiparado a TAC a ocorrer no final do período conforme a relação de viagens realizadas. Neste evento será preenchido de forma tardia o grupo de informações do pagamento do frete com o mesmo layout constante do MDFe rodoviário.
- **Autor do Evento:** O autor é o emissor do MDFe que contratou o TAC para o transporte da carga.
- **Código do Tipo de Evento:** 110116 (Exige MDFe)
- **Schema XML:** evPagtoOperMDFe_v9.99.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **HP01** | **evPagtoOperMDFe** | G | - | - | 1-1 | - | Schema XML de validação do evento de pagamento da operação de transporte |
| HP02 | descEvento | E | HP01 | C | 1-1 | 24 | Pagamento Operação MDFe |
| HP03 | nProt | E | HP01 | N | 1-1 | 15 | Informar o nº do Protocolo de Autorização do MDFe. |
| **HP04** | **infViagens** | G | HP01 | - | 1-1 | - | Informações do total de viagens acobertadas pelo Evento "pagamento do frete" |
| HP05 | qtdViagens | E | HP04 | N | 1-1 | 5 | Quantidade total de viagens realizadas com o pagamento do Frete |
| HP06 | nroViagem | E | HP04 | N | 1-1 | 5 | Número de referência da viagem do MDFe referenciado. |
| **HP07** | **infPag** | G | HP01 | - | 1-n | - | Grupo de Informações dos pgto do MDFe |
| HP08 | xNome | E | HP07 | C | 0-1 | 2-60 | Nome do contratante |
| HP09 | CPF | CE | HP07 | N | 1-1 | 11 | Número do CPF do contratante do serviço |
| HP10 | CNPJ | CE | HP07 | N | 1-1 | 14 | Número do CNPJ do contratante do serviço |
| HP11 | idEstrangeiro | CE | HP07 | C | 1-1 | 2-20 | Identificador do contratante em caso de contratante estrangeiro |
| **HP12** | **Comp** | G | HP07 | - | 1-n | - | Componentes do Pagamento do Frete |
| HP13 | tpComp | E | HP12 | N | 1-1 | 2 | Tipo do Componente: 01 - Vale Pedágio; 02 - Impostos, taxas e contribuições; 03 - Despesas (bancárias, meios de pagamento, outras); 99 – Outros |
| HP14 | vComp | E | HP12 | N | 1-1 | 13,2 | Valor do Componente |
| HP15 | xComp | E | HP12 | C | 0-1 | 2-60 | Descrição do componente do tipo outros |
| HP16 | vContrato | E | HP07 | N | 1-1 | 13,2 | Valor total do contrato |
| HP17 | indPag | E | HP07 | N | 1-1 | 1 | Indicador da Forma de Pagamento: 0-Pagamento à Vista; 1-Pagamento à Prazo; |
| HP18 | vAdiant | E | HP07 | N | 0-1 | 13,2 | Valor do Adiantamento. Informar apenas para pgto. a Prazo |
| HP19 | indAntecipaAdiant | E | HP07 | N | 0-1 | 1 | Informar a tag somente se for autorizado antecipar o adiantamento |
| **HP20** | **infPrazo** | G | HP07 | - | 0-n | - | Informações do pagamento a prazo. Obs: Informar somente se indPag for à Prazo |
| HP21 | nParcela | E | HP20 | N | 1-1 | 3 | Número da parcela |
| HP22 | dVenc | E | HP20 | D | 1-1 | 10 | Data de vencimento da Parcela (AAAA-MM-DD) |

<!-- p.60 -->

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| HP23 | vParcela | E | HP20 | N | 1-1 | 13,2 | Valor da parcela |
| HP24 | tpAntecip | E | HP07 | N | 0-1 | 1 | Tipo de Permissão em relação a antecipação das parcelas: 0 - Não permite antecipar; 1 - Permite antecipar as parcelas; 2 - Permite antecipar as parcelas mediante confirmação |
| **HP25** | **infBanc** | G | HP07 | - | 1-1 | - | Informações bancárias. |
| HP26 | codBanco | CE | HP25 | C | 1-1 | 3-5 | Número do banco |
| HP27 | codAgencia | CE | HP25 | C | 1-1 | 1-10 | Número da Agência |
| HP28 | CNPJIPEF | CE | HP25 | N | 1-1 | 14 | Número do CNPJ da Instituição de pagamento Eletrônico do Frete |
| HP29 | PIX | CE | HP25 | C | 1-1 | 2-60 | Informar a chave PIX para recebimento do frete. Pode ser email, CPF/CNPJ (somente numeros), Telefone com a seguinte formatação (+5599999999999) ou a chave aleatória gerada pela instituição. |

## 6.5.1 Validação das Regras Específicas do Evento

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| K01 | Verificar se o nSeqEvento é maior que o valor permitido (=1) | Obrig. | 636 | Rej. | Rejeição: O número sequencial do evento é maior que o permitido |
| K02 | Emitente deve estar habilitado na base de dados para emissão de MDFe<br>**Observação:** Se evento gerado por PAA (grupo: infPAA) verificar se o CNPJ do emitente está em situação ativa no cadastro do CNPJ MEI da RFB | Obrig. | 203 | Rej. | Rejeição: Emissor não habilitado para emissão do MDFe |
| K03 | Verificar se número do Protocolo informado difere do número do Protocolo do MDFe | Obrig. | 222 | Rej. | Rejeição: Protocolo de Autorização de Uso difere do cadastrado |
| K04 | Verificar se MDFe já está cancelado. [nProt:999999999999999][dhCanc: AAAA-MM-DDTHH:MM:SS TZD]. | Obrig. | 218 | Rej. | Rejeição: MDFe já está cancelado na base de dados da SEFAZ. |
| K05 | Verificar se o MDFe é do modal Rodoviário | Obrig. | 722 | Rej. | Rejeição: MDFe deve ser do modal rodoviário para o evento Pagamento de MDFe |
| K06 | Verificar se o MDFe informado possui proprietário do veículo de tração informado com tipo de Proprietário TAC Agregado (tag: tpProp=0). | Obrig. | 723 | Rej. | Rejeição: O tipo do proprietário do MDFe deve ser do tipo TAC Agregado |
| K07 | Se indicador de pagamento for a prazo (tag:indPag=1), o grupo de informações a prazo deve ser informado (grupo:infPrazo) | Obrig. | 724 | Rej. | Rejeição: Grupo de informações do pagamento a prazo deve ser informado |
| K08 | Se indicador de pagamento for a vista (tag:indPag=0), o grupo de informações a prazo NÃO deve ser informado (grupo:infPrazo) | Obrig. | 729 | Rej. | Rejeição: Grupo de informações do pagamento a prazo não deve ser informado |
| K09 | Se informado grupo de pagamento, rejeitar se CNPJ/CPF do responsável pelo pagamento estiver inválido | Obrig. | 727 | Rej. | Rejeição: CNPJ/CPF do responsável pelo pagamento do frete inválido |
| K10 | Se informado grupo de pagamento, rejeitar se CNPJ do IPEF estiver inválido | Obrig. | 728 | Rej. | Rejeição: CNPJ da instituição de pagamento eletrônico do frete inválido |
| K11 | O somatório dos componentes (tag: infPag/Comp/vComp) deve ser igual ao valor do contrato (tag: infPag/vContrato)<br>**Observação:** tolerar uma diferença de R$ 0,01 a mais ou a menos | Obrig. | 746 | Rej. | Rejeição: A soma dos componentes do pagamento deve ser igual ao valor do contrato |
| K12 | Se o pagamento estiver informado com pagamento a prazo (tag: indPag=1): O número da parcela deve ser informado com três algarismos, sequenciais e consecutivos entre as parcelas (ex: 001, 002, 003)<br>**Observação:** informar o número da parcela com problema [nParcela: 999] | Obrig. | 735 | Rej. | Rejeição: Número da parcela inválido [nParcela:999] |

<!-- p.61 -->

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| K13 | Se o pagamento estiver informado com pagamento a prazo (tag: indPag=1): Nenhuma parcela pode ser anterior a data de emissão do MDFe<br>**Observação:** informar o número da parcela com problema [nParcela: 999] | Obrig. | 736 | Rej. | Rejeição: Data de vencimento da parcela menor que a data de emissão [nParcela:999] |
| K14 | Se o pagamento estiver informado com pagamento a prazo (tag: indPag=1): A data informada em cada parcela deve ser posterior a parcela anterior<br>**Observação:** informar o número da parcela com problema [nParcela: 999] | Obrig. | 737 | Rej. | Rejeição: Data de vencimento da parcela menor que a data da parcela anterior [nParcela: 999] |
| K15 | Se o pagamento estiver informado com pagamento a prazo (tag: indPag=1): O somatório do valor das parcelas (tag: vParcela) + valor do adiantamento (tag: vAdiant) não pode ser diferente do valor do Contrato (tag: vContrato)<br>**Observação:** tolerar uma diferença de R$ 0,01 a mais ou a menos | Obrig. | 738 | Rej. | Rejeição: Somatório do valor das parcelas diferente do valor do contrato |
| K16 | Se o pagamento estiver informado com pagamento a vista (tag: indPag=0): O valor do adiantamento não pode ser informado (tag: vAdiant) | Obrig. | 739 | Rej. | Rejeição: Valor do adiantamento não pode ser informado para pagamento a vista |

## 6.5.2 Final do Processamento

Se o evento de Pagamento da operação de transporte do MDFe for homologado, o status de retorno será "135 – Evento vinculado a MDFe".
