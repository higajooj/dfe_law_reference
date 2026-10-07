<!-- p.12 -->
# 4.3. U. Item / Tributo: ISSQN

Se o item da NF-e for referente a um serviço tributado pelo ISSQN, não pode ser informado GTIN. Implementação: Etapa 1.

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| U01-30 | 55/65 | Se informado grupo de tributação do ISSQN (id:U01), deve ser informado GTIN (tag: cEAN) e GTIN da unidade tributável (tag: cEANTrib) igual a “SEM GTIN” . (NT 2021.003, Etapa 1) | Obrig. | 887 | Rej. | Item de Serviço e informado GTIN diferente de SEM GTIN [nItem:999] |
