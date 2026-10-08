<!-- p.76 -->
# 8.3. Evento: Informação de efetivo pagamento integral para liberar crédito presumido do adquirente

**Função:** Permitir que o emitente da NFe informe o efetivo pagamento integral da operação a fim de liberar crédito presumido do adquirente

**Modelo:** NF-e modelo 55

**Autor do Evento:** Emitente da NFe

<!-- p.77 -->
**Código do Tipo de Evento:** 112110

### 8.3.1. Leiaute Mensagem de Entrada

Estrutura XML da parte específica do evento, a ser inserida na tag detEvento (P17) da Parte Geral do Web Service de Registro de Eventos especificada na seção 5.8 do MOC.

**Schema XML:** envEventoNFe_v9.99.xsd

**Schema XML - parte específica:** e112110_v1.00.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **P17** | **detEvento** | **G** | **P06** | | **1-1** | **-** | **Detalhes do Evento** |
| P18 | versao | A | P17 | N | 1-1 | 2v2 | Versão do leiaute do evento (P16) |
| P19 | descEvento | E | P17 | C | 1-1 | 85 | Descrição do evento: "Informação de efetivo pagamento integral para liberar crédito presumido do adquirente" |
| P20 | cOrgaoAutor | E | P17 | N | 1-1 | 2 | Código do Órgão Autor do Evento. Informar o Código da UF para este Evento. |
| P21 | tpAutor | E | P17 | N | 1-1 | 1 | Informar 1=Empresa emitente.<br>Valores: 1=Empresa Emitente, 2=Empresa destinatária; 3=Empresa; 5=Fisco; 6=RFB; 9=Outros Órgãos. |
| P22 | verAplic | E | P17 | N | 1-1 | 1-20 | Versão do aplicativo do autor do evento. |
| P23 | indQuitacao | E | P17 | N | 1-1 | 1 | Indicador de efetiva quitação do pagamento integral da operação referente a NFe referenciada. Valor deve ser igual a "1" |

### 8.3.2. Leiaute Mensagem de Retorno

Estrutura XML com a mensagem do resultado da transmissão, conforme retorno do Web Service de Registro de Eventos – Parte Geral, especificado no item 5.8.2 do MOC.
