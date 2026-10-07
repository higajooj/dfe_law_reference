<!-- p.10 -->
# 4.1. B. Identificação da Nota Fiscal eletrônica

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| B25c-10 | 55/65 | Se informado indicativo de presença, tag: indPres, **IGUAL** a ~~1,~~ 2, 3, 4 ou 9 e Tipo de operação, tag: tpNF, **IGUAL** 1-Saída e Finalidade de emissão, tag: finNFe, **IGUAL** 1-NF-e normal.<br>- Obrigatório o preenchimento do campo Indicativo do Intermediador (tag: indIntermed)<br>**Observação 1:** Regra válida a partir de 23/08/2021 para homologação e 04/04/2022 para produção<br>~~**Observação 2:** Regra válida para Nota Fiscal Avulsa eletrônica a partir de 03/05/2021 para homologação e 01/09/2021 para produção~~<br>**Exceção 1:** Regra não se aplica para os seguintes CFOP: 5205, 5206, 5207, 5251, 5252, 5253, 5254, 5255, 5256, 5257, 5258, 5301, 5302, 5303, 5304, 5305, 5306, 5307. | Obrig. | 434 | Rej. | Rejeição: NF-e sem indicativo do intermediador |
| B25c-20 | 55/65 | Se Informado indicativo de presença, tag: indPres, **DIFERENTE** de 1, 2, 3, 4 ou 9<br>- Proibido o preenchimento do campo Indicativo do Intermediador igual a 1 (tag: indIntermed=1) | Obrig. | 435 | Rej. | Rejeição: NF-e não pode ter o indicativo do intermediador |

> **Revogado/Descontinuado:** na regra B25c-10, o trecho “1,” da condição de indPres e a “Observação 2” estão riscados no original.
