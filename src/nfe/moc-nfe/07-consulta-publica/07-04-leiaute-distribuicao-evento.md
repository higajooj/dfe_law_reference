<!-- p.127 -->

# 7.4. Leiaute de Distribuição: Evento da NF-e

Deverão ser disponibilizados para o destinatário os dados do Evento enviados para a SEFAZ, acrescentados os dados da homologação deste Evento.

**Tabela 7-1 – Leiaute de Distribuição: Evento da NF-e**

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| ZR01 | procEventoNFe | Raiz | - | - | - | - | TAG raiz |
| ZR02 | versao | A | ZR01 | N | 1-1 | 1-2v2 | |
| ZR03 | evento | G | ZR01 | xml | 1-1 | - | |
| ZR04 | (dados) | - | - | - | - | - | Dados do Evento |
| ZR05 | retEvento | G | ZR01 | xml | 1-1 | - | |
| ZR06 | (dados) | - | - | - | - | - | Dados da homologação do Evento |

No caso de troca de arquivo entre as empresas, é sugerida a adoção do nome do arquivo como segue:

<!-- p.128 -->

`<999...999>_<888888>-procEventoNFe.xml`

Onde:

- <999...999>: corresponde a Chave de Acesso da NF-e;
- <888888>: identifica o tipo de evento (CC-e=110110, Cancelamento=110111, etc.)
- “-procEventoNFe”: identifica o processamento do documento autorizado.
