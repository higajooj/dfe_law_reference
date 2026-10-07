<!-- p.12 -->
# 02.2 Alteração em Regras de Validação (RV)

*Serviço 02: Autorização de Uso da Nota Fiscal (item 4.1 do MOC)*

Nesta NT, são melhor documentadas algumas regras de validação existentes e também são incorporadas novas regras de validação com o objetivo de aprimorar a qualidade da informação recebida na SEFAZ, afetando principalmente os sistemas de autorização das SEFAZ Autorizadoras.

Resumidamente as mudanças em regras de validação compreendem:

- Verificar a Data de Emissão da Nota Fiscal em relação a data da autorização, conforme o Tipo de Emissão. Idem para a verificação da Data de Emissão em relação à data de credenciamento do contribuinte (RV:B09-20, B09-30, B09-40, B09-50, 7B09-10);
- Verificar a existência do código de Município na tabela do IBGE, substituindo a atual validação do dígito verificador deste código (RV: B12-10, C10-10, E10-10, F07-20, G07-20, U05-10, U14-10, X17-10);
- Verificar se o Município do Emitente informado na Nota Fiscal corresponde ao cadastrado na UF. Idem para o município do destinatário (RV: 7C10-10, 7E10-10);
- Aceitar a Chave de Acesso referenciada do documento fiscal “SAT-CF-e”, modelo 59 (RV: BA02-20);
- Definidos melhores controles sobre a Nota Fiscal referenciada de Produtor, conforme critério da UF (RV: BA10-20, BA10-30, BA10-40);
- Definidos melhores controles sobre a IE de Substituto Tributário (RV: C18-14, C18-40);
- Viabilizar a operação de venda de combustível ou lubrificante a consumidor ou usuário final estabelecido em outra UF (CFOP=6.667) para a pessoa estrangeira, sem configurar exportação (RV: E03a-20, E12-20, E14-20);
- Limitar o conjunto de caracteres que podem ser usados na identificação do destinatário estrangeiro (RV: E03a-60);
- Verificar se o NCM informado no item da Nota Fiscal existe na tabela de NCM publicada pelo MDIC - Ministério do Desenvolvimento (RV: I05-20);
- Na Nota Fiscal de entrada de devolução de mercadora, aceitar os CFOP 1.949 ou 2.949 apenas no caso de devolução de venda de consumidor final não contribuinte (RV: I08-140);
- Verificar se o Valor do Desconto informado no item da Nota Fiscal é maior do que o Valor do Produto (RV: I17-10);
- Verificar os valores possíveis para o Código de Enquadramento Legal do IPI, conforme Anexo XIV (RV: O06-10);
- Verificar os Códigos de Enquadramento Legal possíveis, conforme o CST do IPI informado (RV: O09-10);
- Verificar o Código de Regime Tributário do emitente informado na Nota Fiscal, em relação ao Cadastro de Contribuintes da SEFAZ (RV: 7C21-10);
- Verificar se foi informado o CNPJ/CPF do Escritório de Contabilidade para a UF que solicitar esta informação na legislação estadual (RV: 7GA01-10, 7GA01-20);
- A critério da UF, verificar se as vendas do Emitente são incompatíveis com o Porte da Empresa (RV: 8C02-10);

<!-- p.13 -->
- Para a NFC-e:
  - o Mantida a tolerância de 5 minutos de atraso no envio da NFC-e para a autorização na SEFAZ (RV: B09-40);
  - o Não aceitar a indicação de uso de Formulário de Segurança (RV:B22-34);
  - o Não aceitar a identificação do Emitente como Pessoa Física (RV: C02a-04);
  - o Não aceitar a identificação do destinatário como sendo o próprio emitente (RV:E02-20);
  - o A critério da UF, é opcional a informação do Nome e Endereço do Destinatário na NFC-e, para operações com valor superior a R$ 10.000,00 (RV: W16-50, W16-60);
  - o Verificar se a descrição do primeiro item da NFC-e emitida em ambiente de homologação difere de “NOTA FISCAL EMITIDA EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL” (RV:I04-10);
  - o Eliminada a utilização dos CFOP 5.401 e 5.403, relacionados ao regime de substituição tributária e o CFOP 5.653 relacionado com a venda de combustível de produção do estabelecimento, para consumidor final (RV: I08-150);
  - o No caso da prestação de serviços (CFOP=5.933), verificar o uso do grupo de tributação do ISSQN (RV: I08-160, I08-170);
  - o Permitir a informação do grupo de combustíveis (conforme decisão da UF), somente para CFOP específicos (RV: LA01-10, LA01-30);
  - o Na venda de combustível pela NFC-e, a critério da UF, verificar se existem as informações do grupo “encerrante” (LA11-10);
  - o Melhor controlada a utilização dos grupos de tributação de ICMS, conforme segue:
    - Verificar os CST possíveis de uso na NFC-e (RV: N12-30, N12-34);
    - Verificar os CSTpossíveis de uso na NFC-e, conforme o CFOP informado (RV: N12-40, N12-44);
    - Eliminado uso do grupo ICMSST - Repasse de ICMS-ST retido anteriormente em operação interestadual (RV: N12-60);
  - o Melhor controlada a utilização dos grupos de tributação do Simples Nacional, conforme segue:
    - Verificar os CSOSN possíveis de uso na NFC-e (RV: N12a-20, N12a-30, N12a-34);
    - Verificar os CSOSN possíveis de uso na NFC-e, conforme o CFOP informado (RV: N12a-40, N12a-44);
  - o Eliminada a possibilidade de informação do grupo de Devolução de Tributos na NFC-e (RV: UA01-20);
  - o Implementado controles sobre as informações da Forma de Pagamento da NFC-e (RV: YA01-20, YA04-10, YA04a-10);
  - o Validar o novo campo QR-Code, utilizado na Consulta da NFC-e (RV: ZX01-10 em diante).

Seguem as alterações em regras de validação:

<!-- p.14 -->
## A. Dados da NF-e

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| ~~A02-10~~ | ~~55~~ | ~~NF-e não pode utilizar a versão 3.00~~<br>~~**Observação**: A versão "3.00" é válida somente para as empresas do piloto da NFC-e.~~ | ~~Obrig.~~ | ~~701~~ | ~~Rej.~~ | ~~Rejeição: NF-e não pode utilizar a versão 3.00~~ |

## B. Identificação da Nota Fiscal

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| B09-20 | 55 | NF-e com Tipo de Emissão = 1-Normal (ou 6-SVC-AN, 7-SVC-RS) (NT2012.003):<br>– Data de Emissão ocorrida há mais de 30 dias (ou outro limite, a critério da UF)<br>**Exceção 1**: A critério da UF, a rejeição acima pode ser efetuada para qualquer Tipo de Emissão.<br>**Exceção 2**: A critério da UF, pode ser aceita a NF-e com Data de Emissão muito atrasada, desde que tenha sido emitida em contingência (tpEmis=2, 4, 5). Neste caso, a SEFAZ Autorizadora irá retornar cStat="150- Autorizado Uso da NF-e, autorização fora de prazo" (NT 2012.003). | Obrig. | 228 | Rej. | Rejeição: Data de Emissão muito atrasada |
| B09-30 | 55 | Data de Emissão anterior ao início da autorização de NF-e na UF.<br>**Observação**:O início da operação da NF-e ocorreu em diferentes momentos, conforme a UF (a primeira NF-e autorizada no País foi em 14/09/2006). | Obrig. | 315 | Rej. | Rejeição: Data de Emissão anterior ao início da autorização de Nota Fiscal na UF |
| B09-40 | 65 | NFC-e com Tipo de Emissão=1-Normal:<br>- Data-Hora de Emissão com atraso superior a 5 minutos em relação ao horário de recepção na SEFAZ Autorizadora.<br>**Exceção 1**: A critério da UF, a rejeição acima pode ser efetuada para qualquer Tipo de Emissão.<br>**Exceção 2**: A critério da UF, pode ser aceita a NFC-e com Data de Emissão muito atrasada, desde que tenham sido emitida em contingência (tpEmis=4, 9). A NFC-e transmitida para a SEFAZ Autorizadora após o prazo de 24 horas deve retornar cStat="150-Autorizado Uso da NF-e, autorização fora de prazo".<br>**Observação 1**: A emissão da NFC-e deve ocorrer de forma on-line, real-time, com uma tolerância de até 5 minutos, devido ao sincronismo de horário do servidor da Empresa e o servidor da SEFAZ Autorizadora.<br>~~**Observação 2**: A tolerância acima motivada pelo horário dos servidores, somada ao atraso permitido para a autorização da NFC-e acaba resultando em um atraso máximo de 10 minutos a~~<br><!-- p.15 -->~~ser controlado pela aplicação da SEFAZ Autorizadora.~~ | Obrig. | 704 | Rej. | Rejeição: NFC-e com Data-Hora de emissão atrasada |
| B09-50 | 65 | Data de Emissão anterior ao início da autorização de NFC-e na UF.<br>**Observação:**O início da operação da NFC-e ocorreu em diferentes momentos, conforme a UF (a primeira NFC-e autorizada no País foi em 01/03/2013). | Obrig. | 315 | Rej. | Rejeição: Data de Emissão anterior ao início da autorização de Nota Fiscal na UF |
| B12-10 | 55/65 | Código Município do Fato Gerador de ICMS inexistente (Tabela Municípios IBGE) | Obrig. | 270 | Rej. | Rejeição: Código Município do Fato Gerador de ICMS inexistente |
| B22-34 | 65 | Na autorização pela SEFAZ:<br>– rejeitar a NFC-e com opção de contingência inválida (tag:tpEmis=2, 4 (a critério da UF) ou 5)<br>**Observação**: A contingência EPEC (tag:tpEmis=4) poderá ser aceita, a critério da UF. | Facult. | 714 | Rej. | Rejeição: NFC-e com opção de contingência inválida |
| B26-30 | 55/65 | Se Processo de Emissão pelo Fisco (procEmi=1 ou 2):<br>- Tipo de Emissão difere de Emissão Normal ou Emissão na SVC (tpEmis<>1, 6 e 7) | Obrig. | 370 | Rej. | Rejeição: Nota Fiscal Avulsa com tipo de emissão inválido |

## BA. Documento Fiscal Referenciado

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| BA02-10 | 55 | Se informada NF-e referenciada (tag:refNFe):<br>– Chave de Acesso referenciada com Dígito Verificador inválido | Facult. | 547 | Rej. | Rejeição: Chave de Acesso referenciada com Dígito Verificador inválido[nOcor:nnn] |
| BA02-14 | 55 | - Chave de Acesso referenciada com UF inválida | Facult. | 522 | Rej. | Rejeição: Chave de Acesso referenciada com UF inválida[nOcor:nnn] |
| BA02-20 | 55 | - Chave de Acesso referenciada com Ano Emissão < 06 ou > que o Ano corrente | Facult. | 524 | Rej. | Rejeição: Chave de Acesso referenciada com Ano-Mês inválido[nOcor:nnn] |
| BA02-24 | 55 | - Chave de Acesso referenciada com Mês Emissão < 01 ou > 12 | Facult. | 524 | Rej. | Rejeição: Chave de Acesso referenciada com Ano-Mês inválido[nOcor:nnn] |
| BA02-30 | 55 | - Chave de Acesso referenciada com CNPJ zerado ou CNPJ com DV inválido | Facult. | 552 | Rej. | Rejeição: Chave de Acesso referenciada com CNPJ inválido[nOcor:nnn] |
| BA02-34 | 55 | – Chave de Acesso referenciada com Modelo diferente de 55 / 65 /59 (NT 2015/002) | Facult. | 679 | Rej. | Rejeição: Chave de Acesso referenciada com Modelo inválido[nOcor:nnn] |
| BA02-40 | 55 | - Chave de Acesso referenciada com Número zerado | Facult. | 683 | Rej. | Rejeição: Chave de Acesso referenciada com Número inválido[nOcor:nnn] |
| BA02-44 | 55 | – Chave de Acesso referenciada em duplicidade na NF-e (duplicidade da tag refNFe) (NT 2013/003) | Facult. | 680 | Rej. | Rejeição: Chave de Acesso referenciada em duplicidade na NF-e [nOcor:nnn] |
| BA02-50 | 55 | - Nota Fiscal referenciada com a mesma Chave de Acesso da Nota Fiscal atual | Obrig. | 316 | Rej. | Rejeição: Chave de Acesso referenciada com a mesma Chave de Acesso da Nota Fiscal atual [nOcor:nnn] |
| BA05-10 | 55 | Se informada NF Modelo 1 referenciada (tag:refNF):<br>- NF modelo 1 referenciada emitida há mais de 20 anos da data atual ou com data de emissão superior ao Ano-Mês atual | Facult. | 317 | Rej. | Rejeição: NF modelo 1 referenciada com data de emissão inválida [nOcor:nnn] |
| <!-- p.16 -->BA10-20 | 55 | Contranota de Produtor sem Nota Fiscal referenciada:<br>- não informada NF de Produtor referenciada (tag:refNFP);<br>- e não informada Nota Fiscal referenciada (tag:refNFe).<br>**Observação 1**: A Contranota de Produtor é identificada como uma Nota Fiscal de entrada (tag:tpNF=0) e remetente da mesma UF com IE de Produtor Rural.<br>**Observação 2**: A utilização e controle da Contranota de Produtor é opcional, a critério da UF. | Facult. | 318 | Rej. | Rejeição: Contranota de Produtor sem Nota Fiscal referenciada |
| BA10-30 | 55 | Contranota de Produtor não pode referenciar somente Nota Fiscal de entrada:<br>- não informada NF de Produtor referenciada (tag:refNFP);<br>- não informada Nota Fiscal referenciada (tag:refNFe) de saída (tag:tpNF=1).<br>**Observação 1**: Identificação de Contranota de Produtor conforme observação da validação anterior.<br>**Observação 2**: A utilização e controle da Contranota de Produtor é opcional, a critério da UF. | Facult. | 319 | Rej. | Rejeição: Contranota de Produtor não pode referenciar somente Nota Fiscal de entrada |
| BA10-40 | 55 | Contranota de Produtor referencia somente Nota Fiscal de outro emitente. Não existe nenhuma das ocorrências abaixo:<br>- IE da NF de Produtor referenciada (tag:refNFP/IE) idêntica à IE do Emitente (emit/IE) ou do Remente (dest/IE);<br>- IE do emitente da NF referenciada (tag:emit/IE) idêntica à IE do Emitente (emit/IE) ou do Remente (dest/IE).<br>**Observação 1**: Identificação de Contranota de Produtor conforme observação da validação anterior.<br>**Observação 2**: A utilização e controle da Contranota de Produtor é opcional, a critério da UF. | Facult. | 320 | Rej. | Rejeição: Contranota de Produtor referencia somente NF de outro emitente |
| BA12-10 | 55 | Se informada NF de Produtor referenciada (tag:refNFP):<br>- NF de produtor referenciada emitida a mais de 20 anos da data atual ou com data de emissão superior ao Ano-Mês atual | Facult. | 322 | Rej. | Rejeição: NF de produtor referenciada com data de emissão inválida [nOcor:nnn] |
| BA19-10 | 55 | Se informado CT-e referenciado (tag:refCTe):<br>– Chave de Acesso referenciada com Dígito Verificador inválido | Facult. | 547 | Rej. | Rejeição: Chave de Acesso referenciada com Dígito Verificador inválido[nOcor:nnn] |
| BA19-14 | 55 | - Chave de Acesso referenciada com UF inválida | Facult. | 522 | Rej. | Rejeição: Chave de Acesso referenciada com UF inválida[nOcor:nnn] |
| BA19-20 | 55 | - Chave de Acesso referenciada com Ano Emissão < 06 ou > que o Ano corrente | Facult. | 524 | Rej. | Rejeição: Chave de Acesso referenciada com Ano-Mês inválido[nOcor:nnn] |
| BA19-24 | 55 | - Chave de Acesso referenciada com Mês Emissão < 01 ou > 12 | Facult. | 524 | Rej. | Rejeição: Chave de Acesso referenciada com Ano-Mês inválido[nOcor:nnn] |
| <!-- p.17 -->BA19-30 | 55 | - Chave de Acesso referenciada com CNPJ zerado ou CNPJ com DV inválido | Facult. | 552 | Rej. | Rejeição: Chave de Acesso referenciada com CNPJ inválido[nOcor:nnn] |
| BA19-34 | 55 | – Chave de Acesso referenciada com Modelo diferente de 57 (NT 2013/003) | Facult. | 679 | Rej. | Rejeição: Chave de Acesso referenciada com Modelo inválido[nOcor:nnn] |
| BA19-40 | 55 | - Chave de Acesso referenciada com Número zerado | Facult. | 683 | Rej. | Rejeição: Chave de Acesso referenciada com Número inválido[nOcor:nnn] |
| BA19-44 | 55 | – Chave de Acesso referenciada em duplicidade na NF-e (duplicidade da tag refCTe) (NT 2013/003) | Facult. | 680 | Rej. | Rejeição: Chave de Acesso referenciada em duplicidade na NF-e [nOcor:nnn] |

## C. Identificação do Emitente

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| C02a-04 | 65 | Se informado CPF do emitente:<br>– Se NFC-e (modelo 65) | Obrig. | 337 | Rej. | Rejeição: NFC-e para emitente pessoa física |
| C02a-10 | 55 | – CPF só pode ser informado como Emitente na Nota Fiscal avulsa | Obrig. | 407 | Rej. | Rejeição: O CPF só pode ser informado no campo emitente para a NF-e avulsa |
| C02a-20 | 55 | – CPF com zeros, nulo, 111..., 222..., ..., ou DV inválido (NT 2012/003) | Obrig. | 401 | Rej. | Rejeição: CPF do **emitente** inválido |
| C10-10 | 55/65 | Código Município do Emitente inexistente (Tabela Municípios IBGE) | Obrig. | 272 | Rej. | Rejeição: Código Município do Emitente inexistente |
| C18-14 | 55 | Se informada a IE do Substituto Tributário para uma operação com Exterior ou Operação Interna (tag:idDest=1 ou 3)<br><br>**Exceção:** A critério da UF, poderá ser aceita a informação da IE-ST em operação interna. | Obrig. | 347 | Rej. | Rejeição: Informada IE do substituto tributário em operação que não é interestadual |
| C18-30 | 55 | Se informada a IE do Substituto Tributário:<br>– IEST inválida para a UF: erro no tamanho, na composição da IE, ou no dígito verificador (*2)<br>**Observação**: UF a ser utilizada na validação:<br>– UF do Local de Entrega para operação de Faturamento Direto de veículos novos (id:G09, caso tpOP, id:J02 = 2);<br>– UF do destinatário (UF, campo E12) nos demais casos. | Obrig. | 211 | Rej. | Rejeição: IE do substituto inválida |
| C18-40 | 55 | -IEST idêntica à IE do emitente ou do destinatário | Obrig. | 363 | Rej. | Rejeição: IE do substituto tributário idêntica à IE do emitente ou do destinatário |
| C21-10 | 55/65 | Regime Tributário SN, com excesso de sublimite não é permitido para Emitentes desta UF (id:CRT=2).<br><br>**Nota:** Regra de validação opcional, a critério da UF. | Facult. | 812 | Rej. | Rejeição: Regime Tributário SN, com excesso de sublimite não é permitido para Emitentes desta UF |

<!-- p.18 -->
## E. Identificação do Destinatário

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| E02-10 | 55/65 | Se informado CNPJ:<br>– CNPJ com zeros ou dígito de controle inválido | Obrig. | 208 | Rej. | Rejeição: CNPJ do destinatário inválido |
| E02-20 | 65 | - CNPJ do destinatário = CNPJ do Emitente | Obrig. | 220 | Rej. | Rejeição: Destinatário com identificação igual à identificação do emitente |
| E03a-20 | 55 | Se não é operação com Exterior (tag:idDest<>3):<br>– Informado “idEstrangeiro”, e operação não é com consumidor final(tag:indFinal<> 1)<br>~~– Não pode informar tag idEstrangeiro~~<br>~~**Exceção**: A regra acima não se aplica para o CFOP=“6.667- Venda de combustível ou lubrificante a consumidor ou usuário final estabelecido em outra UF diferente da que ocorrer o consumo”~~ | Obrig. | 721 | Rej. | Rejeição: Informado idEstrangeiro e Operação não é com consumidor final. |
| ~~E03a-50~~ | ~~55~~ | ~~Se Operação dentro do Estado (tag:idDest = 1):<br>– Se informado “idEstrangeiro”, operação deve ser de consumidor final (tag:indFinal<> 1)~~ | ~~Obrig.~~ | ~~723~~ | ~~Rej.~~ | ~~Rejeição: Operação interna com idEstrangeiro informado deve ser para consumidor final~~ |
| E03a-60 | 55/65 | Se informado “idEstrangeiro”, campo deve conter somente algarismos, letras (maiúsculas e minúsculas) e/ou os caracteres do conjunto que segue: [:.+-/()] | Obrig. | 372 | Rej. | Rejeição: Destinatário com identificação de estrangeiro com caracteres inválidos |
| E10-10 | 55/65 | Se endereço destinatário não é no Exterior (dest/UF <> “EX”):<br>– Código Município do destinatário inexistente (Tabela Municípios IBGE) | Obrig. | 274 | Rej. | Rejeição: Código Município do Destinatário inexistente |
| ~~E12-20~~ | ~~55~~ | ~~Se operação Interestadual (tag:idDest = 2):<br>– UF de destino não pode ser “EX”<br>**Exceção**: A regra acima não se aplica para o CFOP=“6.667- Venda de combustível ou lubrificante a consumidor ou usuário final estabelecido em outra UF diferente da que ocorrer o consumo”~~ | ~~Obrig.~~ | ~~771~~ | ~~Rej.~~ | ~~Rejeição: Operação Interestadual e UF de destino com EX~~ |
| E14-04 | 55/65 | Se informado Código País do destinatário (tag: dest/enderDest/cPais):<br>- Código do País inexistente (Tabela do BACEN, vide tabela de apoio publicada no Portal da NF-e).<br>**Observação**: O Código do País informado na NF-e pode conter ou não zeros não significativos. | Obrig. | 377 | Rej. | Rejeição: Código de País do destinatário Inexistente |
| E14-20 | 55/65 | Se não é operação com Exterior (tag:idDest<> 3) e informado Código País do destinatário:<br>– Código País do destinatário difere de 1058 (Brasil)<br>**Exceção**: Se idEstrangeiro <> nulo é permitido cPais <> 1058.<br>~~**Exceção 2**: A regra de validação não se aplica se idDest=2 e CFOP=“6.667- Venda de combustível ou lubrificante a consumidor ou usuário final estabelecido em outra UF diferente da que ocorrer o consumo”~~ | Facult. | 511 | Rej. | Rejeição: Não é de Operação com Exterior e Código País destinatário difere de 1058 (Brasil) |

<!-- p.19 -->
## F. Local da Retirada

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| F07-20 | 55/65 | Se informado Local de Retirada com UF Retirada <> “EX”:<br>– Código Município Local de Retirada inexistente (Tabela Municípios IBGE) | Obrig. | 276 | Rej. | Rejeição: Código Município do Local de Retirada inexistente |

## G. Local da Entrega

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| G07-20 | 55/65 | Se informado Local de Entrega com UF Entrega <> “EX”:<br>– Código Município do Local de Entrega inexistente (Tabela Municípios IBGE) | Obrig. | 278 | Rej. | Rejeição: Código Município do Local de Entrega inexistente |

## I. Produtos e Serviços

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| I04-10 | 65 | Para a NFC-e, se ambiente de homologação (tag:tpAmb=2, id:B24):<br>- Descrição do primeiro item da Nota Fiscal (tag:xProd) deve ser informada como “NOTA FISCAL EMITIDA EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL” | Obrig | 373 | Rej. | Rejeição: Descrição do primeiro item diferente de NOTA FISCAL EMITIDA EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL [nItem:nnn] |
| I05-20 | 55/65 | Se informado NCM completo (8 pos.) e valor difere de “00000000”:<br>– NCM inexistente na tabela de NCM publicada pelo Ministério do Desenvolvimento, Indústria e Comércio Exterior - MDIC<br>~~* Implementação futura.~~<br>**Exceção 1:** A regra de validação não se aplica, em produção, para Nota Fiscal com Data de Emissão anterior a 01/01/2016.<br>**Exceção 2:** Para a NF-e, considerar nesta validação os códigos de NCM especiais definidos pela RFB para permitir o uso no Registro de Exportação (Anexo X.02). | Obrig. | 778 | Rej. | Rejeição: Informado NCM inexistente[nItem:nnn] |
| I08-04 | 55/65 | CFOP inexistente ou não pode ser usado na NF-e, conforme tabela de apoio publicada no Portal da NF-e (Tabela CFOP, indNFe=0) | Obrig. | 770 | Rej. | Rejeição: CFOP Inexistente [nItem:nnn] |
| I08-70 | 55 | Operação Interna (idDest=1) e UF emitente diferente da UF do destinatário/remetente e destinatário/remetente contribuinte do ICMS (indIEDest=1)<br>**Exceção 1**: A regra de validação não se aplica se a tag **UFCons** (id:LA06) foi informada com a mesma UF do emitente. (NT 2010/007)<br>**Exceção 2**: A regra de validação não se aplica se a operação é presencial (tag: indPres=1 -Operação presencial) e não possui frete (tag: **modFrete**=9 -Sem frete).(NT 2011/004)<br>**Observação:** No caso da NFC-e, a informação do endereço do destinatário é opcional. Considerar a UF do destinatário como sendo a mesma UF do emitente (operação interna). | Facult. | 521 | Rej. | Rejeição: Operação Interna e UF do emitente difere da UF do destinatário/remetente contribuinte do ICMS |
| <!-- p.20 -->~~I08-80~~ | ~~55~~ | ~~CFOP de Operação no Estado (inicia com 1) e UF emitente diferente da UF remetente e remetente contribuinte do ICMS (indIEDest=1)(NT 2010/007)<br>**Exceção 1**: Se a tag UFCons (id:LA06) foi informada com a mesma UF do emitente: CFOP iniciado com 1 é válido (NT 2010/010)<br>**Exceção 2**: Se a operação é presencial (tag: indPres=1 -Operação presencial) e não possui frete (tag: modFrete=9 -Sem frete): CFOP iniciado com 1 é válido.<br>**Observação:** No caso da NFC-e, a informação do endereço do destinatário é opcional. Considerar a UF do destinatário como sendo a mesma UF do emitente (operação interna).~~ | ~~Facult.~~ | ~~522~~ | ~~Rej.~~ | ~~Rejeição: CFOP de Operação Estadual e UF emitente difere da UF remetente para remetente contribuinte do ICMS~~ |
| I08-94 | 55 | Operação Interestadual (idDest=2) e informado idEstrangeiro<br>**Exceção**: A regra acima não se aplica para o CFOP=“6.667- Venda de combustível ou lubrificante a consumidor ou usuário final estabelecido em outra UF diferente da que ocorrer o consumo” | Facult. | 771 | Rej. | Rejeição: Informado idEstrangeiro em operação interestadual |
| I08-140 | 55 | Para a Nota Fiscal com finalidade de devolução de mercadoria (tag:finNFe=4), somente serão aceitos CFOP de devolução de mercadoria.<br>**Observação**: Vide relação de CFOP de devolução de mercadoria na tabela de apoio publicada no Portal da NF-e (Tabela CFOP, indDevol=1).<br>**Exceção**: Aceitar os CFOP 1.949 e 2.949 na devolução de venda para não Contribuinte. Para estes CFOP verificar a condição:<br>- tag:finNFe = 4 (devolução) e tag:indIEDest = 9 (não Contribuinte) | Obrig. | 327 | Rej. | Rejeição: CFOP inválido para Nota Fiscal com finalidade de devolução de mercadoria[nItem:nnn] |
| I08-144 | 55 | Para as NF-e que não tem a finalidade de devolução de mercadoria (tag:finNFe não é “2” nem “4”), não serão aceitos CFOP de devolução de mercadoria. (NT 2013/005)<br>**Observação**: Vide relação de CFOP de devolução de mercadoria na tabela de apoio publicada no Portal da NF-e (Tabela CFOP, indDevol=1). | Obrig. | 328 | Rej. | Rejeição: CFOP de devolução de mercadoria para NF-e que não tem finalidade de devolução de mercadoria [nItem:nnn] |
| <!-- p.21 -->I08-150 | 65 | NFC-e (mod=65) com CFOP inválido. Aceitar unicamente os CFOP:<br>– 5.101: Venda de produção do estabelecimento;<br>– 5.102: Venda de mercadoria de terceiros;<br>- 5.103: Venda de produção do estabelecimento efetuada fora do estabelecimento;<br>- 5.104: Venda de mercadoria adquirida ou recebida de terceiros, efetuada fora do estabelecimento;<br>– 5.115: Venda de mercadoria de terceiros, recebida anteriormente em consignação mercantil;<br>~~– 5.401: Venda de produção do estabelecimento em operação com produto sujeito a ST, como contribuinte substituto;~~<br>~~– 5.403: Venda de mercadoria de terceiros em operação com mercadoria sujeita a ST, como contribuinte substituto;~~<br>– 5.405: Venda de mercadoria de terceiros, sujeita a ST, como contribuinte substituído;<br>~~– 5.653: Venda de combustível ou lubrificante, de produção do estabelecimento, destinados a consumidor final;~~<br>– 5.656: Venda de combustível ou lubrificante de terceiros, destinados a consumidor final;<br>– 5.667: Venda de combustível ou lubrificante a consumidor ou usuário final estabelecido em outra Unidade da Federação;<br>– 5.933: Prestação de serviço tributado pelo ISSQN (Nota Fiscal conjugada); (NT 2013/005 v 1.20) | Obrig. | 725 | Rej. | Rejeição: NFC-e com CFOP inválido[nItem:nnn] |
| I08-160 | 65 | NFC-e (mod=65) com CFOP=5.933 (Prestação de serviço), **sem** o grupo de tributação pelo ISSQN (tag:imposto/ISSQN) | Obrig. | 374 | Rej. | Rejeição: CFOP incompatível com o grupo de tributação [nItem:nnn] |
| I08-170 | 65 | NFC-e (mod=65) com CFOP diferente de 5.933 (Prestação de serviço), **com** o grupo de tributação pelo ISSQN (tag:imposto/ISSQN) | Obrig. | 374 | Rej. | Rejeição: CFOP incompatível com o grupo de tributação [nItem:nnn] |
| I08-180 | 55 | NF-e (mod=55) com lançamento relativo a Cupom Fiscal (CFOP=5.929 ou CFOP=6.929) e existe NFC-e referenciada (tag:refNFe com modelo 65)<br>**Observação**: Regra de Validação opcional, a critério da UF poderá ser aceito o CFOP 5.929. | Facult. | 375 | Rej. | Rejeição: NF-e com lançamento relativo a Cupom Fiscal referencia uma NFC-e [nItem:nnn] |
| <!-- p.22 -->I08-184 | 55 | NF-e (mod=55) com lançamento relativo a Cupom Fiscal (CFOP=5.929ou CFOP6.929) sem Documento Fiscal referenciado (tag:NFref, idBA01) | Obrig. | 701 | Rej. | Rejeição: Não informado Nota Fiscal referenciada (Lançamento relativo a Cupom Fiscal) [nItem:nnn] |
| I08-190 | 55 | NF-e (mod=55) com CFOP de exportação indireta (3503, 7501) sem Nota Fiscal referenciada (tag:NFref, id:BA01) | Obrig. | 701 | Rej. | Rejeição: Não informado Nota Fiscal referenciada (CFOP de Exportação Indireta) [nItem:nnn] |
| I17-10 | 55/65 | Valor do Desconto (tag:vDesc, id:I17) maior que o valor do Produto (tag:vProd, id:I11) | Obrig. | 483 | Rej. | Rejeição: Valor do desconto maior que valor do produto [nItem:nnn] |

### I01. Produtos e Serviços / Declaração de Importação

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| I23-10 | 55 | Data do Desembaraço Aduaneiro inferior a 5 anos da data atual ou superior a data atual | Obrig | 376 | Rej. | Rejeição: Data do Desembaraço Aduaneiro inválida [nItem:nnn] |

### I03. Produtos e Serviços / Grupo de Exportação

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| I50-10 | 55/65 | Informado o grupo de Exportação (tag:detExport) no Item em operação que não é com exterior (tag: idDest <> 3). | Obrig. | 336 | Rej. | Rejeição: Informado o grupo de exportação no item em operação que não é com exterior [nItem:nnn] |

## K. Item / Medicamentos

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| ~~K01-10~~ | ~~65~~ | ~~NFC-e com grupo de Medicamentos (tag:med)~~<br>**Observação**: Regra de validação excluída. NFC-e poderá aceitar o grupo de detalhamento específico de medicamentos e de matérias-primas farmacêuticas. | ~~Obrig.~~ | ~~737~~ | ~~Rej.~~ | ~~Rejeição: NFC-e com grupo de Medicamentos~~ |

## LA. Item / Combustível

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| ~~LA01-10~~ | ~~65~~ | ~~NFC-e com grupo de Combustível (tag:comb)~~ | ~~Obrig.~~ | ~~739~~ | ~~Rej.~~ | ~~Rejeição: NFC-e com grupo de Combustível~~ |
| LA01-20 | 55/65 | Obrigatória a informação do grupo de combustível para os CFOP constantes no Anexo XIII.02 do MOC - CFOP de Combustível e Lubrificantes (NT 2012/003)<br>**Observação**: Para a NFC-e, a regra de validação é opcional, a critério da UF.<br>**Exceção**: Para a NFC-e, a regra de validação não se aplica, em produção, para Nota Fiscal com Data de Emissão anterior a 01/01/2016. | Facult. | 660 | Rej. | Rejeição: CFOP de Combustível e não informado grupo de combustível[nItem:nnn] |
| <!-- p.23 -->~~LA01-30~~ | ~~65~~ | ~~NFC-e com grupo de combustível (tag:comb) para CFOP diferente de venda de combustível para consumidor final (CFOP= 5.656, 5.667);~~ | ~~Obrig.~~ | ~~377~~ | ~~Rej.~~ | ~~Rejeição: Grupo de Combustível para CFOP diferente dos permitidos [nItem:nnn]~~ |
| LA11-10 | 65 | NFC-e sem a informação do grupo de Encerrante na venda de combustível para consumidor final<br>**Observação:** Regra de validação opcional a critério da UF.<br>**Exceção 1**: A regra de validação se aplica somente para os códigos de produtos ANP (cProdANP) abaixo:<br>- 810101002 - ETANOL HIDRATADO ADITIVADO<br>- 810101001 - ETANOL HIDRATADO COMUM<br>- 220101005 - GÁS NATURAL VEICULAR<br>- 220101006 - GÁS NATURAL VEICULAR PADRÃO<br>- 320103001 - GASOLINA AUTOMOTIVA PADRÃO<br>- 320102002 - GASOLINA C ADITIVADA<br>- 320102001 - GASOLINA C COMUM<br>- 320102003 - GASOLINA C PREMIUM<br>- 820101033 - ÓLEO DIESEL B S10 - ADITIVADO<br>- 820101034 - ÓLEO DIESEL B S10 - COMUM<br>- 420106001 - ÓLEO DIESEL B S10 AMD 10<br>- 820101011 - ÓLEO DIESEL B S1800 Não Rodoviário- Aditivado<br>- 820101003 - ÓLEO DIESEL B S1800 Não Rodoviário - Comum<br>- 820101013 - ÓLEO DIESEL B S500 - ADITIVADO<br>- 820101012 - ÓLEO DIESEL B S500 - COMUM<br>- 420106002 - ÓLEO DIESEL B S500 AMD 10<br>- 420301004 - OLEO DIESEL DE REFERÊNCIA S300<br>**Exceção 2**: A regra de validação não se aplica, em produção, para Nota Fiscal com Data de Emissão anterior a 01/01/2016. | Facult. | 378 | Rej. | Rejeição: Grupo de Combustível sem a informação de Encerrante [nItem:nnn] |
| LA11-20 | 55 | Informado o grupo de “Encerrante” na NF-e (modelo 55) para CFOP diferente de venda de combustível para consumidor final (CFOP= 5.656, 5.667): | Obrig. | 379 | Rej. | Rejeição: Grupo de Encerrante na NF-e (modelo 55) para CFOP diferente de venda de combustível para consumidor final [nItem:nnn] |
| LA16-10 | 55/65 | Valor do Encerrante final não é superior ao Encerrante inicial<br>**Observação**:No caso do valor do encerrante chegar ao final (zerar) o item correspondente deverá ser informado com encerrante final 999... e deverá ser incluído um novo item na NF a partir do encerrante com valor inicial zero. | Obrig. | 380 | Rej. | Rejeição: Valor do Encerrante final não é superior ao Encerrante inicial [nItem:nnn] |

<!-- p.24 -->
## N. Item / Tributo: ICMS

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| N12-30 | 65 | NFC-e com CST diferente da relação abaixo:<br>- 00-Tributada integralmente;<br>- 20-Com redução da Base de Cálculo;<br>- 40-Isenta;<br>- 41-Não tributada;<br>- 60-ICMS cobrado anteriormente por substituição tributária;<br>**Exceção 1**: Aceitar CST=90-Outros, a critério da UF.<br>**Exceção 2**: A regra de validação não se aplica, em produção, para Nota Fiscal com Data de Emissão anterior a 01/04/2016. | Obrig. | 766 | Rej. | Rejeição: Item com CST indevido [nItem:nnn] |
| N12-34 | 65 | NFC-e com CST=90, informando dados do ICMS-ST (tag: ICMS90/modBCST) | Obrig. | 381 | Rej. | Rejeição: Grupo de tributação ICMS90, informando dados do ICMS-ST [nItem:nnn] |
| N12-40 | 65 | NFC-e com CST=00, 20, 40, 41 ou 90 e<br>- CFOP diferente de 5.101, 5.102, 5.103, 5.104, 5.115 | Obrig | 382 | Rej. | Rejeição: CFOP não permitido para o CST informado [nItem:nnn] |
| N12-44 | 65 | NFC-e com CST=60 (ICMS cobrado anteriormente por ST) e<br>- CFOP diferente de 5.405, 5.656, 5.667 | Obrig | 382 | Rej. | Rejeição: CFOP não permitido para o CST informado [nItem:nnn] |
| N12-60 | 65 | NFC-e com repasse de ICMS-ST retido anteriormente em operação interestadual com repasse pelo Substituto Tributário (tag:ICMS/ICMSST) | Obrig. | 740 | Rej. | Rejeição: Item com Repasse de ICMS retido por Substituto Tributário [nItem:nnn] |
| N12a-20 | 65 | NFC-e com CSOSN diferente da relação abaixo:<br>- 102-Tributação SN sem permissão de crédito;<br>- 103-Tributação SN, com isenção para faixa de receita bruta;<br>- 300-Imune;<br>- 400-Não tributada pelo Simples Nacional;<br>- 500-ICMS cobrado anteriormente por substituição tributária ou por antecipação;<br>**Exceção 1**: Aceitar CSOSN=900-Outros, a critério da UF.<br>**Exceção 2**: A regra de validação não se aplica, em produção, para Nota Fiscal com Data de Emissão anterior a 01/04/2016. | Obrig. | 383 | Rej. | Rejeição: Item com CSOSN indevido [nItem:nnn] |
| N12a-30 | 65 | NFC-e com CSOSN 103 ou 400 não permitidos para a UF.<br>**Observação:**Regra de validação opcional a critério da UF.<br>**Exceção**: A regra de validação não se aplica, em produção, para Nota Fiscal com Data de Emissão anterior a 01/04/2016. | Obrig. | 384 | Rej. | Rejeição: CSOSN não permitido para a UF [nItem:nnn] |
| N12a-34 | 65 | NFC-e com CSOSN=900, informando dados do ICMS-ST (informada tag: ICMSSN900/modBCST) | Obrig. | 385 | Rej. | Rejeição: Grupo de tributação ICMSSN900, informando dados do ICMS-ST [nItem:nnn] |
| N12a-40 | 65 | NFC-e com CSOSN=102, 103, 300, 400 ou 900 e<br>- CFOP diferente de 5.101, 5.102, 5.103, 5.104, 5.115 | Obrig | 386 | Rej. | Rejeição: CFOP não permitido para o CSOSN informado [nItem:nnn] |
| N12a-44 | 65 | NFC-e com CSOSN=500 (ICMS cobrado anteriormente) e<br>- CFOP diferente de 5.405, 5.656, 5.667 | Obrig | 386 | Rej. | Rejeição: CFOP não permitido para o CSOSN informado [nItem:nnn] |

<!-- p.25 -->
## O. Item / Tributo: IPI

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| O06-10 | 55 | Código de Enquadramento Legal do IPI inválido (tag:cEnq, id:O06).<br>Ver Anexo XIV - Código de Enquadramento Legal do IPI.<br>**Observação**: Implementação futura em 01/01/2016. | Obrig. | 387 | Rej. | Rejeição: Código de Enquadramento Legal do IPI inválido [nItem:nnn] |
| O09-10 | 55 | Verificar compatibilidade entre o CST do IPI e o Código de Enquadramento Legal (cEnq), conforme as regras abaixo:<br>- CST de Isenção e Código de Enquadramento incompatível (IPINT/CST=02, 52 e cEnq fora da faixa [301, 399])<br>- CST de Imunidade e Código de Enquadramento incompatível (IPINT/CST=04, 54 e cEnq fora da faixa [001, 099])<br>- CST de Suspensão e Código de Enquadramento incompatível (IPINT/CST=05, 55 e cEnq fora da faixa [101, 199])<br>**Exceção**: A regra de validação não se aplica, em produção, para Nota Fiscal com data de emissão anterior a 01/04/2016. | Obrig | 388 | Rej. | Rejeição: Código de Situação Tributária do IPI incompatível com o Código de Enquadramento Legal do IPI [nItem:nnn] |

## U. Item / Tributo: ISSQN

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| U05-10 | 55/65 | Se informado Código Município do Fato Gerado de ISSQN:<br>– Código Município do Fato Gerador de ISSQN inexistente (Tabela Municípios IBGE)<br>**Exceção**: Aceitar ISSQN/cMunFG=”9999999” no caso de prestação de serviço no exterior (dest/cUF=”EX”). (NT 2013/005 v 1.20) | Obrig. | 287 | Rej. | Rejeição: Código Município do Fato Gerador de ISSQN inexistente [nItem:nnn] |
| U14-10 | 55/65 | Se informado Código Município de incidência do ISSQN:<br>– Código Município ISSQN inexistente (Tabela Municípios IBGE) | Obrig. | 389 | Rej. | Rejeição: Código Município ISSQN inexistente [nItem:nnn] |
| U15-10 | 55/65 | Se informado Código País onde o serviço foi prestado (tag:ISSQN/cPais)<br>- Código País inexistente (Tabela do BACEN, vide tabela de apoio publicada no Portal da NF-e).<br>**Observação**: O Código do País informado na NF-e pode conter ou não zeros não significativos. | Obrig. | 739 | Rej. | Rejeição: Código de País do ISSQN Inexistente |

## UA. Item / Devolução de Tributos

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| UA01-20 | 65 | Informado grupo de devolução de tributos (tag:impostoDevol):<br>- NFC-e com grupo de devolução de tributos | Obrig. | 390 | Rej. | Rejeição: Nota Fiscal com grupo de devolução de tributos[nItem:nnn] |

<!-- p.26 -->
## W. Total da Nota Fiscal

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| W16-40 | 65 | NFC-e com valor total superior a R$ 10.000,00:<br>– Código do Destinatário não informado (tag:dest/CNPJ, dest/CPF ou dest/idEstrang)<br>**Observação**: Valor definido a critério da UF. | Obrig. | 750 | Rej. | Rejeição: NFC-e com valor total superior ao permitido para destinatário não identificado (Código) [Limite] |
| W16-50 | 65 | – Nome do Destinatário não informado (tag:dest/xNome)<br>**Observação**: Regra de Validação opcional, a critério da UF. | Facult. | 751 | Rej. | Rejeição: NFC-e com valor total superior ao permitido para destinatário não identificado (Nome) [Limite] |
| W16-60 | 65 | – Endereço do Destinatário não informado (tag:dest/enderDest)<br>**Observação**: Regra de Validação opcional, a critério da UF. | Facult. | 752 | Rej. | Rejeição: NFC-e com valor total superior ao permitido para destinatário não identificado (Endereço) [Limite] |

## X. Transporte da Nota Fiscal

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| X04-10 | 55 | Obrigatória a informação de identificação do Transportador para os CFOP de venda de combustível (tag: CNPJ/CPF, id:X04/X05) com esta obrigatoriedade (Anexo XIII.02 do MOC).<br>**Exceção 1**: A regra de validação acima se aplica somente para a Nota Fiscal com Finalidade de Emissão normal (tag:finNFe=1);<br>**Exceção 2**: A regra de validação acima se aplica somente para os Códigos de Produto ANP relacionados no Anexo XI.02 do MOC;<br>**Exceção 3**: A regra de validação acima não se aplica se for informada a UF do Transportador no exterior (tag:transporta/UF=”EX”, id:X10).<br>~~**Observação 1**: Vide relação de CFOP de combustível com obrigatoriedade de informações do transportador no Anexo XI.02 do MOC.~~<br>**Observação**: Nos casos em que não houver circulação física de mercadoria, os dados do transportador poderão ser preenchidos com o CNPJ do próprio emitente do documento fiscal. | Obrig. | 362 | Rej. | Rejeição: Venda de combustível sem informação do Transportador |
| X16-10 | 55 | CFOP de Transporte inexistente ou não pode ser usado no grupo de retenção do ICMS de transporte, conforme tabela de apoio publicada no Portal da NF-e (Tabela CFOP, indTransp=0) | Obrig. | 722 | Rej. | Rejeição: CFOP de Transporte Inexistente |
| X17-10 | 55 | Se informado Município do Fato Gerador do Transporte (id:X17):<br>– Código do Município do Fato Gerador do Transporte inexistente (Tabela Municípios IBGE) | Obrig. | 288 | Rej. | Rejeição: Código Município do Fato Gerador do Transporte inexistente |

## YA. Formas de Pagamento

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| YA01-20 | 65 | NFC-e deve possuir o grupo de Formas de Pagamento (tag:pag).<br>**Observação**: Implementação por padrão, opcional a critério da UF. | Facult. | 769 | Rej. | Rejeição: NFC-e deve possuir o grupo de Formas de Pagamento |
| <!-- p.27 -->YA04-10 | 65 | Se informado o grupo de pagamentos (tag:pag):<br>- Se o Pagamento for por cartão (tag:tPag=03, 04), deve ser informado o grupo de cartões (tag:card)<br>**Observação**: Implementação por padrão, opcional a critério da UF.<br>**Exceção**: A regra de validação não se aplica, em produção, para Nota Fiscal com Data de Emissão anterior a 01/04/2016. | Facult. | 391 | Rej. | Rejeição: Não informados os dados do cartão de crédito / débito nas Formas de Pagamento da Nota Fiscal |
| YA04a-10 | 65 | Se informado o grupo de Cartão de Crédito / Débito (tag:card), deve ser informado o tipo de integração (tag:tpIntegra).<br>**Exceção**: A regra de validação não se aplica, em produção, para Nota Fiscal com Data de Emissão anterior a 01/04/2016. | Obrig. | 496 | Rej. | Rejeição: Não informado o tipo de integração no pagamento com cartão de crédito / débito |
| YA04a-20 | 65 | Se informado o tipo de integração como pagamento não integrado com o sistema de automação da empresa (tag: tpIntegra=2) para UF que não aceita esse tipo de integração.<br><br>**Observação 1:** Regra de Validação opcional a critério da UF. | Facult. | 737 | Rej. | Rejeição: Pagamento com cartão de crédito em sistema de automação não integrado |
| YA05-10 | 65 | Se informado o grupo de Cartão de Crédito / Débito (tag:card):<br>- Se o pagamento com cartão for integrado ao sistema de automação da empresa (tag:tpIntegra=1) devem ser informados os campos de CNPJ da Credenciadora e o código de autenticação da operação (tag:card/CNPJ e card/cAut)<br>**Observação**: Implementação por padrão, opcional a critério da UF.<br>**Exceção**: A regra de validação não se aplica, em produção, para Nota Fiscal com Data de Emissão anterior a 01/04/2016. | Facult. | 392 | Rej. | Rejeição: Não informados os dados da operação de pagamento por cartão de crédito / débito |

## ZA. Informações de Comércio Exterior

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| ZA01-30 | 65 | Informado grupo de comércio exterior (tag: exporta):<br>- NFC-e com grupo de exportação | Obrig. | 814 | Rej. | Rejeição: Nota Fiscal com grupo de comércio exterior |

## ZX. Informações Suplementares da Nota Fiscal

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| ZX01-10 | 55 | (Modelo 55)<br>Informado o grupo de parâmetros suplementares para a NF-e | Obrig. | 393 | Rej. | Rejeição: NF-e com o grupo de Informações Suplementares |
| ZX02-10 | 65 | Não informado o campo de QR-Code para a NFC-e.<br>**Exceção**: A regra de validação não se aplica, em produção, para Nota Fiscal com Data de Emissão anterior a 01/04/2016. Não sendo informado o QR-Code não se aplicam as demais validações relacionadas com este campo. | Obrig. | 394 | Rej. | Rejeição: Nota Fiscal sem a informação do QR-Code |
| <!-- p.28 -->ZX02-20 | 65 | Endereço do site da UF para a Consulta via QR-Code difere do previsto.<br>**Nota**: O uso diferenciado de maiúsculas ou minúsculas não deve ser considerado na validação.<br>**Observação 1**: Regra de Validação opcional até 01/11/2016, a critério da UF.<br><br>**Observação 2**: Para consultar as URLs por UF utilizadas no QR Code, acesse: http://nfce.encat.org/desenvolvedor/qrcode/ | Obrig. | 395 | Rej. | Rejeição: Endereço do site da UF da Consulta via QR-Code diverge do previsto |
| ZX02-22 | 65 | QR-Code com sequência de escape para o e-comercial “&” (qrCode like “%&amp;%”)<br><br>**Nota:** Deve-se usar o CDATA.<br><br>**Observação**: A regra de validação não se aplica, em produção, para Nota Fiscal com data de emissão anterior a 03/04/2017. | Obrig | 813 | Rej. | Rejeição: QR-Code com sequência de escape para o e-comercial. Usar CDATA |
| ZX02-24 | 65 | Parâmetro Chave de Acesso não informado no QR-Code.<br>**Nota**: O *Schema* XML faz esta verificação. | Obrig. | 396 | Rej. | Rejeição: Parâmetro do QR-Code inexistente (chAcesso) |
| ZX02-28 | 65 | Parâmetro Chave de Acesso no QR-Code diverge da Chave de Acesso da Nota Fiscal | Obrig. | 397 | Rej. | Rejeição: Parâmetro do QR-Code divergente da Nota Fiscal (chAcesso) |
| ZX02-32 | 65 | Parâmetro Versão não informado no QR-Code.<br>**Nota**: O *Schema* XML faz esta verificação. | Obrig. | 396 | Rej. | Rejeição: Parâmetro do QR-Code inexistente (nVersao) |
| ZX02-36 | 65 | Parâmetro Versão informada no QR-Code diverge do previsto (“100”) | Obrig. | 398 | Rej. | Rejeição Parâmetro nVersao do QR-Code difere do previsto |
| ZX02-40 | 65 | Parâmetro Tipo de Ambiente não informado no QR-Code.<br>**Nota**: O *Schema* XML faz esta verificação. | Obrig. | 396 | Rej. | Rejeição: Parâmetro do QR-Code inexistente (tpAmp) |
| ZX02-44 | 65 | Parâmetro Tipo de Ambiente do QR-Code diverge do Tipo de Ambiente da Nota Fiscal (tag:tpAmb, id:B24) | Obrig. | 397 | Rej. | Rejeição: Parâmetro do QR-Code divergente da Nota Fiscal (tpAmb) |
| ZX02-48 | 65 | Parâmetro Código de Identificação do Destinatário não informado no QR-Code, para Nota Fiscal **com** identificação do destinatário (existe tag:dest, id:E01). | Obrig. | 396 | Rej. | Rejeição: Parâmetro do QR-Code inexistente (cDest) |
| ZX02-52 | 65 | Parâmetro Código de Identificação do Destinatário no QR-Code para Nota Fiscal **sem** identificação do destinatário (não existe tag:dest, id:E01) | Obrig. | 399 | Rej. | Rejeição: Parâmetro de Identificação do destinatário no QR-Code para Nota Fiscal sem identificação do destinatário |
| ZX02-56 | 65 | Parâmetro Código de Identificação do Destinatário no QR-Code diverge do destinatário da Nota Fiscal (tag:CNPJ - id:E02, ou CPF - id:E03 ou idEstrangeiro - id:E03a) | Obrig. | 397 | Rej. | Rejeição: Parâmetro do QR-Code divergente da Nota Fiscal (cDest) |
| ZX02-60 | 65 | Parâmetro Data de Emissão não informado no QR-Code.<br>**Nota**: O *Schema* XML faz esta verificação. | Obrig. | 396 | Rej. | Rejeição: Parâmetro do QR-Code inexistente (dhEmi) |
| <!-- p.29 -->ZX02-64 | 65 | Parâmetro Data de Emissão no QR-Code não está no formato hexadecimal (Caracteres: “0-9”, “a-f”, “A-F”).<br>**Nota**: O *Schema* XML faz esta verificação. | Obrig. | 400 | Rej. | Rejeição: Parâmetro do QR-Code não está no formato hexadecimal (dhEmi) |
| ZX02-68 | 65 | Parâmetro Data de Emissão no QR-Code diverge da Data de Emissão da Nota Fiscal (tag:dhEmi, id:B09) | Obrig. | 397 | Rej. | Rejeição: Parâmetro do QR-Code divergente da Nota Fiscal (dhEmi) |
| ZX02-72 | 65 | Parâmetro Valor da Nota Fiscal não informado no QR-Code.<br>**Nota**: O *Schema* XML faz esta verificação. | Obrig. | 396 | Rej | Rejeição: Parâmetro do QR-Code inexistente (vNF) |
| ZX02-76 | 65 | Parâmetro Valor da Nota Fiscal no QR-Code diverge do Valor Total da Nota Fiscal (tag:vNF, id:W16) | Obrig. | 397 | Rej. | Rejeição: Parâmetro do QR-Code divergente da Nota Fiscal (vNF) |
| ZX02-80 | 65 | Parâmetro Valor do ICMS não informado no QR-Code.<br>**Nota**: O *Schema* XML faz esta verificação. | Obrig. | 396 | Rej. | Rejeição: Parâmetro do QR-Code inexistente (vICMS) |
| ZX02-84 | 65 | Parâmetro Valor do ICMS no QR-Code diverge do Valor Total do ICMS da Nota Fiscal (tag:vICMS, id:W04) | Obrig. | 397 | Rej. | Rejeição: Parâmetro do QR-Code divergente da Nota Fiscal (vICMS) |
| ZX02-88 | 65 | Parâmetro Digest Value não informado no QR-Code.<br>**Nota**: O *Schema* XML faz esta verificação. | Obrig. | 396 | Rej. | Rejeição: Parâmetro do QR-Code inexistente (digVal) |
| ZX02-92 | 65 | Parâmetro Digest Value no QR-Code não está no formato hexadecimal (Caracteres: “0-9”, “a-f”,“A-F”).<br>**Nota**: O *Schema* XML faz esta verificação. | Obrig. | 400 | Rej. | Rejeição: Parâmetro do QR-Code não está no formato hexadecimal (digVal) |
| ZX02-96 | 65 | Parâmetro Digest Value no QR-Code diverge do Digest Value da Nota Fiscal (tag grupo: Signature, id:ZZ01) | Obrig. | 397 | Rej. | Rejeição: Parâmetro do QR-Code divergente da Nota Fiscal (digVal) |
| ZX02-100 | 65 | Parâmetro Código Identificador do CSC não informado no QR-Code.<br>**Nota**: O *Schema* XML faz esta verificação.<br><br>**Observação:** Mais informações sobre o CSC de cada UF estão disponíveis em http://nfce.encat.org/empresario/csc/ | Obrig. | 396 | Rej. | Rejeição: Parâmetro do QR-Code inexistente (cIdToken) |
| ZX02-104 | 65 | Parâmetro Código Identificador do CSC no QR-Code não cadastrado na SEFAZ.<br>**Observação 1**: Regra de Validação opcional até 01/11/2016, a critério da UF.<br><br>**Observação 2:** Mais informações sobre o CSC de cada UF estão disponíveis em http://nfce.encat.org/empresario/csc/ | Obrig. | 462 | Rej. | Rejeição: Código Identificador do CSC no QR-Code não cadastrado na SEFAZ |
| ZX02-108 | 65 | Parâmetro Código Identificador do CSC no QR-Code foi revogado pela empresa anteriormente a Data de Emissão.<br>**Observação**: Regra de Validação opcional até 01/11/2016, a critério da UF. | Obrig. | 463 | Rej. | Rejeição: Código Identificador do CSC no QR-Code foi revogado pela empresa |
| ZX02-112 | 65 | Parâmetro Hash não informado no QR-Code.<br>**Nota**: O *Schema* XML faz esta verificação. | Obrig. | 396 | Rej. | Rejeição: Parâmetro do QR-Code inexistente (cHashQRCode) |
| <!-- p.30 -->ZX02-116 | 65 | Parâmetro Hash no QR-Code não está no formato hexadecimal (Caracteres: “0-9”, “a-f”,“A-F”).<br>**Nota**: O *Schema* XML faz esta verificação. | Obrig. | 400 | Rej. | Rejeição: Parâmetro do QR-Code não está no formato hexadecimal (cHashQRCode) |
| ZX02-120 | 65 | Parâmetro Hash no QR-Code diverge do calculado.<br>**Observação**: Regra de Validação opcional até 01/11/2016, a critério da UF. | Obrig. | 464 | Rej. | Rejeição: Código de Hash no QR-Code difere do calculado |

## 6. Banco de Dados: Chave de Segurança para o QR-Code (NFC-e)

Eliminado este grupo de validação devido à inclusão do QR-Code no leiaute da Nota Fiscal.

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| ~~6C02-10~~ | ~~65~~ | ~~Acessar BD de Chaves de Segurança do QR-Code (Acesso por: CNPJ-8 do Emitente):<br>- Empresa não possui chave de segurança para o QR-Code cadastrada na UF, ou as chaves existentes foram revogadas.~~ | ~~Facult.~~ | ~~796~~ | ~~Rej.~~ | ~~Rejeição: Empresa sem Chave de Segurança para o QR-Code~~ |

## 7. Banco de Dados: Cadastro da SEFAZ

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| 7B09-10 | 55/65 | Data de Emissão anterior a data de credenciamento do Contribuinte para a emissão de Nota Fiscal na UF, ou anterior a Data de Abertura do estabelecimento na UF. | Facult. | 479 | Rej. | Rejeição: Data de Emissão anterior a data de credenciamento ou anterior a Data de Abertura do estabelecimento |
| 7C10-10 | 55/65 | Código do Município do Emitente diverge do cadastrado na UF | Facult. | 480 | Rej. | Rejeição: Código Município do Emitente diverge do cadastrado na UF |
| 7C21-10 | 55/65 | Código de Regime Tributário do emitente divergente do cadastrado na SEFAZ (tag:emit/CRT):<br>- CRT=“1-Simples Nacional” para Contribuinte cadastrado como Regime Normal na UF;<br>- CRT=“3-Regime Normal” para Contribuinte cadastrado como Simples Nacional na UF;<br>**Observação**: Implementação futura. | Facult. | 481 | Rej. | Rejeição: Código Regime Tributário do emitente diverge do cadastro na SEFAZ |
| 7E10-10 | 55/65 | Código do Município do Destinatário diverge do cadastrado na UF | Facult. | 482 | Rej. | Rejeição: Código do Município do Destinatário diverge do cadastrado na UF |
| 7GA01-10 | 55 | Não informado o Grupo de Autorização para obter o XML, para a UF que exige a identificação do Escritório de Contabilidade na Nota Fiscal, conforme legislação estadual.<br>**Observação**: Regra de Validação opcional, a critério da UF. | Facult. | 486 | Rej. | Rejeição: Não informado o Grupo de Autorização para UF que exige a identificação do Escritório de Contabilidade na Nota Fiscal |
| <!-- p.31 -->7GA01-20 | 55 | Verificar se o CNPJ/CPF informado na primeira ocorrência do Grupo de Autorização corresponde a um Escritório de Contabilidade cadastrado na SEFAZ, conforme legislação estadual.<br>**Observação**: Regra de Validação opcional a critério da UF. | Facult. | 487 | Rej. | Rejeição: Escritório de Contabilidade não cadastrado na SEFAZ |

## 8. Banco de Dados: Acompanhamento do Contribuinte

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| 8C02-10 | 55 | Na Nota Fiscal de Saída, verificar se a soma das demais Notas Fiscais de Saída (vendas) do Emitente no período ultrapassa o limite anual de faturamento, conforme o Porte da Empresa.<br>**Observação 1**: Regra de validação opcional a critério da UF.<br>**Observação 2**: Considerar tolerância, conforme a legislação estadual. | Facult. | 488 | Rej. | Rejeição: Vendas do Emitente incompatíveis com o Porte da Empresa |
