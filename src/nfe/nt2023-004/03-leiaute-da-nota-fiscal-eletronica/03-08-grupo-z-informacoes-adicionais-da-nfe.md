<!-- p.12 -->
# 3.8. Grupo Z. Informações Adicionais da NF-e

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **399** | **Z01** | **infAdic** | **Grupo de Informações Adicionais** | **G** | **A01** | | **0-1** | | |
| 400 | Z02 | infAdFisco | Informações Adicionais de Interesse do Fisco | E | Z01 | C | 0-1 | 1 - 2000 (v2.0) | |
| 401 | Z03 | infCpl | Informações Complementares de interesse do Contribuinte | E | Z01 | C | 0-1 | 1 - 5000 | |
| **401a** | **Z04** | **obsCont** | **Grupo Campo de uso livre do contribuinte** | **G** | **Z01** | | **0-10** | | **Campo de uso livre do contribuinte, Informar o nome do campo no atributo xCampo e o conteúdo do campo no xTexto** |
| 401b | Z05 | xCampo | Identificação do campo | A | Z04 | C | 1-1 | 1 - 20 | Identificação do campo |
| 401c | Z06 | xTexto | Conteúdo do campo | E | Z04 | C | 1-1 | 1 - 60 | Conteúdo do campo |
| **401d** | **Z07** | **obsFisco** | **Grupo Campo de uso livre do Fisco** | **G** | **Z01** | | **0-10** | | **Campo de uso livre do Fisco. Informar o nome do campo no atributo xCampo e o conteúdo do campo no xTexto** |
| 401e | Z08 | xCampo | Identificação do campo | A | Z07 | C | 1-1 | 1 - 20 | Identificação do campo |
| 401f | Z09 | xTexto | Conteúdo do campo | E | Z07 | C | 1-1 | 1 - 60 | Conteúdo do campo |
| **401g** | **Z10** | **procRef** | **Grupo Processo referenciado** | **G** | **Z01** | | **0-100** | | **(NT 2012/003)** |
| 401h | Z11 | nProc | Identificador do processo ou ato concessório | E | Z10 | C | 1-1 | 1 - 60 | Identificador do processo ou ato concessório |
| 401i | Z12 | indProc | Indicador da origem do processo | E | Z10 | N | 1-1 | 1 | 0=SEFAZ;<br>1=Justiça Federal;<br>2=Justiça Estadual;<br>3=Secex/RFB;<br>4=CONFAZ<br>9=Outros |
| 401j | Z13 | tpAto | Tipo do ato concessório | E | Z10 | N | 0-1 | 2 | Para origem do Processo na SEFAZ (indProc=0), informar o tipo de ato concessório: (NT 2021.004)<br>08=Termo de Acordo;<br>10=Regime Especial;<br>12=Autorização específica;<br>14=Ajuste SINIEF<br>15=Convênio ICMS |
