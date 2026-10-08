<!-- p.8 -->
<!-- REVISAR p.8: no original não há títulos "5.3" nem "5.3.1"/"5.3.2"; a tabela aparece apenas como "5.3.3", após a 5.2.3. Transcrita com a numeração do original -->
<!-- REVISAR p.8: a numeração das regras pula de A17 para A19 (não existe A18 neste quadro); transcrito como no original -->

# 5.3.3. Tabela de Regras de Validação do Serviço de Revogação de CSC Ativo

| # | Regra de Validação | Aplic. | Msg | Efeito |
|---|---|---|---|---|
| A01 | Validar schema XML | Obrig | 215 | Rej. |
| A02 | Validar versão do arquivo XML não suportada | Obrig | 239 | Rej. |
| A03 | Validar cabeçalho | Obrig | 242 | Rej. |
| A04 | Validar ambiente informado diverge do Ambiente de recebimento | Obrig | 252 | Rej. |
| A05 | Validar certificado Transmissor inválido | Obrig | 280 | Rej. |
| A06 | Validar certificado Transmissor Data Validade | Obrig | 281 | Rej. |
| A07 | Validar certificado Transmissor sem CNPJ | Obrig | 282 | Rej. |

<!-- p.9 -->

| # | Regra de Validação | Aplic. | Msg | Efeito |
|---|---|---|---|---|
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
| A19 | Rejeição: O CSC e o identificador informado não possuem correspondência | Obrig | 803 | Rej |
| A20 | Rejeição: O CSC informado não pertence ao solicitante da revogação | Obrig | 804 | Rej |
| A21 | Rejeição: O CSC informado está revogado | Obrig | 805 | Rej |
