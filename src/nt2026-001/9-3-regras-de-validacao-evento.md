<!-- p.16 -->
# 9.3. Regras de Validação Evento

**Grupo de Informações Genéricas do Evento**

| Campo | Modelo | Regra de Validação | Aplic. | Msg | Descrição Erro |
|---|---|---|---|---|---|
| P09-10 | 55/65 | Tipo do ambiente difere do ambiente do Web Service (\*1)<br>~~Para DF-e emitido com PAA ambiente deve ser o da SVRS.~~<br>~~**Observação:** Deve ser implementado em todos os ambientes autorizadores de NF-e / NFC-e.~~ | Obrig. | 252 | Rejeição: Ambiente informado diverge do Ambiente de recebimento |
| P12-26 | 55/65 | Validação da Chave de Acesso (tag:chNFe):<br>- CNPJ/CPF zerado ou dígito inválido (\*1)<br>**Nota 01:** Considerar a Série para determinar se CNPJ/CPF na Chave de Acesso.<br>- CNPJ: Série=[0-909, 980-989], CPF: Série<>[0-909, 980-989]<br>**Nota 02:** Caso tpEmis = 3-NFF, considerar o 5º dígito do número da nota (nNF) para determinar se CNPJ/CPF na Chave de Acesso:<br>- CNPJ: 5º dígito do nNF = “1”<br>- CPF: 5º dígito do nNF = “2” (NT 2021.002).<br>**Observação:** Implementação em todos os ambientes autorizadores de NF-e / NFC-e. | Obrig. | 617 | Rejeição: Chave de Acesso inválida (CNPJ/CPF zerado ou dígito inválido) |
| P12-32 | 65 | Validação da Chave de Acesso (tag:chNFe):<br>- Se modelo = 65 e série do PAA (nSerie=[970-989]):<br>- Modelo não permitido para o PAA<br>**Observação:** Implementação em todos os ambientes autorizadores de NF-e / NFC-e. | Obrig. | 450 | Rejeição: Modelo da NF-e diferente de 55 |
| P12-44 | 55/65 | Validação da Chave de Acesso (tag:chNFe):<br>- CNPJ/CPF do Autor diverge do CNPJ/CPF da Chave de Acesso<br>**Nota 01:** Considerar a Série para determinar se CNPJ/CPF na Chave de Acesso.<br>- CNPJ: Série=[0-909, 980-989], CPF: Série<>[0-909, 980-989]<br>**Nota 02:** Caso tpEmis = 3-NFF, considerar o 5º dígito do número da nota (nNF) para determinar se CNPJ/CPF na Chave de Acesso:<br>- CNPJ: 5º dígito do nNF = “1”<br>- CPF: 5º dígito do nNF = “2” (NT 2021.002).<br>**Observação:** Implementação em todos os ambientes autorizadores de NF-e / NFC-e. | Obrig. | 574 | Rejeição: Autor do evento diverge do emissor da NF-e |

> **Revogado/Descontinuado:** o trecho “Para DF-e emitido com PAA ambiente deve ser o da SVRS.” e a observação da regra P09-10 estão riscados na NT original.

<!-- p.17 -->

| Campo | Modelo | Regra de Validação | Aplic. | Msg | Descrição Erro |
|---|---|---|---|---|---|
| P14-10 | 55 | Se Série do PAA (nSerie=[970-989]):<br>- Se Evento do Emitente (tpEvento igual a 110111-Cancelamento, 110112-Cancelamento por Substituição, 110110-Carta de Correção):<br>- Ambiente de Autorização difere de SVRS<br>**Observação:** Implementação em todos os ambientes autorizadores de NF-e / NFC-e. | Obrig. | ~~669~~<br>633 | Rejeição: Ambiente de autorização inválido para emissão pelo PAA |
| P14-20 | 55 | Se Série do PAA (nSerie=[970-989]):<br>- Tipo de Evento igual a EPEC (tpEvento = 110140)<br>**Observação:** Implementação pelo ambiente de contingência EPEC. | Obrig. | ~~669~~<br>633 | Rejeição: Ambiente de autorização inválido para emissão pelo PAA |

**Grupo de Informações conforme o Evento: Evento de Cancelamento por Substituição**

| Campo | Modelo | Regra de Validação | Aplic. | Msg | Descrição Erro |
|---|---|---|---|---|---|
| P31-26 | 55/65 | Se tpEvento=110112, validar a Chave de Acesso Substituta (tag:chNFeRef):<br>- CNPJ/CPF zerado ou dígito inválido<br>**Nota 01:** Considerar a Série para determinar se CNPJ/CPF na Chave de Acesso.<br>- CNPJ: Série=[0-909, 980-989], CPF: Série<>[0-909, 980-989]<br>**Nota 02:** Caso tpEmis = 3-NFF, considerar o 5º dígito do número da nota (nNF) para determinar se CNPJ/CPF na Chave de Acesso:<br>- CNPJ: 5º dígito do nNF = “1”<br>- CPF: 5º dígito do nNF = “2” (NT 2021.002). | Obrig. | 910 | Rejeição: Chave de Acesso NF-e Substituta inválida (CNPJ/CPF) |
| P31-46 | 55/65 | - Chave de Acesso da NF-e Substituta com CNPJ/CPF divergente da Chave de Acesso da NF-e a ser cancelada<br>**Nota 01:** Considerar a Série para determinar se CNPJ/CPF na Chave de Acesso.<br>- CNPJ: Série=[0-909, 980-989], CPF: Série<>[0-909, 980-989]<br>**Nota 02:** Caso tpEmis = 3-NFF, considerar o 5º dígito do número da nota (nNF) para determinar se CNPJ/CPF na Chave de Acesso:<br>- CNPJ: 5º dígito do nNF = “1”<br>- CPF: 5º dígito do nNF = “2” (NT 2021.002). | Obrig. | 911 | Rejeição: Chave de Acesso NF-e Substituta incorreta (CNPJ/CPF) |

**Grupo de Informação do PAA**

| Campo | Modelo | Regra de Validação | Aplic. | Msg | Descrição Erro |
|---|---|---|---|---|---|
| P80-10 | 55 | Se Série diferente da série do PAA (nSerie<>[970-989]):<br>- Grupo infPAA informado indevidamente<br>**Observação:** Implementação em todos os ambientes autorizadores de NF-e / NFC-e. | Obrig. | 893 | Rejeição: Grupo de informações do Provedor de Assinatura e Autorização informado indevidamente |
| P80-20 | 55 | Se Série do PAA (nSerie=[970-989]):<br>- Se **não** for Evento do Emitente (tpEvento difere de 110111-Cancelamento, 110112-Cancelamento por Substituição, 110110-Carta de Correção):<br>- Grupo infPAA informado indevidamente<br>**Observação:** Implementação em todos os ambientes autorizadores de NF-e / NFC-e. | Obrig. | 893 | Rejeição: Grupo de informações do Provedor de Assinatura e Autorização informado indevidamente |
| P80-30 | 55 | Se Série do PAA (nSerie=[970-989]):<br>- Se Evento do Emitente (tpEvento igual a 110111-Cancelamento, 110112-Cancelamento por Substituição, 110110-Carta de Correção):<br>- Grupo infPAA não informado<br>**Observação:** Regra de Validação implementada somente na SVRS. | Obrig. | 867 | Rejeição: Grupo de informações do Provedor de Assinatura e Autorização não informado |

<!-- p.18 -->

| Campo | Modelo | Regra de Validação | Aplic. | Msg | Descrição Erro |
|---|---|---|---|---|---|
| P80-40 | 55 | Se informado grupo infPAA:<br>- Evento **não** é do Emitente (tpEvento difere de 110111-Cancelamento, 110112-Cancelamento por Substituição, 110110-Carta de Correção)<br>**Observação:** Regra de Validação implementada somente na SVRS. | Obrig. | 491 | ~~Rejeição: O tpEvento informado inválido~~<br>Rejeição: Tipo de Evento inválido para o ambiente de autorização |
| P81-10 | 55 | Se informado grupo infPAA:<br>- CNPJ do PAA inválido deve ser válido (zeros, DV)<br>**Observação:** Regra de Validação implementada somente na SVRS. | Obrig. | 670 | Rejeição: CNPJ do PAA inválido |
| P81-20 | 55 | Se informado grupo infPAA:<br>- Acessar Cadastro de PAA (Chave: CNPJPAA)<br>- CNPJ do PAA (tag: CNPJPAA) não existe ou situação inválida<br>**Observação:** Regra de Validação implementada somente na SVRS. | Obrig. | 671 | Rejeição: Provedor de Assinatura e Autorização não existe na base da SEFAZ |
| P81-30 | 55 | Se informado grupo infPAA:<br>- Acessar Cadastro de Vínculos do PAA com o Emitente (Chave: CNPJPAA, CNPJ do Emitente)<br>- Emitente (tag: emit/CNPJ) não possui vínculo ativo com o PAA<br>**Observação:** Regra de Validação implementada somente na SVRS. | Obrig. | 672 | Rejeição: Emitente não associado ao PAA |
| P81-40 | 55 | Se informado grupo infPAA:<br>- Acessar Cadastro de Chaves do PAA com o Emitente (Chave: CNPJPAA, CNPJ do Emitente)<br>- Chave pública difere da estipulada para este emitente no PAA<br>**Observação:** Regra de Validação implementada somente na SVRS. | Obrig. | 895 | Rejeição: Chave do Emitente para o PAA inválida |
| P81-50 | 55 | Se informado grupo infPAA:<br>- CNPJ-8 do certificado de assinatura difere do CNPJ-8 do PAA (tag: CNPJPAA)<br>**Observação:** Regra de Validação implementada somente na SVRS | Obrig. | 776 | Rejeição: Emissão por PAA deve ser assinada pelo CNPJ do Provedor de Assinatura |
| P83-10 | 55 | Se informado grupo infPAA:<br>- Validar assinatura RSA (tag:SignatureValue) com a chave pública do emitente (grupo: RSAKeyValue)<br>**Observação:** Regra de Validação implementada somente na SVRS. | Obrig. | 856 | Rejeição: Emissão por PAA com Assinatura RSA inválida |

**Banco de Dados: NF-e**

| Campo | Modelo | Regra de Validação | Aplic. | Msg | Descrição Erro |
|---|---|---|---|---|---|
| 2P81-10 | 55 | Se Evento para NF-e emitida por PAA (Série=[970-989]):<br>- Se Evento do Emitente (tpEvento igual a 110111-Cancelamento, 110112-Cancelamento por Substituição, 110110-Carta de Correção):<br>- CNPJ-8 do Certificado de Assinatura do Evento difere do CNPJ-8 do PAA que emitiu a NF-e e difere do CNPJ-8 do Emitente da NF-e<br>**Observação:** Regra de Validação implementada somente na SVRS. | Obrig. | 889 | Rejeição: Emissão por PAA deve ser assinada pelo CNPJ do Provedor de Assinatura |

> **Revogado/Descontinuado:** o trecho “Rejeição: O tpEvento informado inválido” da regra P80-40 está riscado na NT original.
