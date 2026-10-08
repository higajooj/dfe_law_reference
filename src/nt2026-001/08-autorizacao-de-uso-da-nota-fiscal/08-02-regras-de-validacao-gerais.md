<!-- p.11 -->
# 8.2. Regras de Validação Gerais – NF-e / NFC-e

**Grupo DA. Autorização - área de dados do lote de NF-e**

| # | Regra de Validação | Aplic. | Msg | Descrição Erro |
|---|---|---|---|---|
| GAP03a-5 | Se série do PAA (nSerie=[970-989]):<br>- Enviado lote com mais de 1 NF-e<br>**Observação:** Regra de Validação implementada somente na SVRS. | Obrig. | 127 | Rejeição: Enviado lote com mais de 1 NF-e |

**Grupo F. Validação da Assinatura Digital**

| # | Regra de Validação | Aplic. | Msg | Descrição Erro |
|---|---|---|---|---|
| F03 | Se Certificado de Assinatura com CNPJ e CNPJ do Certificado difere do CNPJ da SEFAZ para a UF:<br>- CNPJ-Base do Emitente difere do CNPJ-Base do Certificado Digital (NT 2018.001)<br>**Exceção:** Para tpEmis = 3-NFF, CNPJ do certificado é somente o da SVRS (NT 2021.002)<br>**Exceção 2:** Não aplicar essa validação se Autorizador = SVRS e DF-e possuir indicação de uso do Provedor de Assinatura e Autorização (grupo: infPAA preenchido).<br>**Observação:** Regra de Validação implementada somente na SVRS. | Obrig. | 213 | Rejeição: CNPJ-Base do Emitente difere do CNPJ-Base do Certificado Digital |
