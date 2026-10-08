<!-- p.12 -->
# 3.3. Grupo K. Detalhamento Específico de Medicamento e de matérias-primas farmacêuticas

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **152** | **K01** | **med** | **Detalhamento de Medicamentos e de matérias-primas farmacêuticas** | **CG** | **I90** |  | **1-1** |  | **Informar apenas quando se tratar de medicamentos ou de matérias-primas farmacêuticas, permite ocorrências.** |
| 152a | K01a | cProdANVISA | Código de Produto da ANVISA | E | K01 | C | 1-1 | 6,11,13 | Utilizar o número do registro ANVISA ou preencher com o literal “ISENTO”, no caso de medicamento isento de registro na ANVISA ou quando o produto não possuir registro específico. (Incluído na NT2016.002. Atualizado na NT 2018.005) |
| <!-- p.13 -->152b | K01b | xMotivoIsencao | Motivo da isenção da ANVISA | E | K01 | C | 0-1 | 1-255 | Obs.: Para medicamento isento de registro na ANVISA, informar o número da decisão que o isenta, como por exemplo o número da Resolução da Diretoria Colegiada da ANVISA (RDC). (Criado na NT 2018.005) |
| 157 | K06 | vPMC | Preço máximo consumidor | E | K01 | N | 1-1 | 13v2 |  |
