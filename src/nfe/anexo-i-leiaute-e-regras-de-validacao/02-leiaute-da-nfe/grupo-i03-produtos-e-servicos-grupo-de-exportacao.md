# Grupo I03. Produtos e Serviços / Grupo de Exportação

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **128.20** | **detExport (I50)** | **G** | **I01** |  | **0-500** |  | **Grupo de informações de exportação para o item<br>Informar apenas no Drawback e nas exportações** |
| 128.21 | nDraw (I51) | E | I50 | N | 0-1 | 0, 9 ou 11 | Número do ato concessório de Drawback<br>O número do Ato Concessório de Suspensão deve ser preenchido com 11 dígitos (AAAANNNNNND) e o número do Ato Concessório de Drawback Isenção deve ser preenchido com 9 dígitos (AANNNNNND). (Observação incluída na NT 2013/005 v. 1.10) |
| **128.22** | **exportInd (I52)** | **G** | **I50** |  | **0-1** |  | **Grupo sobre exportação indireta** |
| 128.23 | nRE (I53) | E | I52 | N | 1-1 | 12 | Número do Registro de Exportação |
| 128.24 | chNFe (I54) | E | I52 | N | 1-1 | 44 | Chave de Acesso da NF-e recebida para exportação<br>NF-e recebida com fim específico de exportação Observação: No caso de operação com CFOP 3.503, informar a chave de acesso da NF-e que efetivou a exportação |
| 128.25 | qExport (I55) | E | I52 | N | 1-1 | 11v4 | Quantidade do item realmente exportado<br>A unidade de medida desta quantidade é a unidade de comercialização deste item. No caso de operação com CFOP 3.503, informar a quantidade de mercadoria devolvida |
