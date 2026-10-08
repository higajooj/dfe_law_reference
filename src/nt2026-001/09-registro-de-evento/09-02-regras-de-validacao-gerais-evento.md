<!-- p.16 -->
# 9.2. Regras de Validação Gerais - Evento

| Campo | Modelo | Regra de Validação | Aplic. | Msg | Descrição Erro |
|---|---|---|---|---|---|
| F03 | 55/65 | Se Certificado de Assinatura com CNPJ e CNPJ do Certificado difere do CNPJ da SEFAZ para a UF:<br>- CNPJ-Base do Autor difere do CNPJ-Base do Certificado Digital (NT 2018.001)<br>**Exceção 1:** Para tpEmis=3-NFF, CNPJ do certificado é somente o da SVRS (NT 2021.002)<br>**Exceção 2:** Não aplicar esta validação se Série do PAA (nSerie=[970-989]) e Autorizador = SVRS.<br>**Observação:** Regra de Validação implementada somente na SVRS. | Obrig. | 213 | Rejeição: CNPJ-Base do Emitente difere do CNPJ-Base do Certificado Digital |
