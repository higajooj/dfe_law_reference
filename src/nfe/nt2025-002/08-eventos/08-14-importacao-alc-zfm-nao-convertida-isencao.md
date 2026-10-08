<!-- p.89 -->
# 8.14. Evento: Importação em ALC/ZFM não convertida em isenção

**Função:** Permitir que o adquirente das regiões incentivadas (ALC/ZFM) informe que a tributação na importação não se converteu em isenção de um determinado item por não atender as condições da legislação.

**Modelo:** NF-e modelo 55

**Autor do Evento:** emitente da NFe (adquirente)

**Código do Tipo de Evento:** 112120

### 8.14.1. Leiaute Mensagem de Entrada

Estrutura XML da parte específica do evento, a ser inserida na tag detEvento (P17) da Parte Geral do Web Service de Registro de Eventos especificada na seção 5.8 do MOC.

<!-- p.90 -->
**Schema XML:** envEventoNFe_v9.99.xsd

**Schema XML - parte específica:** e112120_v1.00.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **P17** | **detEvento** | **G** | **P06** | | **1-1** | | **Detalhes do Evento** |
| P18 | versao | A | P17 | N | 1-1 | 2v2 | Versão do leiaute do evento (P16) |
| P19 | descEvento | E | P17 | C | 1-1 | 47 | Descrição do evento: "Importação em ALC/ZFM não convertida em isenção" |
| P20 | cOrgaoAutor | E | P17 | N | 1-1 | 2 | Código do Órgão Autor do Evento. Informar o Código da UF para este Evento. |
| P21 | tpAutor | E | P17 | N | 1-1 | 1 | Caso NF-e de Importação, informar 1=Empresa Emitente. |
| P22 | verAplic | E | P17 | N | 1-1 | 1-20 | Versão do aplicativo do autor do evento. |
| **P23** | **gConsumo** | **G** | **P17** | | **1-990** | | **Informações por item da NF-e de importação**<br>Nota: a quantidade de ocorrências não pode ser maior que a quantidade de itens da NF-e de aquisição. |
| P24 | nItem | A | P23 | N | 1-1 | 1-3 | Corresponde ao atributo “nItem” do elemento “det” da NF-e de importação |
| P25 | vIBS | E | P23 | N | 1-1 | 13v2 | Valor do IBS correspondente à quantidade que não atendeu aos requisitos para a conversão em isenção |
| P26 | vCBS | E | P23 | N | 1-1 | 13v2 | Valor do CBS correspondente à quantidade que não atendeu aos requisitos para a conversão em isenção |
| **P27** | **gControleEstoque** | **G** | **P23** | | **1-1** | | **Informações de quantidade de estoque influenciadas pelo evento** |
| P28 | qtde | E | P27 | N | 1-1 | 11v0-4 | Informar a quantidade que não atendeu os requisitos para a conversão em isenção |
| P29 | unidade | E | P27 | C | 1-1 | 1 - 6 | Informar a unidade relativa ao campo gConsumo |

### 8.14.2. Leiaute Mensagem de Retorno

Estrutura XML com a mensagem do resultado da transmissão, conforme retorno do Web Service de Registro de Eventos – Parte Geral, especificado no item 5.8.2 do MOC.
