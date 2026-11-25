<!-- p.75 -->

# 3.1. Leiaute do Modal Rodoviário

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| 1 | **rodo** | **G** | **0** | | **1 - 1** | | **Informações do modal Rodoviário** |
| 2 | RNTRC | E | 1 | C | 1 - 1 | 8 | Registro Nacional de Transportadores Rodoviários de Carga. *ER:* ER44. Registro obrigatório do emitente do CTe junto à ANTT para exercer a atividade de transportador rodoviário de cargas por conta de terceiros e mediante remuneração. |
| 3 | **occ** | **G** | **1** | | **0 - 10** | | **Ordens de Coleta associados** |
| 4 | serie | E | 2 | C | 0 - 1 | 1 - 3 | Série da OCC. *ER:* ER36. |
| 5 | nOcc | E | 2 | C | 1 - 1 | 1 - 6 | Número da Ordem de coleta. *ER:* ER59. |
| 6 | dEmi | E | 2 | D | 1 - 1 | 10 | Data de emissão da ordem de coleta. *ER:* ER11. Formato AAAA-MM-DD |
| 7 | **emiOcc** | **G** | **2** | | **1 - 1** | | |
| 8 | CNPJ | E | 3 | C | 1 - 1 | 14 | Número do CNPJ. *ER:* ER5. Informar os zeros não significativos. |
| 9 | cInt | E | 3 | C | 0 - 1 | 1 - 10 | Código interno de uso da transportadora. *ER:* ER36. Uso interno das transportadoras. |
| 10 | IE | E | 3 | C | 1 - 1 | 14 | Inscrição Estadual. *ER:* ER29. |
| 11 | UF | E | 3 | C | 1 - 1 | 2 | Sigla da UF. *Dom.:* D11. Informar EX para operações com o exterior. |
| 12 | fone | E | 3 | C | 0 - 1 | 6 - 14 | Telefone. *ER:* ER6. |
