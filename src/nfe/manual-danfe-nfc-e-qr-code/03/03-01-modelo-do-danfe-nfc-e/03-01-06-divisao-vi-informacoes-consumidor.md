# 3.1.6 Divisão VI – Informações sobre o Consumidor

Nesta Divisão deve ser informada a identificação do consumidor no DANFE NFC-e, à direita ou antes da Divisão V, conforme exemplo nas figuras 4 ou 5. Deverá constar uma das seguintes opções, em caixa alta, conforme o caso: “CONSUMIDOR CNPJ:” e o respectivo CNPJ (ID: E02, tag: CNPJ); “CONSUMIDOR CPF:” e o respectivo CPF(ID: E03, tag: CPF); ou “CONSUMIDOR Id. Estrangeiro:” e a respectiva identificação do estrangeiro (ID: E03a, tag: idEstrangeiro), como passaporte, ou documento de identificação do respectivo país. As informações de CNPJ, CPF ou de identificação de estrangeiro somente deverão ser impressas se constarem do arquivo eletrônico da NFC-e em decorrência de NFC-e de valor igual ou superior a R$ 10.000,00 (valor que poderá ser menor, a critério da UF - http://nfce.encat.org/desenvolvedor/regras-de-validacao/), NFC-e para entrega em domicílio ou atendendo pedido de identificação do consumidor.

<!-- p.13 -->

Poderá ser incluída nesta divisão também o nome do consumidor e/ou seu endereço. No caso de emissão de NFC-e com entrega em domicílio é obrigatória a impressão do nome do consumidor e do endereço de entrega.

Na hipótese do consumidor não desejar ser identificado, e em se tratando de NFC-e de valor inferior a R$ 10.000,00 (valor a critério da UF) e que não se refira a entrega em domicílio, deverá ser impressa apenas nesta divisão a mensagem “CONSUMIDOR NÃO IDENTIFICADO”.
