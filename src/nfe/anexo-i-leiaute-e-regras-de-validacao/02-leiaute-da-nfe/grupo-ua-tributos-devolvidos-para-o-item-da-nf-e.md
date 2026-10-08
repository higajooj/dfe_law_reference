# Grupo UA. Tributos Devolvidos (para o item da NF-e)

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **324p** | **(UA01)** | **G** | **H01** |  | **0-1** |  | **Informação do Imposto devolvido<br>Observação: O motivo da devolução deverá ser informado pela empresa no campo de Informações Adicionais do Produto (tag:infAdProd).** |
| 324q | pDevol (UA02) | E | UA01 | N | 1-1 | 3v2 | Percentual da mercadoria devolvida<br>Observação: O valor máximo deste percentual é 100%, no caso de devolução total da mercadoria. |
| **324r** | **IPI (UA03)** | **G** | **UA01** |  | **1-1** |  | **Informação do IPI devolvido** |
| 324s | vIPIDevol (UA04) | E | UA03 | N | 1-1 | 13v2 | Valor do IPI devolvido |
