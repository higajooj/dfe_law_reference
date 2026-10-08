<!-- p.6 -->
# 8.2. Desativadas as Regras de Validação

A obrigatoriedade geral da informação do NCM descrita no item anterior permite a desativação das regras de validação que verificavam esta situação em algumas situações específicas (CFOP de operação com exterior e tributação pelo IPI).

Eliminadas as regras de validação abaixo:

| # | Campo | Regra de validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| ~~GI08.6~~ | ~~I08~~ | ~~CFOP de Operação com Exterior (inicia por 3 ou 7) e não informada TAG NCM (id:I05) completo (8 posições)<br>**Exceção**: O item de Serviço da NF-e (id:U01) conjugada pode ter NCM = “00” (NT 2010/010)~~ | ~~Facult.~~ | ~~524~~ | ~~Rej.~~ | ~~Rejeição: CFOP de Operação com Exterior e não informado NCM completa~~ |
| ~~GO07~~ | ~~O07~~ | ~~Informada tributação do IPI (id:O07) sem informar a TAG NCM (id:I05) completo (8 posições)~~ | ~~Facult.~~ | ~~529~~ | ~~Rej.~~ | ~~Rejeição: NCM de informação obrigatória para produto tributado pelo IPI~~ |

> **Revogado/Descontinuado:** regras GI08.6 e GO07 riscadas no original (eliminadas nesta versão).
