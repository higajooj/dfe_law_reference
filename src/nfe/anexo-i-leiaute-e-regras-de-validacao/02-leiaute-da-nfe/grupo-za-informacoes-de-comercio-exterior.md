# Grupo ZA. Informações de Comércio Exterior

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **402** | **exporta (ZA01)** | **G** | **A01** |  | **0-1** |  | **Grupo Exportação<br>Informar apenas na exportação.** |
| 403 | UFSaidaPais (ZA02) | E | ZA01 | C | 1-1 | 2 | Sigla da UF de Embarque ou de transposição de fronteira<br>Não aceita o valor "EX". |
| 404 | (ZA03) | E | ZA01 | C | 1-1 | 1 - 60 | Descrição do Local de Embarque ou de transposição de fronteira |
| 404a | (ZA04) | E | ZA01 | C | 0-1 | 1 - 60 | Descrição do local de despacho<br>Informação do Recinto Alfandegado |
