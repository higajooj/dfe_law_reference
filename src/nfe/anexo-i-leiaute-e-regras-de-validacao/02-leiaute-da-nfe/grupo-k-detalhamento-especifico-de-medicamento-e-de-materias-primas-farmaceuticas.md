# Grupo K. Detalhamento Específico de Medicamento e de matérias-primas farmacêuticas

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **152** | **med (K01)** | **CG** | **I90** |  | **1-1** |  | **Detalhamento de Medicamentos e de matérias-primas farmacêuticas<br>Informar apenas quando se tratar de medicamentos ou de matérias-primas farmacêuticas, permite ocorrências.** |
| 152a | (K01a) | E | K01 | C | 1-1 | 6,13 | Código de Produto da ANVISA<br>Utilizar o número do registro ANVISA ou preencher com o literal “ISENTO”, no caso de medicamento isento de registro na ANVISA. (Incluído na NT2016.002. Atualizado na NT 2018.005) |
| 152b | (K01b) | E | K01 | C | 0-1 | 1-255 | Motivo da isenção da ANVISA<br>Obs.: Para medicamento isento de registro na ANVISA, informar o número da decisão que o isenta, como por exemplo o número da Resolução da Diretoria Colegiada da ANVISA (RDC). (Criado na NT 2018.005) |
| 153 | nLote (K02) | E | K01 | C | 1-1 | 1-20 | Número do Lote de medicamentos ou de matérias-primas farmacêuticas<br>(Excluído no leiaute 4.0 - NT2016.002) |
| 154 | qLote (K03) | E | K01 | N | 1-1 | 8v3 | Quantidade de produto no Lote de medicamentos ou de matérias-primas farmacêuticas<br>(Excluído no leiaute 4.0 - NT2016.002) |
| 155 | dFab (K04) | E | K01 | D | 1-1 |  | Data de fabricação<br>Formato: “AAAA-MM-DD” (Excluído no leiaute 4.0 - NT2016.002) |
| 156 | dVal (K05) | E | K01 | D | 1-1 |  | Data de validade<br>Formato: “AAAA-MM-DD” (Excluído no leiaute 4.0 - NT2016.002) |
| 157 | vPMC (K06) | E | K01 | N | 1-1 | 13v2 | Preço máximo consumidor |
