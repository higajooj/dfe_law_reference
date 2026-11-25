<!-- p.12 -->

# 9 Evento de Cancelamento da Tributação do Simples Nacional

**Função**: Evento para indicar o cancelamento de um evento de Tributação do Simples Nacional nas ocasiões em que ocorrer erro na geração do evento.

**Autor do Evento**: Administração Tributária

**Código do Tipo de Evento: 412141** (Este evento exige existência do DFe em situação autorizado)

**Schema XML: evCancTribSN_v9.99.xsd**

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **IP01** | **evCancTribSN** | **G** | **-** | **-** | **-** | **-** | **TAG raiz** |
| IP02 | descEvento | E | IP01 | C | 1-1 | 46 | Descrição do Evento: “Cancelamento da Tributação do Simples Nacional” |
| IP03 | nProt | E | IP01 | N | 1-1 | 15 | Informar o número do protocolo de autorização do DFe |
| IP04 | nProtEvTribSN | E | IP01 | N | 1-1 | 15 | Informar o número do protocolo de autorização do evento de tributação do SN que será cancelado |
