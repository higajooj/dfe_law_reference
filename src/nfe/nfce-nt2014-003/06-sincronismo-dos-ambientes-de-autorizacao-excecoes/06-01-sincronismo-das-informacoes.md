<!-- p.17 -->
# 6.1 Sincronismo das Informações

O processo de compartilhamento das informações entre os diferentes ambientes de autorização demora algum tempo para ser efetuado (poucos minutos) e durante este tempo podem ocorrer algumas situações de exceção, conforme segue:

**A. Autorização Simultânea: EPEC e NFC-e**

Neste caso a Empresa emitente autoriza simultaneamente, ou com um pequeno atraso, os documentos de:

- EPEC: Autorizado em contingência na SEFAZ;
- NFC-e: Autorizada em regime normal na SEFAZ Autorizadora, com a mesma Chave Natural do EPEC, mas com o Tipo de Emissão diferente de 4-EPEC.

O documento de EPEC será compartilhado com o ambiente normal de autorização de NFC-e da SEFAZ, causando uma duplicidade de Chave Natural que deverá ser tratada.

Este EPEC deverá ser assinalado com o indicador de "Desconsiderar Conciliação = 1" (desconsiderar a necessidade de conciliação do EPEC), não sendo origem para futuro bloqueio do ambiente de autorização do EPEC para o Emitente.

A ocorrência desta situação ficará registrada em banco de dados e eventualmente a SEFAZ deverá contatar a empresa para que reveja seus processos internos, evitando ocorrências deste tipo.

**B. Autorização Simultânea: EPEC e Inutilização de Numeração**

Neste caso a Empresa emitente autoriza simultaneamente, ou com um pequeno atraso, os documentos de:

- EPEC: Autorizado em contingência na SEFAZ;
- Pedido de Inutilização de Numeração: Autorizado na SEFAZ, com a mesma Chave Natural do EPEC.

O documento de EPEC será compartilhado com o ambiente normal de autorização de NFC-e da SEFAZ, causando uma duplicidade de Chave Natural que deverá ser tratada.

Ocorrida esta situação, a Empresa poderá não conseguir autorizar uma NFC-e com uma Chave de Acesso idêntica à Chave de Acesso do EPEC, resultando em um EPEC pendente de conciliação. Decorrido o prazo, o ambiente de contingência EPEC será bloqueado para este emitente. A empresa deverá rever seus processos internos, evitando ocorrências deste tipo.

Para liberar o uso do Ambiente de Contingência EPEC, a empresa deverá contatar a SEFAZ, informando a Chave de Acesso do EPEC pendente de conciliação. Analisado o caso, a SEFAZ poderá decidir por desconsiderar a necessidade de conciliação para este EPEC específico, comandando esta liberação no Ambiente de Contingência EPEC.
