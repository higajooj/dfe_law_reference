# Grupo W. Total da NF-e

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **326** | **total (W01)** | **G** | **A01** |  | **1-1** |  | **Grupo Totais da NF-e<br>O grupo de valores totais da NF-e deve ser informado com o somatório do campo correspondente dos itens.** |
| **327** | **ICMSTot (W02)** | **G** | **W01** |  | **1-1** |  | **Grupo Totais referentes ao ICMS** |
| 328 | vBC (W03) | E | W02 | N | 1-1 | 13v2 | Base de Cálculo do ICMS |
| 329 | vICMS (W04) | E | W02 | N | 1-1 | 13v2 | Valor Total do ICMS |
| 329.01 | vICMSDeson (W04a) | E | W02 | N | 1-1 | 13v2 | Valor Total do ICMS desonerado |
| 329.03 | vFCPUFDest (W04c) | E | W02 | N | 0-1 | 13v2 | Valor total do ICMS relativo Fundo de Combate à Pobreza (FCP) da UF de destino<br>Valor total do ICMS relativo ao Fundo de Combate à Pobreza (FCP) para a UF de destino. (Incluído na NT 2015/003) |
| 329.05 | vICMSUFDest (W04e) | E | W02 | N | 0-1 | 13v2 | Valor total do ICMS Interestadual para a UF de destino<br>Valor total do ICMS Interestadual para a UF de destino, já considerando o valor do ICMS relativo ao Fundo de Combate à Pobreza naquela UF. (Incluído na NT 2015/003) |
| 329.07 | (W04g) | E | W02 | N | 0-1 | 13v2 | Valor total do ICMS Interestadual para a UF do remetente<br>Valor total do ICMS Interestadual para a UF do remetente. Nota: A partir de 2019, este valor será zero. (Incluído na NT 2015/003) |
| 329.08 | vFCP (W04h) | E | W02 | N | 1-1 | 13v2 | Valor Total do FCP (Fundo de Combate à Pobreza)<br>Corresponde ao total da soma dos campos id: N17c (Incluído na NT2016.002) |
| 330 | vBCST (W05) | E | W02 | N | 1-1 | 13v2 | Base de Cálculo do ICMS ST |
| 331 | vST (W06) | E | W02 | N | 1-1 | 13v2 | Valor Total do ICMS ST |
| 331.01 | vFCPST (W06a) | E | W02 | N | 1-1 | 13v2 | Valor Total do FCP (Fundo de Combate à Pobreza) retido por substituição tributária<br>Corresponde ao total da soma dos campos id:N23d (Incluído na NT2016.002) |
| 331.02 | vFCPSTRet (W06b) | E | W02 | N | 1-1 | 13v2 | Valor Total do FCP retido anteriormente por Substituição Tributária<br>Corresponde ao total da soma dos campos id:N27d (Incluído na NT2016.002) |
| 332 | vProd (W07) | E | W02 | N | 1-1 | 13v2 | Valor Total dos produtos e serviços |
| 333 | vFrete (W08) | E | W02 | N | 1-1 | 13v2 | Valor Total do Frete |
| 334 | vSeg (W09) | E | W02 | N | 1-1 | 13v2 | Valor Total do Seguro |
| 335 | vDesc (W10) | E | W02 | N | 1-1 | 13v2 | Valor Total do Desconto |
| 336 | vII (W11) | E | W02 | N | 1-1 | 13v2 | Valor Total do II |
| 337 | vIPI (W12) | E | W02 | N | 1-1 | 13v2 | Valor Total do IPI |
| 337.01 | vIPIDevol (W12a) | E | W02 | N | 1-1 | 13v2 | Valor Total do IPI devolvido<br>Deve ser informado quando preenchido o Grupo Tributos Devolvidos na emissão de nota finNFe=4 (devolução) nas operações com não contribuintes do IPI. Corresponde ao total da soma dos campos id:UA04. (Incluído na NT2016.002) |
| 338 | vPIS (W13) | E | W02 | N | 1-1 | 13v2 | Valor do PIS |
| 339 | vCOFINS (W14) | E | W02 | N | 1-1 | 13v2 | Valor da COFINS |
| 340 | vOutro (W15) | E | W02 | N | 1-1 | 13v2 | Outras Despesas acessórias <!-- p.59 --> |
| 341 | vNF (W16) | E | W02 | N | 1-1 | 13v2 | Valor Total da NF-e<br>Vide validação para este campo na regra de validação "W16-xx". |
| 341a | vTotTrib (W16a) | E | W02 | N | 0-1 | 13v2 | Valor aproximado total de tributos federais, estaduais e municipais.<br>(NT 2013/003) |
