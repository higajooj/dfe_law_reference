# 3.3 Leiaute do Modal Ferroviário

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| 1 | **ferrov** | **G** | **0** | | **1 - 1** | | **Informações do modal Ferroviário** <!-- p.41 --> |
| 2 | **trem** | **G** | **1** | | **1 - 1** | | **Informações da composição do trem** |
| 3 | xPref | E | 2 | C | 1 - 1 | 1 - 10 | Prefixo do Trem. *ER:* ER35 |
| 4 | dhTrem | E | 2 | C | 0 - 1 | 21 | Data e hora de liberação do trem na origem. *ER:* ER1 |
| 5 | xOri | E | 2 | C | 1 - 1 | 1 - 3 | Origem do Trem. *ER:* ER35. Sigla da estação de origem |
| 6 | xDest | E | 2 | C | 1 - 1 | 1 - 3 | Destino do Trem. *ER:* ER35. Sigla da estação de destino |
| 7 | qVag | E | 2 | C | 1 - 1 | 1 - 3 | Quantidade de vagões carregados. *ER:* ER65 |
| 8 | **vag** | **G** | **1** | | **1 - n** | | **informações dos Vagões** |
| 9 | pesoBC | E | 2 | C | 1 - 1 | 3,3 | Peso Base de Cálculo de Frete em Toneladas. *ER:* ER13. 6 posições, sendo 3 inteiras e 3 casas decimais. |
| 10 | pesoR | E | 2 | C | 1 - 1 | 3,3 | Peso Real em Toneladas. *ER:* ER13. 6 posições, sendo 3 inteiras e 3 casas decimais. |
| 11 | tpVag | E | 2 | C | 0 - 1 | 3 | Tipo de Vagão. *ER:* ER35 |
| 12 | serie | E | 2 | C | 1 - 1 | 3 | Serie de Identificação do vagão. *ER:* ER35 |
| 13 | nVag | E | 2 | C | 1 - 1 | 1 - 8 | Número de Identificação do vagão. *ER:* ER66 |
| 14 | nSeq | E | 2 | C | 0 - 1 | 1 - 3 | Sequência do vagão na composição. *ER:* ER65 |
| 15 | TU | E | 2 | C | 1 - 1 | 3,2 3,3 | Tonelada Útil. *ER:* ER15. 5 posições, sendo 3 inteiras e 2 a 3 casas decimais. Unidade de peso referente à carga útil (apenas o peso da carga transportada), expressa em toneladas. |
