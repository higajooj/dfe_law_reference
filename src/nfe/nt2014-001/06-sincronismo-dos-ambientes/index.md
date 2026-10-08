# 6. Sincronismo dos Ambientes de Autorização: Situações de Exceção

## 6.1 Compartilhamento de Informações entre as SEFAZ e o Ambiente Nacional da Receita Federal

A NF-e e o EPEC são autorizados em ambientes de autorização diferentes e existe um processo de compartilhamento de informações entre as SEFAZ e o Ambiente Nacional mantido pela Secretaria Especial da Receita Federal, que se encarrega de sincronizar estas informações. Portanto:

- A NF-e autorizada em uma SEFAZ Autorizadora é compartilhada com o Ambiente Nacional;
- O EPEC autorizado no Ambiente Nacional é compartilhado com a SEFAZ Autorizadora.

Este processo de compartilhamento acontece também para a UF de destino da operação e para todas as demais UF citadas no documento fiscal.

## 6.2 Sincronismo das Informações

O processo de compartilhamento das informações entre os diferentes ambientes de autorização demora algum tempo para ser efetuado (poucos minutos) e durante este tempo podem ocorrer algumas situações de exceção, conforme segue:

**A. Autorização Simultânea: EPEC e NF-e**

Neste caso a Empresa emitente autoriza simultaneamente, ou com um pequeno atraso, os documentos de:

- EPEC: Autorizado no Ambiente Nacional mantido pela Secretaria Especial da Receita Federal;
- NF-e: Autorizada na SEFAZ Autorizadora, com a mesma Chave Natural do EPEC, mas com o Tipo de Emissão diferente de 4-EPEC.

O documento de EPEC será compartilhado com a SEFAZ do Emitente, causando uma duplicidade de Chave Natural que deverá ser tratada.

<!-- p.18 -->Ocorrida esta situação, a Empresa não conseguirá autorizar uma NF-e com uma Chave de Acesso idêntica à Chave de Acesso do EPEC, resultando em um EPEC pendente de conciliação. Decorrido o prazo, o ambiente de contingência EPEC será bloqueado para este emitente. A empresa deverá rever seus processos internos, evitando ocorrências deste tipo.

Para liberar o uso do Ambiente de Contingência EPEC, a empresa deverá contatar a SEFAZ da sua circunscrição, informando a Chave de Acesso do EPEC pendente de conciliação. Analisado o caso, a SEFAZ poderá decidir por desconsiderar a necessidade de conciliação para este EPEC específico, comandando esta liberação no Ambiente de Contingência EPEC.

**B. Autorização Simultânea: EPEC e Inutilização de Numeração**

Neste caso a Empresa emitente autoriza simultaneamente, ou com um pequeno atraso, os documentos de:

- EPEC: Autorizado no Ambiente Nacional mantido pela Secretaria Especial da Receita Federal;
- Pedido de Inutilização de Numeração: Autorizada na SEFAZ Autorizadora, com a mesma Chave Natural do EPEC.

O documento de EPEC será compartilhado com a SEFAZ do Emitente, causando uma duplicidade de Chave Natural que deverá ser tratada.

Ocorrida esta situação, a Empresa poderá não conseguir autorizar uma NF-e com uma Chave de Acesso idêntica à Chave de Acesso do EPEC, resultando em um EPEC pendente de conciliação. Decorrido o prazo, o ambiente de contingência EPEC será bloqueado para este emitente. A empresa deverá rever seus processos internos, evitando ocorrências deste tipo.

Para liberar o uso do Ambiente de Contingência EPEC, a empresa deverá contatar a SEFAZ de sua circunscrição, informando a Chave de Acesso do EPEC pendente de conciliação. Analisado o caso, a SEFAZ poderá decidir por desconsiderar a necessidade de conciliação para este EPEC específico, comandando esta liberação no Ambiente de Contingência EPEC.
