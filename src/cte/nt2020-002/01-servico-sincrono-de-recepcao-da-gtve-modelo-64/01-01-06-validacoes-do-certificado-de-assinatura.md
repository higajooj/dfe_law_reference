# 1.1.6 Validações do Certificado de Assinatura

## Validações do Certificado utilizado na Assinatura Digital da GTVe

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| **E01** | Certificado de Assinatura Inválido:<br>- Certificado de Assinatura inexistente na mensagem<br>- Versão difere “3”<br>- Basic Constraint = true (não pode ser Certificado de AC)<br>- KeyUsage não define “Autenticação Cliente” | Obrig. | 290 | Rej. |
| **E02** | Validade do Certificado (data início e data fim) | Obrig. | 291 | Rej. |
| **E03** | Falta a extensão de CNPJ no Certificado (OtherName - OID=2.16.76.1.3.3 | Obrig. | 292 | Rej. |
| **E04** | Verificar a Cadeia de Certificação:<br>- Certificado da AC emissora não cadastrado na SEFAZ<br>- Certificado de AC revogado<br>- Certificado não assinado pela AC emissora do Certificado | Obrig. | 293 | Rej. |
| **E05** | LCR do Certificado de Assinatura<br>- Falta o endereço da LCR (CRL DistributionPoint)<br>- Erro no acesso à LCR | Obrig. | 296 | Rej. |
| **E06** | Certificado de Assinatura revogado | Obrig. | 294 | Rej. |
| **E07** | Certificado Raiz difere da “ICP-Brasil” | Obrig. | 295 | Rej. |
