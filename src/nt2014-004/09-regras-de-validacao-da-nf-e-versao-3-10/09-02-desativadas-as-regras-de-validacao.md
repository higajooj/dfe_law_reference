<!-- p.7 -->
# 9.2. Desativadas as Regras de Validação

A obrigatoriedade geral da informação do NCM descrita no item anterior permite a desativação das regras de validação que verificavam esta situação em algumas situações específicas (CFOP de operação com exterior e tributação pelo IPI).

Eliminadas as regras de validação abaixo:

| Campo-Seq# | Modelo | Regra de validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| ~~I08-100~~ | ~~55~~ | ~~CFOP de Operação com Exterior (inicia por 3 ou 7) e não informada TAG NCM (id:I05) completo (8 posições)<br>**Exceção**: O item de Serviço da NF-e (id:U01) conjugada pode ter NCM = “00” (NT 2010/010)~~ | ~~Facult.~~ | ~~524~~ | ~~Rej.~~ | ~~Rejeição: CFOP de Operação com Exterior e não informado NCM completa~~ |
| ~~O07-10~~ | ~~55/65~~ | ~~Informada tributação do IPI (id:O07) sem informar a TAG NCM (id:I05) completo (8 posições)~~ | ~~Facult.~~ | ~~529~~ | ~~Rej.~~ | ~~Rejeição: NCM de informação obrigatória para produto tributado pelo IPI~~ |
| ~~I05-40~~ | ~~55/65~~ | ~~Se informado Capítulo do NCM (2 posições):<br>- Capítulo do NCM inválido (77, 98, 99)~~ | ~~Obrig.~~ | ~~779~~ | ~~Rej.~~ | ~~Rejeição: Informado Capítulo do NCM inexistente~~ |

> **Revogado/Descontinuado:** regras I08-100, O07-10 e I05-40 riscadas no original (eliminadas nesta versão).
