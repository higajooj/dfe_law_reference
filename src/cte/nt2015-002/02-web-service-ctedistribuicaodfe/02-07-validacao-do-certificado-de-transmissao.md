<!-- p.11 -->

# 2.7 Validação do Certificado de Transmissão

| # | Regra de Validação | Aplic. | Msg | Descrição Erro |
|---|---|---|---|---|
| A01 | Certificado de Transmissor Inválido:<br>-Certificado de Transmissor inexistente na mensagem<br>-Versão difere "3"<br>-Se informado o Basic Constraint deve ser true (não pode ser Certificado de AC)<br>-KeyUsage não define "Autenticação Cliente" | Obrig. | 280 | Rejeição: Certificado Transmissor inválido |
| A02 | Validade do Certificado (data início e data fim) | Obrig. | 281 | Rejeição: Certificado Transmissor Data Validade |
| A03 | Verifica a Cadeia de Certificação:<br>-Certificado da AC emissora não cadastrado no Ambiente Nacional<br>-Certificado de AC revogado<br>-Certificado não assinado pela AC emissora do Certificado | Obrig. | 283 | Rejeição: Certificado Transmissor - erro Cadeia de Certificação |
| A04 | LCR do Certificado de Transmissor<br>-Falta o endereço da LCR (CRL DistributionPoint)<br>-LCR indisponível<br>-LCR inválida | Obrig. | 286 | Rejeição: Certificado Transmissor erro no acesso a LCR |
| A05 | Certificado do Transmissor revogado | Obrig. | 284 | Rejeição: Certificado Transmissor revogado |
| A06 | Certificado Raiz difere da "ICP-Brasil" | Obrig. | 285 | Rejeição: Certificado Transmissor difere ICP-Brasil |
| A07 | Falta a extensão de CNPJ (OtherName - OID=2.16.76.1.3.3) ou a extensão de CPF (OtherName - OID=2.16.76.1.3.1) no Certificado | Obrig. | 473 | Rejeição: Certificado Transmissor sem CNPJ ou CPF |

<!-- p.12 -->

As validações de A01, A02, A03, A04 e A05 são realizadas pelo protocolo SSL e não precisam ser implementadas. A validação A06 também pode ser realizada pelo protocolo SSL, mas pode falhar se existirem outros certificados digitais de Autoridade Certificadora Raiz que não sejam "ICP-Brasil" no repositório de certificados digitais do servidor de Web Service do Órgão da consulta.
