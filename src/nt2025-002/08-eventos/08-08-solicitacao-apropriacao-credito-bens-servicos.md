<!-- p.83 -->
# 8.8. Evento: Solicitação de Apropriação de Crédito para bens e serviços que dependem de atividade do adquirente

**Função:** Evento a ser gerado pelo adquirente para apropriação de crédito de bens e serviços que dependam da sua atividade

**Modelo:** NF-e modelo 55

**Autor do Evento:** Destinatário da NFe (adquirente).

**Código do Tipo de Evento:** 211150

### 8.8.1. Leiaute Mensagem de Entrada

Estrutura XML da parte específica do evento, a ser inserida na tag detEvento (P17) da Parte Geral do Web Service de Registro de Eventos especificada na seção 5.8 do MOC.

**Schema XML:** envEventoNFe_v9.99.xsd

**Schema XML - parte específica:** e211150_v1.00.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **P17** | **detEvento** | **G** | **P06** | | **1-1** | **-** | **Detalhes do Evento** |
| P18 | versao | A | P17 | N | 1-1 | 2v2 | Versão do leiaute do evento (P16) |
| P19 | descEvento | E | P17 | C | 1-1 | 98 | Descrição do evento: "Solicitação de Apropriação de Crédito para bens e serviços que dependem de atividade do adquirente" |
| P20 | cOrgaoAutor | E | P17 | N | 1-1 | 2 | Código da UF do emitente do Evento |
| P21 | tpAutor | E | P17 | N | 1-1 | 1 | Informar 2=Empresa destinatária.<br>Valores: 1=Empresa Emitente, 2=Empresa destinatária; 3=Empresa; 5=Fisco; 6=RFB; 8= Empresa sucessora; 9=Outros Órgãos. |
| P22 | verAplic | E | P17 | N | 1-1 | 1-20 | Versão do aplicativo do autor do evento. |
| **P23** | **gCredito** | **G** | **P17** | | **1-990** | | **Informações de crédito** |

<!-- p.84 -->
| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| P24 | nitem | A | P23 | N | 1-1 | 1-3 | Corresponde ao atributo “nItem” do elemento “det” do documento referenciado. |
| P25 | vCredIBS | E | P23 | N | 1-1 | 13v2 | Valor da solicitação de crédito a ser apropriado de IBS |
| P26 | vCredCBS | E | P23 | N | 1-1 | 13v2 | Valor da solicitação de crédito a ser apropriado de CBS |

### 8.8.2. Leiaute Mensagem de Retorno

Estrutura XML com a mensagem do resultado da transmissão, conforme retorno do Web Service de Registro de Eventos – Parte Geral, especificado no item 5.8.2 do MOC.

### 8.8.3. Validação das Regras de Negócio – Específicas

Serão aplicadas as regras de validação gerais apresentadas no item 5.8.4 do MOC e as regras de negócio específicas listadas a seguir.

| # | Regra de Validação | Aplic. | Msg | Descrição Erro |
|---|---|---|---|---|
| | **Banco de Dados: NF-e** | | | |
| 2P21-10 | Se tpAutor=2-Empresa Destinatário:<br>- CNPJ/CPF do Autor diverge do CNPJ/CPF do Destinatário da NF-e | Obrig. | 575 | Rejeição: Autor do evento diverge do destinatário da NF-e |
| 2P24-10 | Acessar BD e verificar se número do item do evento (tag: gCredito/nItem) informado existe na NFe referenciada (tag: det/nItem) | Obrig. | 1096 | Rejeição: Número de item não existe na NFe |
| 2P25-10 | Acessar BD e verificar se valor do crédito de IBS do evento (tag: gCredito/vCredIBS) é maior que o valor do IBS do item informado na NFe | Obrig. | 1097 | Rejeição: O valor do crédito de IBS do item não pode ser maior que o valor do IBS do respectivo item na NFe. |
| 2P26-10 | Acessar BD e verificar se valor do crédito de CBS do evento (tag: gCredito/vCredCBS) é maior que o valor ~~do IBS~~ da CBS do item informado na NFe | Obrig. | 1098 | Rejeição: O valor do crédito de CBS do item não pode ser maior que o valor da CBS do respectivo item na NFe. |

> **Revogado/Descontinuado:** texto riscado no original (trecho(s) desta tabela).
