# 6 Serviço de consulta situação do CT-e

## Validações das Regras de Negócio da Consulta Situação

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| **J04** | - Validar chave de acesso<br>Retornar motivo da rejeição da Chave de Acesso: CNPJ/CPF zerado ou inválido, Ano < 2009 ou maior que atual, Mês inválido (0 ou > 12), Modelo diferente de 57/67, Número zerado, Forma de emissão inválido, UF inválida ou DV inválido<br>[Motivo: XXXXXXXXXXXX] | Obrig. | 236 | Rej. |
| **J05** | - Acesso BD CT-e (Chave: CNPJ/CPF Emit, Modelo, Série, Nro):<br>- Verificar se CT-e não existe<br><!-- p.11 -->**Observação**: SE o CT-e não existir, deverá ser verificado em BD CTE-EVENTOS (Chave:CNPJ/CPF Emit, Modelo, Série, Nro obtidos na chave de acesso do CT-e):<br>- Verificar se existe EPEC para a chave natural do CT-e:<br>&nbsp;&nbsp;Se existir deverá ser retornado apenas o procEvento | Obrig. | 217 | Rej. |
