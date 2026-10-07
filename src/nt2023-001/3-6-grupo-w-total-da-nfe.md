<!-- p.26 -->
# 3.6. Grupo W. Total da NF-e

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **326 / W01** | **total** | **G** | **A01** | **-** | **1-1** | **-** | **Grupo Totais da NF-e**<br>O grupo de valores totais da NF-e deve ser informado com o somatório do campo correspondente dos itens. |
| **327 / W02** | **ICMSTot** | **G** | **W01** | **-** | **1-1** | **-** | **Grupo Totais referentes ao ICMS** |
| 328 / W03 | vBC | E | W02 | N | 1-1 | 13v2 | Base de Cálculo do ICMS |
| 329 / W04 | vICMS | E | W02 | N | 1-1 | 13v2 | Valor Total do ICMS |
| 329.01 / W04a | vICMSDeson | E | W02 | N | 1-1 | 13v2 | Valor Total do ICMS desonerado |
| 329.03 / W04c | vFCPUFDest | E | W02 | N | 0-1 | 13v2 | Valor total do ICMS relativo Fundo de Combate à Pobreza (FCP) da UF de destino<br>Valor total do ICMS relativo ao Fundo de Combate à Pobreza (FCP) para a UF de destino.<br>(Incluído na NT 2015/003) |
| 329.05 / W04e | vICMSUFDest | E | W02 | N | 0-1 | 13v2 | Valor total do ICMS Interestadual para a UF de destino<br>Valor total do ICMS Interestadual para a UF de destino, já considerando o valor do ICMS relativo ao Fundo de Combate à Pobreza naquela UF.<br>(Incluído na NT 2015/003) |
| 329.07 / W04g | vICMSUFRemet | E | W02 | N | 0-1 | 13v2 | Valor total do ICMS Interestadual para a UF do remetente<br>Valor total do ICMS Interestadual para a UF do remetente.<br>Nota: A partir de 2019, este valor será zero.<br>(Incluído na NT 2015/003) |
| 329.08 / W04h | vFCP | E | W02 | N | 1-1 | 13v2 | Valor Total do FCP (Fundo de Combate à Pobreza)<br>Corresponde ao total da soma dos campos id: N17c<br>(Incluído na NT2016.002) |
| 330 / W05 | vBCST | E | W02 | N | 1-1 | 13v2 | Base de Cálculo do ICMS ST |
| 331 / W06 | vST | E | W02 | N | 1-1 | 13v2 | Valor Total do ICMS ST |
| 331.01 / W06a | vFCPST | E | W02 | N | 1-1 | 13v2 | Valor Total do FCP (Fundo de Combate à Pobreza) retido por substituição tributária<br>Corresponde ao total da soma dos campos id:N23d<br>(Incluído na NT2016.002) |
| 331.02 / W06b | vFCPSTRet | E | W02 | N | 1-1 | 13v2 | Valor Total do FCP retido anteriormente por Substituição Tributária<br>Corresponde ao total da soma dos campos id:N27d<br>(Incluído na NT2016.002) |
| 331.02a / W06b.1 | qBCMono | E | W02 | N | 0-1 | 13v2 | Valor total da quantidade tributada do ICMS monofásico próprio<br>Correspondente ao total da soma dos campos id:N37a |
| 331.03 / W06c | vICMSMono | E | W02 | N | 0-1 | 13v2 | Valor total do ICMS monofásico próprio<br>Correspondente ao total da soma dos campos id:N39 |
| 331.03a / W06c.1 | qBCMonoReten | E | W02 | N | 0-1 | 13v2 | Valor total da quantidade tributada do ICMS monofásico sujeito a retenção<br>Correspondente ao total da soma dos campos id:N39a |
| 331.04 / W06d | vICMSMonoReten | E | W02 | N | 0-1 | 13v2 | Valor total do ICMS monofásico sujeito a retenção<br>Correspondente ao total da soma dos campos id: N41 |
| 331.04a / W06d.1 | qBCMonoRet | E | W02 | N | 0-1 | 13v2 | Valor total da quantidade tributada do ICMS monofásico retido anteriormente<br>Correspondente ao total da soma dos campos id: N43a |
| 331.05 / W06e | vICMSMonoRet | E | W02 | N | 0-1 | 13v2 | Valor total do ICMS monofásico retido anteriormente<br>Correspondente ao total da soma dos campos id: N45 |
| 332 / W07 | vProd | E | W02 | N | 1-1 | 13v2 | Valor Total dos produtos e serviços |
| 333 / W08 | vFrete | E | W02 | N | 1-1 | 13v2 | Valor Total do Frete |

<!-- p.27 -->
| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| 334 / W09 | vSeg | E | W02 | N | 1-1 | 13v2 | Valor Total do Seguro |
| 335 / W10 | vDesc | E | W02 | N | 1-1 | 13v2 | Valor Total do Desconto |
| 336 / W11 | vII | E | W02 | N | 1-1 | 13v2 | Valor Total do II |
| 337 / W12 | vIPI | E | W02 | N | 1-1 | 13v2 | Valor Total do IPI |
| 337.01 / W12a | vIPIDevol | E | W02 | N | 1-1 | 13v2 | Valor Total do IPI devolvido<br>Deve ser informado quando preenchido o Grupo Tributos Devolvidos na emissão de nota finNFe=4 (devolução) nas operações com não contribuintes do IPI. Corresponde ao total da soma dos campos id:UA04.<br>(Incluído na NT2016.002) |
| 338 / W13 | vPIS | E | W02 | N | 1-1 | 13v2 | Valor do PIS |
| 339 / W14 | vCOFINS | E | W02 | N | 1-1 | 13v2 | Valor da COFINS |
| 340 / W15 | vOutro | E | W02 | N | 1-1 | 13v2 | Outras Despesas acessórias |
| 341 / W16 | vNF | E | W02 | N | 1-1 | 13v2 | Valor Total da NF-e<br>Vide validação para este campo na regra de validação "W16-xx". |
| 341a / W16a | vTotTrib | E | W02 | N | 0-1 | 13v2 | Valor aproximado total de tributos federais, estaduais e municipais.<br>(NT 2013/003) |
