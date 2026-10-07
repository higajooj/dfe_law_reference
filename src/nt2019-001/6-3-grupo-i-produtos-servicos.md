<!-- p.26 -->
# 6.3 Grupo I. Produtos e Serviços da NF-e

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **I05g** | **gCred** | **G** | **I01** | | **0-4** | | **Grupo de informações sobre o Crédito Presumido.**<br>Grupo opcional para informações do Crédito Presumido.<br>**Obs.**: A exigência do preenchimento das informações do crédito presumido fica a critério de cada UF.<br>(Incluído na NT 2019.001) |
| I05h | cCredPresumido | E | I05g | C | 1-1 | 8,10 | Código de Benefício Fiscal de Crédito Presumido na UF aplicado ao item<br>Código de Benefício Fiscal de Crédito Presumido utilizado pela UF, aplicado ao item.<br>**Obs.**: Deve ser utilizado o mesmo código adotado na EFD e outras declarações, nas UF que o exigem. |
| I05i | pCredPresumido | E | I05g | N | 1-1 | 3v2-4 | Percentual do Crédito Presumido<br>Informar o percentual do crédito presumido relativo ao código do crédito presumido informado. |
| I05j | vCredPresumido | E | I05g | N | 1-1 | 13v2 | Valor do Crédito Presumido<br>Informar o valor do crédito presumido relativo ao código do crédito presumido informado. |

Inclusão do campo cBenefRBC após o campo pRedBC para informar código de benefício fiscal de redução de base de cálculo dentro do CST51 quando acumular com o diferimento:
