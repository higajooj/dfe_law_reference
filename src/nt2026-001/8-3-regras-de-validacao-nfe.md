<!-- p.12 -->
# 8.3. Regras de Validação NF-e

**Grupo B. Identificação da Nota Fiscal eletrônica**

| Campo | Modelo | Regra de Validação | Aplic. | Msg | Descrição Erro |
|---|---|---|---|---|---|
| B07-10 | 65 | Se modelo = 65 e série do PAA (nSerie=[970-989]):<br>- Modelo não permitido para o PAA<br>**Observação:** Regra de Validação implementada em todos os ambientes autorizadores. | Obrig. | 450 | Rejeição: Modelo da NF-e diferente de 55 |
| B26-10 | 55/65 | Se Processo de Emissão pelo Contribuinte ~~(procEmi<>1 e 2)~~ (procEmi=0 ou 3):<br>- Série da NF-e difere da faixa de 0-889 ou 920-969 (NT 2018.001) ~~ou~~<br>~~Se Processo de Emissão não for PAA (procEmi <> 4):~~<br>~~- Série da NF-e na faixa 970-979 - Uso exclusivo do PAA.~~<br>**Observação:** Regra de Validação implementada em todos os ambientes autorizadores. | Obrig. | 244 | Rejeição: Processo de Emissão pelo Contribuinte incompatível com a Série da NF |
| B26-20 | 55/65 | Se Processo de Emissão pelo Fisco (procEmi=1 ou 2):<br>- Série difere da faixa 890-919 (NF Avulsa) (NT 2018.001) ~~ou~~<br>~~Se Processo de Emissão for PAA (procEmi = 4):~~<br>~~- Série da NF-e difere da faixa 970-979~~<br>~~**Observação:** Regra de Validação implementada somente na SVRS.~~ | Obrig. | 451 | Rejeição: Processo de Emissão pelo Fisco incompatível com a Série da NF |
| B26-22 | 55 | Se processo de Emissão igual a “PAA-Provedor de Assinatura e Autorização” (procEmi=4):<br>- Ambiente de Autorização <> ”SVRS”<br>**Observação:** Regra de Validação implementada em todos os ambientes autorizadores | Obrig. | 631 | Rejeição: Ambiente de autorização não suporta esta operação |
| B26-24 | 55 | Se Processo de Emissão igual a “PAA-Provedor de Assinatura e Autorização” (procEmi = 4):<br>- Série da NF-e difere da faixa 970-989 (faixa para uso exclusivo do PAA)<br>**Observação:** Regra de Validação implementada somente na SVRS. | Obrig. | 667 | Rejeição: Processo de Emissão pelo PAA incompatível com a Série da NF |
| B26-26 | 55 | Se Processo de Emissão igual a “PAA-Provedor de Assinatura e Autorização” (procEmi = 4):<br>- Grupo de informações do Provedor de Assinatura e Autorização (grupo: infPAA) não informado<br>**Observação:** Regra de Validação implementada somente na SVRS. | Obrig. | 867 | Rejeição: Grupo de informações do Provedor de Assinatura e Autorização não informado |
| B26-28 | 55 | Se Processo de Emissão difere de “PAA-Provedor de Assinatura e Autorização” (procEmi <> 4):<br>- Grupo de informações do Provedor de Assinatura e Autorização (grupo: infPAA) informado indevidamente<br>**Observação:** Regra de Validação implementada em todos os ambientes autorizadores | Obrig. | 893 | Rejeição: Grupo de informações do Provedor de Assinatura e Autorização informado indevidamente |

> **Revogado/Descontinuado:** os trechos riscados nas regras B26-10 e B26-20 e a expressão “= [910-969]” das regras BA02 / BA02a estão riscados na NT original.

**Grupo BA. Documento Fiscal Referenciado**

| Campo | Modelo | Regra de Validação | Aplic. | Msg | Descrição Erro |
|---|---|---|---|---|---|
| BA02-30 | 55 | Se informada uma NF-e referenciada (tag:refNFe, id: BA02):<br>- Série = [0-909, 980-989] e CNPJ zerado ou dígito inválido, ou<br>- Série ~~= [910-969]~~ <> [0-909, 980-989] e CPF zerado ou dígito inválido (NT 2018.001)<br>Nota: Caso tpEmis = 3-NFF, considerar o 5º dígito do número da nota (nNF) para determinar se CNPJ/CPF na Chave de Acesso:<br>- CNPJ: 5º dígito do nNF = “1”<br>- CPF: 5º dígito do nNF = “2” (NT 2021.002).<br>**Observação:** Regra de Validação implementada em todos os ambientes autorizadores. | Facult. | 552 | Rejeição: Chave de Acesso referenciada com CNPJ/CPF inválido [nOcor:nnn] |

<!-- p.13 -->

| Campo | Modelo | Regra de Validação | Aplic. | Msg | Descrição Erro |
|---|---|---|---|---|---|
| BA02a-50 | 55 | Se informada uma NF-e referenciada com código numérico zerado (tag:refNFeSig, id: BA02a):<br>- Série = [0-909, 980-989] e CNPJ zerado ou dígito inválido, ou<br>- Série ~~= [910-969]~~ <> [0-909, 980-989] e CPF zerado ou dígito inválido (NT 2018.001) | Facult. | 552 | Rejeição: Chave de Acesso referenciada com CNPJ/CPF inválido [nOcor:nnn] |

**Grupo C. Identificação do Emitente**

| Campo | Modelo | Regra de Validação | Aplic. | Msg | Descrição Erro |
|---|---|---|---|---|---|
| C02-30 | 55/65 | Se informado CNPJ do Emitente:<br>- Série difere da faixa para emitente CNPJ: faixa [0-909, 980-989] (NT 2018.001)<br>**Observação:** Regra de Validação implementada em todos os ambientes autorizadores. | Obrig. | 503 | Rejeição: CNPJ do emitente com Série incompatível |
| C02a-10 | 55/65 | Se informado CPF do emitente e tpEmis <> 3-NFF (NT 2021.002):<br>- Série difere da faixa para emitente CPF: [890-899, 910-979] (NT 2018.001 / NT 2015.002)<br>**Observação:** Regra de Validação implementada em todos os ambientes autorizadores. | Obrig. | 495 | Rejeição: CPF do Emitente com Série incompatível |
| C21-20 | 55/65 | Se CRT (emit/CRT) = “3-Regime Normal” ou “2-Simples Nacional, excesso sublimite de receita bruta”:<br>- Se emissão por PAA (grupo infPAA informado):<br>- PAA não disponível para contribuinte do regime normal.<br>**Exceção:** Essa regra não se aplica ao contribuinte Produtor Rural (CCC, tpIE = “5-IE de Produtor Rural”).<br>**Observação:** Regra de Validação implementada somente na SVRS. | Obrig. | ~~1178~~<br>668 | Rejeição: Utilização de PAA não permitida para contribuinte enquadrado no regime normal |

**Grupo ZG. Informações do PAA**

| Campo | Modelo | Regra de Validação | Aplic. | Msg | Descrição Erro |
|---|---|---|---|---|---|
| ZG01-10 | 55/65 | Se o grupo de informações do Provedor de Assinatura e Autorização estiver informado (grupo: infPAA):<br>- Ambiente de autorização da NF-e / NFC-e ~~deverá ser o~~ difere da SVRS.<br>**Observação:** Implementação em todos os ambientes autorizadores de NF-e / NFC-e. | Obrig. | ~~1179~~<br>~~669~~<br>633 | Rejeição: Ambiente de autorização inválido para emissão pelo PAA |

<!-- p.14 -->

| Campo | Modelo | Regra de Validação | Aplic. | Msg | Descrição Erro |
|---|---|---|---|---|---|
| ZG02-10 | 55/65 | Se o grupo de informações do Provedor de Assinatura e Autorização estiver informado (grupo: infPAA):<br>- CNPJ do PAA inválido ~~deve ser válido (zeros, DV)~~<br>**Observação:** Regra de Validação implementada somente na SVRS. | Obrig. | ~~1180~~<br>670<br>634 | Rejeição: CNPJ do PAA inválido |
| ZG02-20 | 55/65 | Se o grupo de informações do Provedor de Assinatura e Autorização estiver informado (grupo: infPAA):<br>- Acessar Cadastro de PAA (Chave: CNPJPAA)<br>- CNPJ do PAA (tag: CNPJPAA) não existe ou situação inválida<br>**Observação:** Regra de Validação implementada somente na SVRS. | Obrig | ~~1181~~<br>671 | Rejeição: Provedor de Assinatura e Autorização não existe na base da SEFAZ |
| ZG02-30 | 55/65 | Se o grupo de informações do Provedor de Assinatura e Autorização estiver informado (grupo: infPAA):<br>- Acessar Cadastro de Vínculos do PAA com o Emitente (Chave: CNPJPAA, CNPJ do Emitente)<br>- Emitente (tag: emit/CNPJ) não possui vínculo ativo com o PAA<br>**Observação:** Regra de Validação implementada somente na SVRS. | Obrig. | ~~1182~~<br>~~672~~<br>936 | Rejeição: Emitente não associado ao PAA |
| ZG02-34 | 55/65 | Se o grupo de informações do Provedor de Assinatura e Autorização estiver informado (grupo: infPAA):<br>- Acessar Cadastro de Vínculos do PAA com o Emitente (Chave: CNPJPAA, CNPJ do Emitente)<br>- Série da NF difere da Série estipulada para este emitente no PAA<br>**Observação:** Regra de Validação implementada somente na SVRS. | Obrig. | 872 | Rejeição: Série da NF difere da estipulada para este Emitente no PAA |
| ZG02-36 | 55/65 | Se o grupo de informações do Provedor de Assinatura e Autorização estiver informado (grupo: infPAA):<br>- Acessar Cadastro de Chaves do PAA com o Emitente (Chave: CNPJPAA, CNPJ do Emitente, Data de Vigência)<br>- Chave pública difere da estipulada para este emitente no PAA<br>**Observação:** Regra de Validação implementada somente na SVRS. | | 895 | Rejeição: Chave do Emitente para o PAA inválida |
| ZG02-40 | 55/65 | Se o grupo de informações do Provedor de Assinatura e Autorização estiver informado (grupo: infPAA):<br>- CNPJ-8 do certificado de assinatura difere ~~da SVRS e~~ do CNPJ-8 do PAA (tag: CNPJPAA, id: ZG02)<br>**Observação:** Regra de Validação implementada somente na SVRS. | Obrig. | ~~1183~~<br>776 | Rejeição: Emissão por PAA deve ser assinada pelo CNPJ do Provedor de Assinatura |
| ZG04-10 | 55/65 | Se o grupo de informações do Provedor de Assinatura e Autorização estiver informado (grupo: infPAA):<br>- Validar assinatura RSA (tag:SignatureValue) com a chave pública do emitente (grupo: RSAKeyValue)<br>**Observação:** Regra de Validação implementada somente na SVRS. | Obrig. | ~~1184~~<br>856 | Rejeição: Emissão por PAA com Assinatura RSA inválida |

> **Revogado/Descontinuado:** os códigos de mensagem riscados (1178, 1179, 669, 1180, 1181, 1182, 672, 1183, 1184) e os trechos riscados das regras ZG01-10, ZG02-10, ZG02-40 estão riscados na NT original.
