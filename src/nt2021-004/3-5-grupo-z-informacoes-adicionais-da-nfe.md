<!-- p.13 -->
# 3.5. Grupo Z. Informações Adicionais da NF-e

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| [...] |  |  |  |  |  |  |  |  |  |
| **401g** | **Z10** | **procRef** | **Grupo Processo referenciado** | **G** | **Z01** |  | **0-100** |  | **(NT 2012/003)** |
| 401h | Z11 | nProc | Identificador do processo ou ato concessório | E | Z10 | C | 1-1 | 1-60 | Identificador do processo ou ato concessório |
| 401i | Z12 | indProc | Indicador da origem do processo | E | Z10 | N | 1-1 | 1 | 0=SEFAZ;<br>1=Justiça Federal;<br>2=Justiça Estadual;<br>3=Secex/RFB;<br>9=Outros |
| 401j | Z13 | tpAto | Tipo do ato concessório | E | Z10 | N | 0-1 | 2 | Para origem do Processo na SEFAZ (indProc=0), informar o tipo de ato concessório:<br>08=Termo de Acordo;<br>10=Regime Especial;<br>12=Autorização específica; |
