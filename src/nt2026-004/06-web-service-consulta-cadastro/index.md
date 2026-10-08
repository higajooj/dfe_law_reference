<!-- p.11 -->
# 6. Web Service – NfeConsultaCadastro

Método: consultaCadastro

## 1.1. Leiaute Mensagem de Entrada

Schema XML: consCad_v2.00.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **GP01** | **ConsCad** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz** |
| **GP03** | **infCons** | **G** | **GP01** | **-** | **1-1** | **-** | **Dados da consulta** |
| GP07 | CNPJ | CE | GP03 | C | 1-1 | 3-14 | CNPJ do contribuinte |

## 1.2. Leiaute Mensagem de Retorno

Schema XML: retConsCad_v2.00.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **GR01** | **retConsCad** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz da solicitação** |
| **GR03** | **infCons** | **G** | **GR01** | **-** | **1-1** | **-** | **Dados da consulta** |
| GR06c | CNPJ | CE | GR03 | C | 1-1 | 3-14 | CNPJ consultado |
| **GR07** | **infCad** | **G** | **GR03** | **-** | **0-N** | **-** | **Dados da situação cadastral<br>Esta estrutura existe somente para as consultas realizadas com sucesso cStat=111, com possibilidade de múltiplas ocorrências (Ex.: consulta por IE de contribuinte com Inscrição Única – retorno de todos os estabelecimentos do contribuinte).** |
| GR09 | CNPJ | CE | GR07 | C | 1-1 | 3-14 | CNPJ do contribuinte |
