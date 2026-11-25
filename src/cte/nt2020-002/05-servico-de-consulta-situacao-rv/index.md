# 5 Serviço de Consulta Situação (RV)

## Validações das Regras Específicas

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| **J04** | - Validar chave de acesso<br>Retornar motivo da rejeição da Chave de Acesso: CNPJ/CPF zerado ou inválido, Ano < 2009 ou maior que atual, Mês inválido (0 ou > 12), Modelo diferente de 57/67/<mark>64</mark>, Número zerado, Tipo de emissão inválido, UF inválida ou DV inválido)<br>[Motivo: XXXXXXXXXXXX] | Obrig. | 236 | Rej. |
