<!-- p.09 -->
# 3 Alteração no schema do evento de pagamento da operação

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| 1 | **evPagtoOperMDFe** | **G** | **-** | **-** | **1-1** | | **Schema XML de validação do evento de pagamento da operação de transporte** |
| 2 | descEvento | E | evPagtoMDFe | C | 1-1 | 24 | Pagamento Operação MDF-e |
| 3 | nProt | E | evPagtoMDFe | N | 1-1 | 15 | Informar o nº do Protocolo de Autorização do MDF-e. |
| 4 | **infViagens** | **G** | **evPagtoMDFe** | **-** | **1-1** | | **Informações do total de viagens acobertadas pelo Evento “pagamento do frete”** |
| 5 | qtdViagens | E | infViagens | N | 1-1 | 5 | Quantidade total de viagens realizadas com o pagamento do Frete |
| 6 | nroViagem | E | infViagens | N | 1-1 | 5 | Número de referência da viagem do MDF-e referenciado. |
| 7 | **infPag** | **G** | **evPagtoMDFe** | **-** | **1-n** | | **Grupo de Informações dos pgto do MDF-e** |
| 8 | xNome | E | infPag | C | 0–1 | 2-60 | Nome do contratante |
| 9 | CPF | CE | infPag | N | 1–1 | 11 | Número do CPF do contratante do serviço |
| 10 | CNPJ | CE | infPag | N | 1–1 | 14 | Número do CNPJ do contratante do serviço |
| 11 | idEstrangeiro | CE | infPag | C | 1–1 | 2-20 | Identificador do contratante em caso de contratante estrangeiro |
| 12 | **Comp** | **G** | **infPag** | **-** | **1-n** | | **Componentes do Pagamento do Frete** |
| 13 | tpComp | E | Comp | N | 1–1 | 2 | Tipo do Componente:<br>01 - Vale Pedágio<br>02 - Impostos, taxas e contribuições<br>03 - Despesas (bancárias, meios de pagamento, outras)<br>99 – Outros |
| 14 | vComp | E | Comp | N | 1–1 | 13, 2 | Valor do Componente |
| 15 | xComp | E | Comp | C | 0–1 | 2-60 | Descrição do componente do tipo Outros |
| 16 | vContrato | E | infPag | N | 1–1 | 13, 2 | Valor total do contrato |
| 17 | indPag | E | infPag | N | 1–1 | 1 | Indicador da Forma de Pagamento:<br>0-Pagamento à Vista;<br>1-Pagamento à Prazo; |

<!-- p.10 -->

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| 18 | <mark>vAdiant</mark> | <mark>E</mark> | <mark>infPag</mark> | <mark>N</mark> | <mark>0–1</mark> | <mark>1</mark> | <mark>Valor do Adiantamento<br>Informar apenas para pgto a Prazo</mark> |
| 19 | **infPrazo** | **G** | **infPag** | **-** | **0–n** | | **Informações do pagamento a prazo.**<br>Obs: Informar somente se indPag for à Prazo |
| 20 | nParcela | E | infPrazo | N | <mark>1–1</mark> | 3 | Número da parcela |
| 21 | dVenc | E | infPrazo | D | <mark>1–1</mark> | 10 | Data de vencimento da Parcela (AAAA-MM-DD) |
| 22 | vParcela | E | infPrazo | N | 1–1 | 13, 2 | Valor da parcela |
| 23 | **infBanc** | **G** | **infPag** | **-** | **1–1** | | **Informações bancárias.** |
| # | ----- X ---- | --- | Sequência XML | CE | --- | 1-1 | |
| 24 | codBanco | CE | infBanc | C | 1–1 | 3-5 | Número do banco |
| 25 | codAgencia | CE | infBanc | C | 1–1 | 1–10 | Número da Agência |
| 26 | CNPJIPEF | CE | infBanc | N | 1-1 | 14 | Número do CNPJ da Instituição de pagamento Eletrônico do Frete |
| 27 | PIX | CE | infBanc | C | 1–1 | 2-60 | Informar a chave PIX para recebimento do frete.<br>Pode ser email, CPF/ CNPJ (somente numeros), Telefone com a seguinte formatação (+5599999999999) ou a chave aleatória gerada pela instituição. |
