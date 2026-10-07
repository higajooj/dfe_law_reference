<!-- p.90 -->
# 8.15. Evento: Perecimento, perda, roubo ou furto durante o transporte contratado pelo adquirente

**Função:** Permitir ao adquirente informar quando uma aquisição for objeto de roubo, perda, furto ou perecimento.

**Observação:** O evento atual está relacionado aos bens que foram objeto de perecimento, perda, roubo ou furto em trânsito, em fornecimentos com frete FOB.

**Modelo:** NF-e modelo 55

**Autor do Evento:** Destinatário da NF-e em notas de saída

**Código do Tipo de Evento:** 211124

### 8.15.1. Leiaute Mensagem de Entrada

Estrutura XML da parte específica do evento, a ser inserida na tag detEvento (P17) da Parte Geral do Web Service de Registro de Eventos especificada na seção 5.8 do MOC.

<!-- p.91 -->
**Schema XML:** envEventoNFe_v9.99.xsd

**Schema XML - parte específica:** e211124_v1.00.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **P17** | **detEvento** | **G** | **P06** | | **1-1** | | **Detalhes do Evento** |
| P18 | versao | A | P17 | N | 1-1 | 2v2 | Versão do leiaute do evento (P16) |
| P19 | descEvento | E | P17 | C | 1-1 | 82 | Descrição do evento: “Perecimento, perda, roubo ou furto durante o transporte contratado pelo adquirente" |
| P20 | cOrgaoAutor | E | P17 | N | 1-1 | 2 | Código do Órgão Autor do Evento. Informar o Código da UF para este Evento. |
| P21 | tpAutor | E | P17 | N | 1-1 | 1 | Informar 2=Empresa destinatária.<br>Valores: 1=Empresa Emitente, 2=Empresa destinatária; 3=Empresa; 5=Fisco; 6=RFB; 9=Outros Órgãos. |
| P22 | verAplic | E | P17 | N | 1-1 | 1-20 | Versão do aplicativo do autor do evento. |
| **P23** | **gPerecimento** | **G** | **P17** | | **1-990** | | **Informações por item da Nota de Aquisição** |
| P24 | nItem | A | P23 | N | 1-1 | 1-3 | Corresponde ao atributo “nItem” do elemento “det” do documento referenciado. |
| P25 | vIBS | E | P23 | N | 1-1 | 13v2 | Valor do IBS na Nota de Aquisição correspondente à quantidade que foi objeto de roubo, perda, furto ou perecimento |
| P26 | vCBS | E | P23 | N | 1-1 | 13v2 | Valor da CBS na Nota de Aquisição correspondente à quantidade que foi objeto de roubo, perda, furto ou perecimento |
| **P27** | **gControleEstoque** | **G** | **P23** | | **1-1** | | **Informações de quantidade de estoque influenciadas pelo evento** |
| P28 | qPerecimento | E | P27 | N | 1-1 | 11v0-4 | Informar a quantidade que foi objeto de roubo, perda, furto ou perecimento |
| P29 | uPerecimento | E | P27 | C | 1-1 | 1-6 | Informar a unidade relativa ao campo qPerecimento |

### 8.15.2. Leiaute Mensagem de Retorno

Estrutura XML com a mensagem do resultado da transmissão, conforme retorno do Web Service de Registro de Eventos – Parte Geral, especificado no item 5.8.2 do MOC.
