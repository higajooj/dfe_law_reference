<!-- p.10 -->
# 5.10.3. Grupo F. Identificação do Local de Retirada

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| 12F02-10 | 55 | Se informado CNPJ do Local de Retirada (tag: F02):<br>- Acessar LCC-RFB (Chave: UF Local de Retirada, CNPJ Local de Retirada. Desconsiderar LCC.cSitCNPJ=99-Exclusão Lógica):<br>- CNPJ do Local de Retirada não cadastrado<br>**Observação:** Regra de validação para todas as SEFAZ Autorizadoras. | Obrig. | 183 | Rej. | Rejeição: CNPJ [XX.XXX.XXX/XXXX-DV] do Local de Retirada não cadastrado na Receita Federal |
| 12F02-20 | 55 | - Situação do CNPJ do Local de Retirada (cSitCNPJ) diferente de 02-Ativa<br>**Observação:** Regra de validação para todas as SEFAZ Autorizadoras. | Obrig. | 184 | Rej. | Rejeição: CNPJ [XX.XXX.XXX/XXXX-DV] do Local de Retirada com situação irregular na Receita Federal |
