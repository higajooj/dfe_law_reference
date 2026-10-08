# 3.7 Regras de Validação Básicas do Serviço

**Validação do Certificado Digital do Transmissor (protocolo TLS)**

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| **A01** | Certificado de Transmissor Inválido:<br>- Certificado de Transmissor inexistente na mensagem<br>- Versão difere "3"<br>- Se informado, Basic Constraint deve ser true (não pode ser Certificado de AC)<br>- KeyUsage não define "Autenticação Cliente" | Obrig. | 280 | Rej. |

<!-- p.17 -->

**Validação do Certificado Digital do Transmissor (protocolo TLS) – continuação**

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| **A02** | Validade do Certificado (data início e data fim) | Obrig. | 281 | Rej. |
| **A03** | Verificar a Cadeia de Certificação:<br>- Certificado da AC emissora não cadastrado na SEFAZ<br>- Certificado de AC revogado<br>- Certificado não assinado pela AC emissora do Certificado | Obrig. | 283 | Rej. |
| **A04** | LCR do Certificado de Transmissor<br>- Falta o endereço da LCR (CRL DistributionPoint)<br>- LCR indisponível<br>- LCR inválida | Obrig. | 286 | Rej. |
| **A05** | Certificado do Transmissor revogado | Obrig. | 284 | Rej. |
| **A06** | Certificado Raiz difere da "ICP-Brasil" | Obrig. | 285 | Rej. |
| **A07** | Falta a extensão de CNPJ (OtherName - OID=2.16.76.1.3.3) ou a extensão de CPF (OtherName - OID=2.16.76.1.3.1) no Certificado | Obrig. | 287 | Rej. |

As validações de A01, A02, A03, A04 e A05 são realizadas pelo protocolo TLS e não precisam ser implementadas. A validação A06 também pode ser realizada pelo protocolo, mas pode falhar se existirem outros certificados digitais de Autoridade Certificadora Raiz que não sejam “ICP-Brasil” no repositório de certificados digitais do servidor de Web Service do Ambiente Autorizador.

**Validação Inicial da Mensagem no Web Service**

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| **B01** | Tamanho do XML de Dados superior a 10 Kbytes | Obrig. | 214 | Rej. |
| **B02** | XML de Dados Malformado | Obrig. | 243 | Rej. |
| **B03** | Verificar se o Serviço de processamento está Paralisado Momentaneamente | Obrig. | 108 | Rej. |
| **B04** | Verificar se o Serviço de processamento está Paralisado sem Previsão | Obrig. | 109 | Rej. |

A mensagem será descartada se o tamanho exceder o limite previsto (10 Kb). A aplicação do contribuinte não poderá permitir a geração de mensagem com tamanho superior a 10 Kb. Caso isto ocorra, a conexão poderá ser interrompida sem mensagem de erro se o controle do tamanho da mensagem for implementado por configurações do ambiente de rede do Ambiente Autorizador (ex.: controle no firewall). No caso de controle de tamanho ter sido implementado por aplicativo, teremos a devolução da mensagem de erro 214.

Caso o WebService fique disponível, mesmo quando o serviço estiver paralisado, deverão implementar as verificações 108 e 109. Estas validações poderão ser dispensadas se o WebService não ficar disponível quando o serviço estiver paralisado.
