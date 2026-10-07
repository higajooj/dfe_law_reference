<!-- p.12 -->
# 4.3 Etapa 03 – Implementação futura

As regras de validação a seguir serão implantadas em <mark>versão futura desta NT</mark>.

## I. Produtos e Serviços

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| I03-30 | 55/65 | GTIN (tag: cEAN) em branco, campo sem informação.<br><br>**Observação:** Para produtos que não possuem GTIN, utilizar a informação de "SEM GTIN". | Obrig. | 883 | Rej. | Rejeição: GTIN (cEAN) sem informação [nItem:999] |
| I12-60 | 55/65 | GTIN da unidade tributável (tag: cEANTrib) em branco, campo sem informação.<br><br>**Observação** Para produtos que não possuem GTIN da unidade tributável, utilizar a informação de "SEM GTIN". | Obrig. | 888 | Rej. | Rejeição: GTIN da unidade tributável (cEANTrib) sem informação [nItem:999] |
