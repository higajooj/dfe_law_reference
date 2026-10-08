<!-- p.63 -->
# 6.7 Evento de Alteração do Pagamento do Serviço de Transporte

- **Função:** evento que deverá permitir ao transportador modificar os dados do pagamento do serviço de transporte em relação a um contratante nos casos em que for necessário.
- **Autor do Evento:** O autor é o emitente do MDFe.
- **Código do Tipo de Evento:** 110118 (Exige MDFe)
- **Schema XML:** evAlteracaoPagtoServMDFe_v9.99.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **HP01** | **evAlteracaoPagtoServMDFe** | G | - | - | 1-1 | - | Schema XML de validação do evento de alteração do pagamento do serviço de transporte |
| HP02 | descEvento | E | HP01 | C | 1-1 | 31 | Alteração Pagamento Serviço MDFe |
| HP03 | nProt | E | HP01 | N | 1-1 | 15 | Informar o nº do Protocolo de Autorização do MDFe. |
| **HP04** | **infPag** | G | HP01 | - | 1-1 | - | Grupo de Informações dos pgto do MDFe |
| HP05 | xNome | E | HP04 | C | 0-1 | 2-60 | Nome do contratante |
| HP06 | CPF | CE | HP04 | N | 1-1 | 11 | Número do CPF do contratante do serviço |
| HP07 | CNPJ | CE | HP04 | N | 1-1 | 14 | Número do CNPJ do contratante do serviço |
| HP08 | idEstrangeiro | CE | HP04 | C | 1-1 | 2-20 | Identificador do contratante em caso de contratante estrangeiro |
| **HP09** | **Comp** | G | HP04 | - | 1-n | - | Componentes do Pagamento do Frete |
| HP10 | tpComp | E | HP09 | N | 1-1 | 2 | Tipo do Componente: 01 - Vale Pedágio; 02 - Impostos, taxas e contribuições; 03 - Despesas (bancárias, meios de pagamento, outras); 99 – Outros |
| HP11 | vComp | E | HP09 | N | 1-1 | 13,2 | Valor do Componente |
| HP12 | xComp | E | HP09 | C | 0-1 | 2-60 | Descrição do componente do tipo outros |
| HP13 | vContrato | E | HP04 | N | 1-1 | 13,2 | Valor total do contrato |
| HP14 | indPag | E | HP04 | N | 1-1 | 1 | Indicador da Forma de Pagamento: 0-Pagamento à Vista; 1-Pagamento à Prazo. |
| HP15 | vAdiant | E | HP04 | N | 0-1 | 1 | Valor do Adiantamento. Informar apenas para pgto a Prazo |
| HP16 | indAntecipaAdiant | E | HP04 | N | 0-1 | 1 | Informar a tag somente se for autorizado antecipar o adiantamento |
| **HP17** | **infPrazo** | G | HP04 | - | 0-n | - | Informações do pagamento a prazo. Obs: Informar somente se indPag for à Prazo |
| HP18 | nParcela | E | HP17 | N | 1-1 | 3 | Número da parcela |
| HP19 | dVenc | E | HP17 | D | 1-1 | 10 | Data de vencimento da Parcela (AAAA-MM-DD) |
| HP20 | vParcela | E | HP17 | N | 1-1 | 13,2 | Valor da parcela |
| HP21 | tpAntecip | E | HP04 | N | 0-1 | 1 | Tipo de Permissão em relação a antecipação das parcelas: 0 - Não permite antecipar; 1 - Permite antecipar as parcelas; 2 - Permite antecipar as parcelas mediante confirmação. |
| **HP22** | **infBanc** | G | HP04 | - | 1-1 | - | Informações bancárias. |
| <!-- REVISAR p.63: linha HP23 do leiaute ilegível no original (texto "----- X ----", sem nome de campo) --> | ----- X ---- | --- | HP04 | CE | --- | 1-1 | |
| HP24 | codBanco | CE | HP04 | C | 1-1 | 3-5 | Número do banco |
| HP25 | codAgencia | CE | HP04 | C | 1-1 | 1-10 | Número da Agência |
| HP26 | CNPJIPEF | CE | HP04 | N | 1-1 | 14 | Número do CNPJ da Instituição de pagamento Eletrônico do Frete |
| HP27 | PIX | CE | HP04 | C | 1-1 | 2-60 | Informar a chave PIX para recebimento do frete. Pode ser email, CPF/ CNPJ (somente números), Telefone com a seguinte formatação (+5599999999999) ou a chave aleatória gerada pela instituição. |

<!-- p.64 -->

## Validação das Regras Específicas do Evento

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| K01 | Verificar se o nSeqEvento é maior que o valor permitido (1 até 99) | Obrig. | 636 | Rej. | Rejeição: O número sequencial do evento é maior que o permitido |
| K02 | Verificar se número do Protocolo informado difere do número do Protocolo do MDFe | Obrig. | 222 | Rej. | Rejeição: Protocolo de Autorização de Uso difere do cadastrado |
| K03 | Verificar se MDFe já está cancelado. [nProt:999999999999999][dhCanc: AAAA-MM-DDTHH:MM:SS TZD]. | Obrig. | 218 | Rej. | Rejeição: MDFe já está cancelado na base de dados da SEFAZ. |
| K04 | Verificar se o MDFe é do modal Rodoviário | Obrig. | 749 | Rej. | Rejeição: MDFe deve ser do modal rodoviário para o evento de Alteração do Pagamento de MDFe |
| K05 | Se indicador de pagamento for a prazo (tag:indPag=1), o grupo de informações a prazo deve ser informado (grupo:infPrazo) | Obrig. | 724 | Rej. | Rejeição: Grupo de informações do pagamento a prazo deve ser informado |
| K06 | Se indicador de pagamento for a vista (tag:indPag=0), o grupo de informações a prazo NÃO deve ser informado (grupo:infPrazo) | Obrig. | 729 | Rej. | Rejeição: Grupo de informações do pagamento a prazo não deve ser informado |
| K07 | Se informado grupo de pagamento, rejeitar se CNPJ/CPF do responsável pelo pagamento estiver inválido | Obrig. | 727 | Rej. | Rejeição: CNPJ/CPF do responsável pelo pagamento do frete inválido |
| K08 | Se informado grupo de pagamento, rejeitar se CNPJ do IPEF estiver inválido | Obrig. | 728 | Rej. | Rejeição: CNPJ da instituição de pagamento eletrônico do frete inválido |
| K09 | O somatório dos componentes (tag: infPag/Comp/vComp) deve ser igual ao valor do contrato (tag: infPag/vContrato)<br>**Observação:** tolerar uma diferença de R$ 0,01 a mais ou a menos | Obrig. | 746 | Rej. | Rejeição: A soma dos componentes do pagamento deve ser igual ao valor do contrato |
| K10 | Se o pagamento estiver informado com pagamento a prazo (tag: indPag=1): O número da parcela deve ser informado com três algarismos, sequenciais e consecutivos entre as parcelas (ex: 001, 002, 003)<br>**Observação:** informar o número da parcela com problema [nParcela: 999] | Obrig. | 735 | Rej. | Rejeição: Número da parcela inválido [nParcela:999] |
| K11 | Se o pagamento estiver informado com pagamento a prazo (tag: indPag=1): Nenhuma parcela pode ser anterior a data de emissão do MDFe<br>**Observação:** informar o número da parcela com problema [nParcela: 999] | Obrig. | 736 | Rej. | Rejeição: Data de vencimento da parcela menor que a data de emissão [nParcela:999] |
| K12 | Se o pagamento estiver informado com pagamento a prazo (tag: indPag=1): A data informada em cada parcela deve ser posterior a parcela anterior<br>**Observação:** informar o número da parcela com problema [nParcela: 999] | Obrig. | 737 | Rej. | Rejeição: Data de vencimento da parcela menor que a data da parcela anterior [nParcela: 999] |
| K13 | Se o pagamento estiver informado com pagamento a prazo (tag: indPag=1): O somatório do valor das parcelas (tag: vParcela) + valor do adiantamento (tag: vAdiant) não pode ser diferente do valor do Contrato (tag: vContrato)<br>**Observação:** tolerar uma diferença de R$ 0,01 a mais ou a menos | Obrig. | 738 | Rej. | Rejeição: Somatório do valor das parcelas diferente do valor do contrato |

<!-- p.65 -->

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| K14 | Se o pagamento estiver informado com pagamento a vista (tag: indPag=0): O valor do adiantamento não pode ser informado (tag: vAdiant) | Obrig. | 739 | Rej. | Rejeição: Valor do adiantamento não pode ser informado para pagamento a vista |
