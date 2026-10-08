<!-- p.2 -->
# Histórico de Alterações

## A. Alterações introduzidas na versão 1.10

- Alterado o prazo de implantação da versão em produção para o dia 01/12/2015, por solicitação das empresas;
- Alterado o campo de valor do Encerrante para 3 casas decimais;
- Eliminada regra de validação prevista originalmente para o piloto da NFC-e (RV: A02-10);
- No caso de exportação indireta (CFOP=3.503, 7.501) é obrigatória a informação de Nota Fiscal referenciada (RV: I08-190);
- Para a NFC-e, não deve ser informado o grupo de grupo de exportação (tag:detExport, RV: I50-10);
- Melhor definidas as regras de validação relacionadas com a venda de Combustível pela NFC-e, documentando a obrigatoriedade da informação do grupo de combustível conforme critério da UF (eliminada RV LA01-10 e LA01-30, alterada RV LA01-20);
- Melhor documentada a RV N12a-30, com a aceitação dos CSOSN citados a critério da UF;
- Melhor documentada a RV O09-10, citando o grupo IPINT;
- Na validação do QR-Code da NFC-e, serão aceitos os caracteres hexadecimal em letras maiúsculas ou minúsculas, conforme Manual do DANFE da NFC-e (RV: ZX02-64, ZX02-92, ZX02-116);
- Documentado na validação do QR-Code da NFC-e, que as validações dos parâmetros relacionados com o CSC são opcionais por UF (RV: ZX02-104, ZX02-108, ZX02-120);
- Flexibilizada a implantação em produção de algumas regras de validação, permitindo que elas sejam implementadas pelas empresas em uma data variável, a partir da implantação da NT em produção pela SEFAZ Autorizadora até a data informada na própria regra de validação (data limite = 01/01/2016). Ou seja, a empresa pode implantar as mudanças necessárias em seus aplicativos, dentro deste período informado, em qualquer data a seu critério. As regras de validação com esta flexibilização são: RV I05-20, LA01-20, LA11-10, N12-30, N12a-20, N12a-30, YA04-10, YA04a-10, YA05-10, ZX02-10.

## B. Alterações introduzidas na versão 1.20

- Alterado Anexo XIV, incluindo 3 novos Códigos de Enquadramento Legal para a suspensão do IPI (IPI/cEnq=160, 161, 162);
- Aperfeiçoada a descrição da regra de validação BA10-30 e alterada a mensagem de erro; Alterada a descrição da mensagem de erro da RV I08-190, melhorando a documentação;
- Criada exceção na regra de validação LA11-10 combustíveis GLP;
- Inserida observação na regra de validação LA16-10 para tratar das situações em que o encerrante for zerado durante a venda de combustível;
- Alterado o prazo de implantação das validações relacionadas com os Códigos de Enquadramento Legal do IPI (RV: O06-10 e O09-10);

**Nota**: A regra de validação YA04a-10 será aplicada sempre que informado o grupo “card”.

## C. Alterações introduzidas na versão 1.30

- Alterada a data limite para referenciar NF modelo 1, ou modelo 4 (RV:BA05-10, BA12-10);
- Documentado que a exceção de prazo para a regra de validação LA01-20 se aplica somente para a NFC-e;
<!-- p.3 -->
- Alterada a regra de validação LA11-10, definindo os códigos de produto da ANP que poderão ter controle de Encerrante;
- Por solicitação das empresas, foi alterado o prazo limite para implantação em produção das regras de validação: RV N12-30, N12a-20, N12a-30, YA04-10, YA04a-10, YA05-10, ZX02-10;
- Alterada RVZX02-20 para não validar o uso diferenciado de maiúsculas ou minúsculas no endereço do site disponibilizado pela UF para consulta via QR-Code.

## D. Alterações introduzidas na versão 1.40

- Publicado *Schema* XML, sem alteração de leiaute, tendo-se eliminando do *Schema*:
  - o Relação de CFOP possíveis de usar no item na NF-e (tag:det/prod/CFOP, id:I08);
  - o Relação de CFOP possíveis de usar no grupo de retenção de ICMS de transporte (tag:transp/retTransp/CFOP, id:X16);
  - o Relação de Códigos de País usados para controle do País do destinatário da NF-e (tag:dest/enderDest/cPais, id:E14) e usado também para controle do País da Prestação de Serviços (tag:ISSQN/cPais, id:U15);
- Em substituição as mudanças do *Schema*, foram publicadas no Portal da NF-e algumas tabelas de apoio, conforme segue:
  - o Tabela de CFOP, com indicativo dos CFOP possíveis de uso no item da NF-e (indNFe=1);
  - o Tabela de CFOP idem acima, com indicativo dos CFOP possíveis de uso no grupo de retenção de ICMS de transporte (indTransp=1);
  - o Tabela de CFOP idem acima, com indicativo dos CFOP de devolução de mercadorias (indDevol=1);
  - o Tabela de Códigos de País;
- Na tabela de CFOP citada, foram incluídos novos CFOP relacionados com o “Regime Aduaneiro Especial de Entreposto Industrial (Recof-Sped)”, em implantação pela RFB, conforme segue:

| CFOP | Descrição Resumida |
|---|---|
| 1.212 | Devolução de venda no mercado interno de mercadoria industrializada e insumo importado sob o Regime Aduaneiro Especial de Entreposto Industrial (Recof-Sped) |
| 2.212 | Devolução de venda no mercado interno de mercadoria industrializada e insumo importado sob o Regime Aduaneiro Especial de Entreposto Industrial (Recof-Sped) |
| 3.129 | Compra para industrialização sob o Regime Aduaneiro Especial de Entreposto Industrial (Recof-Sped) |
| 3.212 | Devolução de venda no mercado externo de mercadoria industrializada sob o Regime Aduaneiro Especial de Entreposto Industrial (Recof-Sped) |
| 5.129 | Venda de insumo importado e de mercadoria industrializada sob o amparo do Regime Aduaneiro Especial de Entreposto Industrial (Recof-Sped) |
| 6.129 | Venda de insumo importado e de mercadoria industrializada sob o amparo do Regime Aduaneiro Especial de Entreposto Industrial (Recof-Sped) |
| 7.129 | Venda de produção do estabelecimento ao mercado externo de mercadoria industrializada sob o amparo do Regime Aduaneiro Especial de Entreposto Industrial (Recof-Sped) |
| 7.212 | Devolução de compras para industrialização sob o regime de Regime Aduaneiro Especial de Entreposto Industrial (Recof-Sped) |

- Na tabela de Códigos de País citada, foi incluído o código “200-Curacao”;
- Alterada a RV B26-30 permitindo a emissão da NFA-e (Nota Fiscal Avulsa emitida pelo Fisco) na SVC-SEFAZ Virtual de Contingência;
- Incluídas validações sobre a Chave de Acesso referenciada da NF-e (RV:BA02-10 a BA02-50);
- Incluídas validações sobre a Chave de Acesso referenciada do CT-e (RV:BA19-10 a BA19-44);
- Alterada a RV E03a-20 e E14-20, excluída a RV E03a-50 e E12-20, e incluída a RV I08-94 relacionada com a informação de “idEstrangeiro” na operação interna e interestadual;
- Incluída RV E14-04, passando a ser verificada a existência do Código do País do destinatário, conforme tabela publicada no Portal da NF-e;
<!-- p.4 -->
- Alterada a RV I05-20 para considerar a inclusão do Anexo X.02 com códigos de NCM especiais para tratamento específico do consumo de bordo;
- Incluída RV I08-04 passando a verificar a existência do CFOP, conforme tabela de CFOP publicada no Portal da NF-e;
- Alteradas as RV I08-70 e I50-10 para verificar o tipo de operação pelo Identificador de local de destino (tag idDest) ao invés de utilizar o CFOP;
- Alterada a RV I08-70 para verificar se o destinatário é contribuinte do ICMS pela tag indIEDest=1 e para não efetuar a validação nas operações presenciais e sem frete;
- Excluída a RV I08-80 por ter ficado em duplicidade com a RV I08-70, após a alteração da verificação pela tag idDest ao invés do CFOP;
- Alteradas RV I08-140 e I08-144, passando a verificar a tabela de CFOP, para os CFOP indicados como sendo de devolução, conforme tabela de CFOP publicada no Portal da NF-e;
- Alterada a RV I08-180 para prever a rejeição também pelo CFOP 6.929, além do 5.929;
- Incluída a RV I08-184 para rejeitar a NF-e com Lançamento relativo a Cupom Fiscal (CFOP 5.929 e 6.929) sem documento fiscal referenciado;
- Alterado o prazo limite para implantação em produção da regra de validação RV O09-10;
- Aperfeiçoada a descrição da regra de validação X04-10, considerando também a renumeração dos anexos;
- Incluída RV U15-10 passando a verificar a existência do Código do País na prestação de serviços, conforme tabela de Código de País publicada no Portal da NF-e;
- Incluída RV X16-10 passando a verificar a existência do CFOP de Transporte, conforme tabela de CFOP publicada no Portal da NF-e;
- Postergada a RV 7C21-10, que valida o regime tributário do emitente;
- Renumerado o Anexo X para Anexo X.01, e incluído o Anexo X.02;
- Excluído o Anexo XI.01 porque os códigos de produtos ANP passaram a ser validados diretamente pelas tabelas publicadas pelas fontes oficiais, no site da ANP e Portal Nacional da NF-e;
- Eliminado o Anexo “XIII.01 - CFOP de Devolução de Mercadorias”, que foi substituído por tabela de apoio publicada no Portal da NF-e.

**Nota 1**: Nesta NT está sendo eliminado do *Schema* XML as tabelas de País e CFOP, facilitando futura manutenção nestas tabelas. No momento atual, temos uma limitação de tempo para viabilizar esta mudança, já que os novos CFOP poderão ser informados a partir de 01/04/16. Portanto, foram geradas as alternativas abaixo:

1. Enquanto a SEFAZ Autorizadora não estiver apta a implementar a mudança continuará com a validação do CFOP e País pelo *Schema* XML. Para esta finalidade foi gerada uma versão do *Schema* com os novos códigos de CFOP e código de País, disponibilizado no Portal da NF-e, com o nome de “PL_008i_CFOP_Novo”. Nesta alternativa, os novos CFOP 1.212, 2.212, 3.212 e 7.212 deverão ser considerados como constantes no “Anexo XIII.01 - CFOP de Devolução de Mercadorias”; e
2. A partir do momento em que a SEFAZ Autorizadora implementar a mudança, utilizará o *Schema* XML no Pacote de Liberação “PL_008i1_CFOP_Externo”, e passará a controlar o CFOP e o Código de País por meio das tabelas de códigos disponibilizadas.

O uso de uma ou outra alternativa pela SEFAZ autorizadora é transparente para o contribuinte para a geração de seu arquivo XML; caso exista erro neste arquivo, no caso da alternativa 1 o erro será recusado por meio de uma rejeição de *schema*, enquanto na alternativa 2 ocorrerá uma rejeição com o código específico.

**Nota 2**: Todas as SEFAZ Autorizadora deverão adotar o *Schema* definitivo (“PL_008i1_CFOP_Externo”), até 01/06/16.

<!-- p.5 -->
## E. Alterações introduzidas na versão 1.41

- Aperfeiçoada a redação das mensagens de erro das regras de validação do grupo “BA. Documento Fiscal Referenciado” para esclarecer que o número de ordem constante na mensagem identifica a chave de acesso em que foi encontrado erro conforme sua ocorrência;
- Alterada a regra C18-14 para não permitir inscrição estadual de substituição tributária (IE-ST) nas operações internas.
- Incluída a regra C21-10 para não permitir emitente com código de regime tributário com excesso de sublimite (CRT=2) para a UF.
- Incluído nas regras I04-10, I08-04 e I08-144 uma mensagem complementar na rejeição para mostrar o número do item em que ocorreu a rejeição.
- Aperfeiçoada a redação do texto introdutório que resume as alterações em regras de validação deixando mais clara a intenção da modificação efetuada na RV I08-140;
- Alterada a regra I08-180 para a critério da UF aceitar NF-e (modelo 55) com CFOP 5.929 referenciando uma NFC-e (modelo 65).
- Excluída a regra K01-10 para permitir o grupo de detalhamento específico de medicamentos na NFC-e.
- Incluída a regra YA04a-20 para não permitir o tipo de integração de pagamento como “pagamento não integrado”. Sendo essa nova regra facultativa por UF.
- Incluída a regra ZA01-30 para não permitir o grupo exportação (id: ZA01, tag: exporta) na NFC-e.
- Alteradas para obrigatórias as regras de validação ZX02-24, ZX02-32, ZX02-40, ZX02-60, ZX02-64, ZX02-72, ZX02-80, ZX02-88, ZX02-92, ZX02-100, ZX02-112.
- Alteradas para obrigatórias as regras de validação ZX02-20, ZX02-104, ZX02-108, ZX02-120, mantendo uma observação “Regra de Validação opcional até 01/11/2016, a critério da UF”.
- Incluído nas regras ZX02-20, ZX02-100 e ZX02-104 uma observação incluindo o link do Encat, onde o contribuinte pode obter mais informações sobre o CSC e o QRCODE.
- Incluída a regra ZX02-22 para não permitir QR-Code com sequência de escape para o e-comercial ‘&’.
