<!-- p.04 -->

# Valor Líquido da Prestação do Serviço de Transporte sem tributos

**CTe e CTeOS**

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| ... | **vPrest** | **G** | **infCte** | **-** | **1-1** | **-** | **Valores da Prestação de Serviço** |
| | vTPrest | E | vPrest | N | 1-1 | 13v2 | Valor Total da Prestação do Serviço<br><br>~~**Observação**: A partir 2027, os valores de IBS e CBS compõem o Valor Total da Prestação~~ |
| | vTPrestLiq | E | vPrest | N | 0-1 | 13v2 | Valor Líquido total da Prestação SEM tributos |

> **Revogado/Descontinuado:** a observação sobre a composição do Valor Total da Prestação por IBS e CBS, riscada em vTPrest.

**CTeSimp**

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| ... | **det** | **G** | **infCte** | **-** | **1-999** | **-** | **Detalhamento das entregas / prestações do CTe Simplificado** |
| ... |  |  |  |  |  |  |  |
| | vPrest | E | det | N | 1-1 | 13v2 | Valor da Prestação do Serviço<br>~~**Observação**: A partir 2027, os valores de IBS e CBS compõem o Valor Total da Prestação~~ |
| | vPrestLiq | E | vPrest | N | 0-1 | 13v2 | Valor Líquido da Prestação SEM tributos |

> **Revogado/Descontinuado:** a observação sobre a composição do Valor Total da Prestação por IBS e CBS, riscada em vPrest (CTeSimp).

<!-- p.05 -->

**Grupo Totais do CTe Simplificado**

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| | vTPrest | E | total | N | 1-1 | 13v2 | Valor Total da Prestação do Serviço |
| | vTPrestLiq | E | total | N | 0-1 | 13v2 | Valor Total Líquido da Prestação do Serviço sem tributos |

**Validações do total líquido**

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| Total Líquido da Prestação sem tributos (tag: total\vTPrestLiq) difere do somatório do valor líquido da prestação sem tributos declarada nos itens (vPrestLiq). | Obrig. | 1054 | Rej. | Rejeição: Total Líquido da prestação sem tributos difere do somatório dos itens |
