# 4. WebService – Recepção

| # | Regras de Validação | Aplic. | Msg | Efeito |
| --- | --- | --- | --- | --- |
| **G035a** | Se Tipo do CT-e= 0 (Normal) ou 3 (Substituição) e informados grupos de informações de documentos (infDoc) e NF-e (infNFe), Verificar se existe alguma chave de acesso duplicada no CT-e<br>Retornar a chave duplicada | Obrig. | 527 | Rej. |
| **G041a** | Se Tipo do CT-e= 0 (Normal) ou 3 (Substituição) e informados grupos de informações de documentos (infDoc) e NF-e (infNfe), para cada uma das NF-e´s relacionadas:<br>- Chave de acesso de NF-e inválida (Tipo de emissão inválido)<br>Retornar a primeira chave de acesso inválida. | Facult. | 508 | Rej. |
| **G041b** | Se Tipo do CT-e= 0 (Normal) ou 3 (Substituição) e informados grupos de informações de documentos (infDoc) e NF-e (infNfe), para cada uma das NF-e´s relacionadas:<br>- Chave de acesso de NF-e inválida (UF inválida)<br>Retornar a primeira chave de acesso inválida. | Facult. | 504 | Rej. |
| **G048b** | Para CT-e do tipo Normal, Complementar ou Substituição, se UF do emitente for diferente da UF de início da prestação e UF de início da prestação for diferente de EX.<br>CFOP deve ser igual a 5932 ou 6932 | Obrig. | 524 | Rej. |
| **G053b** | Se estiver informado o grupo de documentos eletrônicos (idDocAntEle) em documentos anteriores:<br>Verificar se existe alguma chave de acesso de CT-e duplicada nos documentos anteriores.<br>Retornar a chave duplicada | Obrig. | 543 | Rej. |
| **G053c** | Se estiver informado o grupo de documentos eletrônicos (idDocAntEle) em documentos anteriores:<br>- Dígito Verificador inválido na Chave de acesso do CT-e anterior<br>Retornar a primeira chave de acesso inválida. | Obrig. | 544 | Rej |
| **G053d** | Se estiver informado o grupo de documentos eletrônicos (idDocAntEle) em documentos anteriores:<br>- Chave de acesso de CT-e anterior inválida (Ano < 2009 ou Ano maior que Ano corrente)<br>Retornar a primeira chave de acesso inválida. | Obrig. | 545 | Rej. |
| **G053e** | Se estiver informado o grupo de documentos eletrônicos (idDocAntEle) em documentos anteriores:<br>- Chave de acesso de CT-e anterior inválida (Mês = 0 ou Mês > 12)<br>Retornar a primeira chave de acesso inválida. | Obrig. | 546 | Rej. |
| **G053f** | <!-- p.03 -->Se estiver informado o grupo de documentos eletrônicos (idDocAntEle) em documentos anteriores:<br>- Chave de acesso de CT-e anterior inválida (CNPJ zerado ou digito inválido)<br>Retornar a primeira chave de acesso inválida. | Obrig. | 547 | Rej. |
| **G053g** | Se estiver informado o grupo de documentos eletrônicos (idDocAntEle) em documentos anteriores:<br>- Chave de acesso de CT-e anterior inválida (modelo diferente de 57)<br>Retornar a primeira chave de acesso inválida. | Obrig. | 548 | Rej. |
| **G053h** | Se estiver informado o grupo de documentos eletrônicos (idDocAntEle) em documentos anteriores:<br>- Chave de acesso de CT-e anterior inválida (numero CT = 0)<br>Retornar a primeira chave de acesso inválida. | Obrig. | 549 | Rej. |
| **G053i** | Se estiver informado o grupo de documentos eletrônicos (idDocAntEle) em documentos anteriores:<br>- Chave de acesso de CT-e anterior inválida (Tipo de emissão inválido)<br>Retornar a primeira chave de acesso inválida. | Obrig. | 480 | Rej. |
| **G053j** | Se estiver informado o grupo de documentos eletrônicos (idDocAntEle) em documentos anteriores:<br>- Chave de acesso de CT-e anterior inválida (UF inválida)<br>Retornar a primeira chave de acesso inválida. | Obrig. | 538 | Rej. |
| **G054a** | Se estiver informado CT-e referenciado (refCTE):<br>- Dígito Verificador inválido na Chave de acesso do CT-e referenciado | Obrig. | 450 | Rej |
| **G054b** | Se estiver informado CT-e referenciado (refCTE):<br>- Chave de acesso de CT-e referenciado inválida (Ano < 2009 ou Ano maior que Ano corrente) | Obrig. | 451 | Rej. |
| **G054c** | Se estiver informado CT-e referenciado (refCTE):<br>- Chave de acesso de CT-e referenciado inválida (Mês = 0 ou Mês > 12) | Obrig. | 452 | Rej. |
| **G054d** | Se estiver informado CT-e referenciado (refCTE):<br>- Chave de acesso de CT-e referenciado inválida (CNPJ zerado ou digito inválido) | Obrig. | 453 | Rej. |
| **G054e** | Se estiver informado CT-e referenciado (refCTE):<br>- Chave de acesso de CT-e referenciado inválida (modelo diferente de 57) | Obrig. | 454 | Rej. |
| **G054f** | Se estiver informado CT-e referenciado (refCTE):<br>- Chave de acesso de CT-e referenciado inválida (numero CT = 0) | Obrig. | 478 | Rej. |
| **G054g** | Se estiver informado CT-e referenciado (refCTE):<br>- Chave de acesso de CT-e referenciado inválida (Tipo de emissão inválido) | Obrig. | 479 | Rej. |
| **G054h** | Se estiver informado CT-e referenciado (refCTE):<br>- Chave de acesso de CT-e referenciado inválida (UF inválida) | Obrig. | 608 | Rej. |
| **G113a** | Remetente informado: Código do Município inexistente (Tabela Municipios do IBGE) | Obrig. | 532 | Rej. |
| **G121a** | Destinatário informado: Código do Município inexistente (Tabela Municipios do IBGE) | Obrig. | 533 | Rej. |
| **G129a** | Expedidor informado: Código do Município inexistente (Tabela Municipios do IBGE) | Obrig. | 534 | Rej. |
| **G137a** | Recebedor informado: Código do Município inexistente (Tabela Municipios do IBGE) | Obrig. | 535 | Rej. |
| **G145a** | Tomador informado: Código do Município inexistente (Tabela Municipios do IBGE) | Obrig. | 536 | Rej. |
| **G166a** | Código do Município de envio do CT-e inexistente (Tabela Municipios do IBGE) | Obrig. | 537 | Rej. |
| **G168a** | Código do Município de início da prestação inexistente (Tabela Municipios do IBGE) | Obrig. | 541 | Rej. |
| **G170a** | Código do Município de término da prestação inexistente (Tabela Municipios do IBGE) | Obrig. | 542 | Rej. |
| **G181** | Valor a receber (vRec) deve ser menor ou igual ao Valor da Prestação do Serviço (vtPrest) | Obrig. | 531 | Rej. |
