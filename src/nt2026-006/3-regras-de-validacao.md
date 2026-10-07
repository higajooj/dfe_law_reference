<!-- p.7 -->
# 3. Regras de Validação

| Campo | Modelo | Regra de Validação | Aplic. | Msg | Descrição Erro |
|---|---|---|---|---|---|
| YC03-10 | 55/65 | Se informado grupo de Vinculação com a Transação de Pagamento (grupo: gPgtoVinc):<br>- Atributo “nPag” duplicado<br>**Observação:** Validação realizada pelo Schema XML | Obrig. | 215 | Rejeição: Falha no esquema XML |
| YC04-20 | 55/65 | Se informado grupo de Vinculação com a Transação de Pagamento (grupo: gPgtoVinc):<br>- Atributo “idTransacao” duplicado<br>**Observação:** Validação realizada pelo Schema XML | Obrig. | 215 | Rejeição: Falha no esquema XML |
| <!-- p.8 -->YC05-10 | 55/65 | Se informado grupo de Vinculação com a Transação de Pagamento (grupo: gPgtoVinc):<br>- Para cada ocorrência de pagamento vinculado (grupo: gPgto):<br>- Código do meio de pagamento inválido (tag: tpMeioPgto)<br>**Observação:** consultar Tabela Nacional de Códigos de Meios de Pagamento (Informe Técnico 2026.001 dos DF-e). | Obrig | 1273 | Rejeição: Meio de pagamento inválido [nPag: 999] |
| YC06-10 | 55/65 | - CNPJ do recebedor do pagamento inválido (tag: CNPJReceb) | Obrig | 1274 | Rejeição: CNPJ do recebedor do pagamento inválido [nPag: 999] |
