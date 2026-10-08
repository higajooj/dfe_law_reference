# 3.4 Leiaute do Modal Aquaviário

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| 1 | **aquav** | **G** | **0** | | **1 - 1** | | **Informações do modal Aquaviário** <!-- p.42 --> |
| 2 | irin | E | 1 | C | 1 - 1 | 1 - 10 | Irin do navio sempre deverá ser informado |
| 3 | tpEmb | E | 1 | C | 1 - 1 | 2 | Código do tipo de embarcação. *ER:* ER33. Preencher com código da Tabela de Tipo de Embarcação definida no Ministério dos Transportes |
| 4 | cEmbar | E | 1 | C | 1 - 1 | 1 - 10 | Código da embarcação. *ER:* ER35 |
| 5 | xEmbar | E | 1 | C | 1 - 1 | 1 - 60 | Nome da embarcação. *ER:* ER35 |
| 6 | nViag | E | 1 | C | 1 - 1 | 1 - 10 | Número da Viagem. *ER:* ER68 |
| 7 | cPrtEmb | E | 1 | C | 1 - 1 | 1 - 5 | Código do Porto de Embarque. *ER:* ER35. Preencher de acordo com Tabela de Portos definida no Ministério dos Transportes |
| 8 | cPrtDest | E | 1 | C | 1 - 1 | 1 - 5 | Código do Porto de Destino. *ER:* ER35. Preencher de acordo com Tabela de Portos definida no Ministério dos Transportes |
| 9 | prtTrans | E | 1 | C | 0 - 1 | 1 - 60 | Porto de Transbordo. *ER:* ER35 |
| 10 | tpNav | E | 1 | N | 0 - 1 | 1 | Tipo de Navegação. *Dom.:* D18. Preencher com: 0 - Interior; 1 - Cabotagem |
| 11 | **infTermCarreg** | **G** | **1** | | **0 - 5** | | **Grupo de informações dos terminais de carregamento.** |
| 12 | cTermCarreg | E | 2 | C | 1 - 1 | 1 - 8 | Código do Terminal de Carregamento. *ER:* ER35. Preencher de acordo com a Tabela de Terminais de Carregamento. O código de cada Porto está definido no Ministério de Transportes. |
| 13 | xTermCarreg | E | 2 | C | 1 - 1 | 1 - 60 | Nome do Terminal de Carregamento. *ER:* ER35 |
| 14 | **infTermDescarreg** | **G** | **1** | | **0 - 5** | | **Grupo de informações dos terminais de descarregamento.** |
| 15 | cTermDescarreg | E | 2 | C | 1 - 1 | 1 - 8 | Código do Terminal de Descarregamento. *ER:* ER35. Preencher de acordo com a Tabela de Terminais de Descarregamento. O código de cada Porto está definido no Ministério de Transportes. |
| 16 | xTermDescarreg | E | 2 | C | 1 - 1 | 1 - 60 | Nome do Terminal de Descarregamento. *ER:* ER35 |
| 17 | **infEmbComb** | **G** | **1** | | **0 - 30** | | **Informações das Embarcações do Comboio** |
| 18 | cEmbComb | E | 2 | C | 1 - 1 | 1 - 10 | Código da embarcação do comboio. *ER:* ER35 <!-- p.43 --> |
| 19 | xBalsa | E | 2 | C | 1 - 1 | 1 - 60 | Identificador da Balsa. *ER:* ER35 |
| 20 | **infUnidCargaVazia** | **G** | **1** | | **0 - n** | | **Informações das Unidades de Carga vazias** |
| 21 | idUnidCargaVazia | E | 2 | C | 1 - 1 | 1 - 20 | Identificação das unidades de carga vazia. *ER:* ER56 |
| 22 | tpUnidCargaVazia | E | 2 | N | 1 - 1 | 1 | Tipo da unidade de carga vazia. *Dom.:* D9. *ER:* ER35. 1 - Container; 2 - ULD; 3 - Pallet; 4 - Outros; |
| 23 | **infUnidTranspVazia** | **G** | **1** | | **0 - n** | | **Informações das Unidades de Transporte vazias** |
| 24 | idUnidTranspVazia | E | 2 | C | 1 - 1 | 1 - 20 | Identificação das unidades de transporte vazia. *ER:* ER56 |
| 25 | tpUnidTranspVazia | E | 2 | N | 1 - 1 | 1 | Tipo da unidade de transporte vazia. *Dom.:* D6. *ER:* ER35. Deve ser preenchido com "1" para Rodoviário Tração do tipo caminhão ou "2" para Rodoviário reboque do tipo carreta |
