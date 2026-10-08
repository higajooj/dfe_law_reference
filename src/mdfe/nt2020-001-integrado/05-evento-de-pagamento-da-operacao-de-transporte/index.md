# 5 Evento de Pagamento da Operação de Transporte

<!-- p.11 -->
**Função**: evento que deverá permitir informar o pagamento do TAC-Agregado ou equiparado a TAC a ocorrer no final do período conforme a relação de viagens realizadas. Neste evento será preenchido de forma tardia o grupo de informações do pagamento do frete com o mesmo layout constante do MDF-e rodoviário.

**Autor do Evento**: O autor é o emissor do MDF-e que contratou o TAC para o transporte da carga.

**Código do Tipo de Evento**: 110116 (Exige MDF-e)

**Schema XML**: evPagtoOperMDFe_v9.99.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **1** | **evPagtoOperMDFe** | **G** | **-** | **-** | **1-1** | **** | **Schema XML de validação do evento de pagamento da operação de transporte** |
| 2 | descEvento | E | evPagtoMDFe | C | 1-1 | 24 | Pagamento Operação MDF-e |
| 3 | nProt | E | evPagtoMDFe | N | 1-1 | 15 | Informar o nº do Protocolo de Autorização do MDF-e. |
| **4** | **infViagens** | **G** | **evPagtoMDFe** | **-** | **1-1** | **** | **Informações do total de viagens acobertadas pelo Evento “pagamento do frete”** |
| 5 | qtdViagens | E | infViagens | N | 1-1 | 5 | Quantidade total de viagens realizadas com o pagamento do Frete |
| 6 | nroViagem | E | infViagens | N | 1-1 | 5 | Número de referência da viagem do MDF-e referenciado. |
| **7** | **infPag** | **G** | **evPagtoMDFe** | **-** | **1 - n** | **** | **Grupo de Informações dos pgto do MDF-e** |
| 8 | xNome | E | infPag | C | 0 – 1 | 2 - 60 | Nome do contratante |
| 9 | CPF | CE | infPag | N | 1 – 1 | 11 | Número do CPF do contratante do serviço |
| 10 | CNPJ | CE | infPag | N | 1 – 1 | 14 | Número do CNPJ do contratante do serviço |
| 11 | idEstrangeiro | CE | infPag | C | 1 – 1 | 2 - 20 | Identificador do contratante em caso de contratante estrangeiro |
| **12** | **Comp** | **G** | **infPag** | **-** | **1 - n** | **** | **Componentes do Pagamento do Frete** |
| 13 | tpComp | E | Comp | N | 1 – 1 | 2 | Tipo do Componente:<br>01 - Vale Pedágio<br>02 - Impostos, taxas e contribuições<br>03 - Despesas (bancárias, meios de pagamento, outras)<br>99 – Outros |
| 14 | vComp | E | Comp | N | 1 – 1 | 13, 2 | Valor do Componente |
| 15 | xComp | E | Comp | C | 0 – 1 | 2 - 60 | Descrição do componente do tipo Outros |
| 16 | vContrato | E | infPag | N | 1 – 1 | 13, 2 | Valor total do contrato |
| 17 | indPag | E | infPag | N | 1 – 1 | 1 | Indicador da Forma de Pagamento:<br>0-Pagamento à Vista;<br>1-Pagamento à Prazo; |
| **18** | **infPrazo** | **G** | **infPag** | **-** | **0 – n** | **** | **Informações do pagamento a prazo.**<br>**Obs: Informar somente se indPag for à Prazo** |
| 19 | nParcela | E | infPrazo | N | 0 – 1 | 3 | Número da parcela |
| 20 | dVenc | E | infPrazo | D | 0 – 1 | 10 | Data de vencimento da Parcela (AAAA-MM-DD) |
| 21 | vParcela | E | infPrazo | N | 1 – 1 | 13, 2 | Valor da parcela |
| **22** | **infBanc** | **G** | **infPag** | **-** | **1 – 1** | **** | **Informações bancárias.** |
| 23 | codBanco | CE | infBanc | C | 1 – 1 | 3 - 5 | Número do banco |
| 24 | codAgencia | CE | infBanc | C | 1 – 1 | 1 - 10 | Número da Agência |
| 25 | CNPJIPEF | CE | infBanc | N | 1 - 1 | 14 | Número do CNPJ da Instituição de pagamento Eletrônico do Frete |
