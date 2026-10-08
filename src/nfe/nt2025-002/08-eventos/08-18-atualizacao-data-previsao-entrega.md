<!-- p.93 -->
# 8.18. Evento: Atualização da Data de Previsão de Entrega

**Função:** Permitir ao fornecedor atualizar a data da previsão de entrega ou disponibilização do bem ao adquirente, de forma a remover o débito do mês em que foi previsto inicialmente.

**Modelo:** NF-e modelo 55

**Autor do Evento:** emitente da NF-e

**Código do Tipo de Evento:** 112150

### 8.18.1. Leiaute Mensagem de Entrada

Estrutura XML da parte específica do evento, a ser inserida na tag detEvento (P17) da Parte Geral do Web Service de Registro de Eventos especificada na seção 5.8 do MOC.

**Schema XML:** envEventoNFe_v9.99.xsd

**Schema XML - parte específica:** e112150_v1.00.xsd

<!-- p.94 -->
| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **P17** | **detEvento** | **G** | **P06** | | **1-1** | | **Detalhes do Evento** |
| P18 | versao | A | P17 | N | 1-1 | 2v2 | Versão do leiaute do evento (P16) |
| P19 | descEvento | E | P17 | C | 1-1 | 42 | Descrição do evento: "Atualização da Data de Previsão de Entrega" |
| P20 | cOrgaoAutor | E | P17 | N | 1-1 | 2 | Código do Órgão Autor do Evento. Informar o Código da UF para este Evento. |
| P21 | tpAutor | E | P17 | N | 1-1 | 1 | Informar 1=Empresa Emitente<br>Valores: 1=Empresa Emitente, 2=Empresa destinatária; 3=Empresa; 5=Fisco; 6=RFB; 9=Outros Órgãos. |
| P22 | verAplic | E | P17 | N | 1-1 | 1-20 | Versão do aplicativo do autor do evento. |
| P23 | dPrevEntrega | E | P17 | D | 1-1 | 10 | Data da previsão de entrega ou disponibilização do bem. Formato: “AAAA-MM-DD”. |

### 8.18.2. Leiaute Mensagem de Retorno

Estrutura XML com a mensagem do resultado da transmissão, conforme retorno do Web Service de Registro de Eventos – Parte Geral, especificado no item 5.8.2 do MOC.
