<!-- p.5 -->
# 2.2. Alterações de Regras de Validação

## 2.2.1. Criação das Regras de Validação BA02a-10, BA02a-20, BA02a-30, BA02a-40, BA02a-50, BA02a-60, BA02a-70, BA02a-80, BA02a-90, BA02a-100

Essas regras visam garantir a consistência da Chave Referenciada com código numérico zerado (tag: refNFeSig) além de evitar que esse referenciamento aconteça em uma NF-e com finalidade diferente de normal.

## 2.2.2. Alteração das Regras de Validação: C02a-04, C02a-08, C02a-14

Atualmente existe um controle das SEFAZ no credenciamento individual para emissão da Nota Fiscal pelos Contribuintes Pessoa Física (CPF). Eliminadas as Regras de Validação que controlam a opção da UF em aceitar ou não a emissão de Nota Fiscal para os Contribuintes emitentes Pessoa Física.

## 2.2.3. Criação da Regra de Validação I08-186

O objetivo desta regra é impedir o referenciamento de ECF em uma NF-e com CFOP 5929 ou 6929, uma vez que em algumas unidades federadas o ECF já foi completamente substituído por NFC-e e não existe mais a possibilidade de seu referenciamento para estas operações.

## 2.2.4. Alteração das Regras de Validação: I08-194 e I08-198

Algumas SEFAZ concedem IE para não Contribuinte do ICMS, mas limitam a emissão de NF-e de venda unicamente pelo Emissor de Nota Fiscal Avulsa disponibilizado pela própria SEFAZ.

## 2.2.5. Alteração da Regra de Validação: N17c-30

Conforme a legislação estadual, algumas SEFAZ controlam a informação dos valores vinculados ao Fundo de Combate à Pobreza (FCP) no processo de apuração do imposto, impedindo essa informação individualizada em cada NF-e.

## 2.2.6. Alteração da Regra de Validação: ZD02-10

Melhorada a documentação da RV, efetuando a validação unicamente se a informação do CNPJ do Responsável Técnico for informada.

<!-- p.6 -->
## 2.2.7. Criação da Regra de Validação 3BA02a-10

Regra de validação para verificar a existência da Chave Referenciada com código numérico zerado na base de dados de NF-e da UF emitente do documento.

## 2.2.8. Alteração da Regra de Validação: 7C21-10

A RV 7C21-10 controla a informação na Nota Fiscal do CRT ou CSOSN, conforme o cadastro do Contribuinte na SEFAZ. Alterada esta Regra de Validação para ser opcional por UF.
