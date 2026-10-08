<!-- p.56 -->
# 8.9. Armazenamento e Disponibilização do Evento Fisco

O emissor deve manter o arquivo digital do Evento com a informação de Registro do Evento da SEFAZ na forma que segue:

Schema XML: procEventoNFe_v99.99.xsd

| # | Campo | Ele | Pai | Tipo | Descrição/Observação |
|---|---|---|---|---|---|
| **ZR01** | **procEventoNFe** | **Raiz** | **-** | **-** | **TAG raiz** |
| ZR02 | versao | A | ZR01 | N | |
| ZR03 | evento | G | ZR01 | - | |
| YR04 | (dados) | - | - | - | Dados do Evento (mensagem de entrada) |
| YR05 | retEvento | G | ZR01 | - | |
| YR06 | (dados) | - | - | - | Dados do registro do Evento (mensagem de saída) |
