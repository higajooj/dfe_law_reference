<!-- p.81 -->

# 3.6. Leiaute do Multimodal

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| 1 | **multimodal** | **G** | **0** | | **1 - 1** | | **Informações do Multimodal** |
| 2 | COTM | E | 1 | C | 1 - 1 | 1 - 20 | Número do Certificado do Operador de Transporte Multimodal. *ER:* ER36. |
| 3 | indNegociavel | E | 1 | N | 1 - 1 | 1 | Indicador Negociável. *Dom.:* D18. Preencher com: 0 - Não Negociável; 1 - Negociável |
| 4 | **seg** | **G** | **1** | | **0 - 1** | | **Informações de Seguro do Multimodal** |
| 5 | **infSeg** | **G** | **2** | | **1 - 1** | | **Informações da seguradora** |
| 6 | xSeg | E | 3 | C | 1 - 1 | 1 - 30 | Nome da Seguradora. *ER:* ER36. |
| 7 | CNPJ | E | 3 | C | 1 - 1 | 14 | Número do CNPJ da seguradora. *ER:* ER8. Obrigatório apenas se responsável pelo seguro for (2) responsável pela contratação do transporte - pessoa jurídica |
| 8 | nApol | E | 2 | C | 1 - 1 | 1 - 20 | Número da Apólice. *ER:* ER36. Obrigatório pela lei 11.442/07 (RCTRC) |
| 9 | nAver | E | 2 | C | 1 - 1 | 1 - 20 | Número da Averbação. *ER:* ER36. Não é obrigatório, pois muitas averbações ocorrem após a emissão do CT, mensalmente, por exemplo. |
