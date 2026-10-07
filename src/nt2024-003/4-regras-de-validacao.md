<!-- p.9 -->
# 4 Regras de Validação

## I. Produtos e Serviços

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| ~~I08-94~~ | ~~55~~ | ~~Operação Interestadual (idDest=2) e informado idEstrangeiro<br><br>Exceção: A regra acima não se aplica para o CFOP="6.667- Venda de combustível ou lubrificante a consumidor ou usuário final estabelecido em outra UF diferente da que ocorrer o consumo" (NT 2015.002)~~ | ~~Facult.~~ | ~~771~~ | ~~Rej.~~ | ~~Rejeição: Informado idEstrangeiro em operação interestadual~~ |

> **Revogado/Descontinuado:** RV I08-94 riscada no original. A própria versão 1.09 desta NT registra a remoção da RV I08-94, que causava a rejeição 771.

## N. Item / Tributo: ICMS

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| N12a-70 | 55 | Operação com Não Contribuinte (indIEDest=9) e CSOSN difere da relação abaixo:<br>- 102-Tributação SN sem permissão de crédito;<!-- p.10 --><br>- 103-Tributação SN, com isenção para faixa de receita bruta;<br>- 300-Imune;<br>- 400-Não tributada pelo Simples Nacional;<br>- 500-ICMS cobrado anteriormente por substituição tributária ou por antecipação;<br><br>Exceção 1: A regra de validação acima não se aplica para NF-e de entrada (tpNF=0-Entrada).<br>Exceção 2: A regra de validação acima não se aplica nas operações com CFOP de conserto ou reparo (CFOP 5915, 5916, 6915 e 6916) ou de remessa para demonstração dentro do Estado (CFOP 5912 e 5913).<br>Exceção 3: A regra de validação não se aplica, em produção, para Nota Fiscal com data de emissão anterior a 01/07/2016. (NT 2015.003)<br>Exceção 4: A critério da UF, a regra de validação acima não se aplica para o MEI (CRT=4) nas operações de Remessa com os CFOP 5904 e 6904 e CSOSN=900.<br>Exceção 5: A regra de validação acima não se aplica para o MEI (CRT=4) nas operações de Remessa com os CFOP 5551 ou 6551, e CSOSN=900. | Obrig. | 600 | Rej. | Rejeição: CSOSN incompatível na operação com Não Contribuinte [nItem: 999] |

## ZF. Informações de Produtos da Agricultura, Pecuária e Produção Florestal

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| ZF02-10 | 55 | Em algum item informado defensivo Agrícola (NCM 3808.52.00, 3808.59.2X, <!-- p.11 -->3808.6X.XX, 3808.91.9X, 3808.92.20, 3808.92.9X, 3808.93.2X, 3808.93.3X, 3808.93.5X, 3808.99.20, 3808.99.9X) sem Receita / Receituário, quando finNFe = 1 (normal) e indFinal = 1 (consumidor final)<br>Exceção 1: A regra de validação acima não se aplica para as operações com CFOP de Retorno de Mercadorias.<br>Exceção 2: A regra de validação acima não se aplica para as operações com CFOP de Transferência de Mercadorias (X.151, X.152, X.155 e X.156).<br>Exceção 3: A regra de validação acima não se aplica para as operações com CFOP faturamento de venda para entrega futura (5.922, 6.922).<br>Exceção 4: A regra de validação não se aplica a: produtos biológicos nos NCMs: 3808.59.29, 3808.61.00, 3808.62.90, 3808.69.90, 3808.91.91, 3808.91.92, 3808.91.93, 3808.91.94, 3808.91.96, 3808.91.97, 3808.91.99, 3808.92.94, 3808.92.99, 3808.93.29, 3808.93.33, 3808.93.59, 3808.99.91, 3808.99.93, 3808.99.95, 3808.99.96, 3808.99.99 e produtos saneantes do NCM 3808.62.10 | Facult. | 835 | Rej. | Rejeição: Em algum item da NF-e foi informado produto agrotóxico e não informado número da receita do defensivo agrícola. [nItem: 999] |
| ZF02-20 | 55 | Nenhum item da NF-e é Defensivo Agrícola ((NCM 3808.52.00, 3808.59.2X, 3808.6X.XX, 3808.91.9X, 3808.92.20, 3808.92.9X, 3808.93.2X, 3808.93.3X, 3808.93.5X, 3808.99.20, 3808.99.9X) e informado receituário / receita de agrotóxico. | Facult | 309 | Rej. | Rejeição: Nenhum item da NF-e é defensivo agrícola e informada receita de agrotóxico. |
| ZF03a-10 | 55 | Se Informado CPF (tag: CPFRespTec) e CPF inválido para Responsável técnico do receituário<!-- p.12 --> de agrotóxico. | Obrig. | 308 | Rej. | Rejeição: CPF inválido para Responsável Técnico do receituário de agrotóxico. |
| ZF05-10 | 55 | Em algum item da NF-e, informado produto Animal Vivo e CFOP diferente de X105; X106; X111; X112; X113; X114; X115; X155; X156; X907 X949, X454; ou X.922), finalidade de emissão normal (finNFe = 1) e não informada Guia de Trânsito Animal (tpGuia=01, 02 ou 03).<br>Observação: Aplicação a critério da UF, conforme UF e NCM constantes na tabela 4.1 abaixo. | Facult. | 836 | Rej. | Rejeição: Não informada Guia de Trânsito Animal [nItem: 999] |
| ZF05-14 | 55 | Em nenhum item da NF-e informado produto Animal Vivo (NCM 01xxxxxx e 0301xxxx) e informada a Guia de Trânsito Animal (tpGuia=01, 02 ou 03).<br>Observação: aplicação a critério da UF. | Facult. | 310 | Rej. | Rejeição: Informação indevida de Guia de Trânsito Animal |
| ZF05-20 | 55 | Em algum item da NF-e informado produto vegetal e CFOP diferente de X.105; X.106; X.111; X.112; X.113; X.114; X.115; X.155; X.156; X.907 e, X.949, X.914, X.922 e X.454) e não informada a Guia de Trânsito Vegetal (tpGuia=04,05 ou 06).<br>Observação: Aplicação a critério da UF, conforme UF e NCM constantes na tabela 4.1 abaixo. | Facult. | 311 | Rej. | Rejeição: Não Informada Guia de Trânsito Vegetal [nItem: 999] |
| ZF05-24 | 55 | Em nenhum item da NF-e informado produto 6.vegetal (NCM 06xxxxxx, 07xxxxxx, 08xxxxxx, ou 12xxxxxx) e informada a Guia de Trânsito Vegetal (tpGuia=04,05 ou 06).<br>Observação: aplicação a critério da UF. | Facult. | 312 | Rej. | Rejeição: Informação Indevida de Guia de Trânsito Vegetal |
| ZF05-30 | 55 | Em algum item da NF-e foi informado produto florestal (Madeira, Lenha ou Carvão) sem<!-- p.13 --> documento de origem florestal. (tpGuia=07)<br>Observação: Implementação Futura | Facult. | 839 | Rej. | Rejeição: Madeira sem documento de origem [nItem: 999] |

## 10. Banco de Dados: Informações de Produtos da Agricultura, Pecuária e Produção Florestal

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| 10ZF04-10 | 55 | Guia de Trânsito inválida<br>Observação: Será validado o número da guia de trânsito no banco de dados integrado da SEFAZ com o órgão de controle sanitário responsável pela emissão da GTA.<br>Observação: aplicação a critério da UF. | Facult. | 837 | Rej. | Rejeição: Guia de trânsito inválida |
| 10ZF04-20 | 55 | Guia de Trânsito já utilizada<br>Observação: Será validada a utilização da guia de trânsito no banco de dados integrado da SEFAZ com o órgão de controle sanitário responsável pela emissão da GTA.<br>Observação: aplicação a critério da UF. | Facult. | 838 | Rej. | Rejeição: Guia de trânsito já utilizada |
