# Grupo U. ISSQN

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **319** | **ISSQN (U01)** | **CG** | **M01** |  | **0-1** |  | **Grupo ISSQN<br>Campos para cálculo do ISSQN na NF-e conjugada, onde há a prestação de serviços sujeitos ao ISSQN e fornecimento de peças sujeitas ao ICMS.** |
| 320 | vBC (U02) | E | U01 | N | 1-1 | 13v2 | Valor da Base de Cálculo do ISSQN |
| 321 | vAliq (U03) | E | U01 | N | 1-1 | 3v2-4 | Alíquota do ISSQN |
| 322 | vISSQN (U04) | E | U01 | N | 1-1 | 13v2 | Valor do ISSQN |
| 323 | cMunFG (U05) | E | U01 | N | 1-1 | 7 | Código do município de ocorrência do fato gerador do ISSQN<br>Informar o município de ocorrência do fato gerador do ISSQN. Utilizar a Tabela do IBGE (Seção 8.2 do MOC – Visão Geral,Tabela de UF, Município e País). Nota 1: Não vincular com o município do fato gerador de ICMS (id:B12), ou com o município do emitente (id:C10) ou do destinatário (id:E10). Nota 2: Pode ser informado 9999999 se a prestação de serviço for no Exterior. <!-- p.57 --> |
| 324 | cListServ (U06) | E | U01 | C | 1-1 | 5 | Item da Lista de Serviços<br>Informar o Item da lista de serviços em que se classifica o serviço no padrão ABRASF (Formato: NN.NN). |
| 324a | vDeducao (U07) | E | U01 | N | 0-1 | 13v2 | Valor dedução para redução da Base de Cálculo |
| 324b | vOutro (U08) | E | U01 | N | 0-1 | 13v2 | Valor outras retenções<br>Valor declaratório |
| 324c | (U09) | E | U01 | N | 0-1 | 13v2 | Valor desconto incondicionado |
| 324d | vDescCond (U10) | E | U01 | N | 0-1 | 13v2 | Valor desconto condicionado |
| 324f | vISSRet (U11) | E | U01 | N | 0-1 | 13v2 | Valor retenção ISS<br>Valor declaratório |
| 324g | indISS (U12) | E | U01 | N | 1-1 | 2 | Indicador da exigibilidade do ISS<br>1=Exigível, 2=Não incidência; 3=Isenção; 4=Exportação; 5=Imunidade; 6=Exigibilidade Suspensa por Decisão Judicial; 7=Exigibilidade Suspensa por Processo Administrativo; |
| 324h | cServico (U13) | E | U01 | C | 0-1 | 1 - 20 | Código do serviço prestado dentro do município |
| 324i | cMun (U14) | E | U01 | N | 0-1 | 7 | Código do Município de incidência do imposto<br>Tabela do IBGE. Informar "9999999" para serviço fora do País. |
| 324j | cPais (U15) | E | U01 | N | 0-1 | 4 | Código do País onde o serviço foi prestado<br>Tabela do BACEN. Infomar somente se o município da prestação do serviço for "9999999". |
| 324k | nProcesso (U16) | E | U01 | C | 0-1 | 1 - 30 | Número do processo judicial ou administrativo de suspensão da exigibilidade<br>Informar somente quando declarada a suspensão da exigibilidade do ISSQN. |
| 324l | (U17) | E | U01 | N | 1-1 | 1 | Indicador de incentivo Fiscal<br>1=Sim; 2=Não; |
