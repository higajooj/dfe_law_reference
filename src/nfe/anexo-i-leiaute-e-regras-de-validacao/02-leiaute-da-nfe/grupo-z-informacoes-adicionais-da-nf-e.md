# Grupo Z. Informações Adicionais da NF-e

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **399** | **infAdic (Z01)** | **G** | **A01** |  | **0-1** |  | **Grupo de Informações Adicionais** |
| 400 | infAdFisco (Z02) | E | Z01 | C | 0-1 1 | - 2000 | Informações Adicionais de Interesse do Fisco<br>(v2.0) |
| 401 | infCpl (Z03) | E | Z01 | C | 0-1 1 | - 5000 | Informações Complementares de interesse do Contribuinte |
| **401a** | **obsCont (Z04)** | **G** | **Z01** |  | **0-10** |  | **Grupo Campo de uso livre do contribuinte<br>Campo de uso livre do contribuinte, Informar o nome do campo no atributo xCampo e o conteúdo do campo no xTexto** <!-- p.64 --> |
| 401b | xCampo (Z05) | A | Z04 | C | 1-1 | 1 - 20 | Identificação do campo<br>Identificação do campo |
| 401c | xTexto (Z06) | E | Z04 | C | 1-1 | 1 - 60 | Conteúdo do campo<br>Conteúdo do campo |
| **401d** | **obsFisco (Z07)** | **G** | **Z01** |  | **0-10** |  | **Grupo Campo de uso livre do Fisco<br>Campo de uso livre do Fisco. Informar o nome do campo no atributo xCampo e o conteúdo do campo no xTexto** |
| 401e | xCampo (Z08) | A | Z07 | C | 1-1 | 1 - 20 | Identificação do campo<br>Identificação do campo |
| 401f | xTexto (Z09) | E | Z07 | C | 1-1 | 1 - 60 | Conteúdo do campo<br>Conteúdo do campo |
| **401g** | **procRef (Z10)** | **G** | **Z01** |  | **0-100** |  | **Grupo Processo referenciado<br>(NT 2012/003)** |
| 401h | nProc (Z11) | E | Z10 | C | 1-1 | 1 - 60 | Identificador do processo ou ato concessório<br>Identificador do processo ou ato concessório |
| 401i | indProc (Z12) | E | Z10 | N | 1-1 | 1 | Indicador da origem do processo<br>0=SEFAZ; 1=Justiça Federal; 2=Justiça Estadual; 3=Secex/RFB; 9=Outros |
