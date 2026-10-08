# Grupo W01. Total da NF-e / ISSQN

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **342** | **ISSQNtot (W17)** | **G** | **W01** |  | **0-1** |  | **Grupo Totais referentes ao ISSQN** |
| 343 | vServ (W18) | E | W17 | N | 0-1 | 13v2 | Valor total dos Serviços sob não- incidência ou não tributados pelo ICMS |
| 344 | vBC (W19) | E | W17 | N | 0-1 | 13v2 | Valor total Base de Cálculo do ISS |
| 345 | vISS (W20) | E | W17 | N | 0-1 | 13v2 | Valor total do ISS |
| 346 | vPIS (W21) | E | W17 | N | 0-1 | 13v2 | Valor total do PIS sobre serviços |
| 347 | vCOFINS (W22) | E | W17 | N | 0-1 | 13v2 | Valor total da COFINS sobre serviços |
| 347a | dCompet (W22a) | E | W17 | N | 1-1 | 8 | Data da prestação do serviço<br>Formato: “AAAA-MM-DD” |
| 347b | vDeducao (W22b) | E | W17 | N | 0-1 | 13v2 | Valor total dedução para redução da Base de Cálculo |
| 347c | vOutro (W22c) | E | W17 | N | 0-1 | 13v2 | Valor total outras retenções<br>Valor declaratório |
| 347d | (W22d) | E | W17 | N | 0-1 | 13v2 | Valor total desconto incondicionado |
| 347e | vDescCond (W22e) | E | W17 | N | 0-1 | 13v2 | Valor total desconto condicionado |
| 347f | vISSRet (W22f) | E | W17 | N | 0-1 | 13v2 | Valor total retenção ISS |
| 347g | cRegTrib (W22g) | E | W17 | N | 0-1 | 2 | Código do Regime Especial de Tributação<br>1=Microempresa Municipal; 2=Estimativa; 3=Sociedade de Profissionais; 4=Cooperativa; 5=Microempresário Individual (MEI); 6=Microempresário e Empresa de Pequeno Porte |
