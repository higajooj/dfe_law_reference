<!-- p.79 -->
# 8.5. Evento: Aceite de débito na apuração por emissão de nota de crédito

**Função:** Permitir ao destinatário informar que concorda com os valores constantes em nota de crédito emitida pelo fornecedor ou pelo adquirente que serão lançados a débito na apuração assistida de IBS e CBS

**Modelo:** NF-e modelo 55

**Autor do Evento:** Destinatário da NF-e

**Código do Tipo de Evento:** 211128

### 8.5.1. Leiaute Mensagem de Entrada

Estrutura XML da parte específica do evento, a ser inserida na tag detEvento (P17) da Parte Geral do Web Service de Registro de Eventos especificada na seção 5.8 do MOC.

<!-- p.80 -->
**Schema XML:** envEventoNFe_v9.99.xsd

**Schema XML - parte específica:** e211128_v1.00.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **P17** | **detEvento** | **G** | **P06** | | **1-1** | | **Detalhes do Evento** |
| P18 | versao | A | P17 | N | 1-1 | 2v2 | Versão do leiaute do evento (P16) |
| P19 | descEvento | E | P17 | C | 1-1 | 85 | Descrição do evento: "Aceite de débito na apuração por emissão de nota de crédito" |
| P20 | cOrgaoAutor | E | P17 | N | 1-1 | 2 | Código da UF do emitente do Evento |
| P21 | tpAutor | E | P17 | N | 1-1 | 1 | Informar 2=Empresa destinatária. |
| P22 | verAplic | E | P17 | N | 1-1 | 1-20 | Versão do aplicativo do autor do evento. |
| P23 | indAceitacao | E | P17 | N | 1-1 | 1 | Indicador de concordância com o valor da nota de crédito que lançaram IBS e CBS na apuração assistida. Valores: 0 = não aceite; 1 = aceite. |

### 8.5.2. Leiaute Mensagem de Retorno

Estrutura XML com a mensagem do resultado da transmissão, conforme retorno do Web Service de Registro de Eventos – Parte Geral, especificado no item 5.8.2 do MOC.
