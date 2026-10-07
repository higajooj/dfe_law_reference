<!-- p.88 -->
# 8.13. Evento: Cancelamento de Evento

**Função:** Permitir que o autor de um Evento já autorizado possa proceder o seu cancelamento.

**Modelo:** NF-e modelo 55

**Autor do Evento:** O mesmo Autor do Evento que está sendo cancelado.

**Tipo de Evento (Código - Descrição):** 110001 - Cancelamento de Evento

### 8.13.1. Leiaute Mensagem de Entrada

Estrutura XML da parte específica do evento, a ser inserida na tag detEvento (P17) da Parte Geral do Web Service de Registro de Eventos especificada na seção 5.8 do MOC.

**Schema XML - parte genérica:** envEventoNFe_v9.99.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **P04** | **evento** | **G** | **P01** | **xml** | **1-20** | **-** | **Evento, um lote pode conter até 20 eventos** |
| P05 | versao | A | P04 | N | 1-1 | 2v2 | Versão do leiaute do evento |
| **P06** | **infEvento** | **G** | **P04** | **-** | **1-1** | **-** | **Grupo de informações do registro do Evento** |
| P07 | Id | ID | P06 | C | 1-1 | 54 | Identificador da TAG a ser assinada, formado por “ID” + tpEvento + Chave da NF-e + nSeqEvento |
| P08 | cOrgao | E | P06 | N | 1-1 | 2 | Informar o código da UF para este evento |
| P09 | tpAmb | E | P06 | N | 1-1 | 1 | Identificação do Ambiente: 1- Produção; 2- Homologação; |
| P10 | CNPJ | CE | P06 | N | 1-1 | 14 | CNPJ do autor do evento |
| P11 | CPF | CE | P06 | N | 1-1 | 11 | CPF do autor do evento |
| P12 | chNFe | E | P06 | N | 1-1 | 44 | Chave de Acesso da NF-e à qual o evento será vinculado |
| P13 | dhEvento | E | P06 | D | 1-1 | - | Data e hora do evento no formato AAAA-MM-DD-Thh:mm:ssTZD (UTC – Universal Coordinated Time) |
| P14 | tpEvento | E | P06 | N | 1-1 | 6 | Informar “110001” |
| P15 | nSeqEvento | E | P06 | N | 1-1 | 1-2 | Informar o número de sequência do Evento a ser cancelado |
| P16 | verEvento | E | P06 | N | 1-1 | 2v2 | Versão do grupo de detalhe do evento. |

**Schema XML - parte específica:** e110001_v1.00.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **P17** | **detEvento** | **G** | **P06** | **-** | **1-1** | | **Detalhes do Evento** |
| P18 | versao | A | P17 | N | 1-1 | 2v2 | Versão do leiaute do evento (P16) |
| P19 | descEvento | E | P17 | C | 1-1 | 22 | Informar “Evento de Cancelamento” |
| P20 | cOrgaoAutor | E | P17 | N | 1-1 | 2 | Código da UF do autor do Evento |
<!-- p.89 -->
| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| P22 | verAplic | E | P17 | C | 1-1 | 1-20 | Versão do aplicativo do autor do evento. |
| P23 | tpEventoAut | E | P17 | N | 1-1 | 6 | Código do evento autorizado a ser cancelado. Por este evento poderão ser cancelados todos os Eventos previstos nesta NT, exceto o próprio Evento de Cancelamento (110001). |
| P24 | nProtEvento | E | P17 | N | 1-1 | 15,17 | Informar o número do Protocolo de Autorização do Evento a ser cancelado |

### 8.13.2. Leiaute Mensagem de Retorno

Estrutura XML com a mensagem do resultado da transmissão, conforme retorno do Web Service de Registro de Eventos – Parte Geral, especificado no item 5.8.2 do MOC.

### 8.13.3. Validação das Regras de Negócio – Específicas

Serão aplicadas as regras de validação gerais apresentadas no item 5.8.4 do MOC e as regras de negócio específicas listadas a seguir.

| # | Regra de Validação | Aplic. | Msg | Descrição Erro |
|---|---|---|---|---|
| P23-10 | - Tipo do evento a ser cancelado não pode ser “110001”, “110111”, “110112”, ... | Obrig. | - | Validação pelo esquema XML |
| | **\*\*\* Banco de Dados: Evento** | | | |
| 1P06-10 | Acesso BD de Eventos (Chave: Chave de Acesso, tpEventoAut, nSeqEvento):<br>- Evento inexistente | Obrig. | 459 | Rejeição: Cancelamento de Evento inexistente |
| 1P10-10 | - CNPJ/CPF do Autor do Evento de Cancelamento diverge do CNPJ/CPF do Autor do Evento a ser cancelado | Obrig. | 1113 | Rejeição: Autor do Evento de Cancelamento diverge do Autor do Evento a ser cancelado |
| 1P20-10 | - cOrgaoAutor do Evento de Cancelamento diverge do cOrgaoAutor do Evento a ser cancelado | Obrig. | 1178 | Rejeição: Órgão do Autor do Evento de Cancelamento diverge do órgão do Autor do Evento a ser cancelado |
| 1P24-10 | - Número do Protocolo diverge | Obrig. | 460 | Rejeição: Protocolo do Evento difere do cadastrado |
