<!-- p.10 -->
# 5.10.2. Grupo E. Identificação do Destinatário

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| 12E02-10 | 55/65 | Se informado CNPJ do Destinatário (tag: E02):<br>- Acessar LCC-RFB (Chave: UF Destinatário, CNPJ Destinatário. Desconsiderar LCC.cSitCNPJ=99-Exclusão Lógica):<br>- CNPJ Destinatário não cadastrado<br>**Observação:** Regra de validação para todas as SEFAZ Autorizadoras. | Obrig. | 181 | Rej. | Rejeição: CNPJ [XX.XXX.XXX/XXXX-DV] do destinatário não cadastrado na Receita Federal |
| 12E02-20 | 55/65 | Situação do CNPJ do Destinatário (cSitCNPJ) diferente de 02-Ativa<br>**Observação:** Regra de validação para todas as SEFAZ Autorizadoras. | Obrig. | 182 | Rej. | Rejeição: CNPJ [XX.XXX.XXX/XXXX-DV] do Destinatário com situação irregular na Receita Federal |
