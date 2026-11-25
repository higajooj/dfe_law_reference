<!-- p.03 -->
# 1 Introdução

As Notas Técnicas 2026.001 dos documentos fiscais eletrônicos (CTe, BPe, NF3e, NFCom, NFAg e NFGas) <mark>e 2026.006 (NFe e NFCe)</mark> introduziram o grupo de informações da vinculação da transação do pagamento nos DFe.

A estrutura de campos, voltada para as informações que serão utilizadas no sistema do Split Payment, possui uma tag para informar o código do Meio de Pagamento utilizado na transação.

Existe uma tabela nacional que estabelece os códigos para os meios de pagamento nos documentos fiscais eletrônicos, utilizada pelo sistema da Nota Fiscal Eletrônica (NFe) e publicada no portal nacional da NFe ([https://www.nfe.fazenda.gov.br](https://www.nfe.fazenda.gov.br)) e no portal dos DFe da SEFAZ Virtual RS ([https://dfe-portal.svrs.rs.gov.br](https://dfe-portal.svrs.rs.gov.br)).

O grupo de informação da vinculação da transação de pagamento utilizará os seguintes códigos estabelecidos nesta tabela:

| Código | Descrição |
|---|---|
| 15 | Boleto |
| 17 | Pix QRCode |
| 18 | TED |
| 20 | PIX chave ou QRCode estático |
| 23 | Pix automático\* |
| 24 | TEF / booktransfer\* |

\*Novos códigos que serão atualizados na tabela nacional

A utilização de um código diferente dos relacionados acima causará a rejeição 1003 – Tipo de Pagamento inválido

A inclusão de códigos válidos será realizada através de atualizações deste Informe Técnico.
