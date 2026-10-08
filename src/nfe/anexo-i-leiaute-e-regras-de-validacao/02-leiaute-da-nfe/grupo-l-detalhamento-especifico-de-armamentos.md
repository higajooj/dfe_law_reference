# Grupo L. Detalhamento Específico de Armamentos

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **158** | **arma (L01)** | **CG** | **I90** |  | **1-500** |  | **Detalhamento de Armamento<br>Informar apenas quando se tratar de armamento, permite ocorrências.** |
| 159 | tpArma (L02) | E | L01 | N | 1-1 | 1 | Indicador do tipo de arma de fogo<br>0=Uso permitido; 1=Uso restrito; |
| 160 | nSerie (L03) | E | L01 | C | 1-1 | 1 - 15 | Número de série da arma |
| 161 | nCano (L04) | E | L01 | C | 1-1 | 1 - 15 | Número de série do cano <!-- p.24 --> |
| 162 | descr (L05) | E | L01 | C | 1-1 | 1 - 256 | Descrição completa da arma, compreendendo: calibre, marca, capacidade, tipo de funcionamento, comprimento e demais elementos que permitam a sua perfeita identificação. |
