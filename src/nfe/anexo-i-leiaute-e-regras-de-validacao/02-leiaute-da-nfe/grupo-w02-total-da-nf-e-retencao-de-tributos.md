# Grupo W02. Total da NF-e / Retenção de Tributos

Exemplos de atos normativos que definem Obrigatoriedade da retenção de contribuições:

a) IRPJ/CSLL/PIS/COFINS - Fonte - Recebimentos de Órgão Público Federal, Lei nº 9.430, de 27 de dezembro de 1996, art. 64, Lei nº 10.833/2003, art.

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| 34, | infralegais, (como) | de | 25/04/05. |  |  |  | temos como exemplo: IN SRF 480/2004 e IN 539, |

b) Retenção do Imposto de Renda pelas Fontes Pagadoras, REMUNERAÇÃO DE SERVIÇOS PROFISSIONAIS PRESTADOS POR PESSOA JURÍDICA,

Lei nº 7.450/85, art. 52

c) IRPJ, CSLL, COFINS e PIS - Serviços Prestados por Pessoas Jurídicas - Retenção na Fonte, Lei nº 10.833 de 29.12.2003, art. 30, 31, 32, 35 e 36

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **348** | **retTrib (W23)** | **G** | **W01** |  | **0-1** |  | **Grupo Retenções de Tributos** |
| 349 | vRetPIS (W24) | E | W23 | N | 0-1 | 13v2 | Valor Retido de PIS |
| 350 | (W25) | E | W23 | N | 0-1 | 13v2 | Valor Retido de COFINS |
| 351 | vRetCSLL (W26) | E | W23 | N | 0-1 | 13v2 | Valor Retido de CSLL <!-- p.60 --> |
| 352 | vBCIRRF (W27) | E | W23 | N | 0-1 | 13v2 | Base de Cálculo do IRRF |
| 353 | vIRRF (W28) | E | W23 | N | 0-1 | 13v2 | Valor Retido do IRRF |
| 354 | vBCRetPrev (W29) | E | W23 | N | 0-1 | 13v2 | Base de Cálculo da Retenção da Previdência Social |
| 355 | vRetPrev (W30) | E | W23 | N | 0-1 | 13v2 | Valor da Retenção da Previdência Social |
