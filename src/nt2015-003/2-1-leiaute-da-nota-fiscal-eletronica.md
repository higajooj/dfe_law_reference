# 2.1 Leiaute da Nota Fiscal Eletrônica

## A. Campo CEST - Código Especificador da Substituição Tributária

Incluído campo CEST (Código Especificador da Substituição Tributária), que estabelece a sistemática de uniformização e identificação das mercadorias e bens passíveis de sujeição aos regimes de substituição tributária e de antecipação de recolhimento do ICMS com o encerramento de tributação, relativos às operações subsequentes, conforme definições do Convênio ICMS 92, de 20 de agosto de 2015.

**I. Produtos e Serviços da NF-e**

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| 104d | I05c | CEST | Código CEST | E | I01 | N | 0-1 | 7 | Código Especificador da Substituição Tributária – CEST, que estabelece a sistemática de uniformização e identificação das mercadorias e bens passíveis de sujeição aos regimes de substituição tributária e de antecipação de recolhimento do ICMS |
| 110 | I11 | vProd | Valor Total Bruto dos Produtos ou Serviços | E | I01 | N | 1-1 | 13v2 | O valor do ICMS faz parte do Valor Total Bruto |

## B. Grupo de Tributação do ICMS para a UF de destino

Foi criado um novo grupo de informações no item, para identificar o ICMS Interestadual nas operações de venda para consumidor final, atendendo ao disposto na Emenda Constitucional 87 de 2015. Este grupo não deve ser utilizado nas operações com veículos automotores novos efetuadas por meio de faturamento direto para o consumidor (Convênio ICMS 51/00), as quais possuem grupo de campos próprio (ICMSPart).

**NA. ICMS para a UF de destino**

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **245a.01** | **NA01** | **ICMSUFDest** | **Informação do ICMS Interestadual** | **G** | **M01** | | **0-1** | | Grupo a ser informado nas vendas interestaduais para consumidor final, não contribuinte do ICMS.<br>**Observação**: Este grupo não deve ser utilizado nas operações com veículos automotores novos efetuadas por meio de faturamento direto para o consumidor (Convênio ICMS 51/00), as quais possuem grupo de campos próprio (ICMSPart) |
| 245a.03 | NA03 | vBCUFDest | Valor da BC do ICMS na UF de destino | E | NA01 | N | 1-1 | 13v2 | Valor da Base de Cálculo do ICMS na UF de destino. |
| 245a.05 | NA05 | pFCPUFDest | Percentual do ICMS relativo ao Fundo de Combate à Pobreza (FCP) na UF de destino | E | NA01 | N | 1-1 | 3v2-4 | Percentual adicional inserido na alíquota interna da UF de destino, relativo ao Fundo de Combate à Pobreza (FCP) naquela UF. Nota: Percentual máximo de 2%, conforme a legislação. |
| <!-- p.10 -->245a.07 | NA07 | pICMSUFDest | Alíquota interna da UF de destino | E | NA01 | N | 1-1 | 3v2-4 | Alíquota adotada nas operações internas na UF de destino para o produto / mercadoria. A alíquota do Fundo de Combate a Pobreza, se existente para o produto / mercadoria, deve ser informada no campo próprio (pFCPUFDest) não devendo ser somada à essa alíquota interna. |
| 245a.09 | NA09 | pICMSInter | Alíquota interestadual das UF envolvidas | E | NA01 | N | 1-1 | 2v2 | Alíquota interestadual das UF envolvidas:<br>- 4% alíquota interestadual para produtos importados;<br>- 7% para os Estados de origem do Sul e Sudeste (exceto ES), destinado para os Estados do Norte, Nordeste, Centro-Oeste e Espírito Santo;<br>- 12% para os demais casos. |
| 245a.11 | NA11 | pICMSInterPart | Percentual provisório de partilha do ICMS Interestadual | E | NA01 | N | 1-1 | 3v2-4 | Percentual de ICMS Interestadual para a UF de destino:<br>- 40% em 2016;<br>- 60% em 2017;<br>- 80% em 2018;<br>- 100% a partir de 2019. |
| 245a.13 | NA13 | vFCPUFDest | Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) da UF de destino | E | NA01 | N | 1-1 | 13v2 | Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) da UF de destino. |
| 245a.15 | NA15 | vICMSUFDest | Valor do ICMS Interestadual para a UF de destino | E | NA01 | N | 1-1 | 13v2 | Valor do ICMS Interestadual para a UF de destino (sem o valor do ICMS relativo ao FCP). |
| 245a.17 | NA17 | vICMSUFRemet | Valor do ICMS Interestadual para a UF do remetente | E | NA01 | N | 1-1 | 13v2 | Valor do ICMS Interestadual para a UF do remetente.<br>Nota: A partir de 2019, este valor será zero. |

## C. Total da Nota Fiscal

Criados novos campos no grupo de totais da Nota Fiscal, para identificar a distribuição do ICMS Interestadual para a UF de destino na operação interestadual de venda para consumidor final não contribuinte, atendendo ao disposto na Emenda Constitucional 87 de 2015.

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| 329.03 | W04c | vFCPUFDest | Valor total do ICMS relativo Fundo de Combate à Pobreza (FCP) da UF de destino | E | W02 | N | 0-1 | 13v2 | Valor total do ICMS relativo ao Fundo de Combate à Pobreza (FCP) para a UF de destino. |
| 329.05 | W04e | vICMSUFDest | Valor total do ICMS Interestadual para a UF de destino | E | W02 | N | 0-1 | 13v2 | Valor total do ICMS Interestadual para a UF de destino (sem o valor do ICMS relativo ao FCP). |
| 329.07 | W04g | vICMSUFRemet | Valor total do ICMS Interestadual para a UF do remetente | E | W02 | N | 0-1 | 13v2 | Valor total do ICMS Interestadual para a UF do remetente.<br>Nota: A partir de 2019, este valor será zero. |
