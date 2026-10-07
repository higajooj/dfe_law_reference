<!-- p.7 -->
# 2.2 Sobre a Chave Natural da NF-e e da NFC-e

~~A Chave Natural da NF-e é composta pelos campos de UF, CNPJ do Emitente, Série e Número da NF-e, além do modelo do documento fiscal eletrônico. O Sistema de Autorização de Uso da SEFAZ valida a existência de uma NF-e previamente autorizada e rejeita novos pedidos de autorização para NF-e com duplicidade da Chave Natural.~~

~~Este conceito se mantém, considerando também a possibilidade da informação do CPF do emitente, ao invés do CNPJ na Chave de Acesso / Chave Natural da NF-e.~~

> **Revogado/Descontinuado:** dois parágrafos riscados na fonte (definição da chave natural com CNPJ do emitente).

A legislação determina que a identificação única de uma nota fiscal para efeitos tributários é feita pelos seguintes conjuntos de informações, que são um subconjunto das informações existentes na chave de acesso:

- **NF-e**: UF, CNPJ ou CPF do Emitente, Série e Número da NF-e, modelo do documento fiscal eletrônico e ambiente de autorização.
- **NFC-e**: UF, CNPJ do Emitente, Série e Número da NF-e, modelo do documento fiscal eletrônico e tipo de emissão.

Estes conjuntos de informações, que formam um subconjunto das informações presentes na chave de acesso, recebem a denominação de “chave natural”

<!-- p.8 -->
O Ajuste SINIEF 19/19 incluiu o tipo de emissão, que é informado pelo emitente no campo tpEmis (id: B22), entre as características que identificam de forma única uma NFC-e.

No caso da NF-e o ambiente de autorização, ou ambiente autorizador, também é escolhido pelo emitente no momento da solicitação da autorização de uso, sendo informado no mesmo campo, como pode ser visto na tabela a seguir:

| tpEmis | Significado | Ambiente autorizador |
|---|---|---|
| 1 | Emissão normal (não em contingência) | Normal |
| 2 | Contingência FS-IA, com impressão do DANFE em Formulário de Segurança - Impressor Autônomo | Não utilizado na NF-e |
| 3 | Contingência SCAN (Sistema de Contingência do Ambiente Nacional) \*Desativado \* NT 2015/002 | Não utilizado na NF-e |
| 4 | Contingência EPEC (Evento Prévio da Emissão em Contingência) | Normal |
| 5 | Contingência FS-DA, com impressão do DANFE em Formulário de Segurança - Documento Auxiliar | Normal |
| 6 | Contingência SVC-AN (SEFAZ Virtual de Contingência do AN) | Sefaz Virtual de Contingência |
| 7 | Contingência SVC-RS (SEFAZ Virtual de Contingência do RS) | Sefaz Virtual de Contingência |
| 9 | Contingência off-line da NFC-e | Não utilizado na NF-e |

O Sistema de Autorização de Uso da SEFAZ valida a existência de uma NF-e previamente autorizada e rejeita:

- Novos pedidos de autorização para NF-e caso seja identificada duplicidade de Chave Natural; e
- Pedidos de autorização enviados para o ambiente autorizador errado, de acordo com a tabela acima.
