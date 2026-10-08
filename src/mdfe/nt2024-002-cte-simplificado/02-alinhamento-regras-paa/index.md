<!-- p.05 -->
# 2 Alinhamento das regras previstas para o Provedor de Assinatura e Autorização

Na especificação da versão 3.00b do MDFe foram previstas regras de validação para implementar o Provedor de Assinatura e Autorização (PAA) vinculado à época ao Microempreendedor Individual (MEI). Também se imaginava que os Provedores fariam a conexão direta com os ambientes de autorização.

Posterior a publicação do MOC o conceito de Provedor de Assinatura foi ampliado para outros contribuintes representados pelo provedor de emissão, alcançando também Transportadores Autônomos de Cargas. Associado ao conceito da Nota Fiscal Fácil (NFF) e da Plataforma de Emissão Simplificada (PES) para agregar ao PAA a facilidade de geração de um pedido de emissão, com dados comerciais, e a geração do XML do MDFe efetivamente ser provido pelo ambiente da Plataforma de Emissão Simplificada (ver Manual de Orientações do Provedor de Assinatura e Autorização disponível em <https://dfe-portal.svrs.rs.gov.br/Pes>).

Portanto, o PAA poderá tanto submeter um XML completo de documento fiscal direto ao ambiente autorizador, quanto utilizar-se do recurso da Plataforma de Emissão e enviar somente dados comerciais para geração por parte do fisco, neste caso, o pedido assinado pelo contribuinte e pelo PAA será inserido pela plataforma de emissão no campo xSolic do grupo de informações da NFF.

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| **PAA<br>01** | Se o grupo de informações do Provedor de Assinatura e Autorização estiver informado (grupo: infPAA), o CNPJ do PAA dever ser válido (zeros, DV) | Obrig. | 909 | Rej. | Rejeição: CNPJ do PAA inválido |
| **PAA<br>02** | Se o grupo de informações do Provedor de Assinatura e Autorização estiver informado (grupo: infPAA): Verificar se o CNPJ do PAA (tag: CNPJPAA) existe na relação de Provedores de Autorização e Assinatura homologados pelo ENCAT | Obrig | 911 | Rej. | Rejeição: Provedor de Assinatura e Autorização não existe na base da SEFAZ |
| **PAA<br>03** | Se o grupo de informações do Provedor de Assinatura e Autorização estiver informado (grupo: infPAA): Verificar se o Emitente (tag: CNPJ/CPF grupo emit) possui vínculo ativo com o PAA (tag: CNPJPAA) | Obrig. | 912 | Rej. | Rejeição: Emitente não associado ao PAA |
| **PAA<br>04** | Se o grupo de informações do Provedor de Assinatura e Autorização estiver informado (grupo: infPAA) <mark>e o CNPJ do certificado de assinatura for da SVRS;</mark> o tipo de emissão do MDFe deve ser Regime Especial da Nota Fiscal Fácil (tpEmis-3) | Obrig. | 910 | Rej. | Rejeição: Emissão por PAA deve ser do tipo e emissão Nota Fiscal Fácil quando gerado pela Plataforma de Emissão |
| **PAA<br>05** | <mark>Se o grupo de informações do Provedor de Assinatura e Autorização estiver informado (grupo: infPAA) e o CNPJ do certificado de assinatura for diferente da SVRS, o CNPJ do certificado de assinatura DEVE ser igual ao CNPJ do PAA</mark> | | <mark>915</mark> | <mark>Rej.</mark> | <mark>Rejeição: Emissão por PAA deve ser assinada pelo CNPJ do Provedor de Assinatura</mark> |
| **PAA<br>06** | Se o grupo de informações do Provedor de Assinatura e Autorização estiver informado (grupo: infPAA):<br><br>Validar assinatura RSA (tag:SignatureValue) com a chave pública do emitente (grupo: RSAKeyValue) | Obrig. | 914 | Rej. | Rejeição: Assinatura RSA inválida |
