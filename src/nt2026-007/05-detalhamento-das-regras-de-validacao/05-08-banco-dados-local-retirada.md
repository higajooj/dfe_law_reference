<!-- p.8 -->
# 5.8. Banco de Dados: Local de Retirada

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| 5AF15-10 | 55 | Se informada IE do Local de Retirada e tpEmis <> 3-NFF:<br>- Acessar CCC (Chave: UF Retirada, IE Retirada. (Desconsiderar CCC.cSitIE=9-Exclusão lógica)<br>- IE do local de retirada não cadastrada<br>**Observação:** Regra de validação para todas as SEFAZ Autorizadoras. | Obrig. | 942 | Rej. | Rejeição: IE do local de retirada não cadastrada |
| <!-- p.9 -->5AF15-11 | 55 | - IE do Local de Retirada com situação irregular na UF (CCC.cSitCNPJ = “2-Bloqueado” ou “3-Vedado”)<br>**Observação:** Regra de validação para todas as SEFAZ Autorizadoras. | Obrig. | 165 | Rej. | Rejeição: IE do Local de Retirada com situação irregular na UF |
| 5AF15-12 | 55 | - IE do local de retirada não está ativa na UF (CCC.cSitIE=0-Não habilitado)<br>**Observação:** Regra de validação para todas as SEFAZ Autorizadoras. | Obrig. | 167 | Rej. | Rejeição: IE do local de retirada não está ativa na UF |
| 5AF17-10 | 55 | Se IE do Local de Retirada não informada e informado CNPJ do local de retirada e tpEmis <> 3-NFF:<br>- Acessar CCC (Chave: UF Retirada, CNPJ Retirada. (Desconsiderar CCC.cSitIE=9-Exclusão lógica)<br>- Local de retirada possui IE ativa na UF (CCC.cSitIE=“1-Habilitado”) e CCC.IndIEDestOpc =“0-Obrigatório”.<br>**Observação:** Regra de validação para todas as autorizadoras. | Obrig. | 168 | Rej. | Rejeição: IE do local de retirada não informada |
| 5AF17-20 | 55 | - CNPJ do Local de Retirada com situação irregular na UF (CCC.cSitCNPJ = “2-Bloqueado” ou “3-Vedado”)<br>**Observação:** Regra de validação para todas as autorizadoras. | Obrig. | 169 | Rej. | Rejeição: CNPJ do Local de Retirada com situação irregular na UF |
