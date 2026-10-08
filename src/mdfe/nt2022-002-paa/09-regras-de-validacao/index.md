<!-- p.08 -->

# 9 Regras de Validação

## Validações da Assinatura Digital do DFe

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| F03 | Se Certificado conter CNPJ do emitente: CNPJ-Base do Emitente difere do CNPJ-Base do Certificado Digital<br><br>Exceção: Se a forma de emissão do MDFe for Regime Especial da Nota Fiscal Fácil, o CNPJ de assinatura será o e-CNPJ da SVRS para o serviço de recepção ou para os eventos do emitente (por exemplo: Cancelamento e encerramento)<br><br>Exceção 2: Se o MDFe / Evento possuir indicação de uso do Provedor de Assinatura e Autorização (grupo: infPAA) esta regra não será aplicada. | Obrig. | 213 | Rej. | Rejeição: CNPJ-Base do Emitente difere do CNPJ-Base do Certificado Digital |

## Validações do MDFe

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| Se o grupo de informações do Provedor de Assinatura e Autorização estiver informado (grupo: infPAA), o Processo de emissão (tag: ide/procEmi) deve ser 4 - emissão de MDFe por Provedor de Assinatura e Autorização – PAA | Obrig. | 910 | Rej. | Rejeição: processo de emissão incompatível com PAA |
| Se o grupo de informações do Provedor de Assinatura e Autorização NÃO estiver informado (grupo: infPAA), o Processo de emissão (tag: ide/procEmi) deve ser DIFERENTE de 4- emissão de MDFe por Provedor de Assinatura e Autorização – PAA | Obrig. | 911 | Rej. | Rejeição: processo de emissão inválido para o MDFe |
| Se o grupo de informações do Provedor de Assinatura e Autorização e estiver informado (grupo: infPAA): A série de emissão do MDFe deverá estar na faixa 970-979 para emitente CPF ou 980-989 para emitente CNPJ; atribuída ao vínculo entre o PAA e o emitente do MDFe | Obrig. | 912 | Rej. | Rejeição: Emissão por PAA com série inválida |
| IE Emitente deve ser informada (zeros ou nulo)<br><br>Exceção: A IE não será informada se a forma de emissão (tpEmis) do MDFe for Regime Especial da Nota Fiscal Fácil (3)<br><br>Exceção 2: Se MDFe gerado por PAA (grupo: infPAA) com procEmi =4, a IE do Emitente é opcional (MEI não inscrito na UF ou TAC Pessoa Física) | Obrig. | 229 | Rej. | Rejeição: IE do emitente não informada |

## Validações do Registro de Eventos (parte geral)

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| O Processo de emissão do MDFe relacionado ao evento deve ser 4- emissão de MDFe por Provedor de Assinatura e Autorização – PAA | Obrig. | 910 | Rej. | Rejeição: processo de emissão incompatível com PAA |
| Se o grupo de informações do Provedor de Assinatura e Autorização estiver informado (grupo: infPAA): A série de emissão do MDFe deverá estar na faixa 970-979 para emitente CPF ou 980-989 para emitente CNPJ; atribuída ao vínculo entre o PAA e o emitente do MDFe | Obrig. | 912 | Rej. | Rejeição: Emissão por PAA com série inválida |

## Validações do PAA (Sempre que informado infPAA em MDFe e Evento)

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| PAA01 | Se o grupo de informações do Provedor de Assinatura e Autorização estiver informado (grupo: infPAA), o CNPJ do PAA dever ser válido (zeros, DV) | Obrig. | 914 | Rej. | Rejeição: CNPJ do PAA inválido |
| PAA02 | Se o grupo de informações do Provedor de Assinatura e Autorização estiver informado (grupo: infPAA): Verificar se o CNPJ do PAA (tag: CNPJPAA) existe na relação de Provedores de Autorização e Assinatura homologados pelo ENCAT | Obrig | 915 | Rej. | Rejeição: Provedor de Assinatura e Autorização não existe na base da SEFAZ |
| PAA03 <!-- p.09 --> | Se o grupo de informações do Provedor de Assinatura e Autorização estiver informado (grupo: infPAA): Verificar se o Emitente (tag: CNPJ/CPF grupo emit) possui vínculo com o PAA (tag: CNPJPAA)<br><br>Observação: no serviço de recepção de MDFe o vínculo deve estar em situação ativo, para o caso de evento, essa condição não será exigida | Obrig. | 916 | Rej. | Rejeição: Emitente não associado ao PAA |
| PAA04 | Se o grupo de informações do Provedor de Assinatura e Autorização estiver informado (grupo: infPAA): O CNPJ-base do certificado de assinatura DEVE ser igual ao CNPJ-base do PAA | Obrig. | 917 | Rej. | Rejeição: Emissão por PAA deve ser assinada pelo CNPJ do Provedor de Assinatura |
| PAA05 | Se o grupo de informações do Provedor de Assinatura e Autorização estiver informado (grupo: infPAA):<br><br>Validar assinatura RSA (tag:SignatureValue) com a chave pública do emitente (grupo: RSAKeyValue) | Obrig. | 959 | Rej. | Rejeição: Assinatura RSA inválida |
