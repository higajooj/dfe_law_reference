# 1 Alinhamento das regras previstas para o Provedor de Assinatura e Autorização.

Na especificação da versão 4.00 do CTe foram previstas regras de validação para implementar o Provedor de Assinatura e Autorização (PAA) vinculado à época ao Microempreendedor Individual (MEI). Também se imaginava que os Provedores fariam a conexão direta com os ambientes de autorização.

Posterior a publicação do MOC da versão 4.00 o conceito de Provedor de Assinatura foi ampliado para outros contribuintes representados pelo provedor de emissão, alcançando também Transportadores Autônomos de Cargas. Associado ao conceito da Nota Fiscal Fácil (NFF) e da Plataforma de Emissão Simplificada (PES) para agregar ao PAA a facilidade de geração de um pedido de emissão, com dados comerciais, e a geração do XML do CTe efetivamente ser provido pelo ambiente da Plataforma de Emissão Simplificada (ver Manual de Orientações do Provedor de Assinatura e Autorização disponível em https://dfe-portal.svrs.rs.gov.br/Pes).

Portanto, o PAA poderá tanto submeter um XML completo de documento fiscal direto ao ambiente autorizador, quanto utilizar-se do recurso da Plataforma de Emissão e enviar somente dados comerciais para geração por parte do fisco, neste caso, o pedido assinado pelo contribuinte e pelo PAA será inserido pela plataforma de emissão no campo xSolic do grupo de informações da NFF.

<!-- p.04 -->
<!-- p.05 -->

Alinhando essas especificações esta nota técnica revoga na totalidade o quadro E-2 do Manual de Orientações do Contribuinte do CTe versão 4.00 e o substitui pelo Quadro PAA <mark>abaixo para emissão de CTe (mod57), CTe Simplificado (mod57) e seus eventos:</mark>

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
| --- | --- | --- | --- | --- | --- |
| **<mark>PAA00</mark>** | <mark>Se o grupo de informações do Provedor de Assinatura e Autorização estiver informado (grupo: infPAA), o ambiente de autorização do CTe deverá ser o da SEFAZ Virtual RS</mark> | Obrig. | <mark>916</mark> | <mark>Rej.</mark> | <mark>Rejeição: Ambiente de autorização inválido para emissão pelo PAA.</mark> |
| **PAA01** | Se o grupo de informações do Provedor de Assinatura e Autorização estiver informado (grupo: infPAA), o CNPJ do PAA dever ser válido (zeros, DV) | Obrig. | 909 | Rej. | Rejeição: CNPJ do PAA inválido |
| **PAA02** | Se o grupo de informações do Provedor de Assinatura e Autorização estiver informado (grupo: infPAA):<br>Verificar se o CNPJ do PAA (tag: CNPJPAA) existe na relação de Provedores de Autorização e Assinatura homologados pelo ENCAT | Obrig | 911 | Rej. | Rejeição: Provedor de Assinatura e Autorização não existe na base da SEFAZ |
| **PAA03** | Se o grupo de informações do Provedor de Assinatura e Autorização estiver informado (grupo: infPAA):<br>Verificar se o Emitente (tag: CNPJ/CPF grupo emit) possui vínculo ativo com o PAA (tag: CNPJPAA) | Obrig. | 912 | Rej. | Rejeição: Emitente não associado ao PAA |
| **PAA04** | Se o grupo de informações do Provedor de Assinatura e Autorização estiver informado (grupo: infPAA) <mark>e o CNPJ do certificado de assinatura for da SVRS:</mark> o tipo de emissão do CTe deve ser Regime Especial da Nota Fiscal Fácil (tpEmis-3) | Obrig. | 910 | Rej. | Rejeição: Emissão por PAA deve ser do tipo e emissão Nota Fiscal Fácil <mark>quando gerado pela Plataforma de Emissão</mark> |
| **<mark>PAA05</mark>** | <mark>Se o grupo de informações do Provedor de Assinatura e Autorização estiver informado (grupo: infPAA) e o CNPJ do certificado de assinatura for diferente da SVRS, o CNPJ do certificado de assinatura DEVE ser igual ao CNPJ do PAA</mark> | | 915 | Rej. | Rejeição: Emissão por PAA deve ser assinada pelo CNPJ do Provedor de Assinatura |
| **PAA06** | Se o grupo de informações do Provedor de Assinatura e Autorização estiver informado (grupo: infPAA):<br><br>Validar assinatura RSA (tag:SignatureValue) com a chave pública do emitente (grupo: RSAKeyValue) | Obrig. | 914 | Rej. | Rejeição: Assinatura RSA inválida |

Revogam-se as regras G111a, G111b e G111c da Autorização do CTe.

Alterada regra do evento de cancelamento:

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
| --- | --- | --- | --- | --- | --- |
| **O02** | Emitente deve estar habilitado na base de dados para emissão do CTe<br><br>**Exceção**: Esta regra não será aplicada quando a forma de emissão do CTe (tpEmis) for Regime Especial da Nota Fiscal Fácil (3) <mark>ou quando CTe gerado por PAA</mark><br>~~**Observação**: Se evento gerado por PAA (grupo: infPAA) verificar se o CNPJ do emitente está em situação ativa no cadastro do CNPJ MEI da RFB~~ | Obrig. | 203 | Rej. | Rejeição: Emissor não habilitado para emissão do CTe |

> **Revogado/Descontinuado:** a observação riscada na regra O02 (verificação do CNPJ do emitente no cadastro do MEI da RFB para eventos gerados por PAA) está riscada no original.

Alterada regra do evento EPEC:

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
| --- | --- | --- | --- | --- | --- |
| **O05** | Emitente deve estar habilitado na base de dados para emissão do CTe<br><br>~~**Observação**: Se evento gerado por PAA (grupo: infPAA) verificar se o CNPJ do emitente está em situação ativa no cadastro do CNPJ MEI da RFB~~ | Obrig. | 203 | Rej. | Rejeição: Emissor não habilitado para emissão do CTe |

> **Revogado/Descontinuado:** a observação riscada na regra O05 (verificação do CNPJ do emitente no cadastro do MEI da RFB para eventos gerados por PAA) está riscada no original.
