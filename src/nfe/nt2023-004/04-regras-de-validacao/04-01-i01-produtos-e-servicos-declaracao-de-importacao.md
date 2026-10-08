<!-- p.13 -->
# 4.1. I01. Produtos e Serviços / Declaração de Importação

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| I23d-10 | 55 | Informar o CNPJ ou CPF do adquirente ou do encomendante na importação por conta e ordem ou encomenda (tag:DI/tpIntermedio=2 ou 3) | Obrig. | 331 | Rej. | Rejeição: Informar o CNPJ ou CPF do adquirente ou do encomendante nesta forma de importação |
| I23d-20 | 55 | Se informado CNPJ do adquirente ou do encomendante:<br>- CNPJ inválido (zeros, nulo ou DV inválido) | Obrig. | 332 | Rej. | Rejeição: CNPJ/CPF do adquirente ou do encomendante da importação inválido |
| I23d1-10 | 55 | Se informado CPF do adquirente ou do encomendante:<br>- CPF inválido (zeros, nulo ou DV inválido) | Obrig. | 332 | Rej. | Rejeição: CNPJ/CPF do adquirente ou do encomendante da importação inválido |
