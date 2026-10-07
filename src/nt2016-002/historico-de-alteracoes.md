<!-- p.4 -->
# Histórico de Alterações

## Alterações introduzidas na versão 1.61

**ATENÇÃO:** Esta versão não traz mudanças para as empresas, apenas corrige alguns detalhes da documentação e do Schema. **As alterações já foram implementadas em homologação e produção.**

- Incluída na coluna Observação do campo Código de Produto da Anvisa (tag: cProdANVISA, id: K01a) a possibilidade de informar o número da Resolução da Diretoria Colegiada da ANVISA (RDC) para medicamentos isentos de registro ANVISA.
- Alterado Schema para as tags de valor do grupo de Fatura (ID: Y02) permitindo a informação do valor com 0 (zero).
- Incluída na coluna Observação da tag: qrCode, id: ZX02 esclarecimento de que não precisa informar o conteúdo da tag qrCode dentro de uma seção CDATA para versão 2 do qrCode.
- Alterado schema para a tag qrCode (id:ZX02) permitindo informar chave de Acesso com tipo de emissão = 1 ou 4 para o qrCode versão 2, já que a SEFAZ-SP mantém a possibilidade de uso do EPEC para a NFC-e.
- Regras de validação N23b-20, N23d-10 e N27b-20 - Implementação Futura.
- Excluído da regra de validação Y01-20 o “Valor do desconto” (tag: vdesc, id:Y05).
- Excluída a regra YA03-10 para NF-e, modelo 55.
- Excluída a regra de validação Y09-10.
- Excluída a regra de validação ZX02-36.
- Excluída a regra de validação ZX03-10.
- Incluída a regra de validação ZX03-20 que foi excluída indevidamente na versão 1.60 desta nota técnica, com vigência para 01/04/2019.
- Correção da mensagem de rejeição da RV N33-10.

## Alterações introduzidas na versão 1.60

- Altera a data de desativação da versão 3.10 para 02-ago-2018.
- Alterado a coluna tamanho do campo I05f “Código de Benefício Fiscal na UF aplicado ao item” (id:I05f).

<!-- p.5 -->
- Criado novo grupo opcional dentro do CST 60 e CST 500 com campos relativos a dados para cálculo da restituição ou complemento da ST.
- Incluída na coluna de observação do campo Número de parcela (tag:nDup, id:Y08), orientação quanto ao correto preenchimento do campo.
- Incluída na coluna de observação do campo Data de vencimento (tag:dVenc, id:Y09), orientação quanto ao correto preenchimento do campo.
- Alterada Descrição do campo e tPag (YA02).
- Alterado coluna observações do Grupo ZX, descrevendo as alterações por versão.
- Alternadas as RV N17b-10 com N10b- 20, N23b-10 com N23b- 20 e N27b-10 com N27b- 20 com o objetivo de melhorar a sequência de aplicação das regras durante a validação do documento.
- Alteradas as regras de validação N23b-20 e N27b-20 para não validar o percentual de FCPST quando UF do destinatário ou UF do local de entrega forem informadas com “EX”.
- Alteração das validações do Grupo ZX- Informações Suplementares da Nota Fiscal.
- Incluída nova exceção à regra de validação X02-20, regra passa a não ser aplicável no caso da NFA-e.
- Incluída a RV Y01-20, validação do preenchimento do Grupo Cobrança.
- Alterado código da mensagem de erro da RV Y05-10 de 895 para 901.
- Alterada RV Y06-10 e código da mensagem de erro de 896 para 902.
- Excluídas as regras de validação Y06-20 e Y06-30.
- Alterada RV Y08-10 e código da mensagem de erro de 857 para 852.
- Alterado código da mensagem de erro da RV Y09-20 de 894 para 900.
- Alterado código da mensagem de erro da RV Y09-30 de 867 para 850.
- Alteradas mensagens de rejeição das RV Y09-10, Y09-20 e Y09-30.
- Alterado código da mensagem de erro da RV Y10-10 de 872 para 851.
- Reativada RV YA02-10, tendo em vista que ainda não foi retirado do schema a opção de duplicata mercantil.
- Incluída RV YA03-30 para validar se informado valor de pagamento quando informado meio de pagamento igual a 90.

## Alterações introduzidas na versão 1.51

<!-- p.6 -->
- Alteração dos prazos de homologação e produção das alterações definidas na versão 1.50 desta NT.

## Alterações introduzidas na versão 1.50

- Inclusão dos prazos de implantação para NFC-e, bem como o prazo de implantação desta versão.
- Campos pGLP, pGNn, pGNi (id: LA03a, LA03b e LA03c) podem ser informados com 4 casas decimais.
- No Grupo N. Grupo de Tributação 40,41,50, inserida opção d na coluna de Observações e a opção 90 =Solicitado pelo fisco no campo Motivo da Desoneração do ICMS (id:N28).
- Alteração na coluna de ocorrência para os campo vBCFCPUFDest, pFCPUFDest e vFCPUFDest do Grupo NA.
- Alteração da descrição e significado dos campos do grupo Y07.
- Inclusão do Campo indPag (id:YA01b) no Grupo YA. Informações de Pagamento.
- Exclusão da modalidade “Duplicata Mercantil” do campo tpag “Meio de Pagamento (id:YA02).
- Alteração das colunas Descrição e Observação do campo ZX03 do local de consulta da URL utilizadas por UF para consulta a chave de acesso da NFC-e.
- Alteração descrição da rejeição 855 na tabela Mensagem de Erro para ficar compatível com a mensagem da regra de validação.
- Nova exceção à regra de validação N12-80, não se aplica nas operações internas na emissão da NFA-e.
- Aplicação da regra N17b-10 deve considerar alíquota do FCP da UF de origem da operação.
- Aplicação das regras N23b-10 ou N27b-10 deve considerar a alíquota FCP da UF de destino.
- Alteração da regra de validação X02-20 para permitir o uso da regra apenas na operação intermunicipal.
- Excluídas as regras de validação YA02-10, YA02-20 e YA07-10.
- Incluída regra de validação YA02-40.
- A regra de validação YA03-10 não se aplica no modelo 55 – NF-e, quando informado 90 (sem pagamento) como Meio de Pagamento.
- Novas regras de validação para o Grupo Y. Dados de Cobrança.

## Alterações introduzidas na versão 1.42

<!-- p.7 -->
- Alteração id do campo vFCP de W04b para W04h.
- Regra de validação N23d-10 passa a ser aplicável a critério de cada UF.

## Alterações introduzidas na versão 1.41

- Alteração das datas de implantação da versão 1.40 e da data de desativação da versão 3.10 da NF-e.

## Alterações introduzidas na versão 1.40

- Exclusão do Campo clEnq (id:O02) “Classe de enquadramento do IPI para Cigarros e Bebidas”.
- Alteração da coluna Observação dos campos cSelo (id:O04) “Código do selo de controle IPI” e cEnq (id:O06) “Código de Enquadramento Legal do IPI”.
- Alteração das regras de validação N17b-10, N23b-10, N27b-10 e N23d-10.
- Regra de validação N27d-10 para implementação futura.
- Inclusão das regras de validação N17b-20, N23b-20 e N27b-20 que impedem que seja informado zero como percentual de FCP ou FCP ST. Os campos relativos ao Fundo de Combate à Pobreza só devem ser informados se o produto estiver sujeito a incidência do mesmo.
- Regra de validação YA02-30 substituída pela regra de validação Y07-10.
- Regra de validação YA03-10 não se aplica a nota fiscal com finalidade de Ajuste e de Devolução.

## Alterações introduzidas na versão 1.31

- Alteração data de entrada em produção para 06 de novembro de 2017.

## Alterações introduzidas na versão 1.30

- Alteração do campo I05d “Indicador de Escala Relevante”, atendendo ao disposto na Cláusula 23 do Convênio ICMS 52/2017.
- Excluída a regra de validação D01c, do grupo de “Validação da Forma da Área de Dados”, para todos os Web Services.
- Alterado o tamanho dos campos LA03a, LA03b e LA03c de 1v4 para 3v4.
- Incluído no campo YA02 “Forma de Pagamento” a opção “15=Boleto Bancário”.

<!-- p.8 -->
- Alterado id do campo qrCode para ZX02.
- Excluído o modelo 65 (NFC-e) da regra de validação N08-10.
- Excluído o modelo 65 (NFC-e) da regra de validação N23d-10.
- Correção da regra de validação NA13-10 com relação ao campo vBCFCPDest.
- Correção das regras de validação N17b-10, N23b-10 e N27b-10.
- Alterada a identificação da regra de validação “YA01-30” para “YA02-04”.
- Alterada regra de validação YA02-30 de forma a obrigar a informação do Grupo Duplicata (id:Y07) apenas se informado Duplicata Mercantil como uma das formas de pagamento.

## Alterações introduzidas na versão 1.20

- Prorrogação do prazo de implantação em homologação para 03 de julho e produção para 02 de outubro de 2017.
- Inclusão dos campos I05d e I05e no Grupo I – Produtos e Serviços da NF-e, atendendo ao disposto na Cláusula 23 do Convênio ICMS 52/2017. Neste grupo também foi criado o campo I05f “Código de Benefício Fiscal na UF aplicado ao item” permitindo informar por item o mesmo código de benefício adotado na EFD.
- Número de ocorrência do Grupo Rastreabilidade do Produto alterada para 0-500.
- Inclusão do campo Código de Agregação (id:I85) no Grupo rastreabilidade do Produto.
- ID do campo pST alterado de N26.1 para N26a nos grupos ICMS60 e ICMSSN500.
- ID do campo vICMSDeson alterado de N27a para N28a nos grupos ICMS20, ICMS 30, ICMS40, ICMS70 e ICMS90.
- Inserido campos relativos ao FCP para operação própria nos grupos ICMS10 e ICMS 70 com o objetivo de atender a legislação de alguns estados.
- Inclusão do campo ZX03 no Grupo ZX. Informações Suplementares da Nota Fiscal, com o objetivo de validar a URL de consulta por chave de acesso que aparece no DANFE NFC-e.
- ID do campo W04h alterado para W04b.
- Regra de validação I05e-10, se informado item com campo indEscala=N – Não Relevante (id:I05d) então deve ser informado CNPJ do Fabricante (I05e). Regra de validação I05e-20, CNPJ do Fabricante informado incorretamente.

<!-- p.9 -->
- Regra de validação N17c-20 se aplica apenas ao modelo 55, excluído da regra do modelo 65. E código de rejeição desta validação passa a ser 876.
- Regras de validação N17c-10 e N23d-10 alteradas em função da inclusão dos campos relativos ao FCP para operação própria nos Grupos ICMS10 e 70.
- Regras de validação N28-30 e W04a-10 alteradas em função da mudança do ID do campo vICMSDeson para N28a.
- Novas regras de validação para o Grupo ZX. Informações Suplementares da Nota Fiscal, RV ZX03-10 e ZX03-20.

## Alterações introduzidas na versão 1.10

- Prorrogação do prazo de desativação da versão anterior da NFe para 02 de abril de 2018.
- Alteração do item 2.3 com inclusão da tabela de padronização dos Web Services.
- Grupo N – criado o Grupo “sequência xml” para todos os CST com campos relativos ao FCP.
- Alteração da Descrição do campo alíquota do imposto, tag: pICMS e pICMSST, nos casos em que existe o grupo ‘Sequência xml” para informação do FCP.
- Alteração da Descrição do campo vBCFCPST (id:N23a).
- Correção do campo “Valor da Base de Cálculo do FCP Retido anteriormente” para id:N27a no grupo ICMS60.
- Alteração do campo pST (Alíquota Suportada pelo Consumidor Final) que deve ser informado no grupo ICMS60 nas operações sujeitas ou não ao FCP.
- Correção do registro Pai do campo vIPIDevol (id:W12a).
- Grupo YA “Informações de Pagamento” passa a ser de preenchimento obrigatório.
- Alteração da descrição do grupo “id: YA01a” para “Grupo Detalhamento da Forma de Pagamento”.
- Inserido no campo “Forma de Pagamento” (id: YA02) a opção “90=Sem Pagamento”.
- Excluídas as regras de validação LA02-20 e LA02-30.
- Correção do id do campo vBCFCPSTRet na regra de validação N27d-10.
- Excluído modelo 65 da regra de validação N23b-10 e N17c-20.

<!-- p.10 -->
- Excluída regra de validação W16-70.
- Excluída a regra de validação YA01-20 e alterada a regra YA01-30.
