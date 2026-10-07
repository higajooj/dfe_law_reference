<!-- p.13 -->
# 3.4. Grupo VA. Observações de uso livre (para o item da NF-e)

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **325a** | **VA01** | **obsItem** | **Grupo de observações de uso livre (para o item da NF-e)** | **G** | **H01** |  | **0-1** |  |  |
| **325b** | **VA02** | **obsCont** | **Grupo de observações de uso livre do Contribuinte** | **G** | **VA01** |  | **0-1** |  | **Campo de uso livre do Contribuinte para o item da NF-e. Informar o nome do campo no atributo xCampo e o conteúdo do campo no xTexto.** |
| 325c | VA03 | xCampo | Identificação do campo | A | VA02 | C | 1-1 | 1-20 | Identificação do campo |
| 325d | VA04 | xTexto | Conteúdo do campo | E | VA02 | C | 1-1 | 1-60 | Conteúdo do campo |
| **325e** | **VA05** | **obsFisco** | **Grupo de observações de uso livre do Fisco** | **G** | **VA01** |  | **0-1** |  | **Campo de uso livre do Fisco para o item da NF-e. Informar o nome do campo no atributo xCampo e o conteúdo do campo no xTexto.** |
| 325f | VA06 | xCampo | Identificação do campo | A | VA05 | C | 1-1 | 1-20 | Identificação do campo |
| 325g | VA07 | xTexto | Conteúdo do campo | E | VA05 | C | 1-1 | 1-60 | Conteúdo do campo |
