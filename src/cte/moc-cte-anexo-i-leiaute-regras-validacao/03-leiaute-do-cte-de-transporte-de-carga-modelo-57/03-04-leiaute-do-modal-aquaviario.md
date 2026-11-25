<!-- p.79 -->

# 3.4. Leiaute do Modal Aquaviário

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| 1 | **aquav** | **G** | **0** | | **1 - 1** | | **Informações do modal Aquaviário** |
| 2 | vPrest | E | 1 | C | 1 - 1 | 13, 2 | Valor da Prestação Base de Cálculo do AFRMM. *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 3 | vAFRMM | E | 1 | C | 1 - 1 | 13, 2 | AFRMM (Adicional de Frete para Renovação da Marinha Mercante). *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 4 | xNavio | E | 1 | C | 1 - 1 | 1 - 60 | Identificação do Navio. *ER:* ER36. |
| 5 | **balsa** | **G** | **1** | | **0 - 3** | | <!-- p.80 -->**Grupo de informações das balsas** |
| 6 | xBalsa | E | 2 | C | 1 - 1 | 1 - 60 | Identificador da Balsa. *ER:* ER36. |
| 7 | nViag | E | 1 | C | 0 - 1 | 1 - 10 | Número da Viagem. *ER:* ER67. |
| 8 | direc | E | 1 | C | 1 - 1 | 1 | Direção. *Dom.:* D46. Preencher com: N-Norte, L-Leste, S-Sul, O-Oeste |
| 9 | irin | E | 1 | C | 1 - 1 | 1 - 10 | Irin do navio sempre deverá ser informado |
| 10 | **detCont** | **G** | **1** | | **0 - n** | | **Grupo de informações de detalhamento dos conteiners**<br>**(Somente para Redespacho Intermediário e Serviço Vinculado a Multimodal)** |
| 11 | nCont | E | 2 | C | 1 - 1 | 1 - 20 | Identificação do Container. *ER:* ER49. |
| 12 | **lacre** | **G** | **2** | | **0 - 3** | | **Grupo de informações dos lacres dos cointainers da qtde da carga** |
| 13 | nLacre | E | 3 | C | 1 - 1 | 1 - 20 | Lacre. *ER:* ER36. |
| 14 | **infDoc** | **G** | **2** | | **0 - 1** | | **Informações dos documentos dos conteiners** |
| 15 | **infNF** | **CG** | **3** | | **1 - n** | | **Informações das NF** |
| 16 | serie | E | 4 | C | 1 - 1 | 1 - 3 | Série. *ER:* ER36. |
| 17 | nDoc | E | 4 | C | 1 - 1 | 1 - 20 | Número. *ER:* ER36. |
| 18 | unidRat | E | 4 | C | 0 - 1 | 3, 2<br>3, 3 | Unidade de medida rateada (Peso,Volume). *ER:* ER14. 5 posições, sendo 3 inteiras e 2 a 3 casas decimais. |
| 19 | **infNFe** | **CG** | **3** | | **1 - n** | | **Informações das NFe** |
| 20 | chave | E | 4 | C | 1 - 1 | 44 | Chave de acesso da NF-e. *ER:* ER4. |
| 21 | unidRat | E | 4 | C | 0 - 1 | 3, 2<br>3, 3 | Unidade de medida rateada (Peso,Volume). *ER:* ER14. 5 posições, sendo 3 inteiras e 2 a 3 casas decimais. |
| 22 | tpNav | E | 1 | N | 0 - 1 | 1 | Tipo de Navegação. *Dom.:* D18. Preencher com:<br>0 - Interior;<br>1 - Cabotagem |
