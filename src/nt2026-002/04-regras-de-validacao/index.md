<!-- p.8 -->
# 4. Regras de Validação

Validações específicas do Web Service - NFeAutorizacao

## B. Identificação da NF-e

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| B06-10 | 65 | ~~NFC-e não é aceita pela UF do Emitente~~ | ~~Obrig.~~ | ~~702~~ | ~~Rej.~~ | ~~Rejeição: NFC-e não é aceita pela UF do Emitente~~ |
| B09-20 | 55 | Independentemente do Tipo de Emissão:<br>- Aceita NF-e com atraso de até 7 dias, retornando cStat=”100-Autorizado Uso da NF-e”;<br>- Aceita NF-e com atraso superior a 7 dias, retornando cStat=”150-Autorizado Uso da NF-e, autorização fora de prazo”;<br>**Exceção 01:** A critério da UF, após 30 dias (ou outro limite definido pela SEFAZ) somente será aceita NF-e emitida em contingência (tpEmis=2, 4, 5, 9). | Obrig. | 228 | Rej. | Rejeição: Data de Emissão muito atrasada |
| B09-40 | 55/65 | Se NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6):<br>- Se Tipo de Emissão=1-Normal (ou 6-SVC-AN, 7-SVC-RS):<br>- Data-Hora de Emissão com atraso superior a 5 minutos em relação ao horário de recepção na SEFAZ.<br>**Exceção 1:** A critério da UF, a rejeição acima pode ser efetuada para qualquer Tipo de Emissão.<br>**Exceção 2:** A critério da UF, pode ser aceita a NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6) e com Data de Emissão muito atrasada, desde que tenha sido emitida em contingência (tpEmis=4, 9). A NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6) transmitida para a SEFAZ Autorizadora após o prazo de 24 horas deve retornar cStat="150-Autorizado Uso da NF-e, autorização fora de prazo".<br>**Observação 1:** A emissão da NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6) deve ocorrer de forma on-line, real-time, com uma tolerância de até 5 minutos, devido ao sincronismo de horário do servidor da Empresa e o servidor da SEFAZ Autorizadora. | Obrig. | 704 | Rej. | Rejeição: NFC-e ou NF-e com DANFE Simplificado Tipo 2 com Data-Hora de emissão atrasada |
| B10-10 | 55/65 | Se NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6):<br>- Data de entrada/saída informada indevidamente. | Obrig. | 705 | Rej. | Rejeição: NFC-e ou NF-e com DANFE Simplificado Tipo 2 com data de entrada/saída |
| B11-10 | 55/65 | Se NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6):<br>- Não é permitida operação de entrada (tag:tpNF=0) | Obrig. | 706 | Rej. | Rejeição: NFC-e ou NF-e com DANFE Simplificado Tipo 2 para operação de entrada |
| B11a-10 | 55/65 | Se NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6):<br>- Não é permitida operação interestadual ou com o exterior (tag:idDest<>1) | Obrig. | 707 | Rej. | Rejeição: NFC-e ou NF-e com DANFE Simplificado Tipo 2 para operação interestadual ou com o exterior |
| B22-10 | 55 | Se NF-e com contingência off-line (tag:tpEmis=9) e tipo de impressão difere de DANFE Simplificado Tipo 2 (tag:tpImp <> 6) | Obrig | 711 | Rej. | Rejeição: NF-e com contingência off-line em operação não permitida |
| B25-20 | 55/65 | Se NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6):<br>- Não é permitida finalidade diferente de “1-Normal” (tag:finNFe <> 1) | Obrig | 715 | Rej. | Rejeição: NFC-e ou NF-e com DANFE Simplificado Tipo 2 com finalidade inválida |

<!-- p.9 -->

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| B25a-10 | 55/65 | Se NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6):<br>- Operação não destinada a Consumidor Final (tag:indFinal=0) | Obrig | 716 | Rej. | Rejeição: NFC-e ou NF-e com DANFE Simplificado Tipo 2 em operação não destinada a consumidor final |
| ~~B25b-10~~ | ~~55~~ | ~~NF-e com indicativo de NFC-e com entrega a domicílio (tag:indPres=4)~~ | ~~Obrig.~~ | ~~794~~ | ~~Rej.~~ | ~~Rejeição: NF-e com indicativo de NFC-e com entrega a domicílio~~ |
| B25b-20 | 55/65 | Se NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6):<br>- Indicador de presença difere de:<br>- “1-Operação presencial”<br>- “4-Operações não presenciais com NFC-e e NF-e com DANFE Simplificado Tipo 2”<br>- “5-Operação presencial, fora do estabelecimento”<br>**Observação:** tag:indPres<>1, 4 e 5. | Obrig. | 717 | Rej. | Rejeição: NFC-e ou NF-e com DANFE Simplificado Tipo 2 em operação não permitida |
| ~~B25b-30~~ | ~~65~~ | ~~NFC-e com operação de entrega a domicílio, não permitida para a UF (parametrizável)~~ | ~~Obrig.~~ | ~~785~~ | ~~Rej.~~ | ~~Rejeição: NFC-e com entrega a domicílio não permitida pela UF~~ |

> **Revogado/Descontinuado:** as regras B06-10, B25b-10 e B25b-30 estão riscadas na NT original (regras removidas).

## BA. Documento Fiscal Referenciado

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| BA01-10 | 55/65 | NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6) não pode referenciar outros documentos (tag:NFref) | Obrig. | 708 | Rej. | Rejeição: NFC-e ou NF-e com DANFE Simplificado Tipo 2 não pode referenciar documento fiscal |
| BA02-35 | 55 | Se informada uma NF-e referenciada (tag:refNFe):<br>- Se NF-e de Saída (tpNF=1):<br>- Se Finalidade diferente de “2-NFe Complementar” (tag:finNFe<>2) e diferente de “4-NFe de Devolução” (tag:finNFe<>4):<br>- Modelo da NF-e referenciada não pode ser:<br>- NFC-e, modelo 65;<br>- CF-e, modelo 59;<br>- NF-e, modelo 55, com DANFE Simplificado Tipo 2 (tag:tpImp=6). | Obrig. | 679 | Rej. | Rejeição: Chave de Acesso referenciada com Modelo inválido [nOcor:nnn] |
| BA03-10 | 55 | Se informada NF Modelo 1 ou NF Modelo 2 referenciada (tag:refNF):<br>- ~~Verificar duplicidade de Nota Fiscal Modelo 1 ou 2 referenciada (mesmo CNPJ, Modelo, Série, Número) (NT 2016.002)~~<br>- Proibido informar NF referenciada (tag: refNF) | Obrig. | 681 | Rej. | Rejeição: Proibido informar NF referenciada [nOcor:nnn] |
| ~~BA05-10~~ | ~~55~~ | ~~Se informada NF Modelo 1 referenciada (tag:refNF):<br>- NF modelo 1 referenciada emitida há mais de 20 anos da data atual ou com data de emissão superior ao Ano-Mês atual (NT 2015.002)~~ | ~~Facult.~~ | ~~317~~ | ~~Rej.~~ | ~~Rejeição: NF modelo 1 referenciada com data de emissão inválida [nOcor:nnn]~~ |
| ~~BA06-10~~ | ~~55~~ | ~~Se informada NF Modelo 1 referenciada (tag:refNF):<br>- CNPJ com zeros, nulo ou DV inválido~~ | ~~Facult.~~ | ~~548~~ | ~~Rej.~~ | ~~Rejeição: NF modelo 1 referenciada com data de emissão inválida [nOcor:nnn]~~ |
| BA10-10 | 55 | Se informada NF de Produtor referenciada (tag:refNFP):<br>- ~~Verificar duplicidade de Nota Fiscal de Produtor referenciada (mesma IE, Modelo, Série, Número) (NT 2013/003) (NT 2015.002)~~<br>- Proibido referenciar NF de Produtor (tag:refNFP) | Obrig. | 682 | Rej. | Rejeição: Proibido referenciar NF de Produtor [nOcor:999] |
| BA10-20 | 55 | Contranota de Produtor sem Nota Fiscal referenciada:<br>- ~~não informada NF de Produtor referenciada (tag:refNFP);~~<br>- ~~e~~ Não informada Nota Fiscal referenciada (tag:refNFe).<br>**Observação 1:** A Contranota de Produtor é identificada como uma Nota Fiscal de entrada (tag:tpNF=0) com finalidade de emissão normal (tag:finNFe=1) e remetente da mesma UF com IE de Produtor Rural.<br>**Observação 2:** A utilização e controle da Contranota de Produtor é opcional, a critério da UF. | Facult. | 318 | Rej. | Rejeição: Contranota de Produtor sem Nota Fiscal referenciada |

<!-- p.10 -->

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| BA10-30 | 55 | Contranota de Produtor não pode referenciar somente Nota Fiscal de entrada:<br>- ~~não informada NF de Produtor referenciada (tag:refNFP);~~<br>- ~~e~~ Não informada Nota Fiscal referenciada (tag:refNFe) de saída (tag:tpNF=1).<br>**Observação 1:** Identificação de Contranota de Produtor conforme observação da validação anterior.<br>**Observação 2:** A utilização e controle da Contranota de Produtor é opcional, a critério da UF. (NT 2015.002) | Facult. | 319 | Rej. | Rejeição: Contranota de Produtor não pode referenciar somente Nota Fiscal de entrada |
| BA10-40 | 55 | Contranota de Produtor referencia somente Nota Fiscal de outro emitente. Não existe nenhuma das ocorrências abaixo:<br>- ~~IE da NF de Produtor referenciada (tag:refNFP/IE) idêntica à IE do Emitente (emit/IE) ou do Remente (dest/IE);~~<br>- IE do emitente da NF referenciada (tag:emit/IE) idêntica à IE do Emitente (emit/IE) ou do Remente (dest/IE).<br>**Observação 1:** Identificação de Contranota de Produtor conforme observação da validação anterior.<br>**Observação 2:** A utilização e controle da Contranota de Produtor é opcional, a critério da UF. (NT 2015.002)<br>**Observação 3:** A critério da UF, a validação da IE do emitente da NF referenciada (tag:emit/IE) pode ser substituída por:<br>- CNPJ-8 do emitente da NF referenciada (tag:emit/CNPJ) idêntico ao CNPJ-8 do Emitente (tag: emit/CNPJ) ou do Remetente (tag: dest/CNPJ). (NT 2019.001) | Facult. | 320 | Rej. | Rejeição: Contranota de Produtor referencia somente NF de outro emitente |
| BA10-50 | 55 | Contranota de Produtor só pode referenciar NF-e (tag: refNFe) ~~ou NF de Produtor Modelo 4 (tag: refNFP)~~.<br>**Observação 1:** Identificação de Contranota de Produtor conforme observação da validação anterior.<br>**Observação 2:** Regra opcional, a critério da UF. (NT2019.001) | Facult. | 922 | Rej. | Rejeição: Contranota de Produtor só pode referenciar NF-e ~~ou NF de Produtor Modelo 4~~ |
| ~~BA12-10~~ | ~~55~~ | ~~Se informada NF de Produtor referenciada (tag:refNFP):<br>- NF de produtor referenciada emitida a mais de 20 anos da data atual ou com data de emissão superior ao Ano-Mês atual (NT 2015.002)~~ | ~~Facult.~~ | ~~322~~ | ~~Rej.~~ | ~~Rejeição: NF de produtor referenciada com data de emissão inválida [nOcor:nnn]~~ |
| ~~BA13-10~~ | ~~55~~ | ~~Se informada NF de Produtor referenciada (tag:refNFP):<br>- CNPJ com zeros, nulo ou DV inválido~~ | ~~Facult.~~ | ~~549~~ | ~~Rej.~~ | ~~Rejeição: CNPJ da NF referenciada de produtor inválido [nOcor: 999]~~ |
| ~~BA14-10~~ | ~~55~~ | ~~Se informada NF de Produtor referenciada (tag:refNFP):<br>- CPF com zeros, nulo, 111..., 222, ..., ou DV inválido (NT 2012/003)~~ | ~~Facult.~~ | ~~550~~ | ~~Rej.~~ | ~~Rejeição: CPF da NF referenciada de produtor inválido [nOcor: 999]~~ |
| ~~BA15-10~~ | ~~55~~ | ~~Se informada NF de Produtor referenciada (tag:refNFP):<br>- IE com zeros, nulo ou DV inválido para a UF~~ | ~~Facult.~~ | ~~551~~ | ~~Rej.~~ | ~~Rejeição: IE da NF referenciada de produtor inválido~~ |
| ... | ... | ... | ... | ... | ... | ... |

> **Revogado/Descontinuado:** as regras BA05-10, BA06-10, BA12-10, BA13-10, BA14-10 e BA15-10 estão riscadas na NT original (regras removidas), assim como os trechos riscados das regras BA03-10, BA10-10, BA10-20, BA10-30, BA10-40 e BA10-50.

<!-- p.11 -->

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| ~~BA20-10~~ | ~~55~~ | ~~Se informado Cupom Fiscal referenciado (tag:refECF):<br>- Verificar duplicidade de Cupom Fiscal referenciado (mesmo Modelo, Número de Ordem e COO) (NT 2013/003)~~ | ~~Facult.~~ | ~~684~~ | ~~Rej.~~ | ~~Rejeição: Duplicidade de Cupom Fiscal referenciado (Modelo, Número de Ordem e COO) [nOcor: 999]~~ |
| ~~BA20-20~~ | ~~55~~ | ~~Informado Cupom Fiscal referenciado (tag: refECF) ou informado NF modelo 1 ou 2 referenciada (tag: refNF) em NF-e de operação interestadual ou com o exterior (tag: idDest<>1) (NT 2019.001)~~ | ~~Facult.~~ | ~~923~~ | ~~Rej.~~ | ~~Rejeição: Referenciado documento de operação interna em operação interestadual. [nOcor: 999]~~ |
| BA20-30 | 55 | Se Informado Cupom Fiscal referenciado (tag: refECF) ~~em UF que não permite essa referência~~:<br>- Proibido referenciar Cupom Fiscal (tag: refECF)<br>~~**Observação:** Regra de validação opcional, a critério da UF. (NT 2019.001)~~ | Obrig. | 924 | Rej. | Rejeição: Proibido referenciar Cupom Fisca [nOcor: 999] |

> **Revogado/Descontinuado:** as regras BA20-10 e BA20-20 estão riscadas na NT original (regras removidas), assim como os trechos riscados da regra BA20-30.

## C. Identificação do Emitente

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| C18-10 | 55/65 | Se NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6):<br>- IE de Substituto Tributário (tag:emit/IEST) informada indevidamente | Obrig. | 718 | Rej. | Rejeição: NFC-e ou NF-e com DANFE Simplificado Tipo 2 não deve informar IE de Substituto Tributário |

## E. Identificação do Destinatário

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| E01-20 | 55/65 | Se NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6) em operação não presencial (indPres=4):<br>- Identificação do destinatário (tag:infNFe/dest) não informada | Obrig. | 787 | Rej. | Rejeição: NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6) em operação não presencial sem a identificação do destinatário |

## F. Local da Retirada

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| F01-10 | 55/65 | Se NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6):<br>- Local de retirada (tag:retirada) informado indevidamente | Obrig. | 669 | Rej. | Rejeição: Local de retirada informado indevidamente |

## G. Local da Entrega

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| G01-10 | 55/65 | Se NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6):<br>- Local de entrega (tag:entrega) informado indevidamente<br>**Observação:** Implementação futura. | Obrig. | 670 | Rej. | Rejeição: Local de entrega informado indevidamente |

## I. Produtos e Serviços

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| I04-10 | 55/65 | Se documento for NFC-e (mod=65) ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6):<br>- Se ambiente de homologação (tag:tpAmb=2, id:B24):<br>- Descrição do primeiro item da Nota Fiscal (tag:xProd) deve ser informada como “NOTA FISCAL EMITIDA EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL" | Obrig. | 373 | Rej. | Rejeição: Descrição do primeiro item diferente de NOTA FISCAL EMITIDA EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL [nItem:nnn] |

<!-- p.12 -->

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| I08-150 | 55/65 | NFC-e (mod=65) ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6) com CFOP inválido. Aceitar unicamente os CFOP:<br>- 5.101: Venda de produção do estabelecimento;<br>- 5.102: Venda de mercadoria de terceiros;<br>- 5.103: Venda de produção do estabelecimento efetuada fora do estabelecimento;<br>- 5.104: Venda de mercadoria adquirida ou recebida de terceiros, efetuada fora do estabelecimento;<br>- 5.115: Venda de mercadoria de terceiros, recebida anteriormente em consignação mercantil;<br>- 5.405: Venda de mercadoria de terceiros, sujeita a ST, como contribuinte substituído;<br>- 5.656: Venda de combustível ou lubrificante de terceiros, destinados a consumidor final;<br>- 5.667: Venda de combustível ou lubrificante a consumidor ou usuário final estabelecido em outra Unidade da Federação;<br>- 5.910: Remessa em bonificação, doação ou brinde;<br>- 5.933: Prestação de serviço tributado pelo ISSQN (Nota Fiscal conjugada); (NT 2013/005 v 1.20) (NT 2015.002)<br>**Observação 1:** Para a UF do RS, poderá ser permitido o uso do CFOP 5.949 com CSOSN=900 ou CST=90.<br>**Observação 2:** Para a UF do SP, poderá ser permitido o uso do CFOP 5.949 com CSOSN=900 ou CST=40. | Obrig. | 725 | Rej. | Rejeição: NFC-e ou NF-e com DANFE Simplificado Tipo 2 com CFOP inválido[nItem:nnn] |
| I08-180 | 55 | NF-e (mod=55) com lançamento relativo a Cupom Fiscal (CFOP=5.929 ou CFOP=6.929) e existe NFC-e referenciada (tag:refNFe com modelo 65)<br>~~**Observação:** Regra de Validação opcional, a critério da UF poderá ser aceito o CFOP 5.929. (NT 2015.002)~~<br>**Observação:** Regra de Validação obrigatória em produção a partir de 05/10/2026. | Obrig. | 375 | Rej. | Rejeição: NF-e com lançamento relativo a Cupom Fiscal referencia uma NFC-e [nItem:nnn] |
| ~~I08-184~~ | ~~55~~ | ~~NF-e (mod=55) com lançamento relativo a Cupom Fiscal (CFOP=5.929ou CFOP6.929) sem Documento Fiscal referenciado (tag:NFref, idBA01)~~ | ~~Obrig.~~ | ~~701~~ | ~~Rej.~~ | ~~Rejeição: Não informado Nota Fiscal referenciada (Lançamento relativo a Cupom Fiscal) [nItem: nnn]~~ |
| ~~I08-186~~ | ~~55~~ | ~~NF-e (mod=55) com lançamento relativo a Documento Fiscal de Varejo (CFOP=5.929 ou CFOP 6.929) com ECF referenciado (tag: refECF)~~<br>~~**Observação:** Regra opcional, a critério da UF~~<br>~~**Observação:** Regra de Validação obrigatória em produção a partir de 05/10/2026.~~ | ~~Obrig.~~ | ~~953~~ | ~~Rej.~~ | ~~Rejeição: Informado ECF referenciado para CFOP 5.929 em UF que não permite essa referência~~ |
| I17b-10 | 55/65 | NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6) com indicador de item não participante do total (tag:indTot=0) | Obrig. | 774 | Rej. | Rejeição: NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6) com indicador de item não participante do total [nItem: 999] |

> **Revogado/Descontinuado:** as regras I08-184 e I08-186 estão riscadas na NT original (regras removidas), assim como a observação riscada da regra I08-180.

<!-- p.13 -->

## J. Item / Veículos Novos

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| J01-10 | 55/65 | NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6) com grupo de Veículos novos (tag:veicProd) | Obrig. | 736 | Rej. | Rejeição: NFC-e ou NF-e com DANFE Simplificado Tipo 2 com grupo de Veículos novos |

## K. Item / Medicamentos

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| K01-10 | 55 | Informado NCM de medicamento é obrigatório o preenchimento do Grupo de Medicamento (tag: med). (NT 2021.004)<br>**Exceção**: Regra de validação não se aplica a NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6)<br>**Observação 1:** Regra de validação a critério da UF.<br>**Observação 2:** Os medicamentos são classificados nos NCMs que começam com 3001, 3002, 3003, 3004, 3005 e 3006.<br>**Observação 3:** Para os medicamentos que não possuam código de Produto da ANVISA, o campo cProdANVISA do Grupo de Medicamentos deverá ser preenchido com o literal “ISENTO”.<br>**Observação 4:** Implementação futura. | Facul. | 840 | Rej. | Rejeição: NCM de medicamento e não informado o grupo de medicamento (med) [nItem:nnn] |
| K01-20 | 55 | Se informado Grupo de Medicamentos (tag:med):<br>- Obrigatório preenchimento do grupo rastro (id: I80) (NT 2016.002)<br>**Exceção 1:** Regra de Validação não se aplica para NF-e de devolução (finNfe = 4).<br>**Exceção 2:** Regra de Validação não se aplica para NF-e de venda não presencial (indPres = 2 ou 3).<br>**Exceção 3:** Regra de Validação não se aplica para CFOP de venda para entrega futura (CFOPs 5922 e 6922) ou CFOP de Venda à Ordem (5118, 6118, 5119, 6119, 5120 e 6120) (NT 2021.004).<br>**Exceção 4:** Regra de validação não se aplica para NF-e de entrada (tpNF=0).<br>**Exceção 5:** Regra de validação não se aplica a NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6). | Obrig | 873 | Rej | Rejeição: Operação com medicamentos e não informado os campos de rastreabilidade [nItem: 999] |

## L. Item / Armamentos

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| L01-10 | 55/65 | NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6) com grupo de Armamentos (tag:arma) | Obrig. | 738 | Rej. | Rejeição: NFC-e ou NF-e com DANFE Simplificado Tipo 2 com grupo de Armamentos |

## LA. Item / Combustível

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| LA11-10 | 55/65 | NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6) sem a informação do grupo de Encerrante na venda de combustível para consumidor final.<br>**Observação:** Regra de validação opcional a critério da UF.<br>**Exceção 1:** A regra de validação se aplica somente para os códigos de produtos ANP (cProdANP) abaixo:<br>- 810101002 - ETANOL HIDRATADO ADITIVADO<br>- 810101001 - ETANOL HIDRATADO COMUM<br>- 220101005 - GÁS NATURAL VEICULAR<br>- 220101006 - GÁS NATURAL VEICULAR PADRÃO<br>- 320103001 - GASOLINA AUTOMOTIVA PADRÃO<br>- 320102002 - GASOLINA C ADITIVADA<br>- 320102001 - GASOLINA C COMUM<br>- 320102003 - GASOLINA C PREMIUM<br>- 820101033 - ÓLEO DIESEL B S10 - ADITIVADO<br>- 820101034 - ÓLEO DIESEL B S10 - COMUM<br>- 420106001 - ÓLEO DIESEL B S10 AMD 10<br>- 820101011 - ÓLEO DIESEL B S1800 Não Rodoviário- Aditivado<br>- 820101003 - ÓLEO DIESEL B S1800 Não Rodoviário - Comum<br>- 820101013 - ÓLEO DIESEL B S500 - ADITIVADO<br>- 820101012 - ÓLEO DIESEL B S500 - COMUM<br>- 420106002 - ÓLEO DIESEL B S500 AMD 10<br>- 420301004 - OLEO DIESEL DE REFERÊNCIA S300<br>**Exceção 2:** A regra de validação não se aplica, em produção, para Nota Fiscal com Data de Emissão anterior a 01/01/2016. (NT 2015.002) | Facult. | 378 | Rej. | Rejeição: Grupo de Combustível sem a informação de Encerrante [nItem: nnn] |

<!-- p.14 -->

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| LA17-20 | 55 | Se produto (tag: cProdANP) existe na Tabela de Combustíveis Sujeitos à Tributação Monofásica (coluna "Código ANP") e coluna ("Percentual do Biocombustível) igual a 1:<br>- Obrigatório o preenchimento do índice de mistura do Biocombustível (tag: pBio)<br>**Exceção 1:** Regra de validação não se aplica quando:<br>- NF-e Complementar (tag:finNFe =2) ou NF-e de Devolução (tag:finfe=4).<br>**Exceção 2:** Regra de validação não se aplica quando campo (tag:indFinal) igual a 1.<br>**Exceção 3:** Regra de validação não se aplica quando CFOP 5.922 ou 6.922.<br>**Exceção 4:** Regra de validação não se aplica a NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6)<br>**Observação 1:** Tabela de Combustíveis Sujeitos à Tributação Monofásica publicada na aba “Documentos”, opção “Diversos” do Portal Nacional da Nota Fiscal Eletrônica.<br>**Observação 2:** Regra implantada até 25/09/2023 em homologação e em 30/10/2023 em produção. | Obrig. | 908 | Rej. | Rejeição: Obrigatório o preenchimento do índice de mistura do Biocombustível. [nItem:999] |

<!-- p.15 -->

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| LA18-10 | 55 | Se produto (tag: cProdANP) está presente na Tabela de Combustíveis Sujeitos à Tributação Monofásica (coluna "Código ANP") e coluna ("Origem do Combustível") igual a 1:<br>- Obrigatória informação de pelo menos uma ocorrência do grupo de origem do combustível (id: LA18)<br>**Exceção 1:** Regra de Validação não se aplica quando o campo (tag: indFinal) igual a 1.<br>**Exceção 2:** Regra de validação não se aplica quando: NF-e Complementar (tag:finNFe =2) ou NF-e de Devolução (tag:finfe=4).<br>**Exceção 3:** Regra de validação não se aplica quando CFOP 5.922 ou 6.922.<br>**Exceção 4:** Regra de validação não se aplica a NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6)<br>**Observação 1:** Tabela de Combustíveis Sujeitos à Tributação Monofásica publicada na aba “Documentos”, opção “Diversos” do Portal Nacional da Nota Fiscal Eletrônica.<br>**Observação 2:** Regra implementada em 04/08/2025 em homologação, e 01/10/2025 em produção. | Obrig. | 909 | Rej. | Rejeição: Obrigatório o preenchimento do grupo de UF de origem do combustível [nItem:999] |
| LA18-20 | 55 | Se preenchido o campo Percentual de Gás Natural Nacional - GLGNn para o produto GLP (tag: pGNn) ou o campo Percentual de Gás Natural Importado - GLGNi para o produto GLP (tag: pGNi) com valor diferente de “0”:<br>- Obrigatória informação de pelo menos uma ocorrência do grupo de origem do combustível (id: LA18)<br>**Exceção 1:** Regra de Validação não se aplica quando o campo (tag: indFinal) igual a 1.<br>**Exceção 2:** Regra de validação não se aplica quando:<br>- NF-e Complementar (tag:finNFe =2) ou NF-e de Devolução (tag:finfe=4).<br>**Exceção 3:** Regra de validação não se aplica quando CFOP 5.922 ou 6.922.<br>**Exceção 4:** Regra de validação não se aplica a NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6).<br>**Observação 1:** Tabela de Combustíveis Sujeitos à Tributação Monofásica publicada na aba “Documentos”, opção “Diversos” do Portal Nacional da Nota Fiscal Eletrônica.<br>**Observação 2:** Regra válida a partir de 03/07/2023 em homologação e 04/09/2023 em produção. | Obrig. | 909 | Rej. | Rejeição: Obrigatório o preenchimento do grupo de UF de origem | 

## LB. Item / Papel Imune

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| LB01-10 | 55/65 | Se NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6):<br>- Grupo RECOPI - Papel Imune (tag:nRECOPI) informado indevidamente | Obrig. | 348 | Rej. | Rejeição: NFC-e ou NF-e com DANFE Simplificado Tipo 2 com grupo RECOPI |

## N. Item / Tributo: ICMS

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| N12-30 | 55/65 | Se NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6):<br>- CST diferente da relação abaixo:<br>- 00-Tributada integralmente;<br>- 20-Com redução da Base de Cálculo;<br>- 40-Isenta;<br>- 41-Não tributada;<br>- 60-ICMS cobrado anteriormente por substituição tributária;<br>- 61- Tributação monofásica sobre combustíveis cobrada anteriormente;<br>**Exceção 1:** Aceitar CST=90-Outros, a critério da UF.<br>**Exceção 2:** A regra de validação não se aplica, em produção, para Nota Fiscal com Data de Emissão anterior a 01/04/2016. (NT 2015.002) | Obrig. | 766 | Rej. | Rejeição: Item com CST indevido [nItem:nnn] |
<!-- p.16 -->

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| N12-34 | 55/65 | Se NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6):<br>- CST=90 e informando dados do ICMS-ST (tag: ICMS90/modBCST) (NT 2015.002) | Obrig. | 381 | Rej. | Rejeição: Grupo de tributação ICMS90, informando dados do ICMS-ST [nItem:nnn] |
| N12-40 | 55/65 | Se NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6) com CST=00, 20, 40, 41 ou 90:<br>- CFOP difere de 5.101, 5.102, 5.103, 5.104, 5.115, 5.910 (NT 2015.002)<br>**Observação 1:** Para a UF do RS, poderá ser permitido o uso do CST 90 com o CFOP 5.949.<br>**Observação 2:** Para a UF do CE, poderá ser permitido o uso do CST 90 com o CFOP 5.405.<br>**Observação 3:** Para a UF do SP, poderá ser permitido o uso do CST 40 com o CFOP 5.949. | Obrig. | 382 | Rej. | Rejeição: CFOP não permitido para o CST informado [nItem:nnn] |
| N12-44 | 55/65 | NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6) com CST=60 (ICMS cobrado anteriormente por ST) e CFOP diferente de 5.405, 5.656, 5.667, 5.910 (NT 2015.002) | Obrig. | 382 | Rej. | Rejeição: CFOP não permitido para o CST informado [nItem:nnn] |
| N12-50 | 55/65 | NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6) com Partilha de ICMS entre UF (tag:ICMS/ICMSPart) | Obrig. | 741 | Rej. | Rejeição: NFC-e ou NF-e com DANFE Simplificado Tipo 2 com Partilha de ICMS entre UF |
| N12-60 | 55/65 | NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6) com repasse de ICMS-ST retido anteriormente em operação interestadual com repasse pelo SubstitutoTributário (tag: ICMS/ICMSST) (NT 2015.002) | Obrig. | 740 | Rej. | Rejeição: Item com Repasse de ICMS retido por Substituto Tributário [nItem: nnn] |
| N12a-20 | 55/65 | NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6) com CSOSN diferente da relação abaixo:<br>- 102-Tributação SN sem permissão de crédito;<br>- 103-Tributação SN, com isenção para faixa de receita bruta;<br>- 300-Imune;- 400-Não tributada pelo Simples Nacional;<br>- 500-ICMS cobrado anteriormente por substituição tributária ou por antecipação;<br>**Exceção 1:** Aceitar CSOSN=900-Outros, a critério da UF.Exceção 2:A regra de validação não se aplica, em produção, para Nota Fiscal com Data de Emissão anterior a 01/04/2016. (NT 2015.002) | Obrig. | 383 | Rej. | Rejeição: Item com CSOSN indevido [nItem: nnn] |
| N12a-30 | 55/65 | NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6) com CSOSN 103 ou 400 não permitidos para a UF.<br>**Observação:** Regra de validação opcional a critério da UF.<br>**Exceção:** A regra de validação não se aplica, em produção, para Nota Fiscal com Data de Emissão anterior a 01/04/2016. (NT 2015.002) | Obrig. | 384 | Rej. | Rejeição: CSOSN não permitido para a UF [nItem: nnn] |


<!-- p.17 -->

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| N12a-34 | 55/65 | NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6) com CSOSN=900, informando dados do ICMS-ST (tag: ICMSSN900/modBCST) (NT 2015.002) | Obrig. | 385 | Rej. | Rejeição: Grupo de tributação ICMSSN900, informando dados do ICMS-ST [nItem: nnn] |
| N12a-40 | 55/65 | NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6) com CSOSN = 102, 103, 300, 400 ou 900<br>- CFOP diferente de 5.101, 5.102, 5.103, 5.104, 5.115, 5.910 (NT 2015.002)<br>**Observação 1:** Para a UF do RS, poderá ser permitido o uso do CST 90 com o CFOP 5.949.<br>**Observação 2:** Para a UF do CE, poderá ser permitido o uso do CSOSN 900 com o CFOP 5.405.<br>**Observação 3:** Para a UF do SP, poderá ser permitido o uso do CSOSN 900 com o CFOP 5.949. | Obrig. | 386 | Rej. | Rejeição: CFOP não permitido para o CSOSN informado [nItem: nnn] |
| N12a-44 | 55/65 | NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6) com CSOSN=500 (ICMS cobrado anteriormente):<br>- CFOP difere de 5.405, 5.656, 5.667, 5.910 (NT 2015.002) | Obrig. | 386 | Rej. | Rejeição: CFOP não permitido para o CSOSN informado [nItem: nnn] |
| N12a-81 | 55/65 | Se informado CRT (id:C21) igual 4 e idDest<>3:<br>- Se NFC-e (mod=65) ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6) aceitar somente o CSOSN (id:N12a) 102 e 300<br>~~**Observação:** Regra de validação válida a partir de 01/07/2024 em homologação e 01/04/2025 em produção~~ | Obrig. | 782 | Rej. | Rejeição: CSOSN inválido para emitente MEI (CRT=4) [nItem:nnn] |
| N12a-91 | 55/65 | Se informado CRT (id:C21) igual 4 e idDest<>3<br>- Se NFC-e (mod=65) ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6) aceitar somente o CFOP 5102<br>~~**Observação:** Regra de validação válida a partir de 01/07/2024 em homologação e 01/04/2025 em produção~~ | Obrig. | 337 | Rej. | Rejeição: CFOP inválido para emitente MEI (CRT=4) [nItem:nnn] |

## NA. Item / ICMS para a UF de Destino

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| NA01-10 | 55/65 | Informado grupo “ICMSUFDest" para a NFC-e (NT 2015.003) ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6) | Obrig. | 807 | Rej. | Rejeição: NFC-e ou NF-e com DANFE Simplificado Tipo 2 com grupo de ICMS para a UF do destinatário |

## O. Item / Tributo: IPI

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| O01-10 | 55/65 | NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6) com o grupo de tributação pelo IPI (id:O01) | Obrig. | 742 | Rej. | Rejeição: NFC-e ou NF-e com DANFE Simplificado Tipo 2 com grupo do IPI |

## P. Item / Tributo: II

<!-- p.18 -->

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| P01-10 | 55/65 | NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6) com o grupo de tributação pelo II (id:P01) | Obrig. | 743 | Rej. | Rejeição: NFC-e ou NF-e com DANFE Simplificado Tipo 2 com grupo do II |

## R. Item / Tributo: PIS ST

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| R01-10 | 55/65 | NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6) com o grupo de tributação pelo PIS-ST (id:R01) | Obrig. | 746 | Rej. | Rejeição: NFC-e ou NF-e com DANFE Simplificado Tipo 2 com grupo do PIS-ST |

## T. Item / Tributo: COFINS ST

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| T01-10 | 55/65 | NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6) com o grupo de tributação pela COFINS-ST (id:T01) | Obrig | 749 | Rej. | Rejeição: NFC-e ou NF-e com DANFE Simplificado Tipo 2 com grupo da COFINS-ST |

## UA. Item / Devolução de Tributos

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| UA01-20 | 55/65 | Se informado o grupo de devolução de tributos (tag: impostoDevol):<br>- NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6) com grupo de devolução de tributos (NT 2015.002) | Obrig. | 390 | Rej. | Rejeição: Nota Fiscal com grupo de devolução de Tributos [nItem: nnn] |

## VC. Referenciamento de item de outro Documento Fiscal Eletrônico - DF-e

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| VC02-04 | 55/65 | Se item possui DFe referenciado (tag: DFeReferenciado/chaveAcesso)<br>- NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6) não pode referenciar outros documentos. | Obrig. | 708 | Rej. | Rejeição: NFC-e ou NF-e com DANFE Simplificado Tipo 2 não pode referenciar documento fiscal |
| VC02-40 | 55 | Se item possui DFe referenciado (tag: DFeReferenciado/chaveAcesso):<br>- Se NF-e de Saída (tpNF=1):<br>- Se Finalidade diferente de “2-NFe Complementar” (tag: finNFe<>2) e diferente de “4-NFe de Devolução” (tag:finNFe<>4)::<br>- Modelo do DFe referenciado não pode ser:<br>- NFC-e, modelo 65;<br>- CF-e, modelo 59;<br>- NF-e, modelo 55, com DANFE Simplificado Tipo 2 (tag:tpImp=6).<br>**Exceção:** Não se aplica para:<br>- Nota de Débito do tipo “03=Débitos de notas fiscais não processadas na apuração” (tpNFDebito=03);<br>- Nota de Débito do tipo “04=Multa e juros” (tpNFDebito=04). | Obrig. | 679 | Rej. | Rejeição: Chave de Acesso referenciada com Modelo inválido [nItem:nnn] |
| VC02-50 | 55 | ~~Se NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6)<br>- DFe Referenciado informado indevidamente~~<br>**Observação:** Essa validação passou a ser realizada pela RV VC02-04. | ~~Obrig.~~ | ~~708~~ | ~~Rej.~~ | ~~Rejeição: NFC-e ou NF-e com DANFE Simplificado Tipo 2 não pode referenciar documento fiscal~~ |

> **Revogado/Descontinuado:** a regra VC02-50 está riscada na NT original (regra removida).

<!-- p.19 -->

## W. Total da NF-e

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| W16-30 | 55/65 | Valor total da NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6) é superior ao valor limite estabelecido pela SEFAZ (valor parametrizável por UF)<br>**Observação**: O valor máximo default para a NFC-e/NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6) é de R.000,00. | Obrig. | 780 | Rej. | Rejeição: Total da NFC-e ou NF-e com DANFE Simplificado Tipo 2 superior ao valor limite estabelecido pela SEFAZ [Limite] |
| W16-40 | 55/65 | Se NFC-e ~~ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6)~~ com valor total superior a R$ 10.000,00 ou outro valor definido pela UF:<br>- Código do Destinatário não informado (tag:dest/CNPJ, dest/CPF ou dest/idEstrang). (NT 2015.002) | Obrig | 750 | Rej. | Rejeição: NFC-e ~~ou NF-e com DANFE Simplificado Tipo 2~~ com valor total superior ao permitido para destinatário não identificado (Código) [Limite] |
| W16-50 | 55/65 | Se NFC-e ~~ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6)~~ com valor total superior a R$ 10.000,00:<br>- Nome do Destinatário não informado (tag:dest/xNome)<br>**Observação:** Regra de Validação opcional, a critério da UF. (NT 2015.002) | Facult. | 751 | Rej. | Rejeição: NFC-e ~~ou NF-e com DANFE Simplificado Tipo 2~~ com valor total superior ao permitido para destinatário não identificado (Nome) [Limite] |
| W16-60 | 55/65 | Se NFC-e ~~ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6)~~ com valor total superior a R$ 10.000,00:<br>- Endereço do Destinatário não informado (tag:dest/enderDest)<br>**Observação:** Regra de Validação opcional, a critério da UF. (NT 2015.002) | Obrig | 752 | Rej. | Rejeição: NFC-e ~~ou NF-e com DANFE Simplificado Tipo 2~~ com valor total superior ao permitido para destinatário não identificado (Endereço) [Limite] |

> **Revogado/Descontinuado:** as regras W16-40, W16-50 e W16-60 (trechos riscados) estão riscadas na NT original.

## X. Transporte da NF-e

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| X02-10 | 55/65 | NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6) com Frete e não é entrega a domicílio (tag:modFrete<>9 e indPres<>4) | Obrig. | 753 | Rej. | Rejeição: NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6) com Frete |
| X11-10 | 55/65 | NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6) com dados de Retenção do ICMS no Transporte (tag:retTransp) | Obrig. | 755 | Rej. | Rejeição: NFC-e ou NF-e com DANFE Simplificado Tipo 2 com dados de Retenção do ICMS no Transporte |
| X18-10 | 55/65 | NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6) com dados do veículo de Transporte (tag:veicTransp) | Obrig. | 756 | Rej. | Rejeição: NFC-e ou NF-e com DANFE Simplificado Tipo 2 com dados do veículo de Transporte |
| X22-10 | 55/65 | NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6) com dados de Reboque do veículo de Transporte (tag:reboque) | Obrig. | 757 | Rej. | Rejeição: NFC-e ou NF-e com DANFE Simplificado Tipo 2 com dados de Reboque do veículo de Transporte |
| X25a-10 | 55/65 | NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6) com dados do Vagão de Transporte (tag:vagao) | Obrig. | 758 | Rej. | Rejeição: NFC-e ou NF-e com DANFE Simplificado Tipo 2 com dados do Vagão de Transporte |
| X25b-10 | 55/65 | NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6) com dados da Balsa de Transporte (tag:balsa) | Obrig. | 759 | Rej. | Rejeição: NFC-e ou NF-e com DANFE Simplificado Tipo 2 com dados da Balsa de Transporte |

## Y. Dados de Cobrança

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| Y01-10 | 55/65 | NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6) com dados de cobrança (Fatura, Duplicata) (tag:cobr) | Obrig. | 760 | Rej. | Rejeição: NFC-e ou NF-e com DANFE Simplificado Tipo 2 com dados de cobrança (Fatura, Duplicata) |

<!-- p.20 -->

## ZB. Informação de Compra

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| ZB01-10 | 55/65 | NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6) com dados de compras (Empenho, Pedido, Contrato) (tag:compra) | Obrig. | 762 | Rej. | Rejeição: NFC-e ou NF-e com DANFE Simplificado Tipo 2 com dados de compras (Empenho, Pedido, Contrato) |

## ZC. Informações do Registro de Aquisição de Cana

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| ZC01-10 | 55/65 | NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6) com dados de aquisição de Cana (tag:cana) | Obrig. | 763 | Rej. | Rejeição: NFC-e ou NF-e com DANFE Simplificado Tipo 2 com dados de aquisição de Cana |

## ZX. Informações Suplementares da Nota Fiscal

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| ~~ZX01-10~~ | ~~55~~ | ~~Informado o grupo de parâmetros suplementares para a NF-e (Modelo 55)~~ | ~~Obrig.~~ | ~~393~~ | ~~Rej.~~ | ~~Rejeição: NF-e com o grupo de Informações Suplementares~~ |
| ZX02-10 | 55/65 | Se NFC-e ou NF-e com DANFE Simplificado Tipo 2 (tag:tpImp=6):<br>- Não informado o campo de QR-Code.<br>**Exceção 1:** A regra de validação não se aplica, em produção, para Nota Fiscal com Data de Emissão anterior a 01/04/2016. Não sendo informado o QR-Code não se aplicam as demais validações relacionadas com este campo. (NT 2015.002)<br>**Exceção 2:** Não se aplica para NFF (tpEmis = 3-NFF). (NT 2021.002) | Obrig. | 394 | Rej. | Rejeição: Nota Fiscal sem a informação do QR-Code |
| ZX02-20 | 55/65 | Se qrCode informado:<br>- Endereço do site da UF para a Consulta via QR-Code difere do previsto.<br>**Nota:** O uso diferenciado de maiúsculas ou minúsculas não deve ser considerado na validação.<br>**Observação 1:** Regra de Validação opcional até 01/11/2016, a critério da UF.<br>**Observação 2:** Para consultar as URLs por UF utilizadas no QR Code, acesse: http://nfce.encat.org/desenvolvedor/qrcode/" (NT 2015.002)<br>**Observação 3:** Para NF-e, modelo 55, a URL de consulta do qrCode será a mesma URL da NFC-e, modelo 65. | Obrig. | 395 | Rej. | Rejeição: Endereço do site da UF da Consulta via QR-Code diverge do previsto |
| ZX02-220 | 55 | Se qrCode informado:<br>- QR Code diferente de versão 3 | Obrig. | 672 | Rej. | Rejeição: NF-e com DANFE Simplificado Tipo 2 com versão de qrCode não permitida |
| ZX02-224 | 55/65 | Se qrCode informado:<br>- Se QR Code versão “2 ou 3”:<br>- Parâmetro Chave de Acesso não informado no QR-Code.<br>**Nota:** O *Schema* XML faz esta verificação.<br>**Observação:** Para NFC-e/NF-e ONLINE ou OFFLINE é o 1º parâmetro da URL do QR Code.<br>**Obs. 1:** Para NF-e, modelo 55, somente é aceito contingência offline (tpEmis=9) para o DANFE Simplificado Tipo 2 (tag:tpImp=6) | Obrig. | 396 | Rej. | Rejeição: Parâmetro do QR-Code inexistente: [Param: xxx)] |
<!-- p.21 -->

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| ZX02-228 | 55/65 | Se qrCode informado:<br>- Se QR Code versão “2 ou 3”:<br>- Parâmetro Chave de Acesso no QR-Code diverge da Chave de Acesso da Nota Fiscal<br>**Observação:** Para NFC-e/NF-e ONLINE ou OFFLINE é o 1º parâmetro da URL do QR Code.<br>**Obs. 1:** Para NF-e, modelo 55, somente é aceito contingência offline (tpEmis=9) para o DANFE Simplificado Tipo 2 (tag:tpImp=6) | Obrig. | 397 | Rej. | Rejeição: Parâmetro do QR-Code divergente da Nota Fiscal [Param: xxx)]. |
| ZX02-232 | 55/65 | Se qrCode informado:<br>- Se QR Code versão “2 ou 3”:<br>- Parâmetro Versão não informado no QR-Code.<br>**Nota:** O Schema XML faz esta verificação.<br>**Observação:** Para NFC-e/NF-e ONLINE ou OFFLINE é o 2º parâmetro da URL do QR Code.<br>**Obs. 1:** Para NF-e, modelo 55, somente é aceito contingência offline (tpEmis=9) para o DANFE Simplificado Tipo 2 (tag:tpImp=6) | Obrig. | 396 | Rej. | Rejeição: Parâmetro do QR-Code inexistente: [Param: xxx)] |
| ZX02-236 | 55/65 | Se qrCode informado:<br>- Se QR Code versão “2 ou 3”:<br>- Parâmetro Versão informada no QR-Code diverge do previsto (“2 ou 3”)<br>**Observação:** Para NFC-e/NF-e ONLINE ou OFFLINE é o 2º parâmetro da URL do QR Code.<br>**Obs. 1:** Para NF-e, modelo 55, somente é aceito contingência offline (tpEmis=9) para o DANFE Simplificado Tipo 2 (tag:tpImp=6) | Obrig. | 398 | Rej. | Rejeição: Parâmetro Versão informada no QR-Code diverge do previsto [Param: xxx]. |
| ZX02-240 | 55/65 | Se qrCode informado:<br>- Se QR Code versão “2 ou 3”:<br>- Parâmetro Tipo de Ambiente não informado no QR-Code.<br>**Nota:** O Schema XML faz esta verificação.<br>**Observação:** Para NFC-e/NF-e ONLINE ou OFFLINE é o 3º parâmetro da URL do QR Code.<br>**Obs. 1:** Para NF-e, modelo 55, somente é aceito contingência offline (tpEmis=9) para o DANFE Simplificado Tipo 2 (tag:tpImp=6) | Obrig. | 396 | Rej. | Rejeição: Parâmetro do QR-Code inexistente: [Param: xxx] |
| ZX02-244 | 55/65 | Se qrCode informado:<br>- Se QR Code versão “2 ou 3”:<br>- Parâmetro Tipo de Ambiente do QR-Code diverge do Tipo de Ambiente da Nota Fiscal (tag:tpAmb, id:B24)<br>**Observação:** Para NFC-e/NF-e ONLINE ou OFFLINE é o 3º parâmetro da URL do QR Code.<br>**Obs. 1:** Para NF-e, modelo 55, somente é aceito contingência offline (tpEmis=9) para o DANFE Simplificado Tipo 2 (tag:tpImp=6) | Obrig. | 397 | Rej. | Rejeição: Parâmetro do QR-Code divergente da Nota Fiscal: [Param: xxx] |
<!-- p.22 -->

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| ZX02-260 | 55/65 | Se qrCode informado:<br>- Se QR Code versão “2 ou 3”:<br>- Se NFC-e/NF-e é de contingência off-line (tpEmis=9):<br>- Parâmetro Dia da Data de Emissão não informado no QR-Code.<br>**Nota:** O Schema XML faz esta verificação<br>**Obs. 1:** Para NFC-e ONLINE esse parâmetro não existe.<br>**Obs. 2:** Para a NFC-e OFFLINE é o 4º parâmetro da URL do QR Code (NT 2017.002)<br>**Obs. 3:** Para NF-e, modelo 55, somente é aceito contingência offline (tpEmis=9) para o DANFE Simplificado Tipo 2 (tag:tpImp=6) | Obrig. | 396 | Rej. | Rejeição: Parâmetro do QR-Code inexistente: [Param: xxx] |
| ZX02-268 | 55/65 | Se qrCode informado:<br>- Se QR Code versão “2 ou 3":<br>- Se NFC-e/NF-e é de contingência off-line (tpEmis=9):<br>- Parâmetro Dia da Data de Emissão no QR-Code diverge do Dia Data de Emissão da Nota Fiscal (tag:dhEmi, id:B09)<br>**Obs. 1:** Para NFC-e/NFe ONLINE esse parâmetro não existe.<br>**Obs. 2:** Para a NFC-e/NFe OFFLINE é o 4º parâmetro da URL do QR Code (NT 2017.002)<br>**Obs. 3:** Para NF-e, modelo 55, somente é aceito contingência offline (tpEmis=9) para o DANFE Simplificado Tipo 2 (tag:tpImp=6) | Obrig. | 397 | Rej. | Rejeição: Parâmetro do QR-Code divergente da Nota Fiscal: [Param: xxx] |
| ZX02-272 | 55/65 | Se qrCode informado:<br>- Se QR Code versão “2 ou 3":<br>- Se NFC-e/NF-e é de contingência off-line (tpEmis=9):<br>- Parâmetro Valor da Nota Fiscal não informado no QR-Code.<br>**Nota:** O Schema XML faz esta verificação<br>**Obs. 1:** Para NFC-e/NFe ONLINE esse parâmetro não existe.<br>**Obs. 2:** Para a NFC-e/NFe OFFLINE é o 5º parâmetro da URL do QR Code (NT 2017.002)<br>**Obs. 3:** Para NF-e, modelo 55, somente é aceito contingência offline (tpEmis=9) para o DANFE Simplificado Tipo 2 (tag:tpImp=6) | Obrig. | 396 | Rej. | Rejeição: Parâmetro do QR-Code inexistente: [Param: xxx] |
| ZX02-276 | 55/65 | Se qrCode informado:<br>- Se QR Code versão “2 ou 3":<br>- Se NFC-e/NF-e é de contingência off-line (tpEmis=9):<br>- Parâmetro Valor da Nota Fiscal no QR-Code diverge do Valor Total da Nota Fiscal (tag:vNF, id:W16)<br>**Obs. 1:** Para NFC-e/NFe ONLINE esse parâmetro não existe.<br>**Obs. 2:** Para a NFC-e/NFe OFFLINE é o 5º parâmetro da URL do QR Code (NT 2017.002)<br>**Obs. 3:** Para NF-e, modelo 55, somente é aceito contingência offline (tpEmis=9) para o DANFE Simplificado Tipo 2 (tag:tpImp=6) | Obrig. | 397 | Rej. | Rejeição: Parâmetro do QR-Code divergente da Nota Fiscal: [Param: xxx] |
| ZX02-324 | 55/65 | Se qrCode informado:<br>- Se QR Code versão “3”:<br>- Se NFC-e/NF-e é de contingência off-line (tpEmis=9):<br>- Parâmetro Tipo de Identificação do Destinatário não informado no QR-Code.<br>**Nota:** O Schema XML faz esta verificação<br>**Obs. 1:** Para NFC-e/NFe ONLINE esse parâmetro não existe.<br>**Obs. 2:** Para a NFC-e/NFe OFFLINE é o 6º parâmetro da URL do QR Code (NT 2025.001)<br>**Obs. 3:** Para NF-e, modelo 55, somente é aceito contingência offline (tpEmis=9) para o DANFE Simplificado Tipo 2 (tag:tpImp=6) | Obrig. | 396 | Rej. | Rejeição: Parâmetro do QR-Code inexistente: [Param: xxx] |
<!-- p.23 -->

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| ZX02-326 | 55/65 | Se qrCode informado:<br>- Se QR Code versão “3”:<br>- Se NFC-e/NF-e é de contingência off-line (tpEmis=9):<br>- Parâmetro Identificação do Destinatário não informado no QR-Code.<br>**Nota:** O Schema XML faz esta verificação<br>**Obs. 1:** Para NFC-e/NFe ONLINE esse parâmetro não existe.<br>**Obs. 2:** Para a NFC-e/NFe OFFLINE é o 7º parâmetro da URL do QR Code (NT 2025.001)<br>**Obs. 3:** Para NF-e, modelo 55, somente é aceito contingência offline (tpEmis=9) para o DANFE Simplificado Tipo 2 (tag:tpImp=6) | Obrig. | 396 | Rej. | Rejeição: Parâmetro do QR-Code inexistente: [Param: xxx] |
| ZX02-328 | 55/65 | Se qrCode informado:<br>- Se QR Code versão “3”:<br>- Se NFC-e/NF-e é de contingência off-line (tpEmis=9):<br>- Parâmetro Identificação do Destinatário do QR-Code diverge da Identificação do Destinatário da NFC-e.<br>**Obs. 1:** Para NFC-e/NFe ONLINE esse parâmetro não existe.<br>**Obs. 2:** Para NFC-e/NFe OFFLINE, considerar 6º e 7º parâmetros da URL do QR Code (NT 2025.001).<br>**Obs. 3:** Se a identificação do Destinatário não for informada na NFC-e/NFe, não deve ser informada no QR Code, e vice-versa.<br>**Obs. 4:** Para NF-e, modelo 55, somente é aceito contingência offline (tpEmis=9) para o DANFE Simplificado Tipo 2 (tag:tpImp=6) | Obrig. | 397 | Rej. | Rejeição: Parâmetro do QR-Code divergente da Nota Fiscal (idDest) |
| ZX02-330 | 55/65 | Se qrCode informado:<br>- Se QR Code versão “3”:<br>- Se NFC-e/NF-e não é de contingência off-line (tpEmis<>9):<br>- Parâmetro “assinatura” não deve ser informado no qrCode. (NT 2025.001)<br>**Obs. 1:** Para NF-e, modelo 55, somente é aceito contingência offline (tpEmis=9) para o DANFE Simplificado Tipo 2 (tag:tpImp=6) | Obrig. | 445 | Rej. | Rejeição: Parâmetro assinatura não deve ser informado no qrCode |
| ZX02-334 | 55/65 | Se qrCode informado:<br>- Se QR Code versão “3”:<br>- Se NFC-e/NF-e é de contingência (tpEmis=9):<br>- Parâmetro “assinatura” deve ser informado no qrCode. (NT 2025.001)<br>**Obs. 1:** Para NF-e, modelo 55, somente é aceito contingência offline (tpEmis=9) para o DANFE Simplificado Tipo 2 (tag:tpImp=6) | Obrig. | 474 | Rej. | Rejeição: Parâmetro assinatura deve ser informado no qrCode |
<!-- p.24 -->

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| ZX02-338 | 55/65 | Se qrCode informado:<br>- Se QR Code versão “3”:<br>- Se NFC-e/NF-e é de contingência (tpEmis=9):<br>- Valor da assinatura difere do valor calculado. (NT 2025.001)<br>**Obs. 1:** Para NF-e, modelo 55, somente é aceito contingência offline (tpEmis=9) para o DANFE Simplificado Tipo 2 (tag:tpImp=6) | Obrig. | 583 | Rej. | Rejeição: Valor da assinatura do qrCode difere do valor calculado |

## Banco de Dados: Destinatário

| Campo | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| 5E17-65 | 65 | Destinatário em situação irregular perante o Fisco, vedada operação na UF (CCC.cSitCNPJ=3-Vedado) ou Destinatário bloqueado na UF (CCC.cSitCNPJ=2-Bloqueado) | Obrig. | 172 | Alerta | Alerta: Situação do CNPJ destinatário inabilitado no momento da autorização |
