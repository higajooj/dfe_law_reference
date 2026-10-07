# 4.4 Etapa 04 – Implementação futura

As regras de validação a seguir verificam a existência do código GTIN no Cadastro Centralizado de GTIN (CCG). Elas serão implantadas por grupo de CNAE e NCM em cronograma a ser divulgado em versão futura desta NT.

## Banco de Dados: Cadastro Centralizado de GTIN (CCG)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| 9I03-10 | 55/65 | Se informado GTIN (tag: cEAN) com prefixo do <!-- p.13 -->Brasil (iniciado em 789 ou 790) e GTIN informado na NF-e inexistente no CCG. | Obrig | 890 | Rej. | Rejeição: GTIN inexistente no Cadastro Centralizado de GTIN (CCG) [nItem:999] |
| 9I12-10 | 55/65 | Se informado GTIN da unidade tributável (tag: cEANTrib) com prefixo do Brasil (iniciado em 789 ou 790) e GTIN da unidade tributável informado na NF-e (tag: cEANTrib) inexistente no CCG. | Obrig | 894 | Rej. | Rejeição: GTIN da unidade tributável inexistente no Cadastro Centralizado de GTIN (CCG) [nItem:999] |
