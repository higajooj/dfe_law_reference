<!-- p.6 -->
# 2. Leiaute da NF-e (Modelo 55 e 65)

**Grupo I. Produtos e Serviços da NF-e**

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| 110 | I11 | vProd | Valor Total Bruto dos Produtos ou Serviços. | E | I01 | N | 1-1 | 13v2 | O valor do ICMS faz parte do Valor Total Bruto, exceto nas notas de importação (NT 2020.005)<br>**Observação:** A partir de 2027, os valores de IBS, CBS e IS compõem o Valor Total Bruto, exceto nas notas de importação. |
| **110.01** | **I11a** | **-x-** | **Sequência XML** | **G** | **I01** | | **0-1** | | **Observação:** Futuramente essa sequência será obrigatória. |
| 110.02 | I11b | vUnComLiq | Valor Líquido Unitário do Produto ou Serviço (sem tributos) | E | I11a | N | 1-1 | 11v0-10 | Valor unitário de comercialização do produto ou serviço, sem a inclusão de tributos. |
| 110.03 | I11c | vProdLiq | Valor Líquido do Produto ou Serviço (sem tributos) | E | I11a | N | 1-1 | 13v2 | Valor líquido do produto ou serviço, sem a inclusão de tributos. |

**Grupo NB. ICMS Previsto no Pagamento Antecipado**

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **245b.01** | **NB01** | **ICMSPrevistoPagtoAntecip** | **Grupo do ICMS Previsto no Pagamento Antecipado** | **CG** | **N01** | | **1-1** | | Grupo utilizado exclusivamente em cenários específicos de pagamento antecipado para auxiliar na correta tributação do IBS e da CBS:<br>- tpNFDebito = 06-Pagamento antecipado;<br>- tpOperGov = 4-Recebimento do pagamento com fornecimento posterior. |
| 245b.02 | NB02 | vICMSPrevisto | Valor do ICMS Previsto | E | NB01 | N | 1-1 | 13v2 | Valor do ICMS que incidirá no momento do fornecimento futuro.<br>**Observação 1:** Em cenários onde não haverá valor de ICMS devido no fornecimento, informar 0. |

**Grupo W. Total da NF-e**

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| 326a | W01a | vProdLiqTot | Valor Total Líquido dos Produtos ou Serviços (sem tributos) | E | W01 | N | 0-1 | 13v2 | Soma dos valores líquidos dos produtos ou serviços, sem a inclusão de tributos. |
