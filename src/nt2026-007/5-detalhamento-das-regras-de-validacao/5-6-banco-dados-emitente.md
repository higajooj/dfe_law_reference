<!-- p.8 -->
# 5.6. Banco de Dados: Emitente

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| 1C17-02 | 55 | Se não informada a IE do emitente (tag: emit/IE) OU informada a IE do emitente igual a “ISENTO” (tag: emit/IE=ISENTO):<br>- Acessar o CCC (chave: CNPJ/CPF do emitente + UF do emitente. Desconsiderar CCC.cSitIE=9-Exclusão lógica):<!-- REVISAR p.8: parêntese de fechamento ausente após "UF do emitente" e ponto isolado no texto da consulta ao CCC --><br>- Situação do Contribuinte habilitado na UF (cSitIE=1) e Tipo de IE de contribuinte do ICMS (tpIE=1-IE normal ou tpIE=5-Produtor Rural).<br>**Observação:** Regra de validação exclusiva da SVRS. | Obrig. | 163 | Rej. | Rejeição: Emitente possui inscrição estadual ativa no cadastro da UF |
| 1C17-04 | 55 | Se não informada a IE do emitente (tag: emit/IE) OU informada a IE do emitente igual a “ISENTO” (tag: emit/IE=ISENTO):<br>- Acessar o CCC (chave: CNPJ/CPF do emitente + UF do emitente. Desconsiderar CCC.cSitIE=9-Exclusão lógica)<br>- Situação do Contribuinte habilitado na UF (cSitIE=1) e Situação do CNPJ (cSitCNPJ) igual a “2-Bloqueado como Destinatário na UF” ou “3-Vedado como Destinatário na UF”<br>**Observação:** Regra de validação exclusiva da SVRS. | Obrig. | 164 | Rej. | Rejeição: Emitente com situação irregular na UF |
