<!-- p.86 -->
# 8.11. Evento: Manifestação do Fisco sobre Pedido de Transferência de Crédito de IBS em Operações de Sucessão

**Função:** Evento a ser gerado pelo fisco em relação às notas fiscais de transferência de crédito para informar aceite ou não aceite da transferência de crédito de IBS.

**Autor:** Fisco

**Modelo:** NF-e modelo 55

**Código do Tipo de Evento:** 412120

### 8.11.1. Leiaute Mensagem de Entrada

Estrutura XML da parte específica do evento, a ser inserida na tag detEvento (P17) da Parte Geral do Web Service de Registro de Eventos especificada na seção 5.8 do MOC.

**Schema XML:** envEventoNFe_v9.99.xsd

**Schema XML - parte específica:** e412120_v1.00.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **P17** | **detEvento** | **G** | **P06** | | **1-1** | | **Detalhes do Evento** |
| P18 | versao | A | P17 | N | 1-1 | 2v2 | Versão do leiaute do evento (P16) |
| P19 | descEvento | E | P17 | C | 1-1 | 94 | Descrição do evento: "Manifestação do Fisco sobre Pedido de Transferência de Crédito de IBS em Operações de Sucessão" |
| P20 | cOrgaoAutor | E | P17 | N | 1-1 | 2 | Código da UF do emitente do Evento |
| P21 | tpAutor | E | P17 | N | 1-1 | 1 | Informar 5=Fisco |
| P22 | verAplic | E | P17 | N | 1-1 | 1-20 | Versão do aplicativo do autor do evento. |
| P23 | indDeferimento | E | P17 | N | 1-1 | 1 | Indicador de aceitação do valor de transferência para a empresa que emitiu a nota referenciada.<br>Valores: 0=Não Aceite; 1=Aceite. |
| P24 | cMotivo | E | P17 | N | 1-1 | 1 | 1–Falta de manifestação de todas as sucessoras; 2 – Outros. |
| P25 | xMotivo | E | P17 | C | 1-1 | 500 | |

### 8.11.2. Leiaute Mensagem de Retorno

Estrutura XML com a mensagem do resultado da transmissão, conforme retorno do Web Service de Registro de Eventos – Parte Geral, especificado no item 5.8.2 do MOC.
