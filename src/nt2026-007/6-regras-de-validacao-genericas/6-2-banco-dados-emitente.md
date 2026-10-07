<!-- p.11 -->
# 6.2. Banco de Dados: Emitente

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| 1P10-30 | 55/65 | Se informado CNPJ do Autor do Evento:<br>- Acessar LCC-RFB (Chave: UF Autor, CNPJ Autor. Desconsiderar LCC.cSitCNPJ=99-Exclusão Lógica):<br>- CNPJ do Autor do Evento não cadastrado.<br>**Observação:** Regra de validação para todas as SEFAZ Autorizadoras. | Obrig. | 187 | Rej. | Rejeição: CNPJ [XX.XXX.XXX/XXXX-DV] do Autor de Evento não cadastrado na Receita Federal |
| 1P10-32 | 55/65 | - Situação do CNPJ do Autor do Evento diferente de 02-Ativa<br>**Observação:** Regra de validação para todas as SEFAZ Autorizadoras. | Obrig. | 170 | Rej. | Rejeição: CNPJ do Autor de Evento com situação irregular na Receita Federal |
| 1P10-40 | 55 | Se o CNPJ/CPF do autor do evento for igual ao CNPJ/CPF do emitente da NF-e vinculada à chave de acesso e a NF-e não possuir a tag emit/IE:<br>- o Web Service receptor do evento deve ser o da SVRS.<br>**Exceção 1:** regra de validação não se aplica para a chave de acesso com série entre a faixa 890-919.<br>**Observação 1:** Eventos de autoria de emitente sem IE devem ser registrados na SVRS.<br>**Observação 2:** Regra de validação para todas as SEFAZ Autorizadoras. | Obrig. | 188 | Rej. | Rejeição: Evento de NF-e de contribuinte exclusivo do IBS/CBS deve ser autorizado na SVRS |
