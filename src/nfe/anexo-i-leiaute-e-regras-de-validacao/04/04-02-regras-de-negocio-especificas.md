# 4.2. Regras de Negócio específicas

## 4.2.1. Autorização de NF-e

Validações específicas do **Erro! Fonte de referência não encontrada..**

<!-- REVISAR p.74: a fonte traz "Erro! Fonte de referência não encontrada.." (campo de referência do Word não resolvido) no texto de introdução de 4.2.1 -->

### A. Dados da NF-e

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| A03-10 | 55/65 | Campo Id inválido: - Chave de Acesso do campo Id difere da concatenação dos campos correspondentes. | Obrig. | 502 | Rej. | Rejeição: Erro na Chave de Acesso - Campo Id não corresponde à concatenação dos campos correspondentes |

Observação: No caso da Nota Fiscal Avulsa da Série 890-899, considerar o CNPJ da SEFAZ para a UF correspondente. Nos demais casos, considerar o CNPJ/CPF do emitente. (NT 2018.001)

<!-- p.75 -->

### B. Identificação da NF-e

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| B02-10 | 55/65 | Código da UF do Emitente difere da UF do Web Service | Obrig. | 226 | Rej. | Rejeição: Código da UF do Emitente diverge da UF autorizadora |
| B02-20 | 55/65 | Código da UF do Emitente difere da UF da primeira NF-e do Lote | Obrig. | 476 | Rej. | Rejeição: Código da UF diverge da UF da primeira NF-e do Lote |

Observação: Esta validação tem sentido unicamente para a SEFAZ Virtual, que deve evitar um Lote, com NF-e de diferentes UF.

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| B03-10 | 55/65 | Verificar formação do cNF: cNF não pode ser igual a 00000000, 11111111, 22222222, 33333333, 44444444, 55555555, 66666666, 77777777, 88888888, 99999999, 12345678, 23456789, 34567890, 45678901, 56789012, 67890123, 78901234, 89012345, 90123456, 01234567. cNF não pode ser igual a nNF (id: B08). (NT 2019.001 v1.00, v1.50) | Obrig. | 897 | Rej. | Rejeição: Código numérico em formato inválido. |
| B06-10 | 65 | NFC-e não é aceita pela UF do Emitente | Obrig. | 702 | Rej. | Rejeição: NFC-e não é aceita pela UF do Emitente |
| B06-20 | 55/65 | Lote de documentos enviados só poderá conter NF-e ou NFC-e | Obrig. | 765 | Rej. | Rejeição: Lote só poderá conter NF-e ou NFC-e |
| B06-30 | 55 | Se a SEFAZ optar por ambientes separados de autorização: – NFC-e enviada para ambiente de autorização da NF-e | Facul. | 450 | Rej. | Rejeição: Modelo da NF-e diferente de 55 |
| B06-40 | 65 | Se a SEFAZ optar por ambientes separados de autorização: – NF-e enviada para ambiente de autorização da NFC-e | Facul. | 775 | Rej. | Rejeição: Modelo da NFC-e diferente de 65 |
| B09-10 | 55/65 | Data-Hora de Emissão posterior ao horário de recepção na SEFAZ. | Obrig. | 703 | Rej. | Rejeição: Data-Hora de Emissão posterior ao horário de recebimento |

Observação: Aceita uma tolerância de até 5 minutos, devido ao sincronismo de horário do servidor da Empresa e o servidor da SEFAZ.

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| B09-20 | 55 | NF-e com Tipo de Emissão = 1-Normal (ou 6-SVC-AN, 7-SVC-RS) (NT2012.003): – Data de Emissão ocorrida há mais de 30 dias (ou outro limite definido pela SEFAZ) | Obrig. | 228 | Rej. | Rejeição: Data de Emissão muito atrasada |

Exceção 1: A critério da UF,a rejeição acima pode ser efetuada para qualquer Tipo de Emissão.

Exceção 2: A critério da UF, pode ser aceita a NF-e com Data de Emissão muito atrasada, desde que tenha sido emitida em contingência (tpEmis=2, 4, 5). Neste caso, a SEFAZ Autorizadora irá retornar cStat=”150- Autorizado Uso da NF-e, autorização fora de prazo” (NT 2012.003). (NT 2015.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| B09-30 | 55 | Data de Emissão anterior ao início da autorização de NF-e na UF. Observação:O início da operação da NF-e ocorreu em diferentes momentos, conforme a UF (a primeira NF-e autorizada no País foi em 14/09/2006). (NT 2015.002) | Obrig. | 315 | Rej. | Rejeição: Data de Emissão anterior ao início da autorização de Nota Fiscal na UF |
| B09-40 | 65 | NFC-e com Tipo de Emissão=1-Normal (ou 3-SCAN, ou 6-SVC-AN, 7-SVC-RS) e Data-Hora de Emissão com atraso superior a 5 minutos em relação ao horário de recepção na SEFAZ. | Obrig. | 704 | Rej. | Rejeição: NFC-e com Data-Hora de emissão atrasada <!-- p.76 --> |

Exceção 1: A critério da UF, a rejeição acima pode ser efetuada para qualquer Tipo de Emissão.

Exceção 2: A critério da UF, pode ser aceita a NFC-e com Data de Emissão muito atrasada, desde que tenham sido emitida em contingência (tpEmis=4, 9). A NFC-e transmitida para a SEFAZ Autorizadora após o prazo de 24 horas deveretornar cStat=”150- Autorizado Uso da NF-e, autorização fora de prazo”.

Observação 1: A emissão da NFC-e deve ocorrer de forma on-line, real-time, com uma tolerância de até 5 minutos, devido ao sincronismo de horário do servidor da Empresa e o servidor da SEFAZ Autorizadora. (NT 2015.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| B09-50 | 65 | Data de Emissão anterior ao início da autorização de NFC-e na UF. Observação:O início da operação da NFC-e ocorreu em diferentes momentos, conforme a UF (a primeira NFC-e autorizada no País foi em 01/03/2013). (NT 2015.002) | Obrig. | 315 | Rej. | Rejeição: Data de Emissão anterior ao início da autorização de Nota Fiscal na UF |
| B10-10 | 65 | NFC-e com data de entrada/saída. | Obrig. | 705 | Rej. | Rejeição: NFC-e com data de entrada/saída |
| B10-20 | 55 | Se informado Data de Entrada / Saída (dhSaiEnt): – Data Entrada / Saída posterior a 30 dias da Data de Autorização | Facul. | 504 | Rej. | Rejeição: Data de Entrada/Saída posterior ao permitido |
| B10-30 | 55 | Se informado Data de Entrada / Saída (dhSaiEnt): – Data Entrada / Saída anterior a 30 dias da Data de Autorização | Facul. | 505 | Rej. | Rejeição: Data de Entrada/Saída anterior ao permitido |

Observação: Para as SEFAZ que aceitam NF-e emitida em contingência a mais de 30 dias, esta rejeição deverá considerar tpEmi=1, 3, 6, 7

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| B10-40 | 55 | Se informado Data de Entrada / Saída (tag:dhSaiEnt) para NF-e de Saída (tag:tpNF=1): – Data de Saída (dSaiEnt) menor que a Data de Emissão (dhEmi) | Facul. | 506 | Rej. | Rejeição: Data de Saída menor que a Data de Emissão |
| B11-10 | 65 | NFC-e para operação de entrada (tag:tpNF=0) | Obrig. | 706 | Rej. | Rejeição: NFC-e para operação de entrada |
| B11a-10 | 65 | NFC-e para operação interestadual ou com o exterior (tag:idDest<>1) | Obrig. | 707 | Rej. | Rejeição: NFC-e para operação interestadual ou com o exterior |
| B12-10 | 55/65 | Código do Município do Fato Gerador de ICMS inexistente (Tabela Municípios IBGE) (NT 2015.002) | Obrig. | 270 | Rej. | Rejeição: Código Município do Fato Gerador de ICMS inexistente |
| B12-20 | 55/65 | Código do Município do Fato Gerador (2 primeiras posições) difere do Código da UF do emitente | Obrig. | 271 | Rej. | Rejeição: Código Município do Fato Gerador: difere da UF do emitente |
| B21-10 | 65 | NFC-e com tipo de impressão diferente de 4 e 5 (tag:tpImp<> 4 e 5) | Obrig. | 709 | Rej. | Rejeição: NFC-e com formato de DANFE inválido |
| B21-20 | 55 | NF-e com tipo de impressão 4 ou 5 (tag:tpImp= 4 ou 5) | Obrig. | 710 | Rej. | Rejeição: NF-e com formato de DANFE inválido |
| B22-10 | 55 | NF-e com contingência off-line (tag:tpEmis=9) | Obrig. | 711 | Rej. | Rejeição: NF-e com contingência off-line |
| B22-20 | 65 | NFC-e com contingência off-line para a UF (tag:tpEmis=9 e UF não aceita este tipo de contingência) | Facul. | 712 | Rej. | Rejeição: NFC-e com contingência off-line para a UF |
| B22-30 | 55/65 | Na autorização pela SEFAZ: – não aceitar o conteúdo tpEmis=3-SCAN (NT 2010/004), 6-SVC-AN ou 7- SVC-RS | Obrig. | 570 | Rej. | Rejeição: Tipo de Emissão 3, 6 ou 7 só é válido nas contingências SCAN/SVC |
| B22-34 | 65 | Na autorização pela SEFAZ: – rejeitar a NFC-e com opção de contingência inválida (tag:tpEmis=2, 4, 5) | Facul. | 714 | Rej. | Rejeição: NFC-e com contingência inválida (tpEmis=2, 4 (a critério da UF) ou 5) <!-- p.77 --> |

Observação: A contingência EPEC (tag:tpEmis=4) poderá ser aceita, a critério da UF. (NT 2015.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| B22-60 | 55/65 | Na autorização pela SVC: – não aceitar o conteúdo da tag tpEmis diferente de 6 para a SVC-AN ou 7 para a SVC-RS | Obrig. | 713 | Rej. | Rejeição: Tipo de Emissão diferente de 6 ou 7 para contingência da SVC acessada |
| B22-70 | 65 | Na autorização pela SVC: – não aceitar autorização de NFC-e | Obrig. | 783 | Rej. | Rejeição: NFC-e não é autorizada pela SVC |
| B23-10 | 55/65 | Chave de Acesso obtida pela concatenação dos campos correspondentes com dígito verificador (DV) inválido | Obrig. | 253 | Rej. | Rejeição: Digito Verificador da chave de acesso composta inválida |
| B24-10 | 55/65 | Tipo do ambiente da NF-e difere do ambiente do Web Service | Obrig. | 252 | Rej. | Rejeição: Ambiente informado diverge do Ambiente de recebimento |
| B25-20 | 65 | NFC-e com finalidade diferente de normal (tag:finNFe <> 1) | Obrig. | 715 | Rej. | Rejeição: NFC-e com finalidade inválida |
| B25-30 | 55 | Se NF-e complementar (tag:finNFe=2): – Não informado NF referenciada (NF-e, NFC-e, NF modelo 1) | Obrig. | 254 | Rej. | Rejeição: NF-e complementar não possui NF referenciada |
| B25-40 | 55 | Se NF-e complementar (tag:finNFe=2): – NF referenciada com mais de uma ocorrência (NF-e, NFC-e, NF modelo 1) | Obrig. | 255 | Rej. | Rejeição: NF-e complementar possui mais de uma NF referenciada |
| B25-50 | 55 | Se NF-e complementar (tag:finNFe=2): – CNPJ/CPF emitente da NF Referenciada difere do CNPJ/CPF emitente desta NF-e (NF-e, NFC-e, NF modelo 1) (NT 2018.001) | Obrig. | 269 | Rej. | Rejeição: CNPJ/CPF Emitente da NF Complementar difere do CNPJ/CPF da NF Referenciada |
| B25-60 | 55 | Se NF-e complementar (tag:finNFe=2): – UF da NF-e referenciada diferente da UF do emitente (NF-e, NFC-e, NF modelo 1) (NT 2013/003) | Facul. | 678 | Rej. | Rejeição: NF referenciada com UF diferente da NF-e complementar |
| B25-70 | 55 | Se NF-e de devolução de mercadoria (tag:finNFe=4): – Não informado documento fiscal referenciado (NF-e, NFC-e, NF modelo 1, NF Produtor, ECF) | Obrig. | 321 | Rej. | Rejeição: NF-e de devolução de mercadoria não possui documento fiscal referenciado |

Observação: não aplicar esta regra para os CFOP 1.201, 1.202, 1.410, 1.411, 5,921 e 6,921 (NT 2013/005 v 1.20)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| B25a-10 | 65 | NFC-e para operação não destinada a Consumidor Final (tag:indFinal=0) | Obrig. | 716 | Rej. | Rejeição: NFC-e em operação não destinada a consumidor final |
| B25b-10 | 55 | NF-e com indicativo de NFC-e com entrega a domicílio (tag:indPres=4) | Obrig. | 794 | Rej. | Rejeição: NF-e com indicativo de NFC-e com entrega a domicílio |
| B25b-20 | 65 | NFC-e em uma operação não presencial (tag:indPres<>1 e 4) | Obrig. | 717 | Rej. | Rejeição: NFC-e em operação não presencial |
| B25b-30 | 65 | NFC-e com operação de entrega a domicílio, não permitida para a UF (parametrizável). | Obrig. | 785 | Rej. | Rejeição: NFC-e com entrega a domicílio não permitida pela UF |
| B25b-40 | 55 | NF-e com indicativo de Operação presencial, fora do estabelecimento (tag:indPres=5) e não informada campos refNFe (id:BA02) ou refNF (id:BA03) (NT 2016.002) | Obrig. | 864 | Rej. | Rejeição: NF-e com indicativo de Operação presencial, fora do estabelecimento e não informada NF referenciada |
| B25c-10 | 55/65 | Se Informado indicativo de presença, tag: indPres, IGUAL a 2, 3, 4 ou 9 - Obrigatório o preenchimento do campo Indicativo do Intermediador (tag: indIntermed) | Obrig. | 434 | Rej. | Rejeição: NF-e sem indicativo do intermediador (Incluída na NT 2020.006) |

Observação: Regra de validação valida a partir de 01/02/2021 para homologação e 01/09/2021 para produção

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| B25c-20 | 55/65 | Se Informado indicativo de presença, tag: indPres, DIFERENTE de 2, 3, 4 ou 9 - Proibido o preenchimento do campo Indicativo do Intermediador (tag: indIntermed) | Obrig. | 435 | Rej. | Rejeição: NF-e não pode ter o indicativo do intermediador (Incluída na NT 2020.006) <!-- p.78 --> |
| B26-10 | 55/65 | Se Processo de Emissão pelo Contribuinte (procEmi<>1 e 2): – Série da NF-e difere da faixa de 0-889 ou 920-969 (NT 2018.001) | Obrig. | 244 | Rej. | Rejeição: Processo de Emissão pelo Contribuinte incompatível com a Série da NF |
| B26-20 | 55/65 | Se Processo de Emissão pelo Fisco (procEmi=1 ou 2): - Série difere da faixa 890-919 (NF Avulsa) (NT 2018.001) | Obrig. | 451 | Rej. | Rejeição: Processo de Emissão pelo Fisco incompatível com a Série da NF |
| B26-30 | 55/65 | Se Processo de Emissão pelo Fisco (procEmi=1 ou 2): - Tipo de Emissão difere de 1-Emissão Normal ou Emissão na SVC (tpEmis<>1, 6 e 7) (NT 2018.001/ NT 2015.002) | Obrig. | 370 | Rej. | Rejeição: Processo de emissão pelo Fisco com Tipo de Emissão inválido |
| B26-40 | 55/65 | Se Processo de Emissão pelo Fisco (procEmi=1 ou 2): - Certificado de Transmissão sem o CNPJ da SEFAZ para a UF (NT 2018.001) | Obrig. | 571 | Rej. | Rejeição: Processo de emissão pelo Fisco com Certificado de Transmissão incompatível |
| B28-10 | 55/65 | Se emissão normal (tpEmis = 1-Normal): – dhCont e xJust não devem ser informados | Obrig. | 556 | Rej. | Rejeição: Justificativa de entrada em contingência não deve ser informada para tipo de emissão normal |
| B28-20 | 55/65 | Se emissão em contingência utilizando DPEC, formulário de segurança ou contingência off-line (tpEmis = 2, 4, 5 ou 9): – dhCont e xJust devem ser informados | Obrig. | 557 | Rej. | Rejeição: A Justificativa de entrada em contingência deve ser informada |
| B28-30 | 55/65 | Data de entrada em contingência não deve ser maior que a data de recepção da NF-e (NT 2010/004). | Facul. | 558 | Rej. | Rejeição: Data de entrada em contingência posterior a data de recebimento |

Observação 1: Não considerar a Hora no caso da NF-e com versão inferior a versão 3.0.

Observação 2: Aceita uma tolerância de até 5 minutos, devido ao sincronismo de horário do servidor da Empresa e o servidor da SEFAZ.

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| B28-40 | 55/65 | Data de entrada em contingência deve ser menor ou igual à data de emissão – 30 dias (NT 2010/004) | Facul. | 569 | Rej. | Rejeição: Data de entrada em contingência muito atrasada |

Observação: Não considerar a Hora no caso da NF-e com versão inferior a versão 3.0

### BA. Documento Fiscal Referenciado

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| BA01-10 | 65 | NFC-e não pode referenciar outros documentos (tag:NFref) | Obrig. | 708 | Rej. | Rejeição: NFC-e não pode referenciar documento fiscal |
| BA02-10 | 55 | Se informada uma NF-e referenciada (tag:refNFe): - Dígito Verificador da Chave de Acesso inválido (NT 2015.002) | Facul. | 547 | Rej. | Rejeição: Chave de Acesso referenciada com Dígito Verificador inválido[nOcor:nnn] |
| BA02-14 | 55 | Se informada uma NF-e referenciada (tag:refNFe): - Chave de Acesso referenciada com UF inválida (NT 2015.002) | Facul. | 522 | Rej. | Rejeição: Chave de Acesso referenciada com UF inválida[nOcor:nnn] |
| BA02-20 | 55 | Se informada uma NF-e referenciada (tag:refNFe): - Chave de Acesso referenciada com Ano Emissão < 06 ou > que o Ano corrente (NT 2015.002) | Facul. | 524 | Rej. | Rejeição: Chave de Acesso referenciada com Ano-Mês inválido[nOcor:nnn] |
| BA02-24 | 55 | Se informada uma NF-e referenciada (tag:refNFe): - Chave de Acesso referenciada com Mês Emissão < 01 ou > 12 NT 2015.002) | Facul. | 524 | Rej. | Rejeição: Chave de Acesso referenciada com Ano-Mês inválido[nOcor:nnn] |
| BA02-30 | 55 | Se informada uma NF-e referenciada (tag:refNFe): - Série = [0-909] e CNPJ zerado ou dígito inválido, ou - Série = [910-969] e CPF zerado ou dígito inválido (NT 2018.001) | Facul. | 552 | Rej. | Rejeição: Chave de Acesso referenciada com CNPJ/CPF inválido[nOcor:nnn] <!-- p.79 --> |
| BA02-34 | 55 | Se informada uma NF-e referenciada (tag:refNFe): - Modelo da NF-e referenciada diferente de 55/65/59 (NT 2013/003) (NT 2015.002) | Facul. | 679 | Rej. | Rejeição: Chave de Acesso referenciada com Modelo inválido[nOcor:nnn] |
| BA02-40 | 55 | Se informada uma NF-e referenciada (tag:refNFe): - Chave de Acesso referenciada com Número zerado (NT 2015.002) | Facul. | 683 | Rej. | Rejeição: Chave de Acesso referenciada com Número inválido[nOcor:nnn] |
| BA02-44 | 55 | Se informada uma NF-e referenciada (tag:refNFe): - Verificar duplicidade da NF-e referenciada (duplicidade da tag refNFe) (NT 2013/003) (NT 2015.002) | Facul. | 680 | Rej. | Rejeição: Chave de Acesso referenciada em duplicidade na NF-e [nOcor:nnn] |
| BA02-50 | 55 | Se informada uma NF-e referenciada (tag:refNFe): - Nota Fiscal referenciada com a mesma Chave de Acesso da Nota Fiscal atual (NT 2015.002) | Obrig. | 316 | Rej. | Rejeição: Chave de Acesso referenciada com a mesma Chave de Acesso da Nota Fiscal atual [nOcor:nnn] |
| BA03-10 | 55 | Se informada NF Modelo 1 ou NF Modelo 2 referenciada (tag:refNF): - Verificar duplicidade de Nota Fiscal Modelo 1 ou 2 referenciada (mesmo CNPJ, Modelo, Série, Número) (NT 2016.002) | Facul. | 681 | Rej. | Rejeição: Duplicidade de NF Modelo 1 referenciada (CNPJ, Modelo, Série e Número) [nOcor: nnn] |
| BA05-10 | 55 | Se informada NF Modelo 1 referenciada (tag:refNF): - NF modelo 1 referenciada emitida há mais de 20 anos da data atual ou com data de emissão superior ao Ano-Mês atual (NT 2015.002) | Facul. | 317 | Rej. | Rejeição: NF modelo 1 referenciada com data de emissão inválida [nOcor:nnn] |
| BA06-10 | 55 | Se informada NF Modelo 1 referenciada (tag:refNF): - CNPJ com zeros, nulo ou DV inválido | Facul. | 548 | Rej. | Rejeição: NF modelo 1 referenciada com data de emissão inválida [nOcor:nnn] |
| BA10-10 | 55 | Se informada NF de Produtor referenciada (tag:refNFP): - Verificar duplicidade de Nota Fiscal de Produtor referenciada (mesma IE, Modelo, Série, Número) (NT 2013/003) (NT 2015.002) | Facul. | 682 | Rej. | Rejeição: Duplicidade de NF de Produtor referenciada (IE, Modelo, Série e Número) [nOcor: 999] |
| BA10-20 | 55 | Contranota de Produtor sem Nota Fiscal referenciada: - não informada NF de Produtor referenciada (tag:refNFP); - e não informada Nota Fiscal referenciada (tag:refNFe). | Facul. | 318 | Rej. | Rejeição: Contranota de Produtor sem Nota Fiscal referenciada |

Observação 1: A Contranota de Produtor é identificada como uma Nota Fiscal de entrada (tag:tpNF=0) e remetente da mesma UF com IE de Produtor Rural.

Observação 2: A utilização e controle da Contranota de Produtor é opcional, a critério da UF.

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| BA10-30 | 55 | Contranota de Produtor não pode referenciar somente Nota Fiscal de entrada: - não informada NF de Produtor referenciada (tag:refNFP); - e não informada Nota Fiscal referenciada (tag:refNFe) de saída (tag:tpNF=1). | Facul. | 319 | Rej. | Rejeição: Contranota de Produtor não pode referenciar somente Nota Fiscal de entrada |

Observação 1: Identificação de Contranota de Produtor conforme observação da validação anterior.

Observação 2: A utilização e controle da Contranota de Produtor é opcional, a critério da UF. (NT 2015.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| BA10-40 | 55 | Contranota de Produtor referencia somente Nota Fiscal de outro emitente. Não existe nenhuma das ocorrências abaixo: - IE da NF de Produtor referenciada (tag: refNFP/IE) idêntica à IE do Emitente (tag: emit/IE) ou do Remetente (tag: dest/IE); - IE do emitente da NF referenciada (tag: emit/IE) idêntica à IE do Emitente (tag: emit/IE) ou do Remetente (tag: dest/IE). | Facul. | 320 | Rej. | Rejeição: Contranota de Produtor referencia somente NF de outro emitente <!-- p.80 --> |

Observação 1: Identificação de Contranota de Produtor conforme Observação 1 da regra BA10-20.

Observação 2: A utilização e controle da Contranota de Produtor é opcional, a critério da UF.

Observação 3: A critério da UF, a validação da IE do emitente da NF referenciada (tag: emit/IE) pode ser substituída por: o CNPJ-8 do emitente da NF referenciada (tag:emit/CNPJ) idêntico ao CNPJ-8 do Emitente (tag: emit/CNPJ) ou do Remetente (tag: dest/CNPJ) (NT 2019.001 v1.00).

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| BA10-50 | 55 | Contranota de Produtor só pode referenciar NF-e (tag: refNFe) ou NF de Produtor Modelo 4 (tag: refNFP): | Facul. | 922 | Rej. | Rejeição: Contranota de Produtor só pode referenciar NF-e ou NF de Produtor Modelo 4 |

Observação 1: Identificação de Contranota de Produtor conforme Observação 1 da regra BA10-20.

Observação 2: Regra opcional, a critério da UF. (NT 2019.001 v1.00)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| BA12-10 | 55 | Se informada NF de Produtor referenciada (tag:refNFP): - NF de produtor referenciada emitida a mais de 20 anos da data atual ou com data de emissão superior ao Ano-Mês atual (NT 2015.002) | Facul. | 322 | Rej. | Rejeição: NF de produtor referenciada com data de emissão inválida [nOcor:nnn] |
| BA13-10 | 55 | Se informada NF de Produtor referenciada (tag:refNFP): - CNPJ com zeros, nulo ou DV inválido | Facul. | 549 | Rej. | Rejeição: CNPJ da NF referenciada de produtor inválido [nOcor: 999] |
| BA14-10 | 55 | Se informada NF de Produtor referenciada (tag:refNFP): - CPF com zeros, nulo, 111..., 222, ..., ou DV inválido (NT 2012/003) | Facul. | 550 | Rej. | Rejeição: CPF da NF referenciada de produtor inválido. |
| BA15-10 | 55 | Se informada NF de Produtor referenciada (tag:refNFP): - IE com zeros, nulo ou DV inválido para a UF. | Facul. | 551 | Rej. | Rejeição: IE da NF referenciada de produtor inválido. |
| BA19-10 | 55 | Se informado CT-e Referenciado (tag:refCTe): - Chave de Acesso referenciada com Dígito Verificador inválido (NT 2015.002) | Facul. | 547 | Rej. | Rejeição: Chave de Acesso referenciada com Dígito Verificador inválido[nOcor:nnn] |
| BA19-14 | 55 | Se informado CT-e Referenciado (tag:refCTe): - Chave de Acesso referenciada com UF inválida (NT 2015.002) | Facul. | 522 | Rej. | Rejeição: Chave de Acesso referenciada com UF inválida[nOcor:nnn] |
| BA19-20 | 55 | Se informado CT-e Referenciado (tag:refCTe): - Chave de Acesso referenciada com Ano Emissão < 06 ou > que o Ano corrente (NT 2015.002) | Facul. | 524 | Rej. | Rejeição: Chave de Acesso referenciada com Ano-Mês inválido[nOcor:nnn] |
| BA19-24 | 55 | Se informado CT-e Referenciado (tag:refCTe): - Chave de Acesso referenciada com Mês Emissão < 01 ou > 12 (NT 2015.002) | Facul. | 524 | Rej. | Rejeição: Chave de Acesso referenciada com Ano-Mês inválido [nOcor: 999] |
| BA19-30 | 55 | Se informado CT-e Referenciado (tag:refCTe): - Chave de Acesso referenciada com CNPJ zerado ou CNPJ com DV inválido (NT 2015.002) | Facul. | 552 | Rej. | Rejeição: Chave de Acesso referenciada com CNPJ inválido[nOcor:nnn] |
| BA19-34 | 55 | Se informado CT-e Referenciado (tag:refCTe): - Chave de Acesso referenciada com Modelo diferente de 57 (NT 2013/003) (NT 2015.002) | Facul. | 679 | Rej. | Rejeição: Chave de Acesso referenciada com Modelo inválido[nOcor:nnn] <!-- p.81 --> |
| BA19-40 | 55 | Se informado CT-e Referenciado (tag:refCTe): - Chave de Acesso referenciada com Número zerado (NT 2015.002) | Facul. | 683 | Rej. | Rejeição: Chave de Acesso referenciada com Número inválido[nOcor:nnn] |
| BA19-44 | 55 | Se informado CT-e Referenciado (tag:refCTe): - Chave de Acesso referenciada em duplicidade na NF-e (duplicidade da tag refCTe) (NT 2013/003) (NT 2015.002) | Facul. | 680 | Rej. | Rejeição: Chave de Acesso referenciada em duplicidade na NF-e [nOcor:nnn] |
| BA20-10 | 55 | Se informado Cupom Fiscal referenciado (tag:refECF): - Verificar duplicidade de Cupom Fiscal referenciado (mesmo Modelo, Número de Ordem e COO) (NT 2013/003) | Facul. | 684 | Rej. | Rejeição: Duplicidade de Cupom Fiscal referenciado (Modelo, Número de Ordem e COO) [nOcor: 999] |
| BA20-20 | 55 | Informado Cupom Fiscal referenciado (tag: refECF) ou informado NF modelo 1 ou 2 referenciada (tag: refNF) em NF-e de operação interestadual ou com o exterior (tag: idDest<>1) (NT 2019.001 v1.00) | Facul. | 923 | Rej. | Rejeição: Referenciado documento de operação interna em operação interestadual ou com o exterior |
| BA20-30 | 55/65 | Informado Cupom Fiscal referenciado (tag: refECF) em UF que não permite essa referência. | Facul. | 924 | Rej. | Rejeição: Informado Cupom Fiscal referenciado |

Observação: Regra de validação opcional, a critério da UF. (NT 2019.001 v1.00, v.150)

### C. Identificação do Emitente

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| C02-10 | 55/65 | Se informado CNPJ do emitente: – CNPJ com zeros, nulo ou DV inválido | Obrig. | 207 | Rej. | Rejeição: CNPJ do emitente inválido |
| C02-20 | 55/65 | Se informado CNPJ do emitente: – CNPJ Base do Emitente difere do CNPJ Base da primeira NF-e do Lote recebido (NT 2018.001) | Facul. | 560 | Rej. | Rejeição: CNPJ base/CPF do emitente difere do CNPJ base/CPF da primeira NF-e do lote recebido |
| C02-30 | 55/65 | Se informado CNPJ do Emitente: - Série difere da faixa para emitente CNPJ: faixa 000-909 (NT 2018.001) | Obrig. | 503 | Rej. | Rejeição: CNPJ do emitente com Série incompatível |
| C02a-04 | 65 | Se informado CPF do emitente: – Se NFC-e (modelo 65) (NT 2015.002) | Obrig. | 337 | Rej. | Rejeição: NFC-e para emitente pessoa física |
| C02a-08 | 55 | Se informado CPF do emitente: – Se NF-e (modelo 55) | Obrig. | 652 | Rej. | Rejeição: NF-e para emitente pessoa física |

Observação: Regra de validação opcional a critério da UF. (NT 2018.001)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| C02a-10 | 55 | Se informado CPF do emitente: – Série difere da faixa para emitente CPF: 890-899 e 910-969 (NT 2018.001 / NT 2015.002) | Obrig. | 495 | Rej. | Rejeição: CPF do Emitente com Série incompatível |
| C02a-14 | 55 | Se informado CPF do Emitente: – Série difere da faixa para emitente CPF: 890-899 e 910-919 | Obrig. | 407 | Rej. | Rejeição: CPF do Emitente somente no serviço de Nota Fiscal Avulsa no site do Fisco |

Observação: Regra de validação opcional a critério da UF. Permite a emissão de NF-e por pessoa física, somente no serviço de Nota Fiscal Avulsa no site da UF. (NT 2018.001)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| C02a-20 | 55 | Se informado CPF do emitente: – CPF com zeros, nulo, 111..., 222..., ..., ou DV inválido (NT 2012/003) (NT 2015.002) | Obrig. | 401 | Rej. | Rejeição: CPF do emitente inválido <!-- p.82 --> |
| C02a-30 | 55 | Se informado CPF do emitente: – CPF do Emitente difere do CPF da primeira NF-e do Lote recebido (NT 2018.001) | Facul. | 560 | Rej. | Rejeição: CNPJ Base/CPF do emitente difere do CNPJ Base/CPF da primeira NF-e do lote recebido |
| C10-10 | 55/65 | Código do Município do Emitente inexistente (Tabela Municípios IBGE) (NT 2015.002) | Obrig. | 272 | Rej. | Rejeição: Código Município do Emitente inexistente |
| C10-20 | 55/65 | Código do Município do Emitente (2 primeiras posições) difere do Código da UF do emitente | Obrig. | 273 | Rej. | Rejeição: Código Município do Emitente: difere da UF do emitente |
| C12-10 | 55/65 | Sigla da UF do Emitente difere da UF do Web Service | Obrig. | 247 | Rej. | Rejeição: Sigla da UF do Emitente diverge da UF autorizadora |
| C17-10 | 55/65 | IE Emitente com zeros ou nulo | Obrig. | 229 | Rej. | Rejeição: IE do emitente não informada |
| C17-20 | 55/65 | Se IE diferente de “ISENTO”, validar a Inscrição Estadual: - IE Emitente inválida para a UF: erro no tamanho, na composição da IE, ou no dígito verificador (*2) (NT 2018.001) | Obrig. | 209 | Rej. | Rejeição: IE do emitente inválida |
| C17-30 | 55/65 | Se IE informada com “ISENTO”: - Se modelo = 65 ou Série difere da faixa 890-919 (NT 2018.001) | Obrig. | 554 | Rej. | Rejeição: IE do Emitente informada como ISENTO indevidamente |
| C18-10 | 65 | NFC-e não deve informar IE de Substituto Tributário (tag:emit/IEST) | Obrig. | 718 | Rej. | Rejeição: NFC-e não deve informar IE de Substituto Tributário |
| C18-14 | 55 | Se informada a IE do Substituto Tributário para uma operação com Exterior ou Operação Interna (tag:idDest=1 ou 3) Exceção: A critério da UF, poderá ser aceita a informação da IE-ST em operação interna. (NT 2015.002) | Obrig. | 347 | Rej. | Rejeição: Informada IE do substituto tributário em operação que não é interestadual |
| C18-20 | 55 | Se informada operação de Faturamento Direto para veículos novos (id:J02, tag:tpOp = 2): – UF do Local de Entrega (id:G09) não informada | Obrig. | 478 | Rej. | Rejeição: Local da entrega não informado para faturamento direto de veículos novos |

Observação: A UF é necessária na validação da IEST nestas operações. Vide Convênio ICMS 51/00.

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| C18-30 | 55 | Se informada a IE do Substituto Tributário: – IEST inválida para a UF: erro no tamanho, na composição da IE, ou no dígito verificador (*2) UF a ser utilizada na validação: – UF do Local de Entrega para operação de Faturamento Direto de veículos novos (id:G09, caso tpOP, id:J02 = 2); – UF do destinatário (UF, campo E12) nos demais casos. (NT 2015.002) | Obrig. | 211 | Rej. | Rejeição: IE do substituto inválida |
| C18-40 | 55 | Se informada a IE do Substituto Tributário: - IEST idêntica à IE do emitente ou do destinatário (NT 2015.002) | Obrig. | 363 | Rej. | Rejeição: IE do substituto tributário idêntica à IE do emitente ou do destinatário |
| C21-10 | 55/65 | Regime Tributário SN, com excesso de sublimite não é permitido para Emitentes desta UF (id:CRT=2). Nota: Regra de validação opcional, a critério da UF. (NT 2015.002) | Facul. | 812 | Rej. | Rejeição: Regime Tributário SN, com excesso de sublimite não é permitido para Emitentes desta UF |

<!-- p.83 -->

### D. Identificação do Fisco Emitente (NF-e Avulsa)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| D01-10 | 55/65 | Informado grupo “avulsa” pela empresa (tag:procEmi<>1 e 2). | Obrig. | 403 | Rej. | Rejeição: O grupo de informações da NF-e avulsa é de uso exclusivo do Fisco |
| D01-20 | 55/65 | Não informado grupo "avulsa" na emissão de Nota Fiscal pelo Fisco (tag:procEmi=1 ou 2) | Obrig. | 369 | Rej. | Rejeição: Não informado o grupo avulsa na emissão pelo Fisco |

### E. Identificação do Destinatário

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| E01-10 | 55 | NF-e sem a identificação do destinatário (tag:infNFe/dest) | Obrig. | 719 | Rej. | Rejeição: NF-e sem a identificação do destinatário |
| E01-20 | 65 | NFC-e com entrega a domicílio (indPres=4) sem identificação do destinatário (tag:infNFe/dest) | Obrig. | 787 | Rej. | Rejeição: NFC-e de entrega a domicílio sem a identificação do destinatário |
| E02-10 | 55/65 | Se informado CNPJ: – CNPJ com zeros ou dígito de controle inválido | Obrig. | 208 | Rej. | Rejeição: CNPJ do destinatário inválido |
| E02-20 | 65 | Se informado CNPJ: - CNPJ do destinatário = CNPJ do Emitente (NT 2015.002) | Obrig. | 220 | Rej. | Rejeição: Destinatário com identificação igual à identificação do emitente |
| E03-10 | 55/65 | Se informado CPF: – CPF com zeros, nulo, 111..., 222..., ... ou dígito de controle inválido (NT 2013/003) | Obrig. | 237 | Rej. | Rejeição: CPF do destinatário inválido |
| E03a-10 | 55 | Se Operação com Exterior (tag:idDest = 3): – Deve ser informada tag idEstrangeiro (conteúdo da tag pode ser nulo) | Obrig. | 720 | Rej. | Rejeição: Na operação com Exterior deve ser informada tag idEstrangeiro |
| E03a-20 | 55 | Se não é operação com Exterior (tag:idDest<>3): – Informado “idEstrangeiro”, e operação não é com consumidor final(tag:indFinal<> 1) (NT 2015.002) | Obrig. | 721 | Rej. | Rejeição: Informado idEstrangeiro e Operação não é com consumidor final. |
| E03a-30 | 55/65 | Se informado “idEstrangeiro” não pode ser informada “IE” do destinatário (tag: dest/IE). (NT 2019.001 v1.00) | Obrig. | 925 | Rej. | Rejeição: NF-e com identificação de estrangeiro e inscrição estadual informada para destinatário |
| E03a-60 | 55/65 | Se informado “idEstrangeiro”, campo deve conter somente algarismos, letras (maiúsculas e minúsculas) e/ou os caracteres do conjunto que segue: [:.+- /()](NT 2015.002) | Obrig. | 372 | Rej. | Rejeição: Destinatário com identificação de estrangeiro com caracteres inválidos |
| E04-10 | 55 | NF-e sem o nome do destinatário (tag:dest/xNome) | Obrig. | 724 | Rej. | Rejeição: NF-e sem o nome do destinatário |
| E04-20 | 55/65 | Se tag:tpAmb (id:B24) = 2: o xNome (E04) deve ser informado com a literal “NF-E EMITIDA EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL” (NT 2011/002) | Obrig. | 598 | Rej. | Rejeição: NF-e emitida em ambiente de homologação com Razão Social do destinatário diferente de NF-E EMITIDA EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL |
| E05-10 | 55 | NF-e sem a informação de endereço do destinatário (tag:dest/enderDest) | Obrig. | 726 | Rej. | Rejeição: NF-e sem a informação de endereço do destinatário |
| E05-20 | 65 | NFC-e com entrega a domicílio (indPres=4) sem o endereço do destinatário (tag:dest/enderDest) | Obrig. | 788 | Rej. | Rejeição: NFC-e de entrega a domicílio sem o endereço do destinatário |
| E10-10 | 55/65 | Se endereço destinatário não é no Exterior (dest/UF <> “EX"): – Código Município do destinatário inexistente (Tabela Municípios IBGE) (NT 2015.002) | Obrig. | 274 | Rej. | Rejeição: Código Município do Destinatário inexistente |
| E10-20 | 55/65 | Se endereço destinatário não é no Exterior (dest/UF <> “EX"): – Código Município do destinatário (2 primeiras posições) difere do Código da UF do destinatário | Obrig. | 275 | Rej. | Rejeição: Código Município do Destinatário: difere da UF do Destinatário <!-- p.84 --> |
| E10-30 | 55 | Se endereço destinatário é no Exterior (dest/UF = “EX"): – Código Município do destinatário difere de “9999999” | Obrig. | 509 | Rej. | Rejeição: Informado código de município diferente de “9999999” para operação com o exterior |
| E12-10 | 55 | Se endereço destinatário é no Exterior (dest/UF = “EX"): – UF de destino diferente de “EX” | Obrig. | 727 | Rej. | Rejeição: Operação com Exterior e UF diferente de EX |
| E12-30 | 55 | Se Nota Fiscal é de Saída (tpNF=1) e operação é Interestadual (tag:idDest = 2): – UF do destinatário (tag: enderDest/UF) igual à UF do emitente (tag: enderEmit/UF) e CNPJ emissor diferente do CNPJ destinatário (NT 2013/005). | Obrig. | 772 | Rej. | Rejeição: Operação Interestadual e UF de destino igual à UF de origem |

Observação: Não rejeitar se existir algum item com a tag UFCons (id:L120) diversa da UF do emitente.

Exceção 1: A regra de validação não se aplica se informada UF do local de entrega (tag: entrega/UF) diferente da UF do emitente (tag: enderEmit/UF) e não informada UF do local de retirada (tag: retirada/UF);

Exceção 2: A regra de validação não se aplica se informada UF do local de retirada (tag: retirada/UF) diferente da UF do destinatário (tag: enderDest/UF) e não informada UF do local de entrega (tag: entrega/UF);

Exceção 3: A regra de validação não se aplica se informadas UF do local de entrega (tag: entrega/UF) e UF do local de retirada (tag: retirada/UF) diferentes entre si; (NT 2015.003)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| E12-40 | 55 | Se Nota Fiscal é de Saída (tpNF=1), operação é Interna no Estado (tag:idDest = 1) e operação não é com Consumidor final: – UF do destinatário (tag: enderDest/UF) difere da UF do emitente (tag: enderEmit/UF). (NT 2015.003) | Obrig. | 773 | Rej. | Rejeição: Operação Interna e UF de destino difere da UF de origem |

Exceção 1: Se a tag UFCons (id:LA06) foi informada com a mesma UF do emitente não se aplica esta regra (NT 2013/005)

Exceção 2: A regra de validação não se aplica se informada UF do local de entrega (tag: entrega/UF) igual à UF do emitente (tag: enderEmit/UF) e não informada UF do local de retirada (tag: retirada/UF);

Exceção 3: A regra de validação não se aplica se informada UF do local de retirada (tag: retirada/UF) igual à UF do destinatário (tag: enderDest/UF) e não informada UF do local de entrega (tag: entrega/UF);

Exceção 4: A regra de validação não se aplica se informadas UF do local de entrega (tag: entrega/UF) e UF do local de retirada (tag: retirada/UF) iguais entre si;

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| E12-50 | 55 | Se Nota Fiscal é de Entrada (tpNF=0) e operação é Interestadual (tag:idDest = 2): – UF do destinatário (tag: enderDest/UF) igual à UF do emitente (tag: enderEmit/UF) e CNPJ emissor diferente do CNPJ destinatário. | Obrig. | 772 | Rej. | Rejeição: Operação Interestadual e UF de destino igual à UF de origem <!-- p.85 --> |

Observação: Não rejeitar se existir algum item com a tag UFCons (id:L120) diversa da UF do emitente.

Exceção 1: A regra de validação não se aplica se informada UF do local de entrega (tag: entrega/UF) diferente da UF do destinatário (tag: enderDest/UF) e não informada UF do local de retirada (tag: retirada/UF);

Exceção 2: A regra de validação não se aplica se informada UF do local de retirada (tag: retirada/UF) diferente da UF do emitente (tag: enderEmit/UF) e não informada UF do local de entrega (tag: entrega/UF);

Exceção 3: A regra de validação não se aplica se informadas UF do local de entrega (tag: entrega/UF) e UF do local de retirada (tag: retirada/UF) diferentes entre si; (NT 2015.003)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| E12-60 | 55 | Se Nota Fiscal é de Entrada (tpNF=0), operação é Interna no Estado (tag:idDest = 1) e operação não é com Consumidor final: – UF do destinatário (tag: enderDest/UF) difere da UF do emitente (tag: enderEmit/UF). | Obrig. | 773 | Rej. | Rejeição: Operação Interna e UF de destino difere da UF de origem |

Exceção 1: Se a tag UFCons (id:LA06) foi informada com a mesma UF do emitente não se aplica esta regra;

Exceção 2: A regra de validação não se aplica se informada UF do local de entrega (tag: entrega/UF) igual à UF do destinatário (tag: enderDest/UF) e não informada UF do local de retirada (tag: retirada/UF);

Exceção 3: A regra de validação não se aplica se informada UF do local de retirada (tag: retirada/UF) igual à UF do emitente (tag: enderEmit/UF) e não informada UF do local de entrega (tag: entrega/UF);

Exceção 4: A regra de validação não se aplica se informadas UF do local de entrega (tag: entrega/UF) e UF do local de retirada (tag: retirada/UF) iguais entre si; (NT 2015.003)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| E14-04 | 55/65 | Se informado Código País do destinatário (tag: enderDest/cPais): - Código do País inexistente (Tabela do BACEN, vide tabela de apoio publicada no Portal da NF-e). | Obrig. | 377 | Rej. | Rejeição: Código de País do destinatário inexistente |

Observação: O Código do País informado na NF-e pode conter ou não zeros não significativos. (NT 2015.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| E14-10 | 55 | Se operação com Exterior (tag:idDest=3): – Código País do destinatário = 1058 (Brasil), ou não informado | Facul. | 510 | Rej. | Rejeição: Operação com Exterior e Código País destinatário é 1058 (Brasil) ou não informado |
| E14-20 | 55/65 | Se não é operação com Exterior (tag:idDest<>3) e informado Código País do destinatário: – Código País do destinatário difere de 1058 (Brasil) Exceção: Se idEstrangeiro <> nulo é permitido cPais <> 1058. (NT 2015.002) | Facul. | 511 | Rej. | Rejeição: Não é de Operação com Exterior e Código País destinatário difere de 1058 (Brasil) |
| E14-30 | 55/65 | Se endereço do destinatário é no Exterior (dest/UF = “EX"): - Código do país “cPais” (id: E14) não pode ser 1058 (Brasil). (NT 2019.001 v1.00) | Obrig. | 926 | Rej | Rejeição: Operação com Exterior e país de destino igual a Brasil. |
| E16a-10 | 65 | NFC-e com indicação de IE do destinatário diferente de "Não Contribuinte" (tag:indIEDest <> 9) | Obrig. | 789 | Rej. | Rejeição: NFC-e para destinatário contribuinte de ICMS <!-- p.86 --> |
| E16a-20 | 55 | Se operação com Exterior (tag:idDest=3): – Indicação de IE Destinatário diferente "Não Contribuinte" (tag:indIEDest <> 9) (NT 2015.003) | Obrig. | 790 | Rej. | Rejeição: Operação com Exterior para destinatário Contribuinte de ICMS |
| E16a-30 | 55 | Informado destinatário como Contribuinte Isento de Inscrição Estadual (indIEDest=2-ISENTO) em UF que não permite esta situação nas operações interestaduais (idDest=2), conforme abaixo: - AM, BA, CE, GO, MG, MS, MT, PA, PE, RN, SE, SP | Obrig. | 805 | Rej. | Rejeição: A SEFAZ do destinatário não permite Contribuinte Isento de Inscrição Estadual |

Exceção 1: Esta regra de validação não se aplica quando houver destaque do ICMS-ST (campo vICMSST) em pelo menos um item da NF-e

Exceção 2: Esta regra de validação não se aplica quando houver informação do ICMS-ST retido anteriormente (campo vICMSSTRet) em pelo menos um item da NF-e

Exceção 3: A regra de validação não se aplica, em produção, para Nota Fiscal com data de emissão anterior a 01/07/2016

Exceção 4: Esta regra de validação não se aplica nas operações isentas (CST=40-Isenta ou CSOSN=103-Isento), imunes ou não tributadas (CST=41- Não tributada, ou CSOSN=300-Imune, ou CSOSN=400-Não tributada pelo Simples Nacional)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| E16a-35 | 55 | Informado destinatário como Contribuinte Isento de Inscrição Estadual (indIEDest=2-ISENTO) em UF que não permite esta situação nas operações internas (idDest=1) | Facul. | 805 | Rej. | Rejeição: A SEFAZ do destinatário não permite Contribuinte Isento de Inscrição Estadual |

Exceção 1: Esta regra de validação não se aplica quando houver destaque do ICMS-ST (campo vICMSST) em pelo menos um item da NF-e.

Exceção 2: Esta regra de validação não se aplica quando houver informação do ICMS-ST retido anteriormente (campo vICMSSTRet) em pelo menos um item da NF-e.

Exceção 3: A regra de validação não se aplica, em produção, para Nota Fiscal com data de emissão anterior a 01/07/2016.

Exceção 4: Esta regra de validação não se aplica nas operações isentas (CST=40-Isenta ou CSOSN=103-Isento), imunes ou não tributadas (CST=41- Não tributada, ou CSOSN=300-Imune, ou CSOSN=400-Não tributada pelo Simples Nacional) (NT 2015.003)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| E16a-40 | 55 | Informado indicador de IE do Destinatário não-contribuinte (tag: indIEDest=9) e não é operação com consumidor final (tag: indFinal<>1) em operação de saída (tag: tpNF=1) que não é com exterior (tag:idDest<>3). (NT 2019.001 v1.00) | Obrig. | 696 | Rej. | Rejeição: Operação com não contribuinte deve indicar operação com consumidor final |
| E17-10 | 65 | Se operação com Exterior (tag:idDest=3): NFC-e com tag IE do Destinatário (tag:dest/IE) | Obrig. | 729 | Rej. | Rejeição: NFC-e com informação da IE do destinatário |
| E17-20 | 55 | NF-e com indicação de Destinatário Contribuinte do ICMS (tag:dest/indIEDest=1), sem informar a IE (tag:dest/IE) | Obrig. | 728 | Rej. | Rejeição: NF-e sem informação da IE do destinatário |
| E17-30 | 55 | NF-e com indicação de Destinatário Contribuinte Isento de IE (tag:dest/indIEDest=2), mas com informação da IE (tag:dest/IE) | Obrig. | 791 | Rej. | Rejeição: NF-e com indicação de destinatário isento de IE, com a informação da IE do destinatário |
| E17-40 | 55 | Se informada a IE do Destinatário: – Não informar a IE do Destinatário se endereço do Destinatário no Exterior (tag:dest/enderDest/UF=”EX”) | Obrig. | 792 | Rej. | Rejeição: Informada a IE do destinatário para operação com destinatário no Exterior <!-- p.87 --> |
| E17-50 | 55 | Se informada a IE do Destinatário: – IE inválida para a UF: erro no tamanho, na composição da IE, ou no dígito verificador (*2) | Obrig. | 210 | Rej. | Rejeição: IE do destinatário inválida |
| E18-10 | 65 | NFC-e com Inscrição da Suframa (tag:dest/ISUF) | Obrig. | 730 | Rej. | Rejeição: NFC-e com Inscrição Suframa |
| E18-20 | 55 | Se Inscrição SUFRAMA informada: – Inscrição com dígito verificador inválido | Obrig. | 235 | Rej. | Rejeição: Inscrição SUFRAMA inválida |
| E18-30 | 55 | Se Inscrição SUFRAMA informada: – UF destinatário difere de AC-Acre, ou AM-Amazonas, ou RO-Rondônia, ou RR-Roraima, ou AP-Amapá (só para municípios 1600303-Macapá e 1600600- Santana) | Obrig. | 251 | Rej. | Rejeição: UF/Município destinatário não pertence a SUFRAMA |

### F. Local da Retirada

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| F02-10 | 55/65 | Se informado Local de Retirada com CNPJ: – CNPJ com zeros ou dígito inválido | Facul. | 512 | Rej. | Rejeição: CNPJ do Local de Retirada inválido |
| F02a-10 | 55/65 | Se informado Local de Retirada com CPF: – CPF com zeros, nulo, 111..., 222..., ..., ou dígito de controle inválido (NT 2012/003) | Facul. | 540 | Rej. | Rejeição: CPF do Local de Retirada inválido |
| F07-10 | 55/65 | Se informado Local de Retirada com UF Retirada = “EX”: – Código do Município do Local de Retirada difere de “9999999” | Obrig. | 513 | Rej. | Rejeição: Código Município do Local de Retirada deve ser 9999999 para UF retirada = “EX”. |
| F07-20 | 55/65 | Se informado Local de Retirada com UF Retirada <> “EX”: – Código do Município do Local de Retirada inexistente (Tabela Municípios IBGE) (NT 2015.002) | Obrig. | 276 | Rej. | Rejeição: Código Município do Local de Retirada inexistente |
| F07-30 | 55/65 | Se informado Local de Retirada com UF Retirada <> “EX”: – Código Município do Local de Retirada (2 primeiras posições) difere do Código da UF do Local de Retirada | Obrig. | 277 | Rej. | Rejeição: Código Município do Local de Retirada: difere da UF do Local de Retirada |
| F11-10 | 55 | Se informado Código País do local de retirada (tag: retirada/cPais): - Código do País inexistente (Tabela do BACEN, vide tabela de apoio publicada no Portal da NF-e). | Obrig. | 970 | Rej. | Rejeição: Código de País inexistente [local de retirada/entrega] |

Observação: O Código do País pode conter zeros não significativos. (NT2018.005)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| F15-10 | 55 | Se informada a IE do Expedidor: – IE inválida para a UF do Expedidor (id: F09): erro no tamanho, na composição da IE, ou no dígito verificador (NT2018.005) | Obrig. | 971 | Rej. | Rejeição: IE inválida [local de retirada/entrega] |

<!-- p.88 -->

### G. Local da Entrega

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| G02-10 | 55/65 | Se informado o Local de Entrega com CNPJ: – CNPJ com zeros ou dígito inválido | Facul. | 514 | Rej. | Rejeição: CNPJ do Local de Entrega inválido |
| G02a-10 | 55/65 | Se informado o Local de Entrega com CPF: – CPF com zeros, nulo, 111..., 222..., ..., ou dígito de controle inválido (NT 2012/003) | Facul. | 541 | Rej. | Rejeição: CPF do Local de Entrega inválido |
| G07-10 | 55/65 | Se informado Local de Entrega com UF Entrega = “EX”: – Código do Município do Local de Entrega difere de “9999999” | Obrig. | 515 | Rej, | Rejeição: Código Município do Local de Entrega deve ser 9999999 para UF entrega = “EX”. |
| G07-20 | 55/65 | Se informado Local de Entrega com UF Entrega <> “EX”: – Código Município do Local de Entrega inexistente (Tabela Municípios IBGE) (NT 2015.002) | Obrig. | 278 | Rej. | Rejeição: Código Município do Local de Entrega inexistente |
| G07-30 | 55/65 | Se informado Local de Entrega com UF Entrega <> “EX”: – Código Município do Local de Entrega (2 primeiras posições) difere do Código da UF do Local de Entrega | Obrig. | 279 | Rej. | Rejeição: Código Município do Local de Entrega: difere da UF do Local de Entrega |
| G11-10 | 55 | Se informado Código País do local de retirada (tag: entrega/cPais): - Código do País inexistente (Tabela do BACEN, vide tabela de apoio publicada no Portal da NF-e). | Obrig. | 970 | Rej. | Rejeição: Código de País inexistente [local de retirada/entrega] |

Observação: O Código do País pode conter zeros não significativos. (NT 2018.005)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| G15-10 | 55 | Se informada a IE do Recebedor: – IE inválida para a UF do Recebedor (id: G09): erro no tamanho, na composição da IE, ou no dígito verificador (NT 2018.005) | Obrig. | 971 | Rej. | Rejeição: IE inválida [local de retirada/entrega] |

### GA. Autorização para obter o XML

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| GA02-10 | 55/65 | Se informada autorização download XML com CNPJ: – CNPJ com zeros ou dígito inválido | Obrig. | 323 | Rej. | Rejeição: CNPJ autorizado para download inválido |
| GA02-20 | 55/65 | Se informada autorização download XML com CNPJ: – Informado CNPJ do destinatário | Obirg. | 324 | Rej. | Rejeição: CNPJ do destinatário já autorizado para download |
| GA03-10 | 55/65 | Se informada autorização download do XML com CPF: – CPF com zeros, nulo, 111..., 222..., ..., ou dígito de controle inválido | Obrig. | 325 | Rej. | Rejeição: CPF autorizado para download inválido |
| GA03-20 | 55/65 | Se informada autorização download do XML com CPF: – Informado CPF do destinatário | Obrig. | 326 | Rej. | Rejeição: CPF do destinatário já autorizado para download |

<!-- p.89 -->

### H. Detalhamento Produtos e Serviços

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| H02-10 | 55/65 | Número sequencial do item no arquivo XML “nItem” fora de ordem incremental, consecutiva, a partir de 1. Observação: Regra de validação opcional, a critério da UF (NT 2019.001) | Obrig. | 927 | Rej. | Rejeição: Número do item fora da ordem sequencial. |

### I. Produtos e Serviços

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| I03-10 | 55/65 | Se informado GTIN (tag: cEAN) <> “SEM GTIN” ou Nulo): - cEAN com dígito de controle inválido | Obrig. | 611 | Rej. | Rejeição: GTIN (cEAN) inválido [nItem:999] |

Observação: Cálculo do dígito verificador em www.gs1.org/check-digit- calculator. (NT 2017.001)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| I03-20 | 55/65 | Se informado GTIN (tag: cEAN) <> “SEM GTIN” ou Nulo): - Prefixo GS1 inválido, conforme tabela de prefixos publicada no Portal da NF- e | Obrig. | 882 | Rej. | Rejeição: GTIN (cEAN) com prefixo inválido [nItem:999] |

**Observação:** Validação efetuada conforme prefixos e orientações constantes na “Tabela Prefixo GS1” publicada no Portal Nacional da NF-e. (NT 2017.001)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| I03-30 | 55/65 | GTIN (tag: cEAN) em branco, campo sem informação. | Obrig. | 883 | Rej. | Rejeição: GTIN (cEAN) sem informação [nItem: 999] |

**Observação** 1: Para produtos que não possuem GTIN, utilizar a informação de "SEM GTIN" (NT 2017.001)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| I04-10 | 65 | Para a NFC-e, se ambiente de homologação (tag:tpAmb=2, id:B24): - Descrição do primeiro item da Nota Fiscal (tag:xProd) deve ser informada como “NOTA FISCAL EMITIDA EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL” (NT 2015.002) | Obrig. | 373 | Rej. | Rejeição: Descrição do primeiro item diferente de NOTA FISCAL EMITIDA EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL [nItem:nnn] |
| I05-10 | 55/65 | Informar o NCM completo (8 posições) Exceção: no caso de item de Serviço ou item que não tenha produto (ex. transferência de crédito, crédito do ativo imobilizado, etc.), informar o valor “00” (zeros). (NT 2013/005 v 1.10) | Obrig. | 777 | Rej. | Rejeição: Obrigatória a informação do NCM completo (redação dada pela NT 2013/005 v 1.20) [nItem: 999] <!-- p.90 --> |

**Observação 1:** o início de aplicabilidade desta regra obedece a cronograma disposto no Ajuste Sinief 07/05. (NT 2013/005 v 1.10)

**Observação 2:** no caso de mercadorias que não possuem uma classificação exatamente igual à descrita na tabela do MDIC, deve ser seguida a orientação daquele Ministério: “As mercadorias que não possam ser classificadas por aplicação das [...] classificam-se na posição correspondente aos artigos mais semelhantes.” (NT 2013/005 v 1.10)

**Observação 3:** em caso de não ser possível aplicar o disposto na observação 2, pelo fato de o item da nota se referir a operação impossível de ser classificada segundo a tabela do MDIC, deve ser Informado o código “00000000” (NT 2014/004)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| I05-20 | 55/65 | Se informado NCM completo (8 pos.) e valor difere de “00000000”: - NCM inexistente na tabela de NCM publicada pelo Ministério do Desenvolvimento, Indústria e Comércio Exterior - MDIC | Obrig. | 778 | Rej. | Rejeição: Informado NCM inexistente[nItem:nnn] |

**Exceção 1:** A regra de validação não se aplica, em produção, para Nota Fiscal com Data de Emissão anterior a 01/01/2016.

**Exceção 2:** Para a NF-e, considerar nesta validação os códigos de NCM especiais definidos pela RFB para permitir o uso no Registro de Exportação (Erro! **Fonte de referência não encontrada.).** (NT 2015.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| I05-24 | 55/65 | Se informado NCM = “00”: - Não é uma NF-e de Ajuste (tag:finfe <> 3) e não é um item de serviço (item não possui a tag:ISSQN) | Obrig. | 471 | Rej. | Rejeição: Informado NCM=00 indevidamente (NT 2014/004) [nItem: 999] |

**Observação:** A UF autorizadora que aceitar o uso da NF-e modelo 55 para documentar prestações de serviços ocorridas dentro do campo de incidência do ICMS poderá definir outras exceções a esta regra. (NT 2014/004)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| I05-30 | 65 | Informado NCM incompatível com a NFC-e | Obrig. | 779 | Rej. | Rejeição: NFC-e com NCM incompatível [nItem: 999] |
| I05e-10 | 55/65 | Se informado indEscala=”N- não relevante” (id: I05d), deve ser informado CNPJ do Fabricante da Mercadoria (id: I05e) (NT 2016.002) | Obrig. | 879 | Rej. | Rejeição: Informado item “Produzido em Escala NÃO Relevante” e não informado CNPJ do Fabricante [nItem: 999] |
| I05e-20 | 55/65 | Se informado CNPJFab (id: I05e) - CNPJ inválido (DV, zeros) (NT 2016.002) | Obrig. | 489 | Rej. | Rejeição: CNPJ informado inválido (DV ou zeros) [nItem: 999] |
| ~~I05f-10~~ | ~~55/65~~ | ~~Informado código de benefício fiscal (tag: cBenef) para CST sem benefício fiscal (CST = 00, 10, 60), conforme Tabela de apoio publicada no Portal Nacional da NF-e~~ | ~~Facul.~~ | ~~928~~ | ~~Rej~~ | ~~Rejeição: Informado código de benefício fiscal para CST sem benefício fiscal [nItem: nnn]~~ |

> **Revogado/Descontinuado:** texto riscado no original (regras: I05f-10).

~~**Observação:**~~ ~~Implementação a critério da UF, por CST e por modelo de DF-e.~~ (NT 2019.001 v1.00, v1.50)

> **Revogado/Descontinuado:** texto riscado no original.

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| ~~I05f-20~~ | ~~55/65~~ | ~~Se informado código de benefício fiscal (tag: cBenef): - verificar se tipo de código do benefício corresponde ao CST com benefício fiscal. Exemplo: Código de benefício fiscal de isenção deve ser utilizado com CST de isenção.~~ | ~~Facul.~~ | ~~931~~ | ~~Rej.~~ | ~~Rejeição: CST não corresponde ao tipo de código de benefício fiscal [nItem: nnn]~~ <!-- p.91 --> |

> **Revogado/Descontinuado:** texto riscado no original (regras: I05f-20).

~~**Observação 1:**~~ ~~Implementação a critério da UF, por modelo de DF-e.~~

> **Revogado/Descontinuado:** texto riscado no original.

~~**Observação 2:**~~ ~~Tabela de código de benefício fiscal por UF publicada no Portal~~ ~~Nacional da NF-e~~ (NT 2019.001 v1.00, v1.50)

> **Revogado/Descontinuado:** texto riscado no original.

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| ~~I05f-30~~ | ~~55/65~~ | ~~Se informado código de benefício fiscal (tag: cBenef), Obrig.atório informar valor do ICMS desonerado (tag: vICMSDeson) e o motivo de desoneração (tag: motDesICMS)~~ | ~~Facul.~~ | ~~934~~ | ~~Rej.~~ | ~~Rejeição: Não informado valor do ICMS desonerado ou o Motivo de desoneração [nItem: nnn]~~ |

> **Revogado/Descontinuado:** texto riscado no original (regras: I05f-30).

~~**Observações:**~~ ~~Implementação a critério da UF~~ (NT 2019.001 v1.00, v1.50)

> **Revogado/Descontinuado:** texto riscado no original.

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| I08-04 | 55/65 | CFOP inexistente ou não pode ser usado na NF-e, conforme tabela de apoio publicada no Portal da NF-e (Tabela CFOP, indNFe=0) (NT 2015.002) | Obrig. | 770 | Rej. | Rejeição: CFOP Inexistente [nItem:nnn] |
| I08-10 | 55 | CFOP de Entrada (inicia por 1, 2, 3) para NF-e de Saída (tpNF=1) | Facul. | 518 | Rej. | Rejeição: CFOP de entrada para NF-e de saída |
| I08-20 | 55 | CFOP de Saída (inicia por 5, 6, 7) para NF-e de Entrada (tpNF=0) | Facul. | 519 | Rej. | Rejeição: CFOP de saída para NF-e de entrada |
| I08-30 | 55 | CFOP de operação com Exterior (inicia por 3 ou 7) e idDest <> 3 Exceção: Se a tag UFCons (id:LA06) foi informada com ”EX” é válido CFOP iniciado por 7 e idDest <> 3 (NT 2013/005 v 1.10) | Obrig. | 731 | Rej. | Rejeição: CFOP de operação com Exterior e idDest <> 3 |
| I08-40 | 55 | CFOP de operação interestadual (inicia por 2 ou 6) e idDest <> 2 | Obrig. | 732 | Rej. | Rejeição: CFOP de operação interestadual e idDest <> 2 |
| I08-50 | 55 | CFOP de operação interna (inicia por 1 ou 5) e idDest <> 1 | Obrig. | 733 | Rej. | Rejeição: CFOP de operação interna e idDest <> 1 |
| I08-60 | 55 | CFOP de operação com Exterior (inicia por 3 ou 7) e UF Destinatário <> “EX” Exceção: Se a tag UFCons (id:LA06) foi informada com ”EX”: CFOP iniciado com 3 ou 7 é válido (NT 2010/007) | Facul. | 520 | Rej. | Rejeição: CFOP de Operação com Exterior e UF destinatário difere de “EX” |
| I08-70 | 55 | Operação Interna (idDest=1) e UF emitente diferente da UF do destinatário/remetente e destinatário/remetente contribuinte do ICMS (indIEDest=1) | Facul. | 521 | Rej. | Rejeição: Operação Interna e UF do emitente difere da UF do destinatário/remetente contribuinte do ICMS |

**Exceção 1:** A regra de validação não se aplica se a tag UFCons (id:LA06) foi informada com a mesma UF do emitente. (NT 2010/007)

**Exceção 2:** A regra de validação não se aplica se a operação é presencial (tag: indPres=1 -Operação presencial) e não possui frete (tag: modFrete=9 - Sem frete).(NT 2011/004)

**Observação:** No caso da NFC-e, a informação do endereço do destinatário é opcional. Considerar a UF do destinatário como sendo a mesma UF do emitente (operação interna). (NT 2015.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| I08-90 | 55 | CFOP é de operação interestadual (inicia por 2 ou 6) e UF emitente = UF destinatário e CNPJ/CPF emissor diferente do CNPJ/CPF destinatário (NT 2010/004) Exceção: Se a tag UFCons (id:LA06) foi informada com UF diversa do emitente: CFOP iniciado com 2 ou 6 é válido. (NT 2010/010) | Facul. | 523 | Rej. | Rejeição: CFOP não é de Operação Estadual e UF emitente igual à UF destinatário [nItem: 999] <!-- p.92 --> |
| I08-94 | 55 | Operação Interestadual (idDest=2) e informado idEstrangeiro Exceção: A regra acima não se aplica para o CFOP=”6.667- Venda de combustível ou lubrificante a consumidor ou usuário final estabelecido em outra UF diferente da que ocorrer o consumo” (NT 2015.002) | Facul. | 771 | Rej. | Rejeição: Informado idEstrangeiro em operação interestadual |
| I08-110 | 55 | CFOP de Importação (inicia por 3) e não informado a tag DI Exceção: a regra não se aplica para os seguintes CFOP: 3.201; 3.202; 3.503; 3.553 (NT 2010/007) | Facul. | 525 | Rej. | Rejeição: CFOP de Importação e não informado dados da DI [nItem: 999] |
| I08-120 | 55 | CFOP de Importação (inicia por 3) e não informado o grupo de IPI Exceção: a regra não se aplica para os seguintes CFOP: 3.201; 3.202; 3.211; 3.503; 3.553 (NT 2011/004, NT 2020.002 v1.00) | Facul. | 597 | Rej. | Rejeição: CFOP de Importação e não informado dados de IPI |
| I08-130 | 55 | CFOP de Importação (inicia por 3) e não informado o grupo de II Exceção: a regra não se aplica para os seguintes CFOP: 3.201; 3.202; 3.211; 3.503; 3.553 (NT 2011/004) | Facul. | 599 | Rej. | Rejeição: CFOP de Importação e não informado dados de II [nItem: 999] |
| I08-140 | 55 | Para as NF-e com finalidade de devolução de mercadoria (tag:finNFe=4), somente serão aceitos CFOP de devolução de mercadoria. | Obrig. | 327 | Rej. | Rejeição: CFOP inválido para Nota Fiscal com finalidade de devolução de mercadoria[nItem:nnn] |

**Observação:** Vide relação de CFOP de devolução de mercadoria natabela de apoio publicada no Portal da NF-e (Tabela CFOP, indDevol=1). **Exceção:** Aceitar os CFOP 1.949 e 2.949 na devolução de venda para não Contribuinte. Para estes CFOP verificar a condição: - tag:finNFe = 4 (devolução) e tag:indIEDest = 9 (não Contribuinte) (NT 2015.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| I08-144 | 55 | Para as NF-e que não tem a finalidade de devolução de mercadoria (tag:finNFe não é “2” nem “4”), não serão aceitos CFOP de devolução de mercadoria. (NT 2013/005) | Obrig. | 328 | Rej. | Rejeição: CFOP de devolução de mercadoria para NF-e que não tem finalidade de devolução de mercadoria [nItem:nnn] |

**Observação:** Vide relação de CFOP de devolução de mercadoria natabela de apoio publicada no Portal da NF-e (Tabela CFOP, indDevol=1). (NT 2015.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| I08-150 | 65 | NFC-e (mod=65) com CFOP inválido. Aceitar unicamente os CFOP: - 5.101: Venda de produção do estabelecimento; - 5.102: Venda de mercadoria de terceiros; - 5.103: Venda de produção do estabelecimento efetuada fora do estabelecimento; - 5.104: Venda de mercadoria adquirida ou recebida de terceiros, efetuada fora do estabelecimento; - 5.115: Venda de mercadoria de terceiros, recebida anteriormente em consignação mercantil; - 5.405: Venda de mercadoria de terceiros, sujeita a ST, como contribuinte substituído; - 5.656: Venda de combustível ou lubrificante de terceiros, destinados a consumidor final; - 5.667: Venda de combustível ou lubrificante a consumidor ou usuário final estabelecido em outra Unidade da Federação; - 5.933: Prestação de serviço tributado pelo ISSQN (Nota Fiscal conjugada); (NT 2013/005 v 1.20) (NT 2015.002) | Obrig. | 725 | Rej. | Rejeição: NFC-e com CFOP inválido[nItem:nnn] <!-- p.93 --> |
| I08-160 | 65 | NFC-e (mod=65) com CFOP=5.933 (Prestação de serviço), sem o grupo de tributação pelo ISSQN (tag:imposto/ISSQN) (NT 2015.002) | Obrig. | 374 | Rej. | Rejeição: CFOP incompatível com o grupo de tributação [nItem:nnn] |
| I08-170 | 65 | NFC-e (mod=65) com CFOP diferente de 5.933 (Prestação de serviço), com o grupo de tributação pelo ISSQN (tag:imposto/ISSQN) (NT 2015.002) | Obrig. | 374 | Rej. | Rejeição: CFOP incompatível com o grupo de tributação [nItem: nnn] |
| I08-180 | 55 | NF-e (mod=55) com lançamento relativo a Cupom Fiscal (CFOP=5.929) e existe NFC-e referenciada (tag:refNFe com modelo 65) | Facul. | 375 | Rej. | Rejeição: NF-e com lançamento relativo a Cupom Fiscal referencia uma NFC-e [nItem: nnn] |

**Observação:** Regra de Validação opcional, a critério da UF poderá ser aceito o CFOP 5.929. (NT 2015.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| I08-184 | 55 | NF-e (mod=55) com lançamento relativo a Cupom Fiscal (CFOP=5.929ou CFOP6.929) sem Documento Fiscal referenciado (tag:NFref, idBA01) (NT 2015.002) | Obrig. | 701 | Rej. | Rejeição: Não informado Nota Fiscal referenciada (Lançamento relativo a Cupom Fiscal) [nItem: nnn] |
| I08-190 | 55 | NF-e (mod=55) com CFOP de exportação indireta (3503, 7501) sem Nota Fiscal referenciada (tag:NFref, id:BA01) (NT 2015.002) | Obrig. | 701 | Rej. | Rejeição: Não informado Nota Fiscal referenciada (CFOP de Exportação Indireta) [nItem: nnn] |
| I09-10 | 65 | NFC-e com Unidade de Comercialização inválida (tag:uCom não consta de tabela específica) | Obrig. | 734 | Rej. | Rejeição: NFC-e com Unidade de Comercialização inválida [nItem: 999] |
| I11-10 | 55/65 | Se NF-e Normal (tag:finNFe=1): - vProd (id:I11) difere de vUnCom (id:I10a) * qCom (id:I10) (*4) (NT 2011/005) | Facul. | 629 | Rej. | Rejeição: Valor do Produto difere do produto Valor Unitário de Comercialização e Quantidade Comercial [nItem: 999] |
| I11-20 | 55/65 | Se NF-e Normal (tag:finNFe=1): - vProd (id:I11) difere de vUnTrib (id:I14a) * qTrib (id:I14) (*4) (NT 2011/005) | Facul. | 630 | Rej. | Rejeição: Valor do Produto difere do produto Valor Unitário de Tributação e Quantidade Tributável [nItem: 999] |
| I12-10 | 55/65 | Se informado GTIN da unidade tributável (tag: cEANTrib) <> “SEM GTIN” ou Nulo): - cEANTrib com dígito de controle inválido | Obrig. | 612 | Rej. | Rejeição: GTIN da unidade tributável (cEANTrib) inválido [nItem:999] |

**Observação:** Cálculo do dígito verificador em www.gs1.org/check-digit- calculator (NT 2017.001)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| I12-20 | 55/65 | Se informado GTIN da unidade tributável (tag: cEANTrib) <> “SEM GTIN” ou Nulo): - Prefixo GS1 inválido, conforme tabela de prefixos publicada no Portal da NF- e | Obrig. | 884 | Rej. | Rejeição: GTIN da unidade tributável (cEANTrib) com prefixo inválido [nItem:999] <!-- p.94 --> |

**Observação:** Validação efetuada conforme prefixos e orientações constantes na “Tabela Prefixo GS1” publicada no Portal Nacional da NF-e. (NT 2017.001)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| I12-30 | 55/65 | Informado GTIN específico (cEAN<>“SEM GTIN” ou Nulo) e informado GTIN da unidade tributável igual a "SEM GTIN" ou Nulo (cEANTrib=“SEM GTIN” ou Nulo) (NT 2017.001) | Obrig. | 885 | Rej. | Rejeição: GTIN informado, mas não informado o GTIN da unidade tributável [nItem:999] |
| I12-40 | 55/65 | Informado GTIN da unidade tributável específico (cEANTrib<>“SEM GTIN” ou Nulo) e informado GTIN igual a "SEM GTIN" ou Nulo (cEAN=“SEM GTIN” ou Nulo) (NT 2017.001) | Obrig. | 886 | Rej. | Rejeição: GTIN da unidade tributável informado, mas não informado o GTIN [nItem:999] |
| I12-60 | 55/65 | GTIN da unidade tributável (tag: cEANTrib) em branco, campo sem informação. | Obrig. | 888 | Rej. | Rejeição: GTIN da unidade tributável (cEANTrib) sem informação [nItem:999] |

**Observação** Para produtos que não possuem GTIN da unidade tributável, utilizar a informação de "SEM GTIN". (NT 2017.001)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| I13-10 | 65 | NFC-e com Unidade de Tributação inválida (tag:uTrib não consta da tabela específica) | Obrig. | 735 | Rej. | Rejeição: NFC-e com Unidade de Tributação inválida [nItem: 999] |

**Observação:** Implementação Futura

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| I13-20 | 55/65 | Informado campo cProdANP (id: LA02) = 210203001 (GLP) e campo uTrib (id: I13) <> “kg” (ignorar a diferenciação entre maiúsculas e minúsculas) (NT 2016.002) | Obrig. | 854 | Rej. | Rejeição: Unidade Tributável (tag:uTrib) incompatível com produto informado [nItem: 999] |
| I14-10 | 55 | Validar a correspondência entre o código NCM e a unidade tributável (tag: uTrib) nas operações com o Comércio Exterior, conforme segue: - Operação de Exportação (tpNF=1-Saída e idDest=3); ou - Operações vinculadas a exportação, CFOP=1501, 2501, 5501, 5502, 5504, 5505, 6501, 6502, 6504 ou 6505 | Obrig. | 817 | Rej | Rejeição: Unidade Tributável incompatível com o NCM informado na operação com Comércio Exterior [nItem: 999] |

**Observação:** Tabela de Unidades Tributáveis no Comércio Exterior publicada na aba “Documentos”, opção “Diversos” do Portal Nacional da NF-e (www.nfe.fazenda.gov.br) **Nota:** O uso diferenciado de maiúsculas ou minúsculas não deve ser considerado na validação. (NT 2016.001)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| I17-10 | 55/65 | Valor do Desconto (tag:vDesc, id:I17) maior que o valor do Produto (tag:vProd, id:I11) (NT 2015.002) | Obrig. | 483 | Rej. | Rejeição: Valor do desconto maior que valor do produto [nItem: nnn] |
| I17b-10 | 65 | NFC-e com indicador de item não participante do total (tag:indTot=0) | Obrig. | 774 | Rej. | R Rejeição: NFC-e com indicador de item não participante do total [nItem: 999] |

**Observação:** as regras I05-20, I05-30, I09-10 e I13-10 possuem previsão de implementação futura, não tendo sido postas em produção até a publicação deste Manual.

I01. Produtos e Serviços / Declaração de Importação

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| I19-10 | 55 | Número da DI / DSI inválido | Obrig. | 329 | Rej. | Rejeição: Número da DI /DSI inválido <!-- p.95 --> |
| I23-10 | 55 | Data do Desembaraço Aduaneiro inferior a 5 anos da data atual ou superior a data atual (NT 2015.002) | Obrig. | 376 | Rej. | Rejeição: Data do Desembaraço Aduaneiro inválida [nItem: nnn] |
| I23b-10 | 55 | Informar o Valor da AFRMM na importação por via marítima (tag:tpViaTransp=1 e não existe tag:vAFRMM) | Obrig. | 330 | Rej. | Rejeição: Informar o Valor da AFRMM na importação por via marítima |
| I23d-10 | 55 | Informar o CNPJ do adquirente ou do encomendante na importação por conta e ordem ou encomenda (tag:DI/tpIntermedio=2 ou 3) | Obrig. | 331 | Rej. | Rejeição: Informar o CNPJ do adquirente ou do encomendante nesta forma de importação |
| I23d-20 | 55 | CNPJ do adquirente ou do encomendante inválido (zeros, nulo ou DV inválido) | Obrig. | 332 | Rej. | Rejeição: CNPJ do adquirente ou do encomendante da importação inválido |
| I23e-10 | 55 | Informar a UF do adquirente ou do encomendante na importação por conta e ordem ou encomenda (tag:DI/tpIntermedio=2 ou 3) | Obrig. | 333 | Rej. | Rejeição: Informar a UF do adquirente ou do encomendante nesta forma de importação |
| I29a-10 | 55 | Obrigatória a informação do número do processo de drawback na Adição (Declaração de Importação) para os CFOP: 3127, 3211 | Obrig. | 334 | Rej. | Rejeição: Número do processo de drawback não informado na importação |
| I29a-20 | 55 | Número do processo de drawback inválido na Adição (Declaração de Importação) | Obrig. | 335 | Rej. | Rejeição: Número do processo de drawback na importação inválido |

Observação: as regras I19-10 e I29a-20 possuem previsão de implementação futura, não tendo sido postas em produção até a publicação deste Manual.

I03. Produtos e Serviços / Grupo de Exportação

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| I50-10 | 55/65 | Informado o grupo de Exportação (tag:detExport) no Item em operação que não é com exterior (tag: idDest <> 3). (NT 2015.002) | Obrig. | 336 | Rej. | Rejeição: Informado o grupo de exportação no item em operação que não é com exterior [nItem: nnn] |
| I51-10 | 55 | Obrigatória informação do número do processo de drawback para CFOP: - 7127: Venda de produção do estabelecimento sob o regime de drawback - 7211: Devolução de compras p/ industrialização sob o regime de drawback | Obrig. | 338 | Rej. | Rejeição: Número do processo de drawback não informado na exportação |
| I51-20 | 55 | Número do processo de drawback inválido | Obrig. | 339 | Rej. | Rejeição: Número do processo de drawback na exportação inválido |
| I52-10 | 55 | Grupo de controle para a Exportação Indireta (tag:detExport/exportInd) não informado para os CFOP: 3503, 7501 | Facul. | 340 | Rej. | Rejeição: Não informado o grupo de exportação indireta no item |

Observação 1: Implementação opcional por UF (NT 2013/005 v 1.10)

Observação 2: Esta regra não se aplica para NF-e complementar (NT 2013/005 v 1.10)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| I53-10 | 55 | Número do registro de exportação inválido (tag:detExport/exportInd/nRE) | Obrig. | 341 | Rej. | Rejeição: Número do registro de exportação inválido |
| I54-10 | 55 | Chave de Acesso na exportação indireta (tag:exportInd/chNFe): – Dígito Verificador da Chave de Acesso inválido | Facul. | 342 | Rej. | Rejeição: Chave de Acesso informada na Exportação Indireta com DV inválido |
| I54-20 | 55 | Chave de Acesso na exportação indireta (tag:exportInd/chNFe): – Modelo da Chave de Acesso diferente de 55 | Facul. | 343 | Rej. | Rejeição: Modelo da NF-e informada na Exportação Indireta diferente de 55 |
| I54-30 | 55 | Chave de Acesso na exportação indireta (tag:exportInd/chNFe): – Verificar duplicidade da Chave de Acesso informada (duplicidade de informação da tag exportInd/chNFe), para o item da NF-e | Facul. | 344 | Rej. | Rejeição: Duplicidade de NF-e informada na Exportação Indireta (Chave de Acesso informada mais de uma vez) |
| I54-40 | 55 | Chave de Acesso na exportação indireta (tag:exportInd/chNFe): – Verificar se Chave de Acesso na exportação indireta consta como NF-e referenciada | Facul. | 345 | Rej. | Rejeição: Chave de Acesso informada na Exportação Indireta não consta como NF-e referenciada <!-- p.96 --> |
| I55-10 | 55 | Se informado o grupo de Exportação Indireta, o somatório das quantidades informada (tag:qExport) deve corresponder a quantidade comercial informada para o item (tag:qCom) | Facul. | 346 | Rej. | Rejeição: Somatório das quantidades informadas na Exportação Indireta não corresponde a quantidade total do item |

Observação: Implementação opcional por UF (NT 2013/005 v 1.10) **Observação:** as regras I51-20 e I53-10 possuem previsão de implementação futura, não tendo sido postas em produção até a publicação deste Manual.

I05. Produtos e Serviços / Pedido de Compra

Não há regras de validação para este grupo.

I07. Produtos e Serviços / Grupo Diversos

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| I70-10 | 55/65 | Se informado o Número de Controle da FCI (tag:nFCI, id:I70): - Acessar Cadastro de FCI (Chave: nFCI) | Facul. | 465 | Rej. | Rejeição: Número de Controle da FCI inexistente |

Observação: esta regra possui previsão de implementação futura, não tendo sido posta em produção até a publicação deste Manual.

I08. Rastreabilidade de produto

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| I83-10 | 55/65 | Data de Fabricação dFab (id:I83) maior que a data de processamento (NT 2016.002) | Obrig. | 877 | Rej | Rejeição: Data de fabricação maior que a data de processamento [nItem: 999] |
| I84-10 | 55/65 | Informada data de validade dVal(id: I84) menor que Data de Fabricação dFab (id: I83) (NT 2016.002) | Obrig. | 870 | Rej | Rejeição: Data de validade incompatível com data de fabricação [nItem: 999] |

### J. Item / Veículos Novos

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| J01-10 | 65 | NFC-e com grupo de Veículos novos (tag:veicProd) | Obrig. | 736 | Rej. | Rejeição: NFC-e com grupo de Veículos novos |

### K. Item / Medicamentos

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| K01-20 | 55 | Se informado Grupo de Medicamentos (tag :med) Obrig.atório preenchimento do grupo rastro (id: I80) (NT 2016.002) | Obrig. | 873 | Rej | Rejeição: Operação com medicamentos e não informado os campos de rastreabilidade [nItem: 999] |

<!-- p.97 -->

### L. Item / Armamentos

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| L01-10 | 65 | NFC-e com grupo de Armamentos (tag:arma) | Obrig. | 738 | Rej. | Rejeição: NFC-e com grupo de Armamentos |

### LA. Item / Combustível

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| LA01-20 | 55/65 | Obrigatória a informação do grupo de combustível para os CFOP constantes na Tabela CFOP, indComb=1 ou 2. | Facul. | 660 | Rej. | Rejeição: CFOP de Combustível e não informado grupo de combustível da NF- e [nItem: nnn] |

Observação: Para a NFC-e, a regra de validação é opcional, a critério da UF. Exceção: Para a NFC-e, a regra de validação não se aplica, em produção, para Nota Fiscal com Data de Emissão anterior a 01/01/2016. (NT 2016.002/ NT 2015.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| LA02-10 | 55/65 | Código do Produto da ANP (tag: cProdANP) inexistente na tabela de codificação de produtos do Sistema de Informações de Movimentação de Produtos (SIMP), disponibilizada pela ANP, para uso na NF-e. (NT 2015.003) | Obrig. | 761 | Rej. | Rejeição: Código de Produto ANP inexistente [nItem: 999] |
| LA03c-10 | 55/65 | Informado percentual do GLP (id: LA03a) ou percentual de Gás Natural Nacional (id: LA03b) ou percentual de Gás Natural Importado (id: LA03c) para produto diferente de "210203001 – GLP" (tag:cProdANP) (NT 2016.002) | Obrig. | 461 | Rej. | Rejeição: Informado campos de percentual de GLP e/ou GLGNn e/ou GLGNi para produto diferente de GLP [nItem: 999] |
| LA03c-20 | 55/65 | Se informado GLP (cProdANP=210203001) o somatório dos percentuais pGLP(id:LA03a) e pGNn(id:LA03b) e pGNi(id:LA03c) deve ser igual a 100. (NT 2016.002) | Obrig. | 855 | Rej. | Rejeição: Somatório percentuais de GLP derivado do petróleo, GLGNn e GLGNi diferente de 100 [nItem: 999]. |
| LA03d-10 | 55 | Obrigatória a informação do campo vPart (id: LA03d) para produto "210203001 – GLP" (tag:cProdANP) (NT 2016.002) | Obrig. | 856 | Rej. | Rejeição: Campo valor de partida não preenchido para produto GLP [nItem: 999]. |
| LA11-10 | 65 | NFC-e sem a informação do grupo de Encerrante na venda de combustível para consumidor final | Facul. | 378 | Rej. | Rejeição: Grupo de Combustível sem a informação de Encerrante [nItem: nnn] <!-- p.98 --> |

Observação: Regra de validação opcional a critério da UF.

Exceção 1: A regra de validação se aplica somente para os códigos de produtos ANP (cProdANP) abaixo: - 810101002 - ETANOL HIDRATADO ADITIVADO - 810101001 - ETANOL HIDRATADO COMUM - 220101005 - GÁS NATURAL VEICULAR - 220101006 - GÁS NATURAL VEICULAR PADRÃO - 320103001 - GASOLINA AUTOMOTIVA PADRÃO - 320102002 - GASOLINA C ADITIVADA - 320102001 - GASOLINA C COMUM - 320102003 - GASOLINA C PREMIUM - 820101033 - ÓLEO DIESEL B S10 - ADITIVADO - 820101034 - ÓLEO DIESEL B S10 - COMUM - 420106001 - ÓLEO DIESEL B S10 AMD 10 - 820101011 - ÓLEO DIESEL B S1800 Não Rodoviário- Aditivado - 820101003 - ÓLEO DIESEL B S1800 Não Rodoviário - Comum - 820101013 - ÓLEO DIESEL B S500 - ADITIVADO - 820101012 - ÓLEO DIESEL B S500 - COMUM - 420106002 - ÓLEO DIESEL B S500 AMD 10 - 420301004 - OLEO DIESEL DE REFERÊNCIA S300

Exceção 2: A regra de validação não se aplica, em produção, para Nota Fiscal com Data de Emissão anterior a 01/01/2016. (NT 2015.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| LA11-20 | 55 | Informado o grupo de “Encerrante” na NF-e (modelo 55) para CFOP diferente de venda de combustível para consumidor final (CFOP= 5.656, 5.667). (NT 2015.002) | Obrig. | 379 | Rej. | Rejeição: Grupo de Encerrante na NF-e (modelo 55) para CFOP diferente de venda de combustível para consumidor final [nItem:nnn] |
| LA16-10 | 55/65 | Valor do Encerrante final não é superior ao Encerrante inicial | Obrig. | 380 | Rej. | Rejeição: Valor do Encerrante final não é superior ao Encerrante inicial |

Observação: No caso do valor do encerrante chegar ao final (zerar) o item [nItem: nnn] correspondente deverá ser informado com encerrante final 999... e deverá ser incluído um novo item na NF a partir do encerrante com valor inicial zero. (NT 2015.002)

### LB. Item / Papel Imune

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| LB01-10 | 65 | NFC-e com grupo RECOPI – Papel Imune (tag:nRECOPI) | Obrig. | 348 | Rej. | Rejeição: NFC-e com grupo RECOPI |
| LB01-20 | 55 | Se não informado o número do RECOPI (tag:nRECOPI, id:LB01) – Se Papel Imune (CST=41 ou CSOSN=300) e – NCM papel (ver relação NCM na seção 8.12 do MOC – Visão Geral) | Facul. | 349 | Rej. | Rejeição: Número RECOPI não informado |

Observação: implementação futura (NT 2013/005 v 1.10)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| LB01-30 | 55 | Informado número do RECOPI: – Número do RECOPI inválido (Ver Seção 8.5 do MOC – Visão Geral,, Identificador RECOPI) | Facul. | 350 | Rej. | Rejeição: Número RECOPI inválido <!-- p.99 --> |

**Observação:** a regra LB01-20 possui previsão de implementação futura, não tendo sido posta em produção até a publicação deste Manual.

### M. Item / Tributos do Produto e Serviço

Não há regras de validação para este grupo.

### N. Item / Tributo: ICMS

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| ~~N07-10~~ | ~~55~~ | ~~Não informados campos de valores do CST 51 (Diferimento): - modBC (id: N13), pRedBC (id: N14), vBC (id: N15), pICMS (id: N16), vICMSOp (id: N16a), pDif (id: N16b), vICMSDif (id: N16c), vICMS (id: N17)~~ | ~~Facul.~~ | ~~929~~ | ~~Rej.~~ | ~~Rejeição: Informado CST de diferimento sem as informações de diferimento [nItem: nnn]~~ |

> **Revogado/Descontinuado:** texto riscado no original (regras: N07-10).

~~Observações: Implementação a critério da UF~~ (NT 2019.001 v1.10, v1.50)

> **Revogado/Descontinuado:** texto riscado no original.

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| N08-10 | 55 | Grupo ICMS60 (id:N08) informado indevidamente nas operações com os produtos combustíveis sujeitos a repasse interestadual (tag:cProdANP) igual a 210203001, 320101001, 320101002, 320102002, 320102001, 320102003, 320102005, 320201001, 320103001, 220102001, 320301001, 320103002, 820101032, 820101026, 820101027, 820101004, 820101005, 820101022, 820101031, 820101030, 820101014, 820101006, 820101016, 820101015, 820101025, 820101017, 820101018, 820101019, 820101020, 820101021, 420105001, 420101005, 420101004, 420102005, 420102004, 420104001, 820101033, 820101034, 420106001, 820101011, 820101003, 820101013, 820101012, 420106002, 830101001, 420301004, 420202001, 420301001, 420301002, 410103001, 410101001, 410102001, 430101004, 510101001, 510101002, 510102001, 510102002, 510201001, 510201003, 510301003, 510103001, 510301001 Obs.: Para CST 60 Obrig.atório o preenchimento do Grupo Repasse de ICMS ST (id:N10b) com o Campo Tributação do ICMS (id:N12) igual a 60 (NT 2016.002) | Obrig. | 858 | Rej | Rejeição: Grupo de Tributação informado indevidamente [nItem: 999] |
| N12-10 | 55 | CFOP de Exportação (inicia por 7): – Informado CST de ICMS diferente de 41 ou CSOSN diferente de 300 (NT 2010/010) Exceção: A regra acima não se aplica para a NF-e de devolução (finNFe=4). | Facul. | 527 | Rej. | Rejeição: Operação de Exportação com informação de ICMS incompatível |
| N12-20 | 55/65 | Informado CST (id:N12) para CRT (id:C21) igual a 1 (NT 2010/010) | Facul. | 590 | Rej. | Rejeição: Informado CST para emissor do Simples Nacional (CRT=1) |
| N12-30 | 65 | NFC-e com CST diferente da relação abaixo: - 00-Tributada integralmente; - 20-Com redução da Base de Cálculo; - 40-Isenta; - 41-Não tributada; - 60-ICMS cobrado anteriormente por substituição tributária; | Obrig. | 766 | Rej. | Rejeição: Item com CST indevido [nItem:nnn] <!-- p.100 --> |

Exceção 1: Aceitar CST=90-Outros, a critério da UF.

Exceção 2: A regra de validação não se aplica, em produção, para Nota Fiscal com Data de Emissão anterior a 01/04/2016. (NT 2015.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| N12-34 | 65 | NFC-e com CST=90, informando dados do ICMS-ST (tag: ICMS90/modBCST) (NT 2015.002) | Obrig. | 381 | Rej. | Rejeição: Grupo de tributação ICMS90, informando dados do ICMS-ST [nItem:nnn] |
| N12-40 | 65 | NFC-e com CST=00, 20, 40, 41 ou 90 e - CFOP diferente de 5.101, 5.102, 5.103, 5.104, 5.115 (NT 2015.002) | Obrig. | 382 | Rej. | Rejeição: CFOP não permitido para o CST informado [nItem:nnn] |
| N12-44 | 65 | NFC-e com CST=60 (ICMS cobrado anteriormente por ST) e CFOP diferente de 5.405, 5.656, 5.667 (NT 2015.002) | Obrig. | 382 | Rej. | Rejeição: CFOP não permitido para o CST informado [nItem:nnn] |
| N12-50 | 65 | NFC-e com Partilha de ICMS entre UF (tag:ICMS/ICMSPart) | Obrig. | 741 | Rej. | Rejeição: NFC-e com Partilha de ICMS entre UF |
| N12-60 | 65 | NFC-e com repasse de ICMS-ST retido anteriormente em operação interestadual com repasse pelo SubstitutoTributário (tag: ICMS/ICMSST) (NT 2015.002) | Obrig. | 740 | Rej. | Rejeição: Item com Repasse de ICMS retido por Substituto Tributário [nItem: nnn] |
| N12-70 | 55 | Operação com Não Contribuinte (indIEDest=9) e CST difere da relação abaixo: - 00-Tributada integralmente; - 20-Com redução da Base de Cálculo; - 40-Isenta; - 41-Não tributada; - 60-ICMS cobrado anteriormente por substituição tributária; | Obrig. | 508 | Rej. | Rejeição: CST incompatível na operação com Não Contribuinte [nItem: 999] <!-- p.101 --> |

Exceção 1: A regra de validação acima não se aplica para NF-e de entrada (tpNF=0-Entrada).

Exceção 2: A regra de validação acima não se aplica, para o CST=50 (Suspensão), nas operações com CFOP de Retorno de Mercadorias (Tabela CFOP, indRetor=1), nem nas operações com CFOP de Remessa de Mercadorias (Tabela CFOP, indRemes=1), e nem nas operações com CFOP 5.949 ou 6.949.

Exceção 3: A regra de validação acima não se aplica quando houver ao menos um item de venda de veículos novos (grupo “veicProd”).

Exceção 4: A regra de validação não se aplica, em produção, para Nota Fiscal com data de emissão anterior a 01/07/2016.

Exceção 5: A regra de validação não se aplica para o CST=30 (Isenta ou não tributada e com cobrança do ICMS por substituição tributária), em operação interestadual (idDest=2) com combustíveis (tag: comb) derivados de petróleo (código ANP diferente de: 820101001, 820101010, 810102001, 810102004, 810102002, 810102003, 810101002, 810101001, 810101003, 220101003, 220101004, 220101002, 220101001, 220101005, 220101006, 560101001).

Exceção 6: A regra de validação acima não se aplica, para os CST=50 (Suspensão) e 51 (Diferimento), nas operações de devolução (finNFe=4).

Exceção 7: A regra de validação acima não se aplica, para o CST=51 (Diferimento), nas operações com CFOP 5.123, 5.922, 6.123 e 6.922, nem nas operações internas (idDest=1).de retorno de Mercadoria depositada em depósito fechado ou armazém geral (CFOP 5.906 ou 5.907).

Exceção 8: A critério da UF a regra de validação não se aplica para o CST=10 (Tributada e com cobrança do ICMS por substituição tributária) em operação interna (idDest=1). (NT 2017.002 / NT 2015.003)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| N12-80 | 55 | Operação com Contribuinte Isento de Inscrição Estadual (indIEDest=2) e CST constante na relação abaixo: - 50-Suspensão na cobrança do ICMS; - 51-Diferimento na cobrança do ICMS. | Obrig. | 529 | Rej. | Rejeição: CST incompatível na operação com Contribuinte Isento de Inscrição Estadual [nItem: 999] <!-- p.102 --> |

Exceção 1: A regra de validação acima não se aplica para o CST=50- Suspensão, nas operações com CFOP de conserto ou reparo (CFOP 1915, 1916, 2915, 2916, 5915, 5916, 6915 e 6916) ou de remessa para demonstração dentro do Estado (CFOP 1912, 1913, 5912 e 5913).

Exceção 2: A regra de validação acima não se aplica, em produção, para Nota Fiscal com data de emissão anterior a 01/07/2016.

Exceção 3: A critério da UF, a regra de validação acima não se aplica para CST=51-Diferimento em operações internas (idDest=1) quando o destinatário for Pessoa Jurídica (tag:dest/CNPJ).

Exceção 4: Esta regra não se aplica na emissão da NFA-e nas operações internas, a critério da UF. (NT 2017.002 / NT 2015.003)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| N12-81 | 55/65 | Se informado CST 60 em operações que não sejam para consumidor final (tag: indFinal=0, “Normal”): - Não informada Base de Cálculo ICMS Retido na operação anterior (tag: vBCSTRet), Alíquota suportada pelo Consumidor Final (tag: pST) e Valor do ICMS ST Retido na operação anterior (tag: vICMSSTRet). | Facul. | 938 | Rej. | Rejeição: Não informada BCST, pST e ICMSST retido na operação anterior [nItem: 999] |

Observação: Implementação opcional a critério da UF. (Atualizado NT 2018.005 v1.30)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| N12-82 | 55/65 | Se Informado CST = 60 em operações a consumidor final (tag: indFinal=1, “Consumidor final”), preenchimento Obrig.atório dos campos do grupo opcional para informações do ICMS Efetivo (N33) | Facul. | 906 | Rej. | Rejeição: Não informados os campos para informações do ICMS Efetivo. [nItem: nnn] |

Observação: Implementação opcional a critério da UF. (NT 2018.005)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| ~~N12-84~~ | ~~55/65~~ | ~~Se informado CST com benefício fiscal (CST = 20, 30, 40, 41, 50, 51, 60, 70 ou 90): - Obrig.atório informar o código de benefício fiscal (tag: cBenef)~~ | ~~Facul.~~ | ~~930~~ | ~~Rej.~~ | ~~Rejeição: CST com benefício fiscal e não informado o código de benefício fiscal [nItem: nnn]~~ |

> **Revogado/Descontinuado:** texto riscado no original (regras: N12-84).

~~Observação 1: Implementação a critério da UF, por modelo de DF-e e por CST.~~

> **Revogado/Descontinuado:** texto riscado no original.

~~Observação 2: Tabela de código de benefício fiscal por UF publicada no Portal~~ ~~Nacional da NF-e~~ ~~Exceção: Não se aplica esta regra de validação no caso de CST=90 e:~~ ~~- Percentual de Redução de Base de Cálculo (tag: pRedBC) igual a zero;~~ ~~- e (Percentual de Redução de Base de Cálculo do ICMS-ST (tag: pRedBCST)~~ ~~igual a zero e operação interna (idDest=1).~~ (NT 2019.001 v1.10, v1.50)

> **Revogado/Descontinuado:** texto riscado no original.

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| N12-85 | 55/65 | Se informado CST e não informado código de benefício fiscal: - Verificar se CST exige código de benefício fiscal (tag: cBenef), conforme tabela de código de benefício fiscal por UF publicada no Portal da Secretaria de Fazenda da respectiva UF. | Facul. | 930 | Rej. | Rejeição: CST com benefício fiscal e não informado o código de benefício fiscal [nItem: nnn] <!-- p.103 --> |

**Observação 1:** Implementação a critério da UF, por modelo de DF-e e por CST.

**Observação 2:** Para o CST informado, o sistema autorizador apenas verifica se existe qualquer cBenef na tabela publicada no Portal da Secretaria de Fazenda da respectiva UF, sem verificar a compatibilidade.

**Exceção 1:** a RV não se aplica quando Finalidade de emissão da NFe (tag: finNFe) igual a Devolução de Mercadoria e Identificador de local de destino da operação (tag: idDest) igual a Operação interestadual ou com o Exterior;

**Exceção 2:** a critério da UF, a RV não se aplica quando Finalidade de emissão da NF-e (tag: finNFe) igual a Devolução de Mercadoria;

**Exceção 3:** a critério da UF, a RV não se aplica quando Finalidade de emissão da NF-e (tag: finNFe) igual a NF-e de Ajuste;

**Exceção 4:** a critério da UF, a RV não se se aplica quando Tipo de Operação (tag: tpNF) igual à Entrada. (NT 2019.001 v1.50)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| N12-86 | 55/65 | Se informado CST e informado código de benefício fiscal: - Verificar se CST não possui código de benefício fiscal, conforme tabela de código de benefício fiscal por UF publicada no Portal da Secretaria de Fazenda da respectiva UF. | Facul. | 928 | Rej. | Rejeição: Informado código de benefício fiscal para CST sem benefício fiscal [nItem: nnn] <!-- p.104 --> |

**Observação 1:** Implementação a critério da UF, por modelo de DF-e e CST.

**Observação 2:** Para o CST informado, o sistema apenas verifica se não existe qualquer cBenef na tabela publicada no Portal da Secretaria de Fazenda da respectiva UF, sem verificar a compatibilidade.

**Exceção 1:** a RV não se aplica quando Finalidade de emissão da NFe (tag: finNFe) igual a Devolução de Mercadoria e Identificador de local de destino da operação (tag: idDest) igual a Operação interestadual ou com o Exterior.

**Exceção 2:** a critério da UF, a RV não se aplica quando Finalidade de emissão da NF-e (tag: finNFe) igual a Devolução de Mercadoria;

**Exceção 3:** a critério da UF, a RV não se aplica quando Finalidade de emissão da NF-e (tag: finNFe) igual a NF-e de Ajuste;

**Exceção 4:** a critério da UF, a RV não se aplica quando Tipo de Operação (tag: tpNF) igual à Entrada. (NT 2019.001 v1.50)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| ~~N12-88~~ | ~~55/65~~ | ~~Se informado código de benefício fiscal (tag: cBenef): - verificar se tipo de código do benefício corresponde ao CST com benefício fiscal. Exemplo: Código de benefício fiscal de isenção deve ser utilizado com CST de isenção.~~ | ~~Facul.~~ | ~~931~~ | ~~Rej.~~ | ~~Rejeição: CST não corresponde ao tipo de código de benefício fiscal [nItem: nnn]~~ |

> **Revogado/Descontinuado:** texto riscado no original (regras: N12-88).

~~Observação 1: Implementação a critério da UF, por modelo de DF-e e por CST.~~

> **Revogado/Descontinuado:** texto riscado no original.

~~Observação 2: Tabela de código de benefício fiscal por UF publicada no Portal~~ ~~Nacional da NF-e~~ (NT 2019.001 v1.10, v1.50)

> **Revogado/Descontinuado:** texto riscado no original.

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| N12-90 | 55/65 | Se CST de ICMS = (20, 30, 40, 41, 50, 70 ou 90): - Verificar se informado o valor do ICMS desonerado (tag:vICMSDeson) e o Motivo da Desoneração (tag: motDesICMS). | Facul. | 934 | Rej. | Rejeição: Não informado valor do ICMS desonerado ou o Motivo de desoneração [nItem: nnn] <!-- p.105 --> |

Observação: Implementação a critério da UF, por modelo de DF-e e por CST.

**Exceção 1:** a RV não se aplica quando Finalidade de emissão da NFe (tag: finNFe) igual a Devolução de Mercadoria e Identificador de local de destino da operação (tag: idDest) igual a Operação interestadual ou com o Exterior;

**Exceção 2:** a critério da UF, a RV não se aplica quando Finalidade de emissão da NF-e (tag: finNFe) igual a Devolução de Mercadoria;

**Exceção 3:** a critério da UF, a RV não se aplica quando Finalidade de emissão da NF-e (tag: finNFe) igual a NF-e de Ajuste;

**Exceção 4:** a critério da UF, a RV não se aplica quando Tipo de Operação (tag: tpNF) igual à Entrada.

**Exceção 5:** Não se aplica esta regra de validação no caso de CST=90 e: - Percentual de Redução de Base de Cálculo (tag: pRedBC) igual a zero; - e (Percentual de Redução de Base de Cálculo do ICMS-ST (tag: pRedBCST) igual a zero (NT 2019.001 v1.10, v1.50)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| N12-94 | 55/65 | Se informado CST e informado código de benefício fiscal: - Verificar se código de benefício fiscal corresponde ao CST informado, conforme tabela de código de benefício fiscal por UF publicada no Portal da Secretaria de Fazenda da respectiva UF. | Facul. | 931 | Rej. | Rejeição: Informado código de benefício fiscal incompatível com CST e UF [nItem: nnn] <!-- p.106 --> |

Observação: Implementação a critério da UF, por modelo de DF-e e por CST.

Exceção 1: a RV não se aplica quando Finalidade de emissão da NFe (tag: finNFe) igual a Devolução de Mercadoria e Identificador de local de destino da operação (tag: idDest) igual a Operação interestadual ou com o Exterior.

Exceção 2: a critério da UF, a RV não se aplica quando Finalidade de emissão da NF-e (tag: finNFe) igual a Devolução de Mercadoria;

Exceção 3: a critério da UF, a RV não se aplica quando Finalidade de emissão da NF-e (tag: finNFe) igual a NF-e de Ajuste;

Exceção 4: a critério da UF, a RV não se aplica quando Tipo de Operação (tag: tpNF) igual à Entrada. Nota: Para itens sem benefício fiscal, a UF poderá exigir a informação da literal “SEM CBENEF” para alguns CST, vide tabela publicada no Portal da Secretaria de Fazenda da respectiva UF.

Nota: Para itens sem benefício fiscal, a UF poderá exigir a informação da

literal “SEM CBENEF” para alguns CST, vide tabela publicada no Portal

Nacional Fazenda da respectiva UF.

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| N12-97 | 55 | Não informados campos de valores do CST 51 (Diferimento): - modBC (id: N13), pRedBC (id: N14), vBC (id: N15), pICMS (id: N16), vICMSOp (id: N16a), pDif (id: N16b), vICMSDif (id: N16c), vICMS (id: N17) | Facul. | 929 | Rej. | Rejeição: Informado CST de diferimento sem as informações de diferimento [nItem: nnn] |

Observações: Regra de Validação opcional a critério da UF.

**Exceção 1:** a RV não se aplica quando Finalidade de emissão da NFe (tag: finNFe) igual a Devolução de Mercadoria e Identificador de local de destino da operação (tag: idDest) igual a Operação interestadual ou com o Exterior.

**Exceção 2:** a critério da UF, a RV não se aplica quando Finalidade de emissão da NF-e (tag: finNFe) igual a Devolução de Mercadoria;

**Exceção 3:** a critério da UF, a RV não se aplica quando Finalidade de emissão da NF-e (tag: finNFe) igual a NF-e de Ajuste;

**Exceção 4:** a critério da UF, a RV não se aplica quando Tipo de Operação (tag: tpNF) igual à Entrada. (NT2019.001)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| N12-98 | 55/65 | Se informado código de benefício fiscal: - Verificar se código de benefício fiscal existe e está vigente, conforme tabela de código de benefício fiscal por UF publicada no Portal da Secretaria de Fazenda da respectiva UF. | Facul. | 946 | Rej. | Rejeição: Informado código de benefício fiscal incorreto ou inexistente na UF [nItem: nnn] <!-- p.107 --> |

Observação: Implementação a critério da UF e por modelo de DF-e.

**Exceção 1:** a RV não se aplica quando Finalidade de emissão da NFe (tag: finNFe) igual a Devolução de Mercadoria e Identificador de local de destino da operação (tag: idDest) igual a Operação interestadual ou com o Exterior.

**Exceção 2:** a critério da UF, a RV não se aplica quando Finalidade de emissão da NF-e (tag: finNFe) igual a Devolução de Mercadoria;

**Exceção 3:** a critério da UF, a RV não se aplica quando Finalidade de emissão da NF-e (tag: finNFe) igual a NF-e de Ajuste;

**Exceção 4:** a critério da UF, a RV não se aplica quando Tipo de Operação (tag: tpNF) igual à Entrada.

**Exceção 5:** essa RV não se aplica quando informado CSOSN (operação realizada por optante pelo Simples Nacional). (NT2019.001 v1.50)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| N12a-10 | 55/65 | Informado CSOSN (id:N12a) para CRT (id:C21) diferente de 1 (NT 2010/010) | Facul. | 591 | Rej. | Rejeição: Informado CSOSN para emissor que não é do Simples Nacional (CRT diferente de 1) |
| N12a-20 | 65 | NFC-e com CSOSN diferente da relação abaixo: - 102-Tributação SN sem permissão de crédito; - 103-Tributação SN, com isenção para faixa de receita bruta; - 300-Imune; - 400-Não tributada pelo Simples Nacional; - 500-ICMS cobrado anteriormente por substituição tributária ou por antecipação; | Obrig. | 383 | Rej. | Rejeição: Item com CSOSN indevido [nItem: nnn] |

Exceção 1: Aceitar CSOSN=900-Outros, a critério da UF.

Exceção 2: A regra de validação não se aplica, em produção, para Nota Fiscal com Data de Emissão anterior a 01/04/2016. (NT 2015.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| N12a-50 | 55/65 | Se informado CSOSN = 500 em operações que não sejam para consumidor final (tag: indFinal=0, “Normal”): - Não informada Base de Cálculo ICMS Retido na operação anterior (tag: vBCSTRet), Alíquota suportada pelo Consumidor Final (tag: pST) e Valor do ICMS ST Retido na operação anterior (tag: vICMSSTRet). | Facul. | 938 | Rej. | Rejeição: Não informada BCST, pST e ICMSST retido na operação anterior [nItem: 999] |

Observação: Implementação opcional a critério da UF. (Atualizado na NT 2018.005 v1.30)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| N12a-60 | 55/65 | Se Informado CSOSN=500 em operações a consumidor final (tag: indFinal=1, “Consumidor final”), preenchimento Obrig.atório dos campos do grupo opcional para informações do ICMS Efetivo (N33) | Facul. | 906 | Rej. | Rejeição: Não informados os campos para informações do ICMS Efetivo. [nItem: nnn] <!-- p.108 --> |

Observação: Implementação opcional a critério da UF. (NT 2018.005)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| N12a-30 | 65 | NFC-e com CSOSN 103 ou 400 não permitidos para a UF. | Obrig. | 384 | Rej. | Rejeição: CSOSN não permitido para a UF [nItem: nnn] |

Observação: Regra de validação opcional a critério da UF. Exceção: A regra de validação não se aplica, em produção, para Nota Fiscal com Data de Emissão anterior a 01/04/2016. (NT 2015.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| N12a-34 | 65 | NFC-e com CSOSN=900, informando dados do ICMS-ST (tag: ICMSSN900/modBCST) (NT 2015.002) | Obrig. | 385 | Rej. | Rejeição: Grupo de tributação ICMSSN900, informando dados do ICMS-ST [nItem: nnn] |
| N12a-40 | 65 | NFC-e com CSOSN=102, 103, 300, 400 ou 900 CFOP diferente de 5.101, 5.102, 5.103, 5.104, 5.115 (NT 2015.002) | Obrig. | 386 | Rej. | Rejeição: CFOP não permitido para o CSOSN informado [nItem: nnn] |
| N12a-44 | 65 | NFC-e com CSOSN=500 (ICMS cobrado anteriormente) CFOP diferente de 5.405, 5.656, 5.667 (NT 2015.002) | Obrig. | 386 | Rej. | Rejeição: CFOP não permitido para o CSOSN informado [nItem: nnn] |
| N12a-70 | 55 | Operação com Não Contribuinte (indIEDest=9) e CSOSN difere da relação abaixo: - 102-Tributação SN sem permissão de crédito; - 103-Tributação SN, com isenção para faixa de receita bruta; - 300-Imune; - 400-Não tributada pelo Simples Nacional; - 500-ICMS cobrado anteriormente por substituição tributária ou por antecipação; | Obrig. | 600 | Rej. | Rejeição: CSOSN incompatível na operação com Não Contribuinte [nItem: 999] |

Exceção 1: A regra de validação acima não se aplica para NF-e de entrada (tpNF=0-Entrada).

Exceção 2: A regra de validação acima não se aplica nas operações com CFOP de conserto ou reparo (CFOP 5915, 5916, 6915 e 6916) ou de remessa para demonstração dentro do Estado (CFOP 5912 e 5913).

Exceção 3: A regra de validação não se aplica, em produção, para Nota Fiscal com data de emissão anterior a 01/07/2016. (NT 2015.003)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| N16-04 | 55 | Validação alíquota do ICMS na operação interestadual de produtos importados (NT 2012/005 e NT2013/006): - Operação Interestadual de Saída (idDest=2 e tpNF=1); - Origem da mercadoria = 1, 2, 3 ou 8; - CST de ICMS = 00, 10, 20, 70 ou 90; - Data de Emissão igual ou superior a 01/01/2013; - Valor alíquota do ICMS maior do que “4.00” (4 por cento). | Facul. | 663 | Rej. | Rejeição: Alíquota do ICMS com valor superior a 4 por cento na operação de saída interestadual com produtos importados [nItem: 999] <!-- p.109 --> |

Exceção 0: Para as NF-e com Data de Emissão anterior a 01/07/2016, a regra de validação acima não se aplica para destinatário Não Contribuinte (tag:dest/indIEDest=9).

Exceção 1: A regra acima não se aplica para as operações de Devolução (finNFe=4).

Exceção 2: A regra de validação acima não se aplica para as operações com CFOP de Retorno de Mercadorias (Tabela CFOP, indRetor=1).

Exceção 3: A regra de validação acima não se aplica na venda de veículos novos (grupo “veicProd”) se existir ao menos um item de Venda direta para grandes consumidores (tpOp=3), ou de Faturamento direto para consumidor final (tpOp=2).

Exceção 4: : Para as NF-e com Data de Emissão anterior a 01/07/2016, mesmo que informada a IE do destinatário, a regra de validação acima não se aplica para as operações com os CFOP 6107, 6108 (Não Contribuinte).Exceção 5: A regra de validação acima não se aplica para a NF Complementar (finNFe=2) quando: - Se referenciada uma NF-e, a NF-e referenciada tem a Data de Emissão anterior a 01/01/13; - Se referenciada uma NF modelo 1, a Data de Emissão é anterior a 1301 (tag refNF/AAMM).

Exceção 6: Para as NF-e com Data de Emissão anterior a 01/07/2016, mesmo que informada a IE do destinatário, a regra de validação acima não se aplica para as operações com o CFOP 6.929 - Lançamento relativo a operação registrada em Cupom Fiscal (NT 2013/004)

Exceção 7: A regra de validação acima não se aplica para as operações de venda à ordem (CFOP 6.118, 6.119, 6.122 e 6.123). (NT 2017.002 / NT 2015.003)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| N16-20 | 55 | Validação alíquota do ICMS na operação interestadual de Saída Normal: - Operação Interestadual de Saída Normal (idDest=2, tpNF=1 e finNFe=1); - Origem da mercadoria difere de 1, 2, 3 ou 8; - Valor alíquota do ICMS (tag:pICMS) maior do que “7.00” (7 por cento) para os Estados de origem (enderEmit/UF) do Sul e Sudeste, exceto ES, destinado (enderDest/UF) para os Estados do Norte, Nordeste, Centro-Oeste e Espírito Santo. - Valor alíquota do ICMS (tag:pICMS) maior do que “12.00” (12 por cento) para os demais casos. | Obrig. | 693 | Rej. | Rejeição: Alíquota de ICMS superior à definida para a operação interestadual [nItem: 999] <!-- p.110 --> |

Exceção 1: Para as NF-e com Data de Emissão anterior a 01/07/2016, a regra de validação acima não se aplica para destinatário Não Contribuinte (tag:dest/indIEDest=9).

Exceção 2: A regra de validação acima não se aplica na venda de veículos novos (grupo “veicProd”) se existir ao menos um item de Venda direta para grandes consumidores (tpOp=3), ou de Faturamento direto para consumidor final (tpOp=2).

Exceção 3: A regra de validação acima não se aplica para as operações com CFOP de Retorno de Mercadorias ou Anulação de Valor (Tabela CFOP, indRetor=1 ou indAnula=1).

Exceção 4: A regra de validação acima não se aplica para as operações de venda à ordem (CFOP 6.118, 6.119, 6.122 e 6.123)

Exceção 5: A regra de validação não se aplica se informada UF do local de entrega (tag: entrega/UF) diferente da UF do emitente (tag: enderEmit/UF);

Exceção 6: A regra de validação não se aplica se informada UF do local de retirada (tag: retirada/UF) diferente da UF do destinatário (tag: enderDest/UF); (NT 2017.002 / NT 2015.003)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| N16a-10 | 55 | Se CST de ICMS = 51 (diferimento): – Valor ICMS da Operação (id:N16a) difere de Base de Cálculo (id:N15) * Alíquota (id:N16) (*4) | Facul. | 351 | Rej. | Rejeição: Valor do ICMS da Operação no CST=51 difere do produto BC e Alíquota [nItem: 999] |

Observação: Campos opcionais não informados serão considerados como se tiverem sido informados com valor = zero.

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| N16c-10 | 55 | Se CST de ICMS = 51 (diferimento): – Valor do ICMS diferido (id:N16c) difere do produto do Valor do ICMS da Operação (id:N16a) e percentual do diferimento (id:N16b) (*4) | Facul. | 352 | Rej. | Rejeição: Valor do ICMS Diferido no CST=51 difere do produto Valor ICMS Operação e percentual diferimento [nItem: 999] |

Observação: Campos opcionais não informados serão considerados como se tiverem sido informados com valor = zero.

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| N17-10 | 55 | Se CST de ICMS = 51 (diferimento): – Valor do ICMS (id:N17) não corresponde a diferença do Valor do ICMS da Operação (id:N16a) e Valor do ICMS diferido (id:N16c) Exceção: A regra de validação acima não se aplica caso não forem informados os dois campos: vICMSDif e vICMS. | Facul. | 353 | Rej. | Rejeição: Valor do ICMS no CST=51 não corresponde a diferença do ICMS operação e ICMS diferido [nItem: 999] |

Observação: Campos opcionais não informados serão considerados como se tiverem sido informados com valor = zero.

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| N17-20 | 55/65 | Se CST de ICMS = 00, 10, 20, 70 e tag:finNFe = 1 (id:B25) – Valor ICMS (id:N17) difere de Base de Cálculo (id:N15) * Alíquota (id:N16) (*4) (NT 2010/010): | Facul. | 528 | Rej. | Rejeição: Valor do ICMS difere do produto BC e Alíquota [nItem: 999] <!-- p.111 --> |
| N17b-10 | 55/65 | Informado percentual de FCP (id:N17b) igual a zero. Nota: Não informar os campos relativos a FCP para os produtos não sujeitos à sua incidência. (NT 2016.002) | Obrig. | 880 | Rej. | Rejeição: Percentual de FCP igual a zero [nItem: 999] |
| N17b-20 | 55/65 | Se informado percentual de FCP (id:N17b), percentual de FCP validado conforme tabela de alíquota definida por UF do emitente (tag:enderEmit/UF, id:C12). (NT 2016.002) | Obrig. | 874 | Rej. | Rejeição: Percentual de FCP inválido [nItem: 999] |
| N17c-10 | 55/65 | Informado a tag vFCP (id:N17c) e finNFe=1 (id:B25), verificar: - Se CST=00 e vFCP (id:N17c) difere da vBC (id:N15)* pFCP (id:N17b) (*4) ou - Se CST=10, 20,70, 90 ou 51 e vFCP (id:N17c) difere da vBCFCP (id:N17a)* pFCP (id:N17b) (*4) (NT 2016.002) | Obrig. | 860 | Rej | Rejeição: Valor do FCP informado difere de base de cálculo*alíquota [nItem: 999] |
| N17c-20 | 55 | Se Operação interestadual (tag:idDest=2) para Consumidor Final (tag: indFinal=1), não contribuinte (tag: indIEDest=9) e informado o valor do FCP (tag: vFCP) | Obrig. | 876 | Rej | Rejeição: Operação interestadual para Consumidor Final e valor do FCP informado em campo diferente de vFCPUFDest (id:NA13) [nItem: 999] |

Observação: Em operações interestaduais para consumidor final não contribuinte, o valor do FCP, quando existir, deve ser informado no campo vFCPUFDest (id:NA13). (NT 2016.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| N18-10 | 55 | Se o campo modBCST = “4” Margem Valor Agregado, Obrigatório o preenchimento do campo pMVAST Nota: Regra de Validação opcional a critério da UF (NT 2019.001 v1.10, v1.50) | Facul. | 932 | Rej. | Rejeição: Informada modalidade de determinação da BC da ST como MVA e não informado o campo pMVAST [nItem: nnn] |
| N18-20 | 55 | Se o campo modBCST <> “4” Margem Valor Agregado, não deverá ser preenchido o campo pMVAST Nota: Regra de Validação opcional a critério da UF (NT 2019.001 v1.10, v1.50) | Facul. | 933 | Rej. | Rejeição: Informada modalidade de determinação da BC da ST diferente de MVA e informado o campo pMVAST [nItem: nnn] |
| N23-10 | 55 | Operação sem informação do campo CEST, e CST ou CSOSN da relação abaixo: -10-tributada com cobrança de ICMS por substituição tributária -30-isenta ou não tributada com cobrança de ICMS por substituição tributária -60-ICMS cobrado anteriormente por substituição tributária -70-com redução de base de cálculo e cobrança de ICMS por substituição tributária -90-outros, desde que com valor de ICMS retido por substituição tributária (tag: vICMSST diferente de zero) -201-tributada pelo Simples Nacional com permissão de crédito e com cobrança do ICMS por substituição tributária -202-tributada pelo Simples Nacional sem permissão de crédito e com cobrança do ICMS por substituição tributária -203-isenção de ICMS do Simples Nacional para a faixa de receita, com cobrança do ICMS por substituição tributária -500-ICMS cobrado anteriormente por substituição tributária ou por antecipação; -900-outros, desde que com valor de ICMS retido por substituição tributária (tag: vICMSST diferente de zero). | Obrig. | 806 | Rej. | Rejeição: Operação com ICMS-ST sem informação do CEST [nItem: 999] <!-- p.112 --> |

Exceção 1: A regra de validação não se aplica se informado o Grupo de Partilha do ICMS (campo ICMSPart). (NT 2015.003)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| N23b-10 | 55 | Informado percentual de FCP ST (tag:N23b) igual a zero. Nota: não informar os campos relativos a FCP ST para os produtos não sujeitos à sua incidência. (NT 2016.002) | Obrig. | 881 | Rej. | Rejeição: Percentual de FCPST igual a zero [nItem: 999] |
| N23b-20 | 55 | Se UF do destinatário diferente de “EX” e se informado percentual de FCP ST (tag:N23b), percentual de FCP validado conforme tabela de alíquota definida por UF. Obs.1: Utilizar a UF do destinatário na validação (tag: enderDest/UF, id:E12); Obs.2: Quando informada a UF do local de entrega (tag: entrega/UF) diferente de “EX”, aceitar como válidas tanto a alíquota da UF do destinatário (tag: enderDest/UF; id:E12) quanto a alíquota da UF de entrega (tag: entrega/UF). Obs.: Implementação Futura (NT 2016.002) | Obrig. | 875 | Rej. | Rejeição: Percentual de FCPST inválido [nItem: 999] |
| N23d-10 | 55 | Informado a tag vFCPST (id:N23d) e finNFe=1 (id:B25), verificar: - Se informado CST= 10 ou 30 ou 70 ou 90 ou CSOSN=201 ou 202 ou 203 ou 900 e vFCPST (id:N23d) difere da vBCFCPST (id:N23a)* pFCPST (id:N23b) - vFCP (id:N17c) (*4) Obs.1: Campos não informados devem ser considerados como “0" Obs.2: Regra de validação aplicável a critério da UF (NT 2016.002) | Obrig. | 860 | Rej | Rejeição: Valor do FCP informado difere de base de cálculo*alíquota [nItem: 999] |
| N27b-10 | 55/65 | Informado percentual de FCP ST retido (id:N27b) igual a zero. Nota: não informar os campos relativos a FCP ST para os produtos não sujeitos à sua incidência. (NT 2016.002) | Obrig. | 881 | Rej. | Rejeição: Percentual de FCPST igual a zero [nItem: 999] |
| N27b-20 | 55/65 | Se UF do destinatário diferente de “EX” e se informado percentual de FCP ST retido (id:N27b), percentual de FCP validado conforme tabela de alíquota definida por UF. Obs.1: Utilizar a UF do destinatário na validação (tag: enderDest/UF; id:E12); Obs.2: Quando informada a UF do local de entrega (tag: entrega/UF) diferente de “EX, aceitar como válidas tanto a alíquota da UF de destinatário (tag: enderDest/UF; id:E12) quanto a alíquota da UF de entrega (tag: entrega/UF). (NT 2016.002) | Obrig. | 875 | Rej. | Rejeição: Percentual de FCPST inválido [nItem: 999] <!-- p.113 --> |
| N27d-10 | 55/65 | Informado a tag vFCPSTRet (id:N27d) e finNFe=1 (id:B25), verificar: - Se CST=60 ou CSOSN=500 e vFCPSTRet (id:N27d) difere da vBCFCPSTRet (id:N27a)* pFCPSTRet (id:N27b) (*4) Obs.: regra de validação para implementação futura (NT 2016.002) | Obrig. | 860 | Rej | Rejeição: Valor do FCP informado difere de base de cálculo*alíquota [nItem: 999] |
| N28-10 | 55/65 | Se informado motDesICMS = 7 (desoneração Suframa): – tag:ISUF (id:E18) deve ser informado (NT 2011/004) Exceção: Não exigir a Inscrição Suframa se informado CFOP de entrada (inicia por 1 ou 2) (NT 2012/003) | Facul. | 625 | Rej. | Rejeição: Inscrição SUFRAMA deve ser informada na venda com isenção para ZFM [nItem: 999] |
| N28-20 | 55 | Se informado tag:motDesICMS = 7 (desoneração Suframa): – deve ser informado um dos CFOP abaixo: 1203, 1204, 1208, 1209, 2203, 2204, 2208, 2209, 5109, 5110, 5120, 5151, 5152, 5651, 5652, 5654, 5655, 5658, 5659, 5910, 6905, 6109, 6110, 6120, 6122, 6123, 6151, 6152, 6651, 6652, 6654, 6655, 6658, 6659, 6910, 6923 (NT 2012/003) (NT 2013/005 v1.10) | Facul. | 626 | Rej. | Rejeição: CFOP de operação isenta para ZFM diferente do previsto [nItem: 999] |
| N28-30 | 55/65 | Se informado tag:motDesICMS, o vICMSDeson (id:N28a) deve ser maior que zero (NT 2011/004). | Facul. | 627 | Rej. | Rejeição: O valor do ICMS desonerado deve ser informado [nItem: 999] |

Observação: O motivo da desoneração pode ocorre nos grupos de tributação do ICMS 20, 30, 40, 70 e 90. (NT 2016.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| ~~N33-10~~ | ~~55/65~~ | ~~Se Informado CST = 60 ou CSOSN=500 e indFinal=1 (id:B25a), preenchimento Obrig.atório dos campos do grupo opcional para informações do ICMS Efetivo (N33)~~ | ~~Facul.~~ | ~~906~~ | ~~Rej.~~ | ~~Rejeição: Não informados os campos do grupo opcional para informações do ICMS Efetivo, Obrig.atório quando CST = 60 ou CSOSN=500 e operação com consumidor final [nItem: nnn]~~ |

> **Revogado/Descontinuado:** texto riscado no original (regras: N33-10).

~~Observação: Implementação opcional a critério da UF. (NT 2016.002)~~ (REMOVIDA NA NT 2018.005)

> **Revogado/Descontinuado:** texto riscado no original.

**Datas, Exceções e Modelos para Regras de Validação: N12-85, N12-86, N12-90, N12-94, N12-97, N12-98**

Na tabela a seguir encontram-se as Unidades da Federação que implementarão as Regras de Validação N12-85, N12-86, N12-90, N12-94, N12-97 e N12-98, previstas na Nota Técnica 2019.001 v1.51. Na legenda são encontradas as datas de aplicação, as exceções e os modelos aplicáveis (55/65), a critério da UF.

<!-- p.114 -->

Regra de validação - Aplicação e Exceções

| UF | N12-85 | N12-86 | N12-90 | N12-94 | N12-97 | N12-98 |
|---|---|---|---|---|---|---|
| DF | (D4), (55/65)<br>(E2, E3, E4) | (D4), (55/65)<br>(E2, E3, E4) | (D4), (55/65)<br>(E2, E3, E4) | (D4), (55/65)<br>(E2, E3, E4) | (D4), (55/65)<br>(E2, E3, E4) | (D4), (55/65)<br>(E2, E3, E4) |
| PR | (D1), (55/65) | (D1), (55/65) | (D\*) | (D2), (55/65) | (D1), (55/65) | (D3), (55/65) |
| RJ | (D2), (55/65)<br>(E2, E3) | (D2), (55/65)<br>(E2, E3) | (D2), (55/65)<br>(E2, E3) | (D2), (55/65)<br>(E2, E3) | (D2), (55/65)<br>(E2, E3) | (D3), (55/65)<br>(E2, E3) |
| RS | (D2), (55/65)<br>(E3,E4) | (D2), (55/65)<br>(E3,E4) | (D\*) | (D\*) | (D\*) | (D3), (55/65)<br>(E3,E4) |
| Demais UF | (D\*) | (D\*) | (D\*) | (D\*) | (D\*) | (D\*) |

Datas para aplicação das Regras de validação (D), com respectivo Modelo de DF-e:

- (D\*) - Regra de validação não será aplicada
- (D1) - Aplicação a partir de 02/09/2019
- (D2) - Aplicação a partir de 01/10/2019
- (D3) - Aplicação a partir de 10/8/2020 em Produção (Homologação: 16/03/2020)
- (D4) – Aplicação a partir de 02/11/2020 em Produção (Homologação: 05/10/2020)

Aplicação aos Modelos de DF-e: (55); (65); ou (55/65)

Exceções constantes nas Regras de Validação, a critério da UF:

- (E1) - Exceção 1: a RV não se aplica quando Finalidade de emissão da NF-e (tag: finNFe) igual a Devolução de Mercadoria e Identificador de local de destino da operação (tag: idDest) igual a Operação interestadual ou com o Exterior.
- (E2) - Exceção 2: a RV não se aplica quando Finalidade de emissão da NF-e (tag: finNFe) igual a Devolução de Mercadoria;
- (E3) - Exceção 3: a RV não se aplica quando Finalidade de emissão da NF-e (tag: finNFe) igual a NF-e de ajuste;
- (E4) - Exceção 4: a RV não se aplica quando Tipo de Operação (tag: tpNF) igual a Entrada.

Observação: A Exceção 1, constante nas respectivas Regras de Validação, aplica-se a todas as UF. Assim, não necessita estar no quadro acima.

As datas aqui definidas, juntamente com todas as demais informações a respeito das regras de validação opcionais, por UF, podem ser consultadas em tabela publicada no Portal Nacional da NFC-e, na área “Regras de Validação” da aba “Desenvolvedor”.

<!-- p.115 -->

Para contribuintes estabelecidos no Estado do Rio Grande do Sul, as Regras de Validação N12-85 e N12-86 permitirão informar qualquer CST até 09/08/2020 no ambiente de autorização em produção, conforme tabela disponibilizada no Portal da NF-e.

▪ A RV N12-94 foi desativada para o Rio Grande do Sul a partir da publicação da NT 2019.001.

▪ A RV N12-98 foi ativada conforme as datas de homologação e produção previstas na NT 2019.001

### NA. Item / ICMS para a UF de Destino

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| NA01-10 | 65 | Informado grupo “ICMSUFDest” para a NFC-e (NT 2015.003) | Obrig. | 807 | Rej. | Rejeição: NFC-e com grupo de ICMS para a UF do destinatário |
| NA01-20 | 55 | Não informado grupo de ICMS para a UF de Destino (tag:ICMSUFDest): - Operação Interestadual (idDest=2) e - Operação com Consumidor Final (indFinal=1) e - Operação com Não Contribuinte (indIEDest=9) e - Não é operação de prestação de serviços (não existe tag “ISSQN”). | Obrig. | 694 | Rej. | Rejeição: Não informado o grupo de ICMS para a UF de destino [nItem: 999] |

Exceção 1: Esse grupo não deve ser exigido se o Grupo de Partilha do ICMS (campo ICMSPart) estiver preenchido.

Exceção 2: A regra de validação não se aplica, em produção, para Nota Fiscal com data de emissão anterior a 01/07/2016.

Exceção 3: A regra de validação não se aplica para Devolução de Mercadoria (finNFe=4) que referencie Nota Fiscal com chave de acesso anterior a 2016.

Exceção 4: A regra de validação acima não se aplica para as operações com CFOP de Retorno de Mercadorias (Tabela CFOP, indRetor=1).

Exceção 5: A regra de validação acima não se aplica nas NF-e de entrada (tpNF=0).

Exceção 6: A regra de validação acima não se aplica nas operações com combustíveis (tag:comb) derivados de petróleo com código ANP diferente de: 820101001, 820101010, 810102001, 810102004, 810102002, 810102003, 810101002, 810101001, 810101003, 220101003, 220101004, 220101002, 220101001, 220101005, 220101006, 560101001.

Exceção 7: A regra de validação acima não se aplica se informada UF do local de entrega (tag: entrega/UF) igual à UF do emitente (tag: emit/enderEmit/UF).

Exceção 8: A regra de validação acima não se aplica para as operações com CFOP de Remessa de Mercadoria (Tabela CFOP, indRemes=1).

Exceção 9: A regra de validação acima não se aplica para os CFOP: - 6.552 - Transferência de bem do ativo imobilizado; - 6.922 - Lançamento efetuado a título de simples faturamento decorrente de venda p/ entrega futura; - 6.929 - Lançamento relativo a Cupom Fiscal.

Exceção 10: Esta regra de validação não se aplica nas operações isentas (CST=40-Isenta ou CSOSN=103-Isento), imunes ou não tributadas (CST=41-

<!-- p.116 -->

Não tributada, ou CSOSN=300-Imune, ou CSOSN=400-Não tributada pelo Simples Nacional).

Exceção 11: A regra de validação acima não se aplica nas NF-e complementares (finNFe=2) nem nas de ajuste (finNFe=3).

Exceção 12: A regra de validação acima não se aplica para emitentes optantes pelo Simples Nacional (CRT=1). (NT 2017.002 / NT 2015.003)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| NA01-30 | 55 | Informado indevidamente o grupo de ICMS para a UF de Destino (tag:ICMSUFDest): - Não é operação Interestadual (idDest<>2) ou - Não é operação com Consumidor Final (indFinal<>1) ou - Não é operação com Não Contribuinte (indIEDest<>9) ou - Operação de prestação de serviços (existe tag “ISSQN”) ou - Operação com combustível (tag:comb) derivado de petróleo: código ANP diferente de: 820101001, 820101010, 810102001, 810102004, 810102002, 810102003, 810101002, 810101001, 810101003, 220101003, 220101004, 220101002, 220101001, 220101005, 220101006, 560101001, ou - Data de Emissão anterior a 01/01/2016. | Obrig. | 695 | Rej. | Rejeição: Informado indevidamente o grupo de ICMS para a UF de destino [nItem:999] |

Exceção 1: A critério da UF a regra de validação acima não se aplica na devolução (finNFe=4) por NFe Avulsa com IE do Emitente=ISENTO.

Exceção 2: A regra de validação acima não se aplica se informada UF do local de entrega (tag: entrega/UF) diferente da UF do emitente (tag: emit/enderEmit/UF).

Exceção 3: A regra de validação não se aplica, em produção, para Nota Fiscal com data de emissão anterior a 01/07/2016. (NT 2015.003)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| NA09-10 | 55 | Se informada alíquota interestadual (tag:pICMSInter) de 4% e - Origem da mercadoria difere de produto importado (tag:orig<>1,2,3,8) Exceção: A regra de validação não se aplica, em produção, para Nota Fiscal com data de emissão anterior a 01/07/2016. (NT 2015.003) | Obrig. | 697 | Rej. | Rejeição: Alíquota interestadual do ICMS com origem diferente do previsto [nItem:999] |
| NA09-20 | 55 | Se informada alíquota interestadual (tag:pICMSInter) de 7% ou 12% e - Origem da mercadoria de produto importado (tag:orig=1,2,3,8) Exceção: A regra de validação não se aplica, em produção, para Nota Fiscal com data de emissão anterior a 01/07/2016. (NT 2015.003) | Obrig. | 697 | Rej. | Rejeição: Alíquota interestadual do ICMS com origem diferente do previsto [nItem:999] |
| NA09-30 | 55 | Se informada alíquota interestadual (tag:pICMSInter) de 7% ou 12% em NF de Saída Normal (tpNF=1 e finNFe=1) e alíquota interestadual incompatível com as UF envolvidas: - 7% para os Estados de origem do Sul e Sudeste, exceto ES, destinado para os Estados do Norte, Nordeste, Centro-Oeste e Espírito Santo; - 12% para os demais casos. | Obrig. | 698 | Rej. | Rejeição: Alíquota interestadual do ICMS incompatível com as UF envolvidas na operação [nItem:999] <!-- p.117 --> |

Exceção 1: A regra de validação acima não se aplica para as operações com CFOP de Retorno de Mercadorias (Tabela CFOP, indRetor=1)

Exceção 2: A regra de validação não se aplica, em produção, para Nota Fiscal com data de emissão anterior a 01/07/2016.

Exceção 3: A regra de validação não se aplica se informada UF do local de entrega (tag: entrega/UF) diferente da UF do emitente (tag: enderEmit/UF);

Exceção 4: A regra de validação não se aplica se informada UF do local de retirada (tag: retirada/UF) diferente da UF do destinatário (tag: enderDest/UF); (NT 2017.002 / NT 2015.003)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| NA11-10 | 55 | Percentual do ICMS Interestadual para a UF de destino (tag:pICMSInterPart) difere do previsto para o ano da Data de Emissão. | Obrig. | 699 | Rej. | Rejeição: Percentual do ICMS Interestadual para a UF de destino difere do previsto para o ano da Data de Emissão [nItem: 999] |

Observação: Nas operações que não sejam de finalidade de emissão normal (finNFe<>1) ou nas operações com CFOP de Retorno de Mercadorias (Tabela CFOP, indRetor=1) considerar o ano da NF referenciada em substituição ao ano da Data de Emissão. Exceção: A regra de validação não se aplica, em produção, para Nota Fiscal com data de emissão anterior a 01/01/2016. (NT 2017.002 / NT 2015.003)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| NA13-10 | 55 | Valor do ICMS relativo ao Fundo de Combate à Pobreza na UF de destino tag: vFCPUFDest (id:NA11) difere de vBCFCPUFDest (id:NA04) * pFCPUFDest (id:NA05) (*4) Exceção: A regra de validação não se aplica, em produção, para Nota Fiscal com data de emissão anterior a 01/01/2016. (NT 2016.002/ NT 2015.003) | Obrig. | 793 | Rej. | Rejeição: Valor do ICMS relativo ao Fundo de Combate à Pobreza na UF de destino difere do calculado [nItem: 999] |
| NA15-10 | 55 | Valor do ICMS Interestadual para UF de Destino (tag: vICMSUFDest) difere de vBCUFDest * (pICMSUFDest - pICMSInter) * pICMSInterPart (*4) 1 | Obrig. | 815 | Rej. | Rejeição: Valor do ICMS Interestadual para UF de Destino difere do calculado [nItem: 999] (Valor Informado: XXX, Valor Calculado:XXX) |

Observação: implementação futura (NT 2015.003)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| NA17-10 | 55 | Valor do ICMS Interestadual para a UF do Remetente (tag: vICMSUFRemet) difere de (vBCUFDest * (pICMSUFDest - pICMSInter)) – vICMSUFDest (*4) 2 Observação: implementação futura (NT 2015.003) | Obrig. | 816 | Rej. | Rejeição: Valor do ICMS Interestadual para UF do Remetente difere do calculado [nItem: 999] (Valor Informado: XXX, Valor Calculado:XXX) |

1 Nota de Rodapé do Manual de Orientação ao Contribuinte (MOC):

(*4) O valor resultante da multiplicação deve ser arredondado para um valor numérico com duas casas decimais. Considerar uma tolerância de R$ 0,01 para mais ou para menos na validação.

2 Idem nota anterior.

<!-- p.118 -->

### O. Item / Tributo: IPI

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| O01-10 | 65 | NFC-e com o grupo de tributação pelo IPI (id:O01) | Obrig. | 742 | Rej. | Rejeição: NFC-e com grupo do IPI |
| O06-10 | 55 | Código de Enquadramento Legal do IPI inválido (tag:cEnq, id:O06). Preenchimento conforme seção 8.9 do MOC – Visão Geral (Tabela do Código de Enquadramento do IPI) | Obrig. | 387 | Rej. | Rejeição: Código de Enquadramento Legal do IPI inválido [nItem: nnn] |
| O09-10 | 55 | Verificar compatibilidade entre o CST do IPI e o Código de Enquadramento Legal (cEnq), conforme as regras abaixo: - CST de Isenção e Código de Enquadramento incompatível (IPINT/CST=02, 52 e cEnq fora da faixa [301, 399]) - CST de Imunidade e Código de Enquadramento incompatível (IPINT/CST=04, 54 e cEnq fora da faixa [001, 099]) - CST de Suspensão e Código de Enquadramento incompatível (IPINT/CST=05, 55 e cEnq fora da faixa [101, 199]) Exceção: A regra de validação não se aplica, em produção, para Nota Fiscal com data de emissão anterior a 01/04/2016. (NT 2015.002) | Obrig. | 388 | Rej. | Rejeição: Código de Situação Tributária do IPI incompatível com o Código de Enquadramento Legal do IPI [nItem: nnn] |

### P. Item / Tributo: II

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| P01-10 | 65 | NFC-e com o grupo de tributação pelo II (id:P01) | Obrig. | 743 | Rej. | Rejeição: NFC-e com grupo do II |

### Q. Item / Tributo: PIS

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| Q01-20 | 55 | NF-e sem o grupo de tributação pelo PIS (id:Q01) | Obrig. | 745 | Rej. | Rejeição: NF-e sem grupo do PIS |

### R. Item / Tributo: PIS ST

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| R01-10 | 65 | NFC-e com o grupo de tributação pelo PIS-ST (id:R01) | Obrig. | 746 | Rej. | Rejeição: NFC-e com grupo do PIS-ST |

<!-- p.119 -->

### S. Item / Tributo: COFINS

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| S01-20 | 55 | NF-e sem o grupo de tributação pela COFINS (id:S01) | Obrig. | 748 | Rej. | Rejeição: NF-e sem grupo da COFINS |

### T. Item / Tributo: COFINS ST

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| T01-10 | 65 | NFC-e com o grupo de tributação pela COFINS-ST (id:T01) | Obrig. | 749 | Rej. | Rejeição: NFC-e com grupo da COFINS-ST |

### U. Item / Tributo: ISSQN

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| U01-10 | 55/65 | Informado grupo de tributação do ISSQN (id:U01) sem informar a Inscrição Municipal (id:C19) | Facul. | 530 | Rej. | Rejeição: Operação com tributação de ISSQN sem informar a Inscrição Municipal |
| U01-20 | 55/65 | Informado grupo de tributação do ISSQN (id:U01) sem informar nenhum grupo de ICMS (id:N01) Exceção: A critério da UF poderá ser autorizada a emissão de NF-e que só tenham itens sujeitos ao ISSQN. (NT 2010/010) | Facul. | 592 | Rej. | Rejeição: A NF-e deve ter pelo menos um item de produto sujeito ao ICMS. |
| U05-10 | 55/65 | Se informado Código Município do FG – ISSQN: – Código Município do FG – ISSQN inexistente (Tabela Municípios IBGE) Exceção: Aceitar ISSQN/cMunFG=”9999999” no caso de prestação de serviço no exterior (dest/cUF=”EX”). (NT 2013/005 v1.20) (NT 2015.002) | Obrig. | 287 | Rej. | Rejeição: Código Município do Fato Gerador de ISSQN inexistente [nItem:nnn] |
| U14-10 | 55/65 | Se informado Código Município de incidência do ISSQN: – Código Município ISSQN inexistente (Tabela Municípios IBGE) (NT 2015.002) | Obrig. | 389 | Rej. | Rejeição: Código Município ISSQN inexistente [nItem:nnn] |
| U15-10 | 55/65 | Se informado Código País onde o serviço foi prestado (tag:ISSQN/cPais) - Código País inexistente (Tabela do BACEN, vide tabela de apoio publicada no Portal da NF-e). | Obrig. | 739 | Rej. | Rejeição: Código de País do ISSQN Inexistente |

Observação: O Código do País informado na NF-e pode conter ou não zeros não significativos. (NT 2015.002)

### UA. Item / Devolução de Tributos

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| UA01-10 | 55 | Informado grupo de devolução de tributos (tag:impostoDevol): – NF-e não é de devolução de tributos (NT 2013/005 v 1.20) | Obrig. | 354 | Rej. | Rejeição: Informado grupo de devolução de tributos para NF-e que não tem finalidade de devolução de mercadoria |
| UA01-20 | 65 | Informado grupo de devolução de tributos (tag: impostoDevol): - NFC-e com grupo de devolução de tributos (NT 2015.002) | Obrig. | 390 | Rej. | Rejeição: Nota Fiscal com grupo de devolução de Tributos [nItem: nnn] <!-- p.120 --> |

### V. Item / Informação Adicional

Não há regras de validação para este grupo.

### W. Total da NF-e

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| W03-10 | 55/65 | Total da BC ICMS (id:W03) difere do somatório do valor dos itens (id:N15). | Facul. | 531 | Rej. | Rejeição: Total da BC ICMS difere do somatório dos itens |
| W03-20 | 55/65 | Valor total da base de cálculo tag “vBC” (id:W03) superior ao valor limite estabelecido pela SEFAZ por modelo de DF-e. | Facul. | 935 | Rej. | Rejeição: Valor total da Base de Cálculo superior ao valor limite estabelecido [Valor Limite: R$ XXX.XXX,XX] (valor definido pela UF) |

Observação: o valor total máximo da base de cálculo é de R$ 200.000,00 (Duzentos mil reais). (NT 2019.001 v1.10, v1.50)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| W04-10 | 55/65 | Total do ICMS (id:W04) difere do somatório do valor dos itens (id:N17). O Total não deve considerar o valor informado para os CST 40, 41, 50. (NT 2010/007) | Facul. | 532 | Rej. | Rejeição: Total do ICMS difere do somatório dos itens |
| W04-20 | 55/65 | Valor total do ICMS superior ao valor limite estabelecido pela SEFAZ (valor parametrizável por UF) | Facul. | 417 | Rej. | Rejeição: Total do ICMS superior ao valor limite estabelecido |
| W04a-10 | 55/65 | Total do ICMS desonerado (id:W04a) difere do somatório do valor dos itens (id:N28a). (NT 2016.002) | Facul. | 795 | Rej. | Rejeição: Total do ICMS desonerado difere do somatório dos itens |
| W04b-10 | 55/65 | Total do FCP (id: W04b) difere do somatório do valor dos itens (id:N17c). (NT 2016.002) | Obrig. | 861 | Rej. | Rejeição: Total do FCP difere do somatório dos itens |
| W04c-10 | 55 | Total do ICMS relativo Fundo de Combate à Pobreza (FCP) da UF de destino (tag:vFCPUFDest, id:W04c) difere do somatório do valor dos itens (id:NA13) (NT 2015.003) | Obrig. | 798 | Rej. | Rejeição: Valor total do ICMS relativo Fundo de Combate à Pobreza (FCP) da UF de destino difere do somatório do valor dos itens |
| W04e-10 | 55 | Total do ICMS Interestadual para a UF de destino (tag:vICMSUFDest, id:W04e) difere do somatório do valor dos itens (id:NA15). Nota: Considerar o valor Null como sendo zero. (NT 2015.003) | Obrig. | 799 | Rej. | Rejeição: Valor total do ICMS Interestadual da UF de destino difere do somatório dos itens |
| W04g-10 | 55 | Total do ICMS Interestadual para a UF do remetente (tag:vICMSUFRemet, id:W04g) difere do somatório do valor dos itens (id:NA17). Nota: Considerar o valor Null como sendo zero. (NT 2015.003) | Obrig. | 800 | Rej. | Rejeição: Valor total do ICMS Interestadual da UF do remetente difere do somatório dos itens |
| W05-10 | 55/65 | Total da BC ICMS-ST (id:W05) difere do somatório do valor dos itens (id:N21) | Facul. | 533 | Rej. | Rejeição: Total da BC ICMS-ST difere do somatório dos itens |
| W06-10 | 55/65 | Total do ICMS-ST (id:W06) difere do somatório do valor dos itens (id:N23) | Facul. | 534 | Rej. | Rejeição: Total do ICMS-ST difere do somatório dos itens |
| W06-20 | 55/65 | Valor total do ICMS-ST superior ao valor limite estabelecido pela SEFAZ (valor parametrizável por UF) | Facul. | 418 | Rej. | Rejeição: Total do ICMS ST superior ao valor limite estabelecido |
| W06a-10 | 55 | Total do FCP ST (id: W06a) difere do somatório do valor dos itens (id:N23d) (NT 2016.002) | Obrig. | 862 | Rej. | Rejeição: Total do FCP ST difere do somatório dos itens |
| W06b-10 | 55 | Total do FCP ST retido anteriormente (id: W06b) difere do somatório do valor dos itens (id:N27d) (NT 2016.002) | Obrig. | 859 | Rej. | Rejeição: Total do FCP retido anteriormente por Substituição Tributária difere do somatório dos itens |
| W07-10 | 55/65 | Total dos Produtos e Serviços (id:W07) difere do somatório do valor dos itens (id:I11) sujeitos ao ICMS. Considerar somente os valores dos itens com a TAG indTot (id:I17b) = 1 (NT 2011.004) | Facul. | 564 | Rej. | Rejeição: Total do Produto / Serviço difere do somatório dos itens <!-- p.121 --> |
| W08-10 | 55/65 | Total do Frete (id:W08) difere do somatório do valor dos itens (id:I15) | Facul. | 535 | Rej. | Rejeição: Total do Frete difere do somatório dos itens |
| W09-10 | 55/65 | Total do Seguro (id:W09) difere do somatório do valor dos itens (id:I16) | Facul. | 536 | Rej. | Rejeição: Total do Seguro difere do somatório dos itens |
| W10-10 | 55/65 | Total do Desconto (id:W10) difere do somatório do valor dos itens (id:I17) | Facul. | 537 | Rej. | Rejeição: Total do Desconto difere do somatório dos itens |
| W11-10 | 55 | Total do vII (id:W11) difere do somatório do valor dos itens (id:P04) (NT 2011/004) | Facul. | 601 | Rej. | Rejeição: Total do II difere do somatório dos itens |
| W12-10 | 55 | Total do IPI (id:W12) difere do somatório do valor dos itens (id:O14) | Facul. | 538 | Rej. | Rejeição: Total do IPI difere do somatório dos itens |
| W12a-10 | 55 | Total do IPI devolvido (id: W12a) difere do somatório do valor dos itens (id:UA04) ) (NT 2016.002) | Facul. | 863 | Rej. | Rejeição: Total do IPI devolvido difere do somatório dos itens |
| W13-10 | 55/65 | Total do vPIS (id:W13) difere do somatório do valor dos itens (id:Q09) de item sujeito ao ICMS (existe grupo ICMS). (NT 2011.004) | Facul. | 602 | Rej. | Rejeição: Total do PIS difere do somatório dos itens sujeitos ao ICMS |
| W14-10 | 55/65 | Total do vCOFINS (id:W14) difere do somatório do valor dos itens (id:S11) de item sujeito ao ICMS (existe grupo ICMS). (NT 2011.004) | Facul. | 603 | Rej. | Rejeição: Total da COFINS difere do somatório dos itens sujeitos ao ICMS |
| W15-10 | 55/65 | Total do vOutro (id:W15) difere do somatório do valor dos itens (id:I17a) (NT 2011/004) | Facul. | 604 | Rej. | Rejeição: Total do vOutro difere do somatório dos itens |
| W16-10 | 55/65 | -Total do vNF (id:W16) difere do somatório de: (+) vProd (id:W07) (-) vDesc (id:W10) (-) vICMSDeson (id:W04a) (+) vST (id:W06) (+) vFCPST (id:W06a) (+) vFrete (id:W08) (+) vSeg (id:W09) (+) vOutro (id:W15) (+) vII (id:W11) (+) vIPI (id:W12) (+) vIPIDevol (id: W12a) (+) vServ (id:W18) (*3) (NT 2011/005) | Facul. | 610 | Rej. | Rejeição: Total da NF difere do somatório dos Valores compõe o valor Total da NF. <!-- p.122 --> |

Exceção 1: Faturamento direto de veículos novos: Se informada operação de Faturamento Direto para veículos novos (tpOp = 2, id:J02): – Total do vNF (id:W16) difere do somatório de: (+) vProd (id:W07) (-) vDesc (id:W10) (-) vICMSDeson (id:W04a) (+) vFrete (id:W08) (+) vSeg (id:W09) (+) vOutro (id:W15) (+) vII (id:W11) (+) vIPI (id:W12) (+) vServ (id:W18) (*3) (NT 2011/005)

Exceção 2: Esta regra não se aplica nas operações de importação (CFOP inicia com “3”).

Exceção 3 (NT 2013/005 v 1.22): Esta regra de validação não deverá causar rejeição caso não tenha sido subtraído o valor do ICMS Desonerado (vICMSDeson) do valor total da NF-e. ) (NT 2016.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| W16-20 | 55 | Valor total da NF-e superior ao valor limite estabelecido pela SEFAZ (valor limite parametrizável por UF) (NT 2011/004) | Facul. | 628 | Rej. | Rejeição: Total da NF superior ao valor limite estabelecido pela SEFAZ [Limite] |
| W16-30 | 65 | Valor total da NFC-e é superior ao valor limite estabelecido pela SEFAZ (valor parametrizável por UF) | Obrig. | 780 | Rej. | Rejeição: Total da NFC-e superior ao valor limite estabelecido pela SEFAZ [Limite] |

Observação: O valor máximo default para a NFC-e é de R$200.000,00

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| W16-40 | 65 | NFC-e com valor total superior a R$ 10.000,00: – Código do Destinatário não informado (tag:dest/CNPJ, dest/CPF ou dest/idEstrang). (NT 2015.002) | Obrig. | 750 | Rej. | Rejeição: NFC-e com valor total superior ao permitido para destinatário não identificado (Código) [Limite] |
| W16-50 | 65 | NFC-e com valor total superior a R$ 10.000,00: – Nome do Destinatário não informado (tag:dest/xNome) | Facul. | 751 | Rej. | Rejeição: NFC-e com valor total superior ao permitido para destinatário não identificado (Nome) [Limite] |

Observação: Regra de Validação opcional, a critério da UF. (NT 2015.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| W16-60 | 65 | NFC-e com valor total superior a R$ 10.000,00: – Endereço do Destinatário não informado (tag:dest/enderDest) | Obrig. | 752 | Rej. | Rejeição: NFC-e com valor total superior ao permitido para destinatário não identificado (Endereço) [Limite] |

Observação: Regra de Validação opcional, a critério da UF. (NT 2015.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| W16a-10 | 55/65 | Total do valor aproximado dos tributos (id:W16a) difere do somatório dos itens (id:M02) (NT 2013/003) | Facul. | 685 | Rej. | Rejeição: Total do Valor Aproximado dos Tributos difere do somatório dos itens <!-- p.123 --> |

Observação: O campo “vTotTrib” é opcional para o Item e para o grupo de Totais. Considerar valor=0, se não informado.

### W01. Total da NF-e / ISSQN

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| W18-10 | 55/65 | Total vServ (id:W18) difere do somatório do valor dos itens do vProd (id:I11) de item sujeito ao ISSQN (NT 2011/004) | Facul. | 605 | Rej. | Rejeição: Total do vServ difere do somatório do vProd dos itens sujeitos ao ISSQN |
| W19-10 | 55/65 | Total vBC (id:W19) difere do somatório do valor dos itens (id:U02) de item sujeito ao ISSQN (NT 2011/004) | Facul. | 606 | Rej. | Rejeição: Total do vBC do ISS difere do somatório dos itens |
| W20-10 | 55/65 | Total vISS (id:W20) difere do somatório do valor dos itens (id:U04) de item sujeito ao ISSQN (NT 2011/004) | Facul. | 607 | Rej. | Rejeição: Total do ISS difere do somatório dos itens |
| W21-10 | 55/65 | Total vPIS (id:W21) difere do somatório do valor dos itens (id:Q09) de item sujeito ao ISSQN (NT 2011/004) | Facul. | 608 | Rej. | Rejeição: Total do PIS difere do somatório dos itens sujeitos ao ISSQN |
| W22-10 | 55/65 | Total vCOFINS (id:W22) difere do somatório do valor dos itens (id:S11) de item sujeito ao ISSQN (NT 2011/004) | Facul. | 609 | Rej. | Rejeição: Total da COFINS difere do somatório dos itens sujeitos ao ISSQN |
| W22b-10 | 55/65 | Total do valor da dedução (id:W22b) difere do somatório dos itens (id:U07) | Obrig. | 364 | Rej. | Rejeição: Total do valor da dedução do ISS difere do somatório dos itens |
| W22c-10 | 55/65 | Total de outras retenções (id:W22c) difere do somatório dos itens (id:U08) | Obrig. | 365 | Rej. | Rejeição: Total de outras retenções difere do somatório dos itens |
| W22d-10 | 55/65 | Total do desconto incondicionado ISS (id:W22d) difere do somatório dos itens (id:U09) | Obrig. | 366 | Rej. | Rejeição: Total do desconto incondicionado ISS difere do somatório dos itens |
| W22e-10 | 55/65 | Total do desconto condicionado ISS (id:W22e) difere do somatório dos itens (id:U10) | Obrig. | 367 | Rej. | Rejeição: Total do desconto condicionado ISS difere do somatório dos itens |
| W22f-10 | 55/65 | Total de ISS retido (id:W22f) difere do somatório dos itens (id:U11) | Obrig. | 368 | Rej. | Rejeição: Total de ISS retido difere do somatório dos itens |

### W02. Total da NF-e / Retenção de Tributos

Não há regras de validação para este grupo.

### X. Transporte da NF-e

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| X02-10 | 65 | NFC-e com Frete e não é entrega a domicílio (tag:modFrete<>9 e indPres<>4) | Obrig. | 753 | Rej. | Rejeição: NFC-e com Frete |
| X02-20 | 55 | Se operação interestadual (idDest=2), não informar os Grupos Veiculo Transporte (id:X18; veicTransp) e Grupo Reboque (id: X22). Obs1: a critério de cada UF, a regra de validação acima também pode ser aplicada nas operações internas (idDest=1) se cMun (id:C10) do Emitente <> cMun (id: E10) do Destinatário Obs.2: Esta regra nãose aplica a emissão da NFA-e. ) (NT 2016.002) | Obrig. | 868 | Rej. | Rejeição: Grupos Veiculo Transporte e Reboque não devem ser informados <!-- p.124 --> |
| X03-10 | 65 | NFC-e com dados do Transportador e não é entrega a domicílio (tag:transporta e indPres<>4) | Obrig. | 754 | Rej. | Rejeição: NFC-e com dados do Transportador |
| X03-20 | 65 | NFC-e sem dados do Transportador (tag:transporta) e é entrega a domicílio (indPres=4) | Obrig. | 786 | Rej. | Rejeição: NFC-e de entrega a domicílio sem dados do Transportador |
| X04-10 | 55 | Obrigatória a informação de identificação do Transportador para os CFOP de venda de combustível (tag: CNPJ/CPF, id:X04/X05) com esta Obrig.atoriedade na Tabela CFOP, indComb=2. | Facul. | 362 | Rej. | Rejeição: Venda de combustível sem informação do Transportador |

Exceção 1: A regra de validação acima se aplica somente para as NF-e com Finalidade de Emissão normal (tag:finNFe=1);

Exceção 2: A regra de validação acima se aplica somente para os Códigos de Produto ANP relacionados na seção 8.11 do MOC – Visão Geral,

Exceção 3: A regra de validação acima não se aplica se for informada a UF do Transportador no exterior (tag:transporta/UF=”EX”, id:X10);

Observação: Nos casos em que não houver circulação física de mercadoria ou em que o transportador seja estrangeiro, os dados do transportador poderão ser preenchidos com o CNPJ do próprio emitente do documento fiscal. (NT 2015.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| X04-20 | 55/65 | Se informado CNPJ do Transportador: - CNPJ com zeros ou dígito de controle inválido | Obrig. | 542 | Rej. | Rejeição: CNPJ do Transportador inválido |
| X05-10 | 55/65 | Se informado CPF do transportador: – CPF com zeros, nulo, 111..., 222..., ..., ou DV inválido (NT 2012/003) | Obrig. | 543 | Rej. | Rejeição: CPF do Transportador inválido |
| X07-10 | 55/65 | Se informada a IE do Transportador: – UF do Transportador (id:X10) não informada | Obrig. | 559 | Rej. | Rejeição: UF do Transportador não informada |
| X07-20 | 55/65 | IE do Transportador informada e diferente de “ISENTO”: – Validar IE, conforme a UF do transportador informada | Obrig. | 544 | Rej. | Rejeição: IE do Transportador inválida |
| X11-10 | 65 | NFC-e com dados de Retenção do ICMS no Transporte (tag:retTransp) | Obrig. | 755 | Rej. | Rejeição: NFC-e com dados de Retenção do ICMS no Transporte |
| X16-10 | 55 | CFOP de Transporte inexistente ou não pode ser usado no grupo de retenção do ICMS de transporte, conforme tabela de apoio publicada no Portal da NF-e (Tabela CFOP, indTransp=0) (NT 2015.002) | Obrig. | 722 | Rej. | Rejeição: CFOP de Transporte Inexistente |
| X17-10 | 55 | Se informado Código Município do FG – Transporte (id:X17): – Código do Município do FG – Transporte inexistente (Tabela Municípios IBGE) (NT 2015.002) | Obrig. | 288 | Rej. | Rejeição: Código Município do Fato Gerador do Transporte inexistente |
| X18-10 | 65 | NFC-e com dados do veículo de Transporte (tag:veicTransp) | Obrig. | 756 | Rej. | Rejeição: NFC-e com dados do veículo de Transporte |
| X22-10 | 65 | NFC-e com dados de Reboque do veículo de Transporte (tag:reboque) | Obrig. | 757 | Rej. | Rejeição: NFC-e com dados de Reboque do veículo de Transporte |
| X25a-10 | 65 | NFC-e com dados do Vagão de Transporte (tag:vagao) | Obrig. | 758 | Rej. | Rejeição: NFC-e com dados do Vagão de Transporte |
| X25b-10 | 65 | NFC-e com dados da Balsa de Transporte (tag:balsa) | Obrig. | 759 | Rej. | Rejeição: NFC-e com dados da Balsa de Transporte |

<!-- p.125 -->

### Y. Dados de Cobrança

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| Y01-10 | 65 | NFC-e com dados de cobrança (Fatura, Duplicata) (tag:cobr) | Obrig. | 760 | Rej. | Rejeição: NFC-e com dados de cobrança (Fatura, Duplicata) |
| Y01-20 | 55 | Se informado o Grupo Cobrança (Y01, tag: cobr) os campos nFat, vOrig e vLiq devem ser informados. | Obrig. | 905 | Rej. | Rejeição: Campos do grupo Fatura não informados |

Observação: Implementação futura em ambiente de produção a partir de 03/09/2018 ) (NT 2016.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| Y05-10 | 55 | Valor do Desconto (vDesc, id:Y05) maior que o Valor Original da Fatura (vOrig, id:Y04) Obs.: Considerar como zero os valores opcionais não informados. ) (NT 2016.002) | Obrig. | 901 | Rej. | Rejeição: Valor do Desconto da Fatura maior que Valor Original da Fatura |
| Y06-10 | 55 | Se informado Valor Líquido da Fatura (vLiq, id:Y06) e o Valor Original da Fatura (vOrig; id:Y04): - Valor Líquido da Fatura (vLiq, id:Y06) difere do Valor Original da Fatura (vOrig; id:Y04) – Valor do Desconto (vDesc, id:Y05) Obs.: Considerar como zero os valores opcionais não informados ) (NT 2016.002) | Obrig. | 902 | Rej. | Rejeição: Valor Liquido da Fatura difere do Valor Original menos o Valor do Desconto |
| Y08-10 | 55 | Se informado o Grupo Parcelas de cobrança (tag:dup, Id:Y07), Número da parcela (nDup, id:Y08) não informado ou inválido. Obs1: O número de parcelas deve ser informado com 3 algarismos, sequenciais e consecutivos. Ex.: “001”,”002”,”003”,...(NT 2016.002) | Obrig. | 852 | Rej. | Rejeição: Número da parcela inválido ou não informado [nOcor: 999] |
| Y09-20 | 55 | Se informado o grupo de Parcelas de cobrança (tag:dup, Id:Y07) e Data de vencimento (dVenc, id:Y09) não informada ou menor que a Data de Emissão (id:B09) (NT 2016.002) | Obrig. | 900 | Rej. | Rejeição: Data de vencimento da parcela não informada ou menor que Data de Emissão [nOcor: 999] |
| Y09-30 | 55 | Se informado o grupo de Parcelas de cobrança (tag:dup, Id:Y07) e Data de vencimento (dVenc, id:Y09) não informada ou menor que a Data de vencimento da parcela anterior (dVenc, id:Y09) ) (NT 2016.002) | Obrig. | 850 | Rej. | Rejeição: Data de vencimento da parcela não informada ou menor que a Data de vencimento da parcela anterior [nOcor: 999] |
| Y10-10 | 55 | Se informado o grupo de Parcelas de cobrança (tag:dup, Id:Y07) e a soma do valor das parcelas (vDup, id: Y10) difere do Valor Líquido da Fatura (vLiq, id:Y06). (NT 2016.002) | Obrig. | 851 | Rej. | Rejeição: Soma do valor das parcelas difere do Valor Líquido da Fatura |

### YA. Formas de Pagamento

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| YA02-04 | 55 | Se campo finNFe = 3 ou 4 e campo Meio de Pagamento (tag: tPag, id:YA02) <> 90 (Sem Pagamento). ) (NT 2016.002) | Obrig. | 871 | Rej. | Rejeição: O campo Meio de Pagamento deve ser preenchido com a opção Sem Pagamento |
| YA02-10 | 65 | Se informado Campo Forma de Pagamento (tag:tPag, id:YA02) =14 ) (NT 2016.002) | Obrig. | 857 | Rej. | Rejeição: Informado Duplicata Mercantil como Forma de Pagamento |
| YA02-40 | 65 | Informado tpag (id=YA02)= 90 “Sem Pagamento” ) (NT 2016.002) | Obrig. | 899 | Rej. | Rejeição: Informado incorretamente o campo meio de pagamento |
| YA02-50 | 65 | Informado meio de pagamento tPag= 99 “Outros” | Obrig. | 436 | Rej. | Rejeição: Informado 99-Outros como meio de pagamento <!-- p.126 --> |

Observação: Regra de validação valida a partir de 01/02/2021 para homologação e 01/09/2021 para produção (Incluída na NT 2020.006)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| YA03-10 | 65 | Somatório do valor dos pagamentos (id:YA03, tag:vPag) menor que o total da nota (id:W16, tag: vNF) | Facul. | 865 | Rej. | Rejeição: Total dos pagamentos menor que o total da nota |

Exceção 1: Esta regra não se aplica para nota fiscal de Ajuste, campo finNFe=3 (id:B25) e para nota fiscal de Devolução finNFe=4 (id:B25)

Exceção 2: Esta regra não se aplica quando o campo Meio de Pagamento (id:YA02, tag:tPag) for igual a 90 (sem pagamento). ) (NT 2016.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| YA03-20 | 55/65 | Somatório do valor dos pagamentos (id:YA03, tag:vPag) maior que o total da nota (id:W16, tag: vNF) e sem informação no campo vTroco (id:YA09) ) (NT 2016.002) | Facul. | 866 | Rej. | Rejeição: Ausência de troco quando o valor dos pagamentos informados for maior que o total da nota |
| YA03-30 | 55/65 | Informado o campo Meio de Pagamento igual a sem pagamentoo (tag:tPag=90, id:YA02) e informado campo Valor do Pagamento diferente de zero (tag:vPag<>0, id:YA03). ) (NT 2016.002) | Facul. | 904 | Rej. | Rejeição: Informado indevidamente campo valor de pagamento |
| YA04-10 | 65 | Se informado o grupo de pagamentos (tag:pag): - Se o Pagamento for por cartão (tag:tPag=03, 04), deve ser informado o grupo de cartões (tag:card) | Facul. | 391 | Rej. | Rejeição: Não informados os dados do cartão de crédito / débito nas Formas de Pagamento da Nota Fiscal |

Observação: Implementação por padrão, opcional a critério da UF. Exceção: A regra de validação não se aplica, em produção, para Nota Fiscal com Data de Emissão anterior a 01/04/2016. (NT 2015.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| YA04a-20 | 55/65 | Se informado o tipo de integração como pagamento não integrado com o sistema de automação da empresa (tag: tpIntegra=2) para UF que não aceita esse tipo de integração. | Facul. | 737 | Rej. | Rejeição: Pagamento com cartão de crédito em sistema de automação não integrado |

Observação 1: Regra de Validação opcional a critério da UF. ) (NT 2016.002 / NT 2015.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| YA05-10 | 55/65 | Se informado o grupo de Cartão de Crédito / Débito (tag:card): - Se o pagamento com cartão for integrado ao sistema de automação da empresa (tag:tpIntegra=1) devem ser informado os campos de CNPJ da Credenciadora e o código de autenticação da operação (tag:card/CNPJ e card/cAut) | Facul. | 392 | Rej. | Rejeição: Não informados os dados da operação de pagamento por cartão de crédito / débito |

Observação: Implementação por padrão, opcional a critério da UF. Exceção: A regra de validação não se aplica, em produção, para Nota Fiscal com Data de Emissão anterior a 01/04/2016. ) (NT 2016.002/ NT 2015.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| YA05-20 | 55/65 | Se informado o CNPJ da instituição de pagamento - Verificar CNPJ com zeros, nulo ou DV inválido (Incluída na NT 2020.006 | Obrig. | 437 | Rej. | Rejeição: CNPJ da instituição de pagamento inválido) |
| YA09-10 | 55/65 | Se informado campo Valor do troco (id:YA09, tag:vTroco) com valor difere de: (+) vPag (id:YA03) (-) vNF (id:W16) ) (NT 2016.002) | Obrig. | 869 | Rej. | Rejeição: Valor do troco incorreto |

<!-- p.127 -->

### YB. Informações do Intermediador da Transação

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| YB01-10 | 55 | Se informado Indicador do Intermediador IGUAL “1=Operação em site ou plataforma de terceiros (intermediadores/marketplace)” (indIntermed=1) - Obrigatório o preenchimento das Informações do Intermediador da Transação (tag: infIntermed) (Incluída na NT 2020.006 | Obrig. | 438 | Rej. | Rejeição: Obrigatória as informações do intermediador da transação para operação por site de terceiros |
| YB01-20 | 55 | Se informado Indicador de presença do comprador no estabelecimento comercial no momento da operação DIFERENTE de “1=Operação em site ou plataforma de terceiros (intermediadores/marketplace)” (indIntermed<>1) - Não é permitido o preenchimento das Informações do Intermediador da Transação (tag: infIntermed) (Incluída na NT 2020.006 | Obrig. | 439 | Rej. | Rejeição: Informações do intermediador da transação para operação por site de terceiros preenchido indevidamente |
| YB02-10 | 55 | Se informado o CNPJ do intermediador da transação - Verificar CNPJ com zeros, nulo ou DV inválido (Incluída na NT 2020.006 | Obrig. | 440 | Rej. | Rejeição: CNPJ do intermediador da transação inválido |

### SZ. Informação Adicional da NF-e

Não há regras de validação para este grupo.

### ZA. Comércio Exterior

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| ZA01-10 | 55 | Não informado o local embarque ou de transposição de fronteira (tag:exporta) na operação de exportação (tpNF=1 e idDest=3) | Obrig. | 355 | Rej. | Rejeição: Informar o local de saída do Pais no caso da exportação |
| ZA01-20 | 55 | Informado o local embarque ou de transposição de fronteira (tag:exporta) em operação que não é de exportação (tpNF=0 ou idDest<>3) | Obrig. | 356 | Rej. | Rejeição: Informar o local de saída do Pais somente no caso da exportação |
| ZA01-30 | 65 | Informado grupo de comércio exterior (tag: exporta): - NFC-e com grupo de exportação (NT 2015.002) | Obrig. | 814 | Rej. | Rejeição: Nota Fiscal com grupo de comércio exterior |

### ZB. Informação de Compra

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| ZB01-10 | 65 | NFC-e com dados de compras (Empenho, Pedido, Contrato) (tag:compra) | Obrig. | 762 | Rej. | Rejeição: NFC-e com dados de compras (Empenho, Pedido, Contrato) |
| ZB02-10 | 55 | NF-e com desoneração de ICMS motivada por venda a Órgão Públlico (tag:ICMSxx/motDesICMS=8; id:N28), sem informar Nota de Empenho. | Facul. | 359 | Rej. | Rejeição: NF-e de venda a Órgão Público sem informar a Nota de Empenho |

Observação: Implementação opcional, a critério da UF.

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| ZB02-20 | 55 | NF-e com Nota de Empenho inválida para a UF. | Facul. | 360 | Rej. | Rejeição: NF-e com Nota de Empenho inválida para a UF. |

Observação: Implementação opcional, a critério da UF.

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| ZB02-30 | 55 | NF-e com Nota de Empenho inexistente para a UF. | Facul. | 361 | Rej. | Rejeição: NF-e com Nota de Empenho inexistente na UF. |

Observação: Implementação opcional, a critério da UF.

<!-- p.128 -->

### ZC. Informações do Registro de Aquisição de Cana

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| ZC01-10 | 65 | NFC-e com dados de aquisição de Cana (tag:cana) | Obrig. | 763 | Rej. | Rejeição: NFC-e com dados de aquisição de Cana |

### ZD. Informações do Responsável Técnico

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| ZD01-10 | 55/65 | Não informado o grupo de informações do responsável técnico | Facul. | 972 | Rej. | Rejeição: Obrigatória as informações do responsável técnico |

Observação: Implementação futura, exceto as UF de AM, MS, PE, PR, SC e TO, nas quais estas regras já estão em vigor em ambiente de teste e entrarão em vigor em ambiente de produção no dia 03 de junho de 2019 (NT 2018.005 v 1.30)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| ZD02-10 | 55/65 | Informado CNPJ do responsável técnico inválido – CNPJ com zeros, nulo ou DV inválido | Facul. | 973 | Rej. | Rejeição: CNPJ do responsável técnico inválido |

Observação: Implementação futura, exceto as UF de AM, MS, PE, PR, SC e TO, nas quais estas regras já estão em vigor em ambiente de teste e entrarão em vigor em ambiente de produção no dia 03 de junho de 2019 (NT 2018.005 v 1.30)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| ZD07-10 | 55/65 | Obrigatória a informação do identificador do CSRT (tag: idCSRT) e Hash do CSRT (tag: hashCSRT) | Facul. | 975 | Rej. | Rejeição: Obrigatória a informação do identificador do CSRT e do Hash do CSRT |

Observação: Implementação futura, todas as UFs (NT 2018.005 v1.30)

### ZX. Informações Suplementares da Nota Fiscal

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| ZX01-10 | 55 | Informado o grupo de parâmetros suplementares para a NF-e (Modelo 55) (NT 2015.002) | Obrig. | 393 | Rej. | Rejeição: NF-e com o grupo de Informações Suplementares |
| ZX02-10 | 65 | Não informado o campo de QR-Code para a NFC-e. Exceção: A regra de validação não se aplica, em produção, para Nota Fiscal com Data de Emissão anterior a 01/04/2016. Não sendo informado o QR- Code não se aplicam as demais validações relacionadas com este campo. (NT 2015.002) | Obrig. | 394 | Rej. | Rejeição: Nota Fiscal sem a informação do QR-Code |
| ZX02-15 | 65 | Se QR Code versão “100” e DtEmiss > 30/09/2018 Versão informada no QR-Code (“100”) não é mais válida para a data de emissão ) (NT 2016.002) | Obrig. | 903 | Rej. | Rejeição Versão informada no QR-Code (“100”) não é mais válida para a data de emissão |
| ZX02-20 | 65 | Endereço do site da UF para a Consulta via QR-Code difere do previsto. Nota: O uso diferenciado de maiúsculas ou minúsculas não deve ser considerado na validação. | Obrig. | 395 | Rej. | Rejeição: Endereço do site da UF da Consulta via QR-Code diverge do previsto <!-- p.129 --> |

Observação 1: Regra de Validação opcional até 01/11/2016, a critério da UF.

Observação 2: Para consultar as URLs por UF utilizadas no QR Code, acesse: http://nfce.encat.org/desenvolvedor/qrcode/ (NT 2015.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| ZX02-22 | 65 | Se QR Code versão “100” e QR-Code com sequência de escape para o e- comercial “&” (qrCode like “%&amp;%”) Nota: Deve-se usar o CDATA. | Obrig. | 813 | Rej. | Rejeição: QR-Code com sequência de escape para o e-comercial. Usar CDATA |

Observação: A regra de validação não se aplica, em produção, para Nota Fiscal com data de emissão anterior a 03/04/2017. ) (NT 2016.002 / NT 2015.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| ZX02-24 | 65 | Se QR Code versão “100” e Parâmetro Chave de Acesso não informado no QR- Code. Nota: O Schema XML faz esta verificação. ) (NT 2016.002/NT 2015.002) | Obrig. | 396 | Rej. | Rejeição: Parâmetro do QR-Code inexistente (chAcesso) |
| ZX02-28 | 65 | Se QR Code versão “100” e Parâmetro Chave de Acesso no QR-Code diverge da Chave de Acesso da Nota Fiscal ) (NT 2016.002/NT 2015.002) | Obrig. | 397 | Rej. | Rejeição: Parâmetro do QR-Code divergente da Nota Fiscal (chAcesso) |
| ZX02-32 | 65 | Se QR Code versão “100” e Parâmetro Versão não informado noQR-Code. Nota: O Schema XML faz esta verificação. ) (NT 2016.002 /NT 2015.002) | Obrig. | 396 | Rej. | Rejeição: Parâmetro do QR-Code inexistente (nVersao) |
| ZX02-40 | 65 | Se QR Code versão “100” e Parâmetro Tipo de Ambiente não informado no QR-Code. Nota: O Schema XML faz esta verificação. ) (NT 2016.002 / NT 2015.002) | Obrig. | 396 | Rej. | Rejeição: Parâmetro do QR-Code inexistente (tpAmp) |
| ZX02-44 | 65 | Se QR Code versão “100” e Parâmetro Tipo de Ambiente doQR-Code diverge do Tipo de Ambiente da Nota Fiscal (tag:tpAmb, id:B24) ) (NT 2016.002 / NT 2015.002) | Obrig. | 397 | Rej. | Rejeição: Parâmetro do QR-Code divergente da Nota Fiscal (tpAmb) |
| ZX02-48 | 65 | Se QR Code versão “100” e Parâmetro Código de Identificação do Destinatário não informado no QR-Code, para Nota Fiscal com identificação do destinatário (existe tag:dest, id:E01). ) (NT 2016.002 / NT 2015.002) | Obrig. | 396 | Rej. | Rejeição: Parâmetro do QR-Code inexistente (cDest) |
| ZX02-52 | 65 | Se QR Code versão “100” e Parâmetro Código de Identificação do Destinatário no QR-Code para Nota Fiscal sem identificação do destinatário (não existe tag:dest, id:E01) ) (NT 2016.002 / NT 2015.002) | Obrig. | 399 | Rej. | Rejeição: Parâmetro de Identificação do destinatário no QR-Code para Nota Fiscal sem identificação do destinatário |
| ZX02-56 | 65 | Se QR Code versão “100” e Parâmetro Código de Identificação do Destinatário no QR-Code diverge do destinatário da Nota Fiscal (tag:CNPJ - id:E02, ou CPF - id:E03 ou idEstrangeiro - id:E03a) ) (NT 2016.002 / NT 2015.002) | Obrig. | 397 | Rej. | Rejeição: Parâmetro do QR-Code divergente da Nota Fiscal (cDest) |
| ZX02-60 | 65 | Se QR Code versão “100” e Parâmetro Data de Emissão não informado no QR- Code. Nota: O Schema XML faz esta verificação. (NT 2016.002 / NT 2015.002) | Obrig. | 396 | Rej. | Rejeição: Parâmetro do QR-Code inexistente (dhEmi) |
| ZX02-64 | 65 | Se QR Code versão “100” e Parâmetro Data de Emissão no QR-Code não está no formato hexadecimal (Caracteres: “0-9”, “a-f”, “A-F”). Nota: O Schema XML faz esta verificação. ) (NT 2016.002/ NT 2015.002) | Obrig. | 400 | Rej. | Rejeição: Parâmetro do QR-Code não está no formato hexadecimal (dhEmi) |
| ZX02-68 | 65 | Se QR Code versão “100” e Parâmetro Data de Emissão no QR-Code diverge da Data de Emissão da Nota Fiscal (tag:dhEmi, id:B09) ) (NT 2016.002/ NT 2015.002) | Obrig. | 397 | Rej. | Rejeição: Parâmetro do QR-Code divergente da Nota Fiscal (dhEmi) |
| ZX02-72 | 65 | Se QR Code versão “100” e Parâmetro Valor da Nota Fiscal não informado no QR-Code. Nota: O Schema XML faz esta verificação. ) (NT 2016.002/ NT 2015.002) | Obrig. | 396 | Rej | Rejeição: Parâmetro do QR-Code inexistente (vNF) <!-- p.130 --> |
| ZX02-76 | 65 | Se QR Code versão “100” e Parâmetro Valor da Nota Fiscal no QR-Code diverge do Valor Total da Nota Fiscal (tag:vNF, id:W16) ) (NT 2016.002/ NT 2015.002) | Obrig. | 397 | Rej. | Rejeição: Parâmetro do QR-Code divergente da Nota Fiscal (vNF) |
| ZX02-80 | 65 | Se QR Code versão “100” e Parâmetro Valor do ICMS não informado no QR- Code. Nota: O Schema XML faz esta verificação. ) (NT 2016.002/ NT 2015.002) | Obrig. | 396 | Rej. | Rejeição: Parâmetro do QR-Code inexistente (vICMS) |
| ZX02-84 | 65 | Se QR Code versão “100” e Parâmetro Valor do ICMS no QR-Code diverge do Valor Total do ICMS da Nota Fiscal (tag:vICMS, id:W04) (NT 2016.002/ NT 2015.002) | Obrig. | 397 | Rej. | Rejeição: Parâmetro do QR-Code divergente da Nota Fiscal (vICMS) |
| ZX02-88 | 65 | Se QR Code versão “100” e Parâmetro Digest Value não informado no QR- Code. Nota: O Schema XML faz esta verificação. ) (NT 2016.002/ NT 2015.002) | Obrig. | 396 | Rej. | Rejeição: Parâmetro do QR-Code inexistente (digVal) |
| ZX02-92 | 65 | Se QR Code versão “100” e Parâmetro Digest Value no QR-Code não está no formato hexadecimal (Caracteres: “0-9”, “a-f”,“A-F”). Nota: O Schema XML faz esta verificação. ) (NT 2016.002/ NT 2015.002) | Obrig. | 400 | Rej. | Rejeição: Parâmetro do QR-Code não está no formato hexadecimal (digVal) |
| ZX02-96 | 65 | Se QR Code versão “100” e Parâmetro Digest Value no QR-Code diverge do Digest Value da Nota Fiscal (tag grupo: Signature, id:ZZ01) ) (NT 2016.002/ NT 2015.002) | Obrig. | 397 | Rej. | Rejeição: Parâmetro do QR-Code divergente da Nota Fiscal (digVal) |
| ZX02-100 | 65 | Se QR Code versão “100” e Parâmetro Código Identificador do CSC não informado no QR-Code. Nota: O Schema XML faz esta verificação. | Obrig. | 396 | Rej. | Rejeição: Parâmetro do QR-Code inexistente (cIdToken) |

Observação: Mais informações sobre o CSC de cada UF estão disponíveis em http://nfce.encat.org/empresario/csc/ ) (NT 2016.002/ NT 2015.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| ZX02-104 | 65 | Se QR Code versão “100” e Parâmetro Código Identificador do CSC no QR- Code não cadastrado na SEFAZ. | Obrig. | 462 | Rej. | Rejeição: Código Identificador do CSC no QR-Code não cadastrado na SEFAZ |

Observação 1: Regra de Validação opcional até 01/11/2016, a critério da UF.

Observação 2: Mais informações sobre o CSC de cada UF estão disponíveis em http://nfce.encat.org/empresario/csc/ ) (NT 2016.002 / NT 2015.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| ZX02-108 | 65 | Se QR Code versão “100” e Parâmetro Código Identificador do CSC no QR- Code foi revogado pela empresa anteriormente a Data de Emissão. | Obrig. | 463 | Rej. | Rejeição: Código Identificador do CSC no QR-Code foi revogado pela empresa |

Observação: Regra de Validação opcional até 01/11/2016, a critério da UF. ) (NT 2016.002/ NT 2015.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| ZX02-112 | 65 | Se QR Code versão “100” e Parâmetro Hashnão informado no QR-Code. Nota: O Schema XML faz esta verificação. ) (NT 2016.002/ NT 2015.002) | Obrig. | 396 | Rej. | Rejeição: Parâmetro do QR-Code inexistente (cHashQRCode) |
| ZX02-116 | 65 | Se QR Code versão “100” e Parâmetro Hash no QR-Code não está no formato hexadecimal (Caracteres: “0-9”, “a-f”,“A-F”). Nota: O Schema XML faz esta verificação. ) (NT 2016.002/ NT 2015.002) | Obrig. | 400 | Rej. | Rejeição: Parâmetro do QR-Code não está no formato hexadecimal (cHashQRCode) |
| ZX02-120 | 65 | Se QR Code versão “100” e Parâmetro Hash no QR-Code diverge do calculado. | Obrig. | 464 | Rej. | Rejeição: Código de Hash no QR-Code difere do calculado |

Observação: Regra de Validação opcional até 01/11/2016, a critério da UF. ) (NT 2016.002/ NT 2015.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| ZX02-224 | 65 | Se QR Code versão “2” e Parâmetro Chave de Acesso não informado no QR- Code. Nota: O Schema XML faz esta verificação. | Obrig. | 396 | Rej. | Rejeição: Parâmetro do QR-Code inexistente: [Param: xxx)] <!-- p.131 --> |

Observação: Para NFC-e ONLINE ou OFFLINE é o 1º parâmetro da URL do QR Code ) (NT 2016.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| ZX02-228 | 65 | Se QR Code versão “2” e Parâmetro Chave de Acesso no QR-Code diverge da Chave de Acesso da Nota Fiscal | Obrig. | 397 | Rej. | Rejeição: Parâmetro do QR-Code divergente da Nota Fiscal [Param: xxx)]. |

Observação: Para NFC-e ONLINE ou OFFLINE é o 1º parâmetro da URL do QR Code ) (NT 2016.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| ZX02-232 | 65 | Se QR Code versão “2” e Parâmetro Versão não informado no QR-Code. Nota: O Schema XML faz esta verificação | Obrig. | 396 | Rej. | Rejeição: Parâmetro do QR-Code inexistente: [Param: xxx)] |

Observação: Para NFC-e ONLINE ou OFFLINE é o 2º parâmetro da URL do QR Code ) (NT 2016.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| ZX02-236 | 65 | Se QR Code versão “2” e Parâmetro Versão informada no QR-Code diverge do previsto (“2”) | Obrig. | 398 | Rej. | Rejeição: Parâmetro Versão informada no QR-Code diverge do previsto (“2”) |

Observação: Para NFC-e ONLINE ou OFFLINE é o 2º parâmetro da URL do QR Code ) (NT 2016.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| ZX02-240 | 65 | Se QR Code versão “2” e Parâmetro Tipo de Ambiente não informado no QR- Code. Nota: O Schema XML faz esta verificação | Obrig. | 396 | Rej. | Rejeição: Parâmetro do QR-Code inexistente: [Param: xxx)] |

Observação: Para NFC-e ONLINE ou OFFLINE é o 3º parâmetro da URL do QR Code ) (NT 2016.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| ZX02-244 | 65 | Se QR Code versão “2” e Parâmetro Tipo de Ambiente do QR-Code diverge do Tipo de Ambiente da Nota Fiscal (tag:tpAmb, id:B24) | Obrig. | 397 | Rej. | Rejeição: Parâmetro do QR-Code divergente da Nota Fiscal: [Param: xxx)] |

Observação: Para NFC-e ONLINE ou OFFLINE é o 3º parâmetro da URL do QR Code ) (NT 2016.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| ZX02-260 | 65 | Se QR Code versão “2” e NFC-e de contingência (tpEmis=9): - Parâmetro Dia da Data de Emissão não informado no QR-Code. Nota: O Schema XML faz esta verificação | Obrig. | 396 | Rej. | Rejeição: Parâmetro do QR-Code inexistente: [Param: xxx) |

Observação 1: Para NFC-e ONLINE esse parâmetro não existe. Observação 2: Para a NFC-e OFFLINE é o 4º parâmetro da URL do QR Code ) (NT 2016.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| ZX02-268 | 65 | Se QR Code versão “2” e NFC-e de contingência (tpEmis=9): Parâmetro Dia da Data de Emissão no QR-Code diverge do Dia Data de Emissão da Nota Fiscal (tag:dhEmi, id:B09) | Obrig. | 397 | Rej. | Rejeição: Parâmetro do QR-Code divergente da Nota Fiscal: [Param: xxx)] |

Observação 1: Para NFC-e ONLINE esse parâmetro não existe. Observação 2: Para a NFC-e OFFLINE é o 4º parâmetro da URL do QR Code ) (NT 2016.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| ZX02-272 | 65 | Se QR Code versão “2” e NFC-e de contingência (tpEmis=9): Parâmetro Valor da Nota Fiscal não informado no QR-Code. Nota: O Schema XML faz esta verificação | Obrig. | 396 | Rej. | Rejeição: Parâmetro do QR-Code inexistente: [Param: xxx) |

Observação 1: Para NFC-e ONLINE esse parâmetro não existe. Observação 2: Para a NFC-e OFFLINE é o 5º parâmetro da URL do QR Code ) (NT 2016.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| ZX02-276 | 65 | Se QR Code versão “2” e NFC-e de contingência (tpEmis=9): Parâmetro Valor da Nota Fiscal no QR-Code diverge do Valor Total da Nota Fiscal (tag:vNF, id:W16) | Obrig. | 397 | Rej. | Rejeição: Parâmetro do QR-Code divergente da Nota Fiscal: [Param: xxx)] <!-- p.132 --> |

Observação 1: Para NFC-e ONLINE esse parâmetro não existe. Observação 2: Para a NFC-e OFFLINE é o 5º parâmetro da URL do QR Code ) (NT 2016.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| ZX02-288 | 65 | Se QR Code versão “2” e NFC-e de contingência (tpEmis=9): Parâmetro Digest Value não informado no QR-Code Nota: O Schema XML faz esta verificação | Obrig. | 396 | Rej. | Rejeição: Parâmetro do QR-Code inexistente: [Param: xxx) |

Observação 1: Para NFC-e ONLINE esse parâmetro não existe.

Observação 2: Para a NFC-e OFFLINE é o 6º parâmetro da URL do QR Code ) (NT 2016.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| ZX02-292 | 65 | Se QR Code versão “2” e NFC-e de contingência (tpEmis=9): Parâmetro Digest Value no QR-Code não está no formato hexadecimal (Caracteres: “0-9”, “a- f”,“A-F”). Nota: O Schema XML faz esta verificação | Obrig. | 400 | Rej. | Rejeição: Parâmetro Digest Value no QR-Code não está no formato hexadecimal (Caracteres: “0-9”, “a-f”,“A-F”). |

Observação 1: Para NFC-e ONLINE esse parâmetro não existe.

Observação 2: Para a NFC-e OFFLINE é o 6º parâmetro da URL do QR Code ) (NT 2016.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| ZX02-296 | 65 | Se QR Code versão “2” e NFC-e de contingência (tpEmis=9): Parâmetro Digest Value no QR-Code diverge do Digest Value da Nota Fiscal (tag grupo: Signature, id:ZZ01) | Obrig. | 397 | Rej. | Rejeição: Parâmetro do QR-Code divergente da Nota Fiscal: [Param: xxx)] |

Observação 1: Para NFC-e ONLINE esse parâmetro não existe.

Observação 2: Para a NFC-e OFFLINE é o 6º parâmetro da URL do QR Code (NT 2016.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| ZX02-300 | 65 | Parâmetro Código Identificador do CSC não informado no QR-Code. | Obrig. | 396 | Rej. | Rejeição: Parâmetro do QR-Code inexistente: [Param: xxx) |

Observação: Mais informações sobre o CSC de cada UF estão disponíveis em http://nfce.encat.org/empresario/csc/ Nota: O Schema XML faz esta verificação

Observação 1: Para NFC-e ONLINE é o 4º parâmetro da URL do QR Code.

Observação 2: Para a NFC-e OFFLINE é o 7º parâmetro da URL do QR Code (NT 2016.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| ZX02-304 | 65 | Se QR Code versão “2” e Parâmetro Código Identificador do CSC no QR-Code não cadastrado na SEFAZ. | Obrig. | 462 | Rej. | Rejeição: Parâmetro Código Identificador do CSC no QR-Code não cadastrado na SEFAZ. |

Observação : Mais informações sobre o CSC de cada UF estão disponíveis em http://nfce.encat.org/empresario/csc/

Observação 1: Para NFC-e ONLINE é o 4º parâmetro da URL do QR Code.

Observação 2: Para a NFC-e OFFLINE é o 7º parâmetro da URL do QR Code (NT 2016.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| ZX02-308 | 65 | Se QR Code versão “2” e Parâmetro Código Identificador do CSC no QR-Code foi revogado pela empresa anteriormente a Data de Emissão. | Obrig. | 463 | Rej. | Rejeição: Parâmetro Código Identificador do CSC no QR-Code foi revogado pela empresa anteriormente a Data de Emissão. |

Observação 1: Para NFC-e ONLINE é o 4º parâmetro da URL do QR Code.

Observação 2: Para a NFC-e OFFLINE é o 7º parâmetro da URL do QR Code (NT 2016.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| ZX02-312 | 65 | Se QR Code versão “2” e Parâmetro Hash não informado no QR-Code. Nota: O Schema XML faz esta verificação | Obrig. | 396 | Rej. | Rejeição: Parâmetro do QR-Code inexistente: [Param: xxx) <!-- p.133 --> |

Observação 1: Para NFC-e ONLINE é o 5º parâmetro da URL do QR Code.

Observação 2: Para a NFC-e OFFLINE é o 8º parâmetro da URL do QR Code (NT 2016.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| ZX02-316 | 65 | Se QR Code versão “2” e Parâmetro Hash no QR-Code não está no formato hexadecimal (Caracteres: “0-9”, “a-f”,“A-F”). Nota: O Schema XML faz esta verificação | Obrig. | 400 | Rej. | Rejeição: Parâmetro Hash no QR-Code não está no formato hexadecimal (Caracteres: “0-9”, “a-f”,“A-F”). |

Observação 1: Para NFC-e ONLINE é o 5º parâmetro da URL do QR Code.

Observação 2: Para a NFC-e OFFLINE é o 8º parâmetro da URL do QR Code (NT 2016.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| ZX02-320 | 65 | Se QR Code versão “2” e Parâmetro Hash do QR-Code diverge do calculado. | Obrig. | 464 | Rej. | Rejeição: Parâmetro Hash no QR-Code diverge do calculado |

Observação 1: O cálculo do Hash do QR Code deve seguir o Manual de especificações técnicas do DANFE NFC-e e QR Code.

Observação 2: A URL do QR Code da NFC-e ONLINE possui cinco parâmetros, já a NFC-e OFFLINE possui oito parâmetros. (NT 2016.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| ZX03-20 | 65 | Endereço do site da UF para a Consulta por chave de acesso difere do previsto. | Facul. | 878 | Rej. | Rejeição: Endereço do site da UF da Consulta por chave de acesso diverge do previsto |

Observação 1: URLs, por UF, utilizadas para consulta por chave de acesso acesse: http://nfce.encat.org/consumidor/consulte-nota/

Observação 2: regra de validação opcional por UF Observação3: regra de validação vigente a partir de 01/04/2019. (NT 2016.002)

### 1. Banco de Dados: Emitente

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| ~~1C03-10~~ | ~~55/65~~ | ~~Razão Social (tag: emit\xNome) do emitente diverge do informado no cadastro da SEFAZ.~~ | ~~Facul.~~ | ~~935~~ | ~~Rej.~~ | ~~Rejeição: Razão Social do emitente diverge do informado no cadastro da SEFAZ~~ |

> **Revogado/Descontinuado:** texto riscado no original (regras: 1C03-10). <!-- REVISAR p.133: tag grafada como "emit\xNome" na fonte (provável "emit/xNome") -->

~~Observação: Regra de validação opcional, a critério da UF.~~ ~~(NT 2019.001 v1.50)~~

> **Revogado/Descontinuado:** texto riscado no original.

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| 1C17-10 | 55/65 | Se informada IE do Emitente: – Acessar Cadastro de Contribuinte da UF (Chave: IE Emitente) – IE Emitente não cadastrada | Obrig. | 230 | Rej. | Rejeição: IE do emitente não cadastrada |
| 1C17-20 | 55/65 | Se informada IE do Emitente: – IE Emitente não vinculada ao CNPJ (se informado CNPJ emitente, tratar Regime Especial de IE Única) | Obrig. | 231 | Rej. | Rejeição: IE do emitente não vinculada ao CNPJ |
| 1C17-30 | 55/65 | Se informada IE do Emitente: – IE emitente não vinculada ao CPF (se informado CPF emitente) | Obrig. | 622 | Rej. | Rejeição: IE emitente não vinculada ao CPF |
| 1C17-34 | 55 | Se informada IE do Emitente: – Emitente não autorizado para emissão de NF-e | Obrig. | 203 | Rej. | Rejeição: Emissor não habilitado para emissão da NF-e |
| 1C17-38 | 65 | Se informada IE do Emitente: – Emitente não autorizado para emissão de NFC-e | Obrig. | 781 | Rej. | Rejeição: Emissor não habilitado para emissão da NFC-e <!-- p.134 --> |
| 1C17-40 | 55/65 | Se informada IE do Emitente: – Emitente em situação irregular perante o Fisco | Obrig. | 301 | Den. | Uso Denegado: Irregularidade fiscal do emitente |
| ~~1C17-50~~ | ~~55~~ | ~~Se IE do Emitente = "ISENTO" (unicamente para Nota Fiscal Avulsa): – Se não for NF-e Avulsa (excluída na NT 2018.001)~~ | ~~Obrig.~~ | ~~230~~ | ~~Rej.~~ | ~~Rejeição: IE do emitente não cadastrada~~ |
| 1C17-60 | 55/65 | Mensagens opcionais no caso de IE não vinculada ao CNPJ/CPF. - Acessar Cadastro de Pessoa Jurídica ou Pessoa Física: – CNPJ emitente não cadastrado | Facul. | 245 | Rej. | Rejeição: CNPJ Emitente não cadastrado |
| 1C17-70 | 55 | Mensagens opcionais no caso de IE não vinculada ao CNPJ/CPF. - Acessar Cadastro de Pessoa Jurídica ou Pessoa Física: – CPF Emitente não cadastrado (NT 2011/004) | Facul. | 621 | Rej. | Rejeição: CPF Emitente não cadastrado |

> **Revogado/Descontinuado:** texto riscado no original (regras: 1C17-50).

### 2. Banco de Dados: NF-e

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| 2B08-10 | 55/65 | Modelo 55: Acesso BD NFE (Chave: Modelo, UF, CNPJ/CPF Emitente, Série, Número): – NF-e já cadastrada, com diferença na Chave de Acesso (Código Numérico ou outras posições da Chave de Acesso). (NT 2011/004) Modelo 65: Acesso BD NFE (Chave: Modelo, UF, CNPJ Emitente, Série, Número, Tipo de Emissão): – NF-e já cadastrada, com diferença na Chave de Acesso (Código Numérico ou outras posições da Chave de Acesso). (NT 2011/004) (NT 2018.001 v1.10) | Facul. | 539 | Rej. | Rejeição: Duplicidade de NF-e com diferença na Chave de Acesso [chNFe: 99999999999999999999999999999999999999999999][nRec:9999999999999 99] Observação: Na resposta assíncrona, a SEFAZ pode devolver o nREC – Número do Recibo do Lote caso tenha condições. |
| 2B08-20 | 55/65 | Acesso BD NFE (Chave: Modelo, UF, CNPJ/CPF Emitente, Série, Número): – NF-e já cadastrada e não Cancelada/Denegada | Obrig. | 204 | Rej. | Rejeição: Duplicidade de NF-e [nRec:999999999999999] Observação: Na resposta assíncrona, concatenar na mensagem de erro o Número do Recibo do Lote (opcional). |

Observação 1: Na resposta assíncrona, a SEFAZ pode devolver o nREC – Número do Recibo do Lote caso tenha condições.

Observação 2: A critério da UF, no caso do DigestValue ser igual a NF-e autorizada, poderá retornar o protocolo de Autorização. (NT 2018.005 v1.30 / NT 2018.001 v1.10)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| 2B08-30 | 55/65 | Acesso BD NFE (Chave: Modelo, UF, CNPJ/CPF Emitente, Série, Número): – NF-e já cadastrada e está Cancelada (NT 2018.001) | Obrig. | 218 | Rej. | Rejeição: NF-e já está cancelada na base de dados da SEFAZ [nRec:999999999999999] Observação: Na resposta assíncrona, a SEFAZ pode devolver o nREC – Número do Recibo do Lote caso tenha condições. |
| 2B08-40 | 55/65 | Acesso BD NFE (Chave: Modelo, UF, CNPJ/CPF Emitente, Série, Número): – NF-e já cadastrada e está Denegada (NT 2018.001) | Obrig. | 205 | Rej. | Rejeição: NF-e está denegada na base de dados da SEFAZ [nRec:999999999999999] Observação: Na resposta assíncrona, a SEFAZ pode devolver o nREC – Número do Recibo do Lote caso tenha condições. <!-- p.135 --> |
| 2B08-50 | 55/65 | Acesso BD NFE (Chave: Modelo, UF, CNPJ/CPF Emitente, Série, Número): NF-e com mesmo número e série já transmitida e aguardando processamento (NT 2011/004) | Facul. | 635 | Rej. | Rejeição: NF-e com mesmo número e série já transmitida e aguardando processamento |

Observação: Verificação necessária para algumas UF. (NT 2018.001)

### 2A. Banco de Dados: Evento EPEC

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| 2AB08-10 | 55 | Acesso ao BD Evento EPEC (Chave: Modelo, UF, CNPJ ou CPF Emitente, Série, Nro): - Se existe EPEC: - Se Tipo Emissão da NF-e <> 4 | Obrig. | 692 | Rej | Rejeição: Existe EPEC registrado para esta Série e Número [Chave EPEC: xxxxxxxxxxx] |
| 2AB08-20 | 55 | - Chave de Acesso da NF-e diverge da Chave de Acesso do EPEC | Obrig. | 691 | Rej | Rejeição: Chave de Acesso da NF-e diverge da Chave de Acesso do EPEC [Chave EPEC: xxxxxxxxx] |
| 2AB08-30 | 55 | - Verificar divergência entre os dados da NF-e e os dados do EPEC (*1) | Obrig. | 467 | Rej | Rejeição: Dados da NF-e divergentes do EPEC [tag: xxxx] |
| 2AB08-40 | 55 | - Se não existe EPEC: - Se Tipo Emissão da NF-e=4-EPEC e Data Emissão NF-e > Data da desativação do DPEC (01/04/2015) (NT 2018.001/NT 2014.001 v1.20) | Obrig. | 468 | Rej | Rejeição: NF-e com Tipo Emissão = 4, sem EPEC correspondente. |

(*1) Conferir a divergência dos dados da NF-e com os dados do EPEC recebido anteriormente, para os campos: IE do Emitente, Data de Emissão, Tipo de Nota Fiscal (entrada / saída), UF do destinatário, identificação do destinatário (CNPJ/CPF/idEstrangeiro), IE do Destinatário, dados de valor (Total, ICMS e ICMS-ST). Opcionalmente, a SEFAZ Autorizadora poderá informar na mensagem de erro o nome da tag da NF-e com valor divergente no EPEC.

### 3. Banco de Dados: Inutilização

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| 3B08-100 | 55/65 | Acesso BD de Inutilização (Chave: Modelo, UF, CNPJ/CPF, Série, Número): – Numeração da NF-e está inutilizada (NT 2011/004) (NT 2018.001) | Obrig. | 206 | Rej. | Rejeição: NF-e já está inutilizada na Base de Dados da SEFAZ |

<!-- p.136 -->

### 3A. Banco de Dados: NF-e Referenciada

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| 3BA02-10 | 55 | Para cada NF-e referenciada (tag:refNFe), se a UF da Chave de Acesso referenciada for igual a UF do Emitente: – Acessar BD NFE com Chave de Acesso referenciada (se mod=55) – NF-e referenciada inexistente Exceção: A NF-e referenciada pode não existir no caso de Emissão em Contingência (tpEmis = 2, 4 ou 5) (NT 2013/003) | Facul. | 267 | Rej. | Rejeição: Chave de Acesso referenciada inexistente [nRef: xxx] |

Observação: A exceção acima não se aplica para “finNFe=2" (NF-e Complementar).

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| 3BA02-20 | 55 | Para cada NF-e referenciada (tag:refNFe), se a UF da Chave de Acesso referenciada for igual a UF do Emitente: – Acessar BD NFE com Chave de Acesso referenciada (se mod=55) – NF-e Complementar (finNFe=2) referencia uma outra NF-e Complementar (finNFe=2) | Facul. | 268 | Rej. | Rejeição: NF Complementar referencia uma outra NF-e Complementar |
| 3BA02-30 | 55 | Para cada NF-e referenciada (tag:refNFe), se a UF da Chave de Acesso referenciada for igual a UF do Emitente: – Acessar BD NFE com Chave de Acesso referenciada (se mod=55) – NF-e Complementar (finNFe=2) referencia uma NF-e cancelada (NT 2013/003) | Facul. | 686 | Rej. | Rejeição: NF Complementar referencia uma NF-e cancelada |
| 3BA02-40 | 55 | Para cada NF-e referenciada (tag:refNFe), se a UF da Chave de Acesso referenciada for igual a UF do Emitente: – Acessar BD NFE com Chave de Acesso referenciada (se mod=55) – NF-e Complementar (finNFe=2) referencia uma NF-e denegada (NT 2013/003) | Facul. | 687 | Rej. | Rejeição: NF Complementar referencia uma NF-e denegada |
| 3BA15-10 | 55 | Para cada NF de Produtor referenciada (tag:refNFP), se a Nota Fiscal referenciada for da própria UF (tag:refNFP/cUF): – Acessar Cadastro da SEFAZ: – IE de Produtor inexistente (NT 2013/003) | Facul. | 688 | Rej. | Rejeição: NF referenciada de Produtor com IE inexistente [nRef: xxx] |
| 3BA15-20 | 55 | Para cada NF de Produtor referenciada (tag:refNFP), se a Nota Fiscal referenciada for da própria UF (tag:refNFP/cUF): – Acessar Cadastro da SEFAZ: – IE de Produtor não vinculada ao CNPJ / CPF (NT 2013/003) | Facul. | 689 | Rej. | Rejeição: NF referenciada de Produtor com IE não vinculada ao CNPJ/CPF informado [nRef: xxx] |

### 4. Banco de Dados: Chave de Acesso na Exportação Indireta

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| 4I54-10 | 55 | Para cada Chave de Acesso citada na Exportação Indireta (tag:detExport/exportInd/chNFe), se a UF da Chave de Acesso citada for igual a UF do Emitente: – Acessar BD NFE com Chave de Acesso (mod=55) – NF-e inexistente | Facul. | 357 | Rej. | Rejeição: Chave de Acesso do grupo de Exportação Indireta inexistente [nRef: xxx] |
| 4I54-20 | 55 | Para cada Chave de Acesso citada na Exportação Indireta (tag:detExport/exportInd/chNFe), se a UF da Chave de Acesso citada for igual a UF do Emitente: – Acessar BD NFE com Chave de Acesso (mod=55) – NF-e cancelada / denegada | Facul. | 358 | Rej. | Rejeição: Chave de Acesso do grupo de Exportação Indireta cancelada ou denegada [nRef: xxx] <!-- p.137 --> |

### 5. Banco de Dados: Destinatário

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| 5E17-10 | 55 | Se informada IE do Destinatário: - Acessar Cadastro de Contribuinte da UF (Chave: UF Dest, IE Dest.) (*5) - IE destinatário não cadastrada (*7) (NT 2019.001 v1.00) | Obrig. | 233 | Rej. | Rejeição: IE do destinatário não cadastrada |
| 5E17-20 | 55 | Se informado CNPJ do destinatário e IE destinatário não vinculada ao CNPJ (tratar Regime Especial de IE Única) (NT 2019.001 v1.00) | Obrig. | 234 | Rej. | Rejeição: IE do destinatário não vinculada ao CNPJ |
| 5E17-30 | 55 | Se informado CPF do destinatário e IE destinatário não vinculada ao CPF (*7) (NT 2019.001 v1.00) | Obrig. | 624 | Rej. | Rejeição: IE Destinatário não vinculada ao CPF |
| 5E17-40 | 55 | Destinatário em situação irregular perante o Fisco, vedada operação na UF (CCC.cSitCNPJ=3-Vedado) (NT 2019.001 v1.00) | Obrig. | 302 | Den. | Uso Denegado: Irregularidade fiscal do destinatário |
| 5E17-43 | 55 | Destinatário bloqueado na UF (CCC.cSitCNPJ=2-Bloqueado) (NT 2019.001 v1.00) | Obrig. | 305 | Rej. | Rejeição: Destinatário bloqueado na UF |
| 5E17-46 | 55 | IE do Destinatário não está ativa na UF (CCC.cSitIE=0-Não habilitado) (*7) (NT 2019.001 v1.00) | Obrig. | 306 | Rej. | Rejeição: IE do destinatário não está ativa na UF |
| 5E17-50 | 55 | Se IE Destinatário não informada e informado CNPJ do destinatário: - Acessar Cadastro Contribuinte da UF (Chave: UF-Dest, CNPJ-Dest) (*6) - Destinatário possui IE ativa na UF (CCC.cSitIE=1-Habilitado) e CCC.IndIEDestOpc = 0 – Obrig.atório (NT 2019.001 v1.00) | Obrig. | 232 | Rej. | Rejeição: IE do destinatário não informada |
| 5E17-60 | 55 | – Destinatário com CNPJ vedado na UF (CCC.cSitCNPJ=3-Vedado) (NT 2019.001 v1.00) | Obrig. | 303 | Den. | Uso Denegado: Destinatário não habilitado a operar na UF |
| 5E17-63 | 55 | – Destinatário bloqueado na UF (CCC.cSitCNPJ=2-Bloqueado) (NT 2019.001 v1.00) | Obrig. | 305 | Rej. | Rejeição: Destinatário bloqueado na UF |
| 5E17-70 | 55 | Mensagens opcionais se informada IE do destinatário e IE não vinculada ao CNPJ/CPF. - Acessar Cadastro de Pessoa Jurídica ou Pessoa Física: - CNPJ destinatário não cadastrado (NT 2019.001 v1.00) | Facul. | 246 | Rej. | Rejeição: CNPJ Destinatário não cadastrado |
| 5E17-80 | 55 | CPF destinatário não cadastrado (*7) (NT 2019.001 v1.00) | Facul. | 623 | Rej. | Rejeição: CPF Destinatário não cadastrado |

(*5) Validação possível na operação interestadual, ou no ambiente da SEFAZ Virtual, utilizando o CCC-Cadastro Centralizado de Contribuintes. (*6) Validação possível na operação interestadual, ou no ambiente da SEFAZ Virtual, utilizando o CCC. Pesquisar todas as IE vinculadas com o CNPJ informado. (*7) Algumas UF ainda não cadastraram no CCC os Contribuintes Pessoa Física (IE e CPF). Portanto, as SEFAZ Autorizadoras que utilizam o CCC para validar o destinatário somente poderão efetuar as validações assinaladas se o Contribuinte (IE e CPF) existir no CCC.

<!-- p.138 -->

### 7. Banco de Dados: Cadastro da SEFAZ

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| 7B09-10 | 55/65 | Data de Emissão anterior a data de credenciamento do Contribuinte para a emissão de Nota Fiscal na UF, ou anterior a Data de Abertura do estabelecimento na UF. (NT 2015.002) | Facul. | 479 | Rej. | Rejeição: Data de Emissão anterior a data de credenciamento ou anterior a Data de Abertura do estabelecimento |
| 7C10-10 | 55/65 | Código do Município do Emitente diverge do cadastrado na UF (NT 2015.002) | Facul. | 480 | Rej. | Rejeição: Código Município do Emitente diverge do cadastrado na UF |
| 7C21-10 | 55/65 | Código de Regime Tributário do emitente divergente do cadastrado na SEFAZ (tag:emit/CRT): - CRT=”1-Simples Nacional” para Contribuinte cadastrado como Regime Normal na UF; - CRT=”3-Regime Normal” para Contribuinte cadastrado como Simples Nacional na UF; | Facul. | 481 | Rej. | Rejeição: Código Regime Tributário do emitente diverge do cadastro na SEFAZ |

Observação: Implementação futura. (NT 2015.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| 7E10-10 | 55/65 | Código do Município do Destinatário diverge do cadastrado na UF (NT 2015.002) | Facul. | 482 | Rej. | Rejeição: Código do Município do Destinatário diverge do cadastrado na UF |
| 7GA01-10 | 55 | Não informado o Grupo de Autorização para obter o XML, para a UF que exige a identificação do Escritório de Contabilidade na Nota Fiscal, conforme legislação estadual. | Facul. | 486 | Rej. | Rejeição: Não informado o Grupo de Autorização para UF que exige a identificação do Escritório de Contabilidade na Nota Fiscal |

Observação: Regra de Validação opcional, a critério da UF. (NT 2015.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| 7GA01-20 | 55 | Verificar se o CNPJ/CPF informado na primeira ocorrência do Grupo de Autorização corresponde a um Escritório de Contabilidade cadastrado na SEFAZ, conforme legislação estadual. | Facul. | 487 | Rej. | Rejeição: Escritório de Contabilidade não cadastrado na SEFAZ |

Observação: Regra de Validação opcional a critério da UF. (NT 2015.002)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| 7I03-10 | 55/65 | Se não informado GTIN (cEAN=Nulo). | Obrig. | 889 | Rej. | Rejeição: Obrigatória a informação do GTIN para o produto [nItem: 999] |

Observação: Para produtos que não possuem GTIN, utilizar a informação de "SEM GTIN" (NT 2017.001)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| 7ZD02-10 | 55/65 | CNPJ do responsável técnico diverge do cadastrado para o emitente (UF/CNPJ). | Facul. | 974 | Rej. | Rejeição: CNPJ do responsável técnico diverge do cadastrado |

Observação: Implementação futura (NT 2018.005 v1.30)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| 7ZD08-10 | 55/65 | Identificador do CSRT (tag: idCSRT) não cadastrado na SEFAZ. | Facul. | 976 | Rej. | Rejeição: Identificador do CSRT não cadastrado na SEFAZ |

Observação: Implementação futura (NT 2018.005 v1.30)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| 7ZD08-20 | 55/65 | Identificador do CSRT (tag: idCSRT) revogado. | Facul. | 977 | Rej. | Rejeição: Identificador do CSRT revogado |

Observação: Implementação futura (NT 2018.005 v1.30)

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| 7ZD09-10 | 55/65 | Hash do CSRT (tag: hashCSRT) diverge do calculado. | Facul. | 978 | Rej. | Rejeição: Hash do CSRT diverge do calculado |

Observação: Implementação futura (NT 2018.005 v1.30)

### 8. Banco de Dados: Acompanhamento do Contribuinte

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| 8C02-10 | 55 | Na Nota Fiscal de Saída, verificar se a soma das demais Notas Fiscais de Saída (vendas) do Emitente no período ultrapassa o limite anual de faturamento, conforme o Porte da Empresa. | Facul. | 488 | Rej. | Rejeição: Vendas do Emitente incompatíveis com o Porte da Empresa <!-- p.139 --> |

Observação 1: Regra de validação opcional a critério da UF.

Observação 2: Considerar tolerância, conforme a legislação estadual. (NT 2015.002)

### 9. Banco de Dados: Cadastro Centralizado de GTIN (CCG)

As regras de validação do GTIN serão implantadas por etapas, conforme plano de implantação divulgado na NT 2017.001.

| Campo-Seq | Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|---|
| 9I03-10 | 55/65 | Se informado GTIN (tag: cEAN) com prefixo do Brasil (iniciado em 789 ou 790) e GTIN informado na NF-e inexistente no CCG. (NT 2017.001) | Obrig. | 890 | Rej. | Rejeição: GTIN inexistente no Cadastro Centralizado de GTIN (CCG) [nItem:999] |
| 9I03-20 | 55/65 | Se informado GTIN (tag: cEAN) com prefixo do Brasil (iniciado em 789 ou 790) e NCM informada na NF-e diferente da cadastrada no CCG (NT 2017.001) | Obrig. | 891 | Rej. | Rejeição: GTIN incompatível com a NCM [nItem:999; NCM esperada: 99999999] |
| 9I03-30 | 55/65 | Se informado o GTIN (tag: cEAN) com prefixo do Brasil (iniciado em 789 ou 790) e CEST informado na NF-e diferente do cadastrado no CCG (NT 2017.001) | Obrig. | 892 | Rej. | Rejeição: GTIN incompatível com CEST [nItem:999; CEST esperado: 9999999] |
| 9I03-40 | 55/65 | Se informado GTIN-14 (tag: cEAN>09999999999999) com prefixo do Brasil (iniciado em 789 ou 790) e informado GTIN da unidade tributável (tag: cEANTrib) diferente do GTIN Contido cadastrado no CCG Exceção: a RV não se aplica em operações com exterior (idDest=3) Nota: o GTIN pode possuir GTIN de nível inferior (GTIN Contido), agrupando diversas unidades do mesmo produto. O GTIN da unidade tributável deve corresponder àquele da menor unidade comercializável identificada por código GTIN, ou seja, deve corresponder ao GTIN do menor nível inferior (GTIN Contido). (NT 2017.001) | Obrig. | 893 | Rej. | Rejeição: GTIN da unidade tributável diverge do GTIN Contido cadastrado no CCG [nItem:999; GTIN Contido esperado: 99999999999999] |
| 9I12-10 | 55/65 | Se informado GTIN da unidade tributável (tag: cEANTrib) com prefixo do Brasil (iniciado em 789 ou 790) e GTIN da unidade tributável informado na NF-e (tag: cEANTrib) inexistente no CCG. (NT 2017.001) | Obrig. | 894 | Rej. | Rejeição: GTIN da unidade tributável inexistente no Cadastro Centralizado de GTIN (CCG) [nItem:999] |
| 9I12-20 | 55/65 | Se informado GTIN da unidade tributável (tag: cEANTrib) com prefixo do Brasil (iniciado em 789 ou 790) e NCM informada na NF-e diferente da cadastrada no CCG (NT 2017.001) | Obrig. | 895 | Rej. | Rejeição: GTIN da unidade tributável incompatível com a NCM [nItem:999; NCM esperada: 99999999] |
| 9I12-30 | 55/65 | Se informado GTIN da unidade tributável (tag: cEANTrib) com prefixo do Brasil (iniciado em 789 ou 790) e CEST informado na NF-e diferente do cadastrado no CCG (NT 2017.001) | Obrig. | 896 | Rej. | Rejeição: GTIN da unidade tributável incompatível com CEST [nItem:999; CEST esperado: 9999999] |

(*1) Não validar o dígito de controle para os Códigos de Município que seguem: 2201919 - Bom Princípio do Piauí/PI; 2202251 - Canavieira /PI; 2201988 - Brejo do Piauí/PI; 2611533 – Quixaba/PE; 3117836 - Cônego Marinho/MG; 3152131 - Ponto Chique/MG; 4305871 - Coronel Barros/RS; 5203939 - Buriti de Goiás/GO; 5203962 – Buritinópolis/GO. (*2) O tamanho da IE deve ser normalizado na aplicação da SEFAZ, desprezando os zeros não significativos antes da verificação do dígito de controle.

<!-- p.140 -->

(*3) Considerar uma tolerância de R$ 0,50 para mais ou para menos (NT 2012/003). (*4) O valor resultante da multiplicação deve ser arredondado para um valor numérico com duas casas decimais. Considerar uma tolerância de R$ 0,01 para mais ou para menos na validação. (*5) Validação possível na operação interestadual, ou no ambiente da SEFAZ Virtual, utilizando o CCC-Cadastro Centralizado de Contribuintes.
