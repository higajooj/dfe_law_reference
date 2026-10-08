<!-- p.92 -->
# 8.17. Evento: Fornecimento não realizado com pagamento antecipado

**Função:** Permitir ao fornecedor informar que um pagamento antecipado não teve o respectivo fornecimento realizado.

**Modelo:** NF-e modelo 55

**Autor do Evento:** emitente da NF-e de nota de débito do tipo 06 = Pagamento antecipado

**Código do Tipo de Evento:** 112140

### 8.17.1. Leiaute Mensagem de Entrada

Estrutura XML da parte específica do evento, a ser inserida na tag detEvento (P17) da Parte Geral do Web Service de Registro de Eventos especificada na seção 5.8 do MOC.

<!-- p.93 -->
**Schema XML:** envEventoNFe_v9.99.xsd

**Schema XML - parte específica:** e112140_v1.00.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **P17** | **detEvento** | **G** | **P06** | | **1-1** | | **Detalhes do Evento** |
| P18 | versao | A | P17 | N | 1-1 | 2v2 | Versão do leiaute do evento (P16) |
| P19 | descEvento | E | P17 | C | 1-1 | 51 | Descrição do evento: "Fornecimento não realizado com pagamento antecipado" |
| P20 | cOrgaoAutor | E | P17 | N | 1-1 | 2 | Código do Órgão Autor do Evento. Informar o Código da UF para este Evento. |
| P21 | tpAutor | E | P17 | N | 1-1 | 1 | Informar 1=Empresa Emitente<br>Valores: 1=Empresa Emitente, 2=Empresa destinatária; 3=Empresa; 5=Fisco; 6=RFB; 9=Outros Órgãos. |
| P22 | verAplic | E | P17 | N | 1-1 | 1-20 | Versão do aplicativo do autor do evento. |
| **P23** | **gItemNaoFornecido** | **G** | **P17** | | **1-990** | | **Informações por item da Nota de Pagamento antecipado** |
| P24 | nItem | A | P23 | N | 1-1 | 1-3 | Corresponde ao atributo “nItem” do elemento “det” do documento referenciado. |
| P25 | vIBS | E | P23 | N | 1-1 | 13v2 | Valor do IBS na nota de débito de pagamento antecipado correspondente à quantidade que não foi fornecida |
| P26 | vCBS | E | P23 | N | 1-1 | 13v2 | Valor da CBS na nota de débito de pagamento antecipado correspondente à quantidade que não foi fornecida |
| **P27** | **gControleEstoque** | **G** | **P23** | | **1-1** | | **Informações de quantidade de estoque influenciadas pelo evento** |
| P28 | qNaoFornecida | E | P27 | N | 1-1 | 11v0-4 | Informar a quantidade que não foi fornecida e teve o imposto antecipado |
| P29 | uNaoFornecida | E | P27 | C | 1-1 | 1-6 | Informar a unidade relativa ao campo qNaoFornecida |

### 8.17.2. Leiaute Mensagem de Retorno

Estrutura XML com a mensagem do resultado da transmissão, conforme retorno do Web Service de Registro de Eventos – Parte Geral, especificado no item 5.8.2 do MOC.
