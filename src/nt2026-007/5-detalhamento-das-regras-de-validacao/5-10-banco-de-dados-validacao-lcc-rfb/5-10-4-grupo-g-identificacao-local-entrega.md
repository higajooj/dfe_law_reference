<!-- p.11 -->
# 5.10.4. Grupo G. Identificação do Local de Entrega

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| 12G02-10 | 55 | Se informado CNPJ do Local de Entrega (tag: G02):<br>- Acessar LCC-RFB (Chave: UF Local de Entrega, CNPJ Local de Entrega. Desconsiderar LCC.cSitCNPJ=99-Exclusão Lógica):<br>- CNPJ do Local de Entrega não cadastrado<br>**Observação:** Regra de validação para todas as SEFAZ Autorizadoras. | Obrig. | 185 | Rej. | Rejeição: CNPJ [XX.XXX.XXX/XXXX-DV] do Local de Entrega não cadastrado na Receita Federal |
| 12G02-20 | 55 | - Situação do CNPJ do Local de Entrega (cSitCNPJ) diferente de 02-Ativa<br>**Observação:** Regra de validação para todas as SEFAZ Autorizadoras. | Obrig. | 186 | Rej. | Rejeição: CNPJ [XX.XXX.XXX/XXXX-DV] do Local de Entrega com situação irregular na Receita Federal |
