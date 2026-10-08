<!-- p.9 -->
# 5.9. Banco de Dados: Local de Entrega

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| 5BG15-10 | 55 | Se informada IE do Local de Entrega e tpEmis <> 3-NFF:<br>- Acessar CCC (Chave: UF Entrega , IE Entrega. Desconsiderar CCC.cSitIE=9-Exclusão lógica)<br>- IE do local de Entrega não cadastrada<br>**Observação:** Regra de validação para todas as SEFAZ Autorizadoras. | Obrig. | 171 | Rej. | Rejeição: IE do local de entrega não cadastrada |
| 5BG15-11 | 55 | - IE do Local de Entrega com situação irregular na UF (CCC.cSitCNPJ = “2-Bloqueado” ou “3-Vedado”)<br>**Observação:** Regra de validação para todas as SEFAZ Autorizadoras. | Obrig. | 173 | Rej. | Rejeição: IE do Local de Entrega com situação irregular na UF |
| 5BG15-12 | 55 | - IE do local de Entrega não está ativa na UF (CCC.cSitIE=0-Não habilitado)<br>**Observação:** Regra de validação para todas as SEFAZ Autorizadoras. | Obrig. | 175 | Rej. | Rejeição: IE do local de Entrega não está ativa na UF |
| 5BG17-10 | 55 | Se IE do Local de Entrega não informada e informado CNPJ do local de Entrega e tpEmis <> 3-NFF:<br>- Acessar CCC (Chave: UF Entrega, CNPJ Entrega. (Desconsiderar CCC.cSitIE=9-Exclusão lógica)<br>- CNPJ do Local de Entrega possui IE ativa na UF (CCC.cSitIE=1-Habilitado) e CCC.IndIEDestOpc=“0-Obrigatório”<br>**Observação:** Regra de validação para todas as SEFAZ Autorizadoras. | Obrig. | 176 | Rej. | Rejeição: IE do local de Entrega não informada |
| 5BG17-20 | 55 | - CNPJ do Local de Entrega com situação irregular na UF (CCC.cSitCNPJ = “2-Bloqueado” ou “3-Vedado”)<br>**Observação:** Regra de validação para todas as SEFAZ Autorizadoras. | Obrig. | 177 | Rej. | Rejeição: CNPJ do Local de Entrega com situação irregular na UF |
