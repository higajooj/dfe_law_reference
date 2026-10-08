<!-- p.6 -->
# 5.1. Método admCscNFCe

**Função**: serviço destinado às opções de consulta, requisição e revogação dos números de CSC NFC-e.

**Processo**: síncrono.

## 5.1.1. Leiaute Mensagem de Entrada

**Entrada:** Estrutura XML com os dados para a administração de CSC NFC-e.

**Schema XML: admCscNFCe _v9.99.xsd**

<!-- REVISAR p.6: coluna "Pai" dos campos AP06, AP07 e AP08 indica CP01 e CP05, que não existem neste leiaute (provavelmente AP01 e AP06); transcrito como no original -->

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **AP01** | **admCscNFCe** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz** |
| AP02 | versao | A | AP01 | C | 1-1 | 4 | Versão do leiaute - "1.00" |
| AP03 | tpAmb | E | AP01 | N | 1-1 | 1 | Identificação do tipo de ambiente:<br>1 – Produção; 2 - Homologação |
| AP04 | indOp | E | AP01 | N | 1-1 | 1 | Identificador do tipo de operação:<br>1 - Consulta CSC Ativos;<br>2 - Solicita novo CSC;<br>3 - Revoga CSC Ativo |
| AP05 | raizCNPJ | E | AP01 | N | 1-1 | 8 | Raiz do CNPJ do contribuinte que está efetuando a consulta. |
| **AP06** | **dadosCsc** | **G** | **CP01** | | **0-1** | | **Dados do CSC a ser revogado** |
| AP07 | idCsc | E | CP05 | N | 1-1 | 6 | Número identificador do CSC a ser revogado |
| AP08 | codigoCsc | E | CP05 | N | 1-1 | 16 | Código alfanumérico do CSC a ser revogado |

<!-- p.7 -->
## 5.1.2. Leiaute Mensagem de Retorno

**Retorno:** Estrutura XML com a mensagem de retorno da solicitação de administração do CSC NFC-e.

**Schema XML: retAdmCscNFCe _v9.99.xsd**

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **AR01** | **retAdmCscNFCe** | **Raiz** | **-** | **-** | **-** | **-** | **TAG Raiz** |
| AR02 | versao | A | AR01 | C | 1-1 | 4 | Versão do leiaute - "1.00" |
| AR03 | tpAmb | E | AR01 | N | 1-1 | 1 | Identificação do tipo de ambiente:<br>1 – Produção; 2 – Homologação. |
| AR04 | indOp | E | AR01 | N | 1-1 | 1 | Identificador do tipo de operação:<br>1 - Consulta CSC Ativos;<br>2 - Requisita novo CSC;<br>3 - Revoga CSC Ativo |
| AR05 | cStat | E | AR01 | N | 1-1 | 3 | Código do resultado do processamento da solicitação. |
| AR06 | xMotivo | E | AR01 | C | 1-1 | 1-255 | Descrição literal do resultado do processamento da solicitação. |
| **AR07** | **dadosCsc** | **G** | **AR01** | | **0-2** | | **Tag de grupo para retorno dos dados de até dois CSC.** |
| AR08 | idCsc | E | AR07 | N | 1-1 | 6 | Número sequencial do CSC na base de dados do órgão autorizador. |
| AR09 | codigoCsc | E | AR07 | C | 1-1 | 16 | Código alfanumérico do CSC. |

## 5.1.3. Tabela de Regras de Validação do Serviço de Consulta de CSC Ativos

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

<!-- p.8 -->
## 5.1.4. Final do Processamento da Solicitação

A validação da solicitação poderá resultar em:

- **Rejeição** – devolução da mensagem com o motivo da falha informado no cStat;
- **Atendimento com CSC ativos** – devolução dos CSC ativos (cStat=150) caso o indicador da operação seja de consulta (indOp=1);
- **Atendimento sem CSC ativo** – não há CSC ativo (cStat=151) caso o indicador da operação seja consulta (indOp=1)
- **Atendimento com novo CSC** – a requisição retornará um novo CSC (cStat=152) caso o indicador da operação seja requisição (indOp=2);
- **Atendimento com CSC revogado** – a requisição retornará que o CSC foi revogado (cStat=153) caso o indicador da operação seja revogação (indOp=3);
