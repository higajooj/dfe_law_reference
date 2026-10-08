# 4 Evento de Confirmação do Serviço de Transporte

<!-- p.11 -->

**Função:** evento que deverá permitir ao contratante confirmar o serviço de transporte.

**Autor do Evento:** O autor é o contratante do MDF-e.

**Código do Tipo de Evento:** 110117 (Exige MDF-e)

**Schema XML:** evConfirmaServMDFe_v9.99.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **HP01** | **evConfirmaServMDFe** | **G** | **-** | **-** | **1-1** |  | **Schema XML de validação do evento de confirmação do serviço de transporte** |
| HP02 | descEvento | E | HP01 | C | 1-1 | 31 | Confirmação Serviço Transporte |
| HP03 | nProt | E | HP01 | N | 1-1 | 15 | Informar o nº do Protocolo de Autorização do MDFe. |
