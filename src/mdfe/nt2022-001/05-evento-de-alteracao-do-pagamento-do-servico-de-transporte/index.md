# 5 Evento de Alteração do Pagamento do Serviço de Transporte

<!-- p.12 -->

**Função:** evento que deverá permitir ao transportador modificar os dados do pagamento do serviço de transporte em relação a um contratante nos casos em que for necessário.

**Autor do Evento:** O autor é o emitente do MDF-e.

**Implantação:** 06/06/2022

**Código do Tipo de Evento:** 110118 (Exige MDF-e)

**Schema XML:** evAlteracaoPagtoServMDFe_v9.99.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **HP01** | **evAlteracaoPagtoServMDFe** | **G** | **-** | **-** | **1-1** |  | **Schema XML de validação do evento de alteração do pagamento do serviço de transporte** |
| HP02 | descEvento | E | HP01 | C | 1-1 | 31 | Alteração Pagamento Serviço MDFe |
| HP03 | nProt | E | HP01 | N | 1-1 | 15 | Informar o nº do Protocolo de Autorização do MDFe. |
| **HP04** | **infPag** | **G** | **HP01** | **-** | **1 - 1** |  | **Grupo de Informações dos pgto do MDFe** |
| HP05 | xNome | E | HP04 | C | 0 – 1 | 2 - 60 | Nome do contratante |
| HP06 | CPF | CE | HP04 | N | 1 – 1 | 11 | Número do CPF do contratante do serviço |
| HP07 | CNPJ | CE | HP04 | N | 1 – 1 | 14 | Número do CNPJ do contratante do serviço |
| HP08 | idEstrangeiro | CE | HP04 | C | 1 – 1 | 2 - 20 | Identificador do contratante em caso de contratante estrangeiro |
| **HP09** | **Comp** | **G** | **HP04** | **-** | **1 - n** |  | **Componentes do Pagamento do Frete** |
| HP10 | tpComp | E | HP09 | N | 1 – 1 | 2 | Tipo do Componente:<br>01 - Vale Pedágio<br>02 - Impostos, taxas e contribuições<br>03 - Despesas (bancárias, meios de pagamento, outras)<br>99 – Outros |
| HP11 | vComp | E | HP09 | N | 1 – 1 | 13, 2 | Valor do Componente |
| HP12 | xComp | E | HP09 | C | 0 – 1 | 2 - 60 | Descrição do componente do tipo outros |
| HP13 | vContrato | E | HP04 | N | 1 – 1 | 13, 2 | Valor total do contrato |
| HP14 | indPag | E | HP04 | N | 1 – 1 | 1 | Indicador da Forma de Pagamento:<br>0-Pagamento à Vista;<br>1-Pagamento à Prazo. |
| HP15 | vAdiant | E | HP04 | N | 0 – 1 | <!-- REVISAR p.12: Tam. de vAdiant aparece como "1" no original (esperado "13, 2", como na Seção 2, item 37); transcrito literalmente --> 1 | Valor do Adiantamento<br>Informar apenas para pgto a Prazo |
| HP16 | indAntecipaAdiant | E | HP04 | N | 0 – 1 | 1 | Informar a tag somente se for autorizado antecipar o adiantamento |
| **HP17** | **infPrazo** | **G** | **HP04** | **-** | **0 – n** |  | **Informações do pagamento a prazo.**<br>**Obs:** Informar somente se indPag for à Prazo |
| HP18 | nParcela | E | HP17 | N | 1 – 1 | 3 | Número da parcela |
| HP19 | dVenc | E | HP17 | D | 1 – 1 | 10 | Data de vencimento da Parcela (AAAA-MM-DD) |
| HP20 | vParcela | E | HP17 | N | 1 – 1 | 13, 2 | Valor da parcela |
| HP21 | tpAntecip | E | HP04 | N | 0 – 1 | 1 | Tipo de Permissão em relação a antecipação das parcelas<br>0 - Não permite antecipar;<br>1 - Permite antecipar as parcelas;<br>2 - Permite antecipar as parcelas mediante confirmação. |
| **HP22** | **infBanc** | **G** | **HP04** | **-** | **1 – 1** |  | **Informações bancárias.** |
| # | ----- X ---- | CE | HP04 | --- | 1 - 1 |  | <!-- REVISAR p.12: linha "----- X ----" (sequência XML do grupo de dados bancários) sem Pai/Tipo legíveis no original; transcrito conforme a posição do texto --> Sequência XML |
| HP24 | codBanco | CE | HP04 | C | 1 – 1 | 3 - 5 | Número do banco |
| HP25 | codAgencia | CE | HP04 | C | 1 – 1 | 1 – 10 | Número da Agência |
| HP26 | CNPJIPEF | CE | HP04 | N | 1 - 1 | 14 | Número do CNPJ da Instituição de pagamento Eletrônico do Frete |
| HP27 | <!-- p.13 -->PIX | CE | HP04 | C | 1 – 1 | 2 - 60 | Informar a chave PIX para recebimento do frete. Pode ser email, CPF/ CNPJ (somente números), Telefone com a seguinte formatação (+5599999999999) ou a chave aleatória gerada pela instituição. |
