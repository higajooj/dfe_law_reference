# 9.1. Validação do Código NCM

| Campo-Seq# | Modelo | Regra de validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| I05-10 | 55/65 | Deve ser informado o NCM para cada item da NF-e (NCM completo, com 8 posições).<br>**Exceção**: no caso de item de Serviço ou item que não tenha produto (ex. transferência de crédito, crédito do ativo imobilizado, etc.), informar o valor “00” (zeros). | Obrig. | 777 | Rej. | Rejeição: Obrigatória a informação do NCM completo |
| I05.20 | 55/65 | Se informado NCM completo (8 posições):<br>- NCM inexistente na tabela de NCM publicada pelo Ministério do Desenvolvimento, Indústria e Comércio Exterior - MDIC.<br>Nota: Implementação futura. | Obrig. | 778 | Rej. | Rejeição: Informado NCM inexistente. |
| <!-- REVISAR p.06: ID "105.24" no original (provavelmente I05.24), transcrito literalmente --> 105.24 | 55/65 | Se informado NCM = “00”:<br>- Não é uma NF-e de Ajuste (tag:finfe <> 3) e não é um item de serviço (item não possui a tag:ISSQN)<br>Nota: A UF autorizadora que aceitar o uso da NF-e modelo 55 para documentar prestações de serviços ocorridas dentro do campo de incidência do ICMS poderá definir outras exceções a esta regra | Obrig. | 471 | Rej. | Rejeição: Informado NCM=00 indevidamente |
