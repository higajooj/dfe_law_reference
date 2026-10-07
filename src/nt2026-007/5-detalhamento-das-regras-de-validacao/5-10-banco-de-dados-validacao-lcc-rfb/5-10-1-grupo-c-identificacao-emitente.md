<!-- p.10 -->
# 5.10.1. Grupo C. Identificação do Emitente

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| 12C02-10 | 55/65 | Se informado CNPJ do Emitente (tag: C02):<br>- Acessar LCC-RFB (Chave: UF Emitente, CNPJ Emitente. Desconsiderar LCC.cSitCNPJ=99-Exclusão Lógica):<br>- CNPJ Emitente não cadastrado.<br>**Observação:** Regra de validação para todas as SEFAZ Autorizadoras. | Obrig. | 178 | Rej. | Rejeição: CNPJ [XX.XXX.XXX/XXXX-DV] do emitente não cadastrado na Receita Federal |
| 12C02-20 | 55/65 | - Situação do CNPJ do Emitente (cSitCNPJ) diferente de 02-Ativa<br>**Observação:** Regra de validação para todas as SEFAZ Autorizadoras. | Obrig. | 179 | Rej. | Rejeição: CNPJ [XX.XXX.XXX/XXXX-DV] do emitente com situação irregular na Receita Federal |
| 12C21-20 | 55/65 | - Verificar a compatibilidade entre o Código de Regime Tributário informado na NF-e (tag: emit/CRT) e o Regime de Tributação do CNPJ do Emitente cadastrado na LCC-RFB (campo regTrib), conforme a tabela abaixo:<br>**Observação:** Regra de validação para todas as SEFAZ Autorizadoras. | Obrig. | 180 | Rej. | Rejeição: Código Regime Tributário do emitente diverge do cadastro na Receita Federal |

Tabela da regra 12C21-20:

| CRT na NF-e | regTrib na LCC-RFB |
|---|---|
| 1=Simples Nacional | 1=Empresa optante pelo Simples Nacional; |
| 2=Simples Nacional, excesso sublimite de receita bruta | 1=Empresa optante pelo Simples Nacional; |
| 3=Regime Normal | 9=Outros Regime de Tributação |
| 4=Simples Nacional - Microempreendedor Individual - MEI | 2=Empresa optante pelo MEI |
