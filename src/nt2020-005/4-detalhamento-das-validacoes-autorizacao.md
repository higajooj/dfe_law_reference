<!-- p.17 -->
# 4. Detalhamento das Validações- Autorização

## I. Produtos e Serviços

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| I05c-10 | 55/65 | Se informado CEST, CEST inexistente (vide tabela de apoio publicada no Portal da NF-e).<br><br>Observação: Regra desabilitada, aguardando publicação da tabela de códigos CEST válidos | Obrig. | 446 | Rej. | Rejeição: Informado CEST inexistente [nItem:999] |

## N. Item/ Tributo: ICMS

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| N12-70 | 55 | Operação com Não Contribuinte (indIEDest=9) e CST difere da relação abaixo:<br>• 00-Tributada integralmente<br>• 20-Com redução da Base de Cálculo<br>• 40-Isenta<br>• 41-Não tributada<br>• 60-ICMS cobrado anteriormente por substituição tributária<br><br>**Exceção 1:** A regra de validação acima não se aplica para NF-e de entrada (tpNF=0 - Entrada).<br>**Exceção 2:** A regra de validação acima não se aplica, para o CST=50 (Suspensão), nas operações com CFOP de Retorno de Mercadorias (Tabela CFOP, indRetor=1), nem nas operações com CFOP de Remessa de Mercadorias (Tabela CFOP, indRemes=1), e nem nas operações com CFOP 5.949 ou 6.949.<br>**Exceção 3:** A regra de validação acima não se aplica quando houver ao menos um item de venda de veículos novos (grupo “veicProd”).<br>**Exceção 4:** A regra de validação não se aplica, em produção, para Nota Fiscal com data de emissão anterior a 01/07/2016.<br>**Exceção 5:** A regra de validação não se aplica para o CST=30 (Isenta ou não tributada e com cobrança do ICMS por substituição tributária), em operação interestadual (idDest=2) com combustíveis (tag: comb) derivados de petróleo (código ANP diferente de: 820101001, 820101010, 810102001, 810102004, 810102002, 810102003, 810101002, 810101001, 810101003, 220101003, 220101004, 220101002, 220101001, 220101005, 220101006, 560101001).<br>**Exceção 6:** A regra de validação acima não se aplica, para os CST=50 (Suspensão) e 51 (Diferimento), nas operações de devolução (finNFe=4).<br>**Exceção 7:** A regra de validação acima não se aplica, para o CST=51 (Diferimento), nas operações com CFOP 5.123, 5.922, 6.123 e 6.922, nem nas operações internas (idDest=1).de retorno de Mercadoria <!-- REVISAR p.17: texto "(idDest=1).de retorno de Mercadoria" sem espaçamento, possivelmente truncado ou concatenado no original; transcrito literalmente. --><br><!-- p.18 -->depositada em depósito fechado ou armazém geral (CFOP 5.906 ou 5.907).<br>**Exceção 8:** A critério da UF a regra de validação não se aplica para o CST=10 (Tributada e com cobrança do ICMS por substituição tributária) em operação interna (idDest=1).<br>**Exceção 9:** A regra de validação não se aplica para o CST=30 (Isenta ou não tributada e com cobrança do ICMS por substituição tributária), em operação interestadual (idDest=2) na aquisição de energia elétrica em Ambiente de Contratação Livre (ACL) com NCM: 27160000. | Obrig. | 508 | Rej. | Rejeição: CST incompatível na operação com Não Contribuinte [nItem: 999] |
| N12-80 | 55 | Operação com Contribuinte Isento de Inscrição Estadual (indIEDest=2) e CST constante na relação abaixo:<br>- 50-Suspensão na cobrança do ICMS;<br>- 51-Diferimento na cobrança do ICMS.<br>**Exceção 1:** A regra de validação acima não se aplica para o CST=50-Suspensão, nas operações com CFOP de conserto ou reparo (CFOP 1915, 1916, 2915, 2916, 5915, 5916, 6915 e 6916), de remessa para demonstração dentro do Estado (CFOP 1912, 1913, 5912 e 5913) ou de Remessa para Industrialização por encomenda (1901, 2901, 5901 e 6901).<br>**Exceção 2:** A regra de validação acima não se aplica, em produção, para Nota Fiscal com data de emissão anterior a 01/07/2016.<br>**Exceção 3:** A critério da UF, a regra de validação acima não se aplica para CST=51-Diferimento em operações internas (idDest=1) quando o destinatário for Pessoa Jurídica (tag:dest/CNPJ).<br>**Exceção 4:** Esta regra não se aplica na emissão da NFA-e nas operações internas, a critério da UF. | Obrig. | 529 | Rej. | Rejeição: CST incompatível na operação com Contribuinte Isento de Inscrição Estadual [nItem: 999] |
| N17c-10 | 55/65 | Informado a tag vFCP (id:N17c) e finNFe=1 (id:B25), verificar:<br>- Se CST=00 e vFCP (id:N17c) difere da vBC (id:N15)\* pFCP (id:N17b) (\*4) ou<br>- Se CST=10, 20,70, 90 ~~ou 51~~ e vFCP (id:N17c) difere da vBCFCP (id:N17a)\* pFCP (id:N17b) (\*4) (NT 2016.002) | Obrig. | 860 | Rej. | Rejeição: Valor do FCP informado difere de base de cálculo\*alíquota [nItem: 999] |

> **Revogado/Descontinuado:** a expressão “ou 51” na segunda condição da regra N17c-10 está riscada na NT original.

## NA. Item/ICMS para UF de Destino

<!-- p.19 -->
| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| NA15-10 | 55 | Se CST de ICMS = 00 e informado o grupo ICMSUFDest<br>Valor do ICMS Interestadual para UF de Destino (tag: vICMSUFDest) difere de:<br>**((vBCUFDest \* pICMSUFDest) - (vBC \* pICMSInter)) \* pICMSInterPart (\*4)** ¹<br><br>**Observação 1:** Se o resultado do cálculo for menor que zero deverá ser informado o valor “0.00”.<br>**Observação 2:** Se existir benefício fiscal no destino, o valor da base de cálculo no ICMS de destino (vBCUFDest) deverá ser informado considerando esse benefício.<br>**Exceção: A regra acima não se aplica para Nota Fiscal de Entrada (tpNF = 0)** | Obrig | 815 | Rej. | Rejeição: Valor do ICMS Interestadual para UF de Destino difere do calculado [nItem: 999] (Valor Informado: XXX, Valor Calculado:XXX) |
| NA17-10 | 55 | Se CST de ICMS = 00 e informado o grupo ICMSUFDest<br>Valor do ICMS Interestadual para UF do Remetente (tag: vICMSUFRemet) difere de:<br>**((vBCUFDest \* pICMSUFDest) - (vBC \* pICMSInter)) – vICMSUFDest (\*4)**<br><br>**Observação 1:** Se o resultado do cálculo for menor que zero deverá ser informado o valor “0.00”.<br>**Observação 2:** Se existir benefício fiscal de redução de base de cálculo no destino, o valor da base de cálculo no ICMS de destino (vBCUFDest) deverá ser informado considerando esse benefício.<br>**Exceção: A regra acima não se aplica para Nota Fiscal de Entrada (tpNF = 0)** | Obrig | 816 | Rej. | Rejeição: Valor do ICMS Interestadual para UF do Remetente difere do calculado [nItem: 999] (Valor Informado: XXX, Valor Calculado:XXX) |

¹ Nota de Rodapé do Manual de Orientação ao Contribuinte (MOC):

(\*4) O valor resultante da multiplicação deve ser arredondado para um valor numérico com duas casas decimais. Considerar uma tolerância de R$ 0,01 para mais ou para menos na validação.

## W. Total da NF-e

<!-- p.20 -->
| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| W16-10 | 55/65 | -Total do vNF (id:W16) difere do somatório de:<br>(+) vProd (id:W07)<br>(-) vDesc (id:W10)<br>(-) vICMSDeson (id:W04a)<br>(+) vST (id:W06)<br>(+) vFCPST (id:W06a)<br>(+) vFrete (id:W08)<br>(+) vSeg (id:W09)<br>(+) vOutro (id:W15)<br>(+) vII (id:W11)<br>(+) vIPI (id:W12)<br>(+) vIPIDevol (id: W12a)<br>(+) vServ (id:W18) (\*3) (NT 2011/005)<br>(+) vPIS (id: R06, campo: PISST/vPIS), se indSomaPISST=1<br>(+) vCofins (id: T06, campo: COFINSST/vCOFINS ), se indSomaCOFINSST =1<br><br>**Exceção 1: Faturamento direto de veículos novos:**<br>Se informada operação de Faturamento Direto para veículos novos (tpOp = 2, id:J02):<br>– Total do vNF (id:W16) difere do somatório de:<br>(+) vProd (id:W07)<br>(-) vDesc (id:W10)<br>(-) vICMSDeson (id:W04a)<br>(+) vFrete (id:W08)<br>(+) vSeg (id:W09)<br>(+) vOutro (id:W15)<br>(+) vII (id:W11)<br>(+) vIPI (id:W12)<br>(+) vServ (id:W18) (\*3) (NT 2011/005)<br>(+) vPIS (id: R06, campo: PISST/vPIS), se indSomaPISST=1<br>(+) vCofins(id: T06, campo: COFINSST/vCOFINS ), se indSomaCOFINSST =1<br><br>**Exceção 2**: Esta regra não se aplica nas operações de importação (CFOP inicia com “3”)<br><br>**Exceção 3** (NT 2013/005 v 1.22): Esta regra de validação não deverá causar rejeição caso não tenha sido subtraído o valor do ICMS Desonerado (vICMSDeson) do valor total da NF-e. ) | Facult. | 610 | Rej. | Rejeição: Total da NF difere do somatório dos Valores compõe o valor Total da NF. |

## ZD. Informações do Responsável Técnico

<!-- p.21 -->
| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| ZD01-10 | 55/65 | Não informado o grupo de informações do responsável técnico<br><br>**Observação**: Implementação a critério da UF.<br><br>**Exceção:** Esta RV não se aplica para a NFA-e (Nota Fiscal Avulsa emitida no site do Fisco, procEmi=1 ou 2) | Facul. | 972 | Rej. | Rejeição: Obrigatória as informações do responsável técnico |
| ZD02-10 | 55/65 | Se informado CNPJ do responsável técnico:<br>• CNPJ com zeros, nulo ou DV inválido | Facul. | 973 | Rej. | Rejeição: CNPJ do responsável técnico inválido |
| ZD07-10 | 55/65 | Se informado o grupo do Responsável Técnico é obrigatória a informação do identificador do CSRT (tag: idCSRT) e Hash do CSRT (tag: hashCSRT)<br><br>**Observação**: Implementação a critério da UF. | Facul. | 975 | Rej. | Rejeição: Obrigatória a informação do identificador do CSRT e do Hash do CSRT |

## 1. Banco de Dados: Emitente

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| 1C17-50 | 55 | Se operação de saída interestadual (tpNF=1 e idDest=2) e operação com Consumidor Final (indFinal=1) e indIEDest=9:<br>• Acessar Cadastro Centralizado de Contribuinte (Chave: UF do Destinatário, CNPJ do Emitente, cSitCNPJ=10)<br>• Denegar a NF-e se for encontrado registro de bloqueio no CCC<br>~~**Nota**: Regra de Validação opcional por UF, conforme Ajuste SINIEF 33/19.~~<br>**Nota**: Regra de Validação não aplicável pelas UFs não signatárias, conforme parágrafo 7º da Cláusula sexta, do Ajuste SINIEF 07/05. | Facul. | 307 | Den. | Uso Denegado: Emitente bloqueado pela UF de destino, em operação com consumidor final |

> **Revogado/Descontinuado:** a “Nota” da regra 1C17-50 (“Regra de Validação opcional por UF, conforme Ajuste SINIEF 33/19.”) está riscada na NT original.

## 3. Banco de Dados: Inutilização

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| 3B08-100 | 55/65 | Se Tipo de Emissão da NF-e for 1 (Emissão normal), 6 (Contingência SVC-AN) ou 7 (Contingência SVC-RS):<br>• Acesso BD de Inutilização (Chave: Modelo, UF, CNPJ/CPF, Série, Número):<br>&nbsp;&nbsp;◦ Numeração da NF-e está inutilizada (NT 2011/004) (NT 2018.001)<br><br>**Observação:** Se cUF(B02) for igual 35(SP) validar também se Tipo de Emissão da NF-e for 2 (Contingência FS-IA), 4(Contingência EPEC) ou 5(Contingência FS-DA). | Obrig. | 206 | Rej. | Rejeição: Numeração da NF-e já está inutilizada na Base de Dados da SEFAZ |

## 5. Banco de Dados: Destinatário

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| 5E17-10 | 55 | Se informada IE do Destinatário:<br>• Acessar Cadastro de Contribuinte da UF (Chave: UF Dest, IE Dest.) (\*5)<br>• IE destinatário não cadastrada ~~(\*7)~~ (NT 2019.001 v1.00) | Obrig. | 233 | Rej. | Rejeição: IE do destinatário não cadastrada |

<!-- p.22 -->
[...]

~~(\*7) Algumas UF ainda não cadastraram no CCC os Contribuintes Pessoa Física (IE e CPF). Portanto, as SEFAZ Autorizadoras que utilizam o CCC para validar o destinatário somente poderão efetuar as validações assinaladas se o Contribuinte (IE e CPF) existir no CCC.~~

> **Revogado/Descontinuado:** a nota “(\*7)” (cadastro de pessoas físicas no CCC) e a referência “(\*7)” da regra 5E17-10 estão riscadas na NT original.
