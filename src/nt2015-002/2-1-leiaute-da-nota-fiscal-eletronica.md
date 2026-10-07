<!-- p.7 -->
# 02.1 Leiaute da Nota Fiscal Eletrônica

*Serviço 02: Autorização de Uso da Nota Fiscal (item 4.1 do MOC)*

## A. Formulário de Segurança para a NFC-e (Não altera leiaute)

Documentada a retirada da opção de contingência usando Formulário de Segurança (tpEmis=2 ou 5) para a emissão de NFC-e em contingência.

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| 26 | B22 | tpEmis | Tipo de Emissão | E | B01 | N | 1-1 | 1 | 1=Emissão normal (não em contingência);<br>2=Contingência FS-IA, com impressão do DANFE em Formulário de Segurança - Impressor Autônomo;<br>~~3=Contingência SCAN (Sistema de Contingência do Ambiente Nacional);~~ *Desativado*<br>4=Contingência EPEC (Evento Prévio da Emissão em Contingência);<br>5=Contingência FS-DA, com impressão do DANFE em Formulário de Segurança - Documento Auxiliar;<br>6=Contingência SVC-AN (SEFAZ Virtual de Contingência do AN);<br>7=Contingência SVC-RS (SEFAZ Virtual de Contingência do RS);<br>9=Contingência off-line da NFC-e;<br>**Observação**: Para a NFC-e somente é válida a opção de contingência: 9-Contingência Off-Linee, a critério da UF, opção 4-Contingência EPEC. |

## B. Campo de Identificação do Destinatário Estrangeiro (Não altera leiaute)

O campo de identificação de destinatário estrangeiro (tag:idEstrangeiro, id:E03a) tem um formato livre, não podendo ser preenchido com caracteres que prejudicam a Consulta da NFC-e via QR-Code. Documentado no leiaute o conjunto de caracteres que podem ser usados na identificação do destinatário estrangeiro.

<!-- p.8 -->
## E. Identificação do Destinatário da Nota Fiscal

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| 64a | E03a | idEstrangeiro | Identificação do destinatário no caso de comprador estrangeiro | CE | E01 | C | 1-1 | 0,<br>5-20 | Informar esta tag no caso de operação com o exterior, ou para comprador estrangeiro. Informar o número do passaporte ou outro documento legal para identificar pessoa estrangeira (campo aceita valor nulo).<br>**Observação**: Campo aceita algarismos, letras (maiúsculas e minúsculas) e os caracteres do conjunto que segue: [:.+-/()] |

## C. Grupo de Combustível: Informação de “Encerrante”

Dentro do grupo de informações relacionado com as operações de combustíveis, foi incluído o subgrupo de “encerrante” que permite o controle sobre as operações de venda de combustíveis, de forma semelhante à atualmente em vigor.

### LA. Detalhamento Específico de Combustíveis

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| 162j | LA11 | encerrante | Informações do grupo de “encerrante” | G | LA01 |  | 0-1 |  | Informações do grupo de “encerrante” disponibilizado por hardware específico acoplado à bomba de combustível, definido no controle da venda do Posto Revendedor de Combustível. |
| 162k | LA12 | nBico | Número de identificação do bico utilizado no abastecimento | E | LA11 | N | 1-1 | 1-3 | Informar o número do bico utilizado no abastecimento. |
| 162l | LA13 | nBomba | Número de identificação da bomba ao qual o bico está interligado | E | LA11 | N | 0-1 | 1-3 | Caso exista, informar o número da bomba utilizada. |
| 162m | LA14 | nTanque | Número de identificação do tanque ao qual o bico está interligado | E | LA11 | N | 1-1 | 1-3 | Informar o número do tanque utilizado. |
| 162n | LA15 | vEncIni | Valor do Encerrante no início do abastecimento | E | LA11 | N | 1-1 | 12v3 | Informar o valor da leitura do contador (Encerrante) no início do abastecimento |
| 162o | LA16 | vEncFin | Valor do Encerrante no final do abastecimento | E | LA11 | N | 1-1 | 12v3 | Informar o valor da leitura do contador (Encerrante) no término do abastecimento |

## D. Motivo de Desoneração do ICMS: Olimpíadas Rio 2016

Definido um novo valor para o campo de “Motivo de Desoneração do ICMS” (tag:motDesICMS, id:N28) relacionado com a Olimpíadas Rio 2016, conforme legislação vigente. O novo valor será validado via *Schema* XML, publicado no Portal da NF-e.

**Grupo Tributação do ICMS= 40, 41, 50**

<!-- p.9 -->
| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| 204.02 | N28 | motDesICMS | Motivo da desoneração do ICMS | E | N27.1 | N | 1-1 | 2 | Campo será preenchido quando o campo anterior estiver preenchido. Informar o motivo da desoneração:<br>1=Táxi;<br>3=Produtor Agropecuário;<br>4=Frotista/Locadora;<br>5=Diplomático/Consular;<br>6=Utilitários e Motocicletas da Amazônia Ocidental e Áreas de Livre Comércio (Resolução 714/88 e 790/94 – CONTRAN e suas alterações);<br>7=SUFRAMA;<br>8=Venda a Órgão Público;<br>9=Outros. (NT 2011/004);<br>10=Deficiente Condutor (Convênio ICMS 38/12);<br>11=Deficiente Não Condutor (Convênio ICMS 38/12).<br>16=Olimpíadas Rio 2016;<br><br>Observação: Revogada a partir da versão 3.10 a possibilidade de usar o motivo 2=Deficiente Físico |

## E. Código de Enquadramento Legal do IPI (Não altera leiaute)

Em relação ao “Código de Enquadramento Legal do IPI” (tag:cEnq, id:O06), o Manual de Orientação do Contribuinte (MOC) orienta o preenchimento do campo com o valor “999”, enquanto não forem informados os valores possíveis para este código de enquadramento. Nesta NT é definida a tabela de valores possíveis para o campo, incluindo os códigos relacionados com as Olimpíadas Rio 2016, mantendo o valor “999” como uma das possibilidades.

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| 251 | O06 | cEnq | Código de Enquadramento Legal do IPI | E | O01 | N | 1-1 | 1-3 | Codificação conforme Anexo XIV - “Código de Enquadramento Legal do IPI”. |

<!-- p.10 -->
## F. Grupo de Formas de Pagamento

### YA. Formas de Pagamento

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| 398a | YA01 | pag | Grupo de Formas de Pagamento | G | A01 |  | 0-100 |  | Grupo obrigatório para a NFC-e, a critério da UF. Não informar para a NF-e (modelo 55). |
| 398b | YA02 | tPag | Forma de pagamento | E | YA01 | N | 1-1 | 2 | 01=Dinheiro<br>02=Cheque<br>03=Cartão de Crédito<br>04=Cartão de Débito<br>05=Crédito Loja<br>10=Vale Alimentação<br>11=Vale Refeição<br>12=Vale Presente<br>13=Vale Combustível<br>99=Outros |
| 398c | YA03 | vPag | Valor do Pagamento | E | YA01 | N | 1-1 | 13v2 |  |
| 398d | YA04 | card | Grupo de Cartões | G | YA01 | - | 0-1 |  |  |
| 398d.1 | YA04a | tpIntegra | Tipo de Integração para pagamento | E | YA04 | N | 0-1 | 1 | Tipo de Integração do processo de pagamento com o sistema de automação da empresa:<br>1=Pagamento integrado com o sistema de automação da empresa (Ex.: equipamento TEF, Comércio Eletrônico);<br>2= Pagamento não integrado com o sistema de automação da empresa (Ex.: equipamento POS); |
| 398e | YA05 | CNPJ | CNPJ da Credenciadora de cartão de crédito e/ou débito | E | YA04 | C | 0-1 | 14 | Informar o CNPJ da Credenciadora de cartão de crédito / débito. |
| 398f | YA06 | tBand | Bandeira da operadora de cartão de crédito e/ou débito | E | YA04 | N | 0-1 | 2 | 01=Visa;<br>02=Mastercard;<br>03=American Express;<br>04=Sorocred;<br>99=Outros; |
| 398g | YA07 | cAut | Número de autorização da operação cartão de crédito e/ou débito | E | YA04 | C | 0-1 | 1-20 | Identifica o número da autorização da transação da operação com cartão de crédito e/ou débito |

<!-- p.11 -->
## G. Grupo de Informações Suplementares

Incluído no leiaute da Nota Fiscal, um grupo opcional de “Informações Suplementares”, contendo um texto que representa o conteúdo do QR-Code impresso no DANFE - NFC-e. Veja que este grupo de informações está no mesmo nível do grupo “infNFe”, não afetando portanto a assinatura digital da Nota Fiscal.

### ZX. Informações Suplementares da Nota Fiscal

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **600** | **ZX01** | **infNFeSupl** | **Informações suplementares da Nota Fiscal** | **G** | **Raiz** | **-** | **0-1** | **-** | **Informações suplementares da Nota Fiscal, não afetando a assinatura digital.** |
| 601 | ZX02 | qrCode | Texto com o QR-Code impresso no DANFE NFC-e. | E | ZX01 | C | 1-1 | 100-600 | Informar a URL da “Consulta da NFC-e via QR-Code” no site da SEFAZ, compreendendo:<br>- Endereço do site da UF, incluindo o protocolo de comunicação (“http://” ou “https://”);<br>- Caractere separador “?”;<br>- Parâmetros do QR-Code, concatenados usando o “&” como separador.<br>**Nota 1**: Vide “Manual de Padrões Técnicos do DANFE NFC-e e QR-Code” que documenta os endereços dos sites das UF, os parâmetros do QR-Code e a fórmula de montagem e/ou cálculo dos parâmetros.<br>**Nota 2**: Respeitar o uso de caracteres maiúsculos / minúsculos, conforme consta no referido Manual.<br>**Nota 3**: O caractere “&” é um caractere reservado do XML, portanto não pode aparecer no conteúdo da tag. Para viabilizar a informação do QR-Code, o conteúdo deste campo deve ser informado como: **`<![CDATA[texto]]>`**<br>**Exemplo:** `<![CDATA[https://www.sefaz.rs.gov.br/NFCE/NFCE-COM.aspx?chNFe=43150108287693000157651010000000971000001251&nVersao=100&tpAmb=2&cDest=99999999000191&dhEmi=323031352d30312d32305431373a30303a34392d30323a3030&vNF=1.00&vICMS=0.00&digVal=2f4a703477714e6d6e4e646d31776b64743936655a486b65354f513d&cIdToken=000001&cHashQRCode=ecc4f0e7e612456f2e3521768bd572b6f0eae240]]>` |

