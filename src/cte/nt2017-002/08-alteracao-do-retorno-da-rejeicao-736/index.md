<!-- p.04 -->

# 8. Alteração do retorno da rejeição 736

## CT-e (mod. 57)

| Regra de Validação | Aplic. | cStat | Efeito |
| --- | --- | --- | --- |
| **G125** Se Tipo do CT-e= 2 (Anulação):<br>- Rejeitar se existir CT-e **(mod. 57)** de Anulação autorizado há mais de 15 dias com o mesmo emitente sem que exista o CT-e de substituição para o objeto da anulação<br>**Retornar a chave de acesso do CT-e Normal Pendente de Substituição mais antigo** | Obrig. | 736 | Rej. |

## CT-e OS (mod. 67)

| Regra de Validação | Aplic. | cStat | Efeito |
| --- | --- | --- | --- |
| **N01** Se Tipo do CT-e= 2 (Anulação):<br>- Rejeitar se existir CT-e **(mod. 67)** de Anulação autorizado há mais de 15 dias com o mesmo emitente sem que exista o CT-e de substituição para o objeto da anulação<br>**Retornar a chave de acesso do CT-e Normal Pendente de Substituição mais antigo** | Obrig. | 736 | Rej. |
