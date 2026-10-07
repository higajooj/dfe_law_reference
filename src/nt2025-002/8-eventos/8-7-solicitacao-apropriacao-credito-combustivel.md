<!-- p.81 -->
# 8.7. Evento: Solicitação de Apropriação de Crédito de Combustível

**Função:** Evento a ser gerado pelo adquirente de combustível listado no art. 172 da LC 214/2025 e que pertença à cadeia produtiva desses combustíveis, para solicitar a apropriação de crédito referente à parcela que for consumida em sua atividade comercial, observada exceção do art. 180 da LC 214/2025.

**Modelo:** NF-e modelo 55

**Autor do Evento:** Destinatário da NF-e (Adquirente de combustível que faça parte da cadeia produtiva de combustíveis)

**Código do Tipo de Evento:** 211140

### 8.7.1. Leiaute Mensagem de Entrada

Estrutura XML da parte específica do evento, a ser inserida na tag detEvento (P17) da Parte Geral do Web Service de Registro de Eventos especificada na seção 5.8 do MOC.

<!-- p.82 -->
**Schema XML:** envEventoNFe_v9.99.xsd

**Schema XML - parte específica:** e211140_v1.00.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **P17** | **detEvento** | **G** | **P06** | | **1-1** | **-** | **Detalhes do Evento** |
| P18 | versao | A | P17 | N | 1-1 | 2v2 | Versão do leiaute do evento (P16) |
| P19 | descEvento | E | P17 | C | 1-1 | 52 | Descrição do evento: "Solicitação de Apropriação de Crédito de Combustível" |
| P20 | cOrgaoAutor | E | P17 | N | 1-1 | 2 | Código da UF do emitente do Evento |
| P21 | tpAutor | E | P17 | N | 1-1 | 1 | Informar 2=Empresa destinatária.<br>Valores: 1=Empresa Emitente, 2=Empresa destinatária; 3=Empresa; 5=Fisco; 6=RFB; 9=Outros Órgãos. |
| P22 | verAplic | E | P17 | N | 1-1 | 1-20 | Versão do aplicativo do autor do evento. |
| **P23** | **gConsumoComb** | **G** | **P17** | | **1-990** | | **Informações de consumo de combustíveis** |
| P24 | nitem | A | P23 | N | 1-1 | 1-3 | Corresponde ao atributo “nItem” do elemento “det” do documento referenciado. |
| P25 | vIBS | E | P23 | N | 1-1 | 13v2 | Valor do IBS relativo ao consumo de combustível na nota de aquisição |
| P26 | vCBS | E | P23 | N | 1-1 | 13v2 | Valor da CBS relativo ao consumo de combustível na nota de aquisição |
| **P27** | **gControleEstoque** | **G** | **P23** | | **1-1** | | **Informações de quantidade por item** |
| P28 | qComb | E | P27 | N | 1-1 | 11v0-4 | Informar a quantidade de consumo do item |
| P29 | uComb | E | P27 | C | 1-1 | 1-6 | Informar a unidade relativa ao campo qComb |

### 8.7.2. Leiaute Mensagem de Retorno

Estrutura XML com a mensagem do resultado da transmissão, conforme retorno do Web Service de Registro de Eventos – Parte Geral, especificado no item 5.8.2 do MOC.

### 8.7.3. Validação das Regras de Negócio – Específicas

Serão aplicadas as regras de validação gerais apresentadas no item 5.8.4 do MOC e as regras de negócio específicas listadas a seguir.

| # | Regra de Validação | Aplic. | Msg | Descrição Erro |
|---|---|---|---|---|
| | **Banco de Dados: NF-e** | | | |
| 2P21-10 | Se tpAutor=2-Empresa Destinatário:<br>- CNPJ/CPF do Autor diverge do CNPJ/CPF do Destinatário da NF-e | Obrig. | 575 | Rejeição: Autor do evento diverge do destinatário da NF-e |
| 2P24-10 | Acessar BD e verificar se número do item do evento (tag: gConsumoComb/nItem) informado existe na NFe referenciada (tag: det/nItem) | Obrig. | 1096 | Rejeição: Número de item não existe na NFe |
| 2P25-10 | Acessar BD e verificar se valor do IBS do evento (tag: gConsumoComb/vIBS) é maior que o valor do IBS do item informado na NFe | Obrig. | 1097 | Rejeição: O valor do IBS do item não pode ser maior que o valor do IBS do respectivo item na NFe. |
| 2P26-10 | Acessar BD e verificar se valor da CBSdo evento (tag: gConsumoComb/vCBS) é maior que o valor da CBS do item informado na NFe | Obrig. | 1098 | Rejeição: O valor da CBS do item não pode ser maior que o valor da CBS do respectivo item na NFe. |
| 2P28-10 | Se unidade de consumo for igual a unidade da nota, acessar BD e verificar se a quantidade de consumo do item informado (tag: gConsumoComb/qComb) é maior que a quantidade no item da NFe (tag: det/prod/qCom) | Obrig. | 1101 | Rejeição: A quantidade do item a ser ~~imobilizado~~ consumido não pode ser maior que a quantidade do respectivo item na NFe (qCom) |

> **Revogado/Descontinuado:** texto riscado no original (trecho(s) desta tabela).
