<!-- p.8 -->
<!-- REVISAR p.8: no original não há títulos "5.2" nem "5.2.1"/"5.2.2"; a tabela aparece apenas como "5.2.3", logo após 5.1.4. Transcrita com a numeração do original -->

# 5.2.3. Tabela de Regras de Validação do Serviço de Requisição de Novo CSC

| # | Regra de Validação | Aplic. | Msg | Efeito |
|---|---|---|---|---|
| A01 | Validar schema XML | Obrig | 215 | Rej. |
| A02 | Validar versão do arquivo XML não suportada | Obrig | 239 | Rej. |
| A03 | Validar cabeçalho | Obrig | 242 | Rej. |
| A04 | Validar ambiente informado diverge do Ambiente de recebimento | Obrig | 252 | Rej. |
| A05 | Validar certificado Transmissor inválido | Obrig | 280 | Rej. |
| A06 | Validar certificado Transmissor Data Validade | Obrig | 281 | Rej. |
| A07 | Validar certificado Transmissor sem CNPJ | Obrig | 282 | Rej. |
| A08 | Validar certificado Transmissor - erro Cadeia de Certificação | Obrig | 283 | Rej. |
| A09 | Validar certificado Transmissor revogado | Obrig | 284 | Rej. |
| A10 | Validar certificado Transmissor difere ICP-Brasil | Obrig | 285 | Rej. |
| A11 | Validar certificado Transmissor erro no acesso a LCR | Obrig | 286 | Rej. |
| A12 | Validar XML da área de dados com codificação diferente de UTF-8 | Obrig | 402 | Rej. |
| A13 | Validar uso de prefixo de namespace não permitido | Obrig | 404 | Rej. |
| A14 | Validar campo cUF no elemento nfeCabecMsg do SOAP Header | Obrig | 409 | Rej. |
| A15 | Validar UF informada no campo cUF | Obrig | 410 | Rej. |
| A16 | Validar campo versaoDados no elemento nfeCabecMsg do SOAP Header | Obrig | 411 | Rej. |
| A17 | Validar solicitante não autorizado para a consulta | Obrig | 695 | Rej. |
| A18 | Validar se contribuinte possui número máximo de CSC | Obrig | 802 | Rej |
