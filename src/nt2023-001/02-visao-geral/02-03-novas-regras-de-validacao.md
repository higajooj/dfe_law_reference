<!-- p.11 -->
# 2.3. Novas Regras de Validação

<!-- p.12 -->
As Regras de Validação criadas nessa Nota Técnica visam garantir a consistência dos novos campos criados. Estas regras não serão publicadas ao mesmo tempo que o Leiaute (Schema XML) para permitir uma implementação gradual das empresas e dos autorizadores, possibilitando inicialmente o preenchimento dos novos campos para atender a legislação sem maiores complicações.

Para validação de algumas destas regras foi criada a **Tabela de Combustíveis Sujeitos à Tributação Monofásica**. O seu objetivo é facilitar a visualização da obrigatoriedade de preenchimento de campos e de alguns valores para cada produto sujeito a tributação monofásica sobre combustíveis. Os produtos presentes na tabela são identificados conforme o seu Código ANP. Além disso, para a alíquota *ad rem* de cada produto, será criada uma aba com o histórico de valores e a respectiva data de vigência.

A criação desta tabela permite uma melhor parametrização dos ambientes autorizadores e das empresas, e evita que sejam feitas alterações constantes em Notas Técnicas para adequação das regras às novas situações que surgirem. As alterações necessárias na tabela serão feitas via Informe Técnico. A Tabela de Combustíveis Sujeitos à Tributação Monofásica se encontra publicada no Portal Nacional da NF-e, na aba “Documentos” opção “Diversos”.

O prazo para entrada destas regras se encontra na descrição de cada uma delas. Foram criadas as seguintes Regras:

## 2.3.1. Regra de Validação I13-20

Apesar desta regra já existir previamente, a sua descrição foi completamente alterada para que ela fique compatível com a Tabela de Combustíveis Sujeitos à Tributação Monofásica. Por isso receberá o tratamento de nova regra, e somente entrará em vigor na data prevista na sua nova descrição. Ela visa garantir o correto preenchimento da unidade tributária exigida por lei para os combustíveis cujos códigos ANP se encontrem na Tabela de Combustíveis Sujeitos à Tributação Monofásica.

## 2.3.2. Regras de Validação LA17-10 e LA17-20

Estas regras visam controlar o correto preenchimento do índice de mistura do biocombustível (tag: pBio) obrigando ou rejeitando o seu preenchimento conforme o combustível informado. Para isso, o código ANP (tag: cProdANP) informado na nota é confrontado com a coluna “cProdANP” da Tabela de Combustíveis Sujeitos à Tributação Monofásica, com a respectiva coluna “pBio” indicando se o índice deve ou não ser preenchido conforme determinado na descrição das regras.

## 2.3.3. Regra de Validação LA18-10

Esta regra visa obrigar o preenchimento do grupo de origem do combustível (tag: origComb) conforme indicador da coluna “origComb”, a partir da correspondência entre o Código ANP do combustível (tag; cProdANP) informado na nota e a coluna “cProdANP” da Tabela de Combustíveis Sujeitos à Tributação Monofásica.

<!-- p.13 -->
## 2.3.4. Regra de Validação LA21-10

Caso informado o grupo indicador da origem do combustível (tag: origComb), é realizado o somatório dos percentuais originários para a UF (tag: pOrig) informados em cada ocorrência deste grupo para verificar se o total deste somatório é 100.

## 2.3.5. Regras de Validação N12-100 e N12-110

O objetivo destas regras é verificar o correto preenchimento dos novos Códigos de Situação Tributária do ICMS criados pelo Ajuste SINIEF Nº 01/2023. Estes novos códigos somente poderão ser preenchidos quando se tratar de operação com combustíveis sujeitos à tributação monofásica do ICMS. Para isso, é verificado se o código ANP do produto (tag: cProdANP) informado na nota existe na Tabela de Combustíveis Sujeitos à Tributação Monofásica. Caso o código ANP exista na tabela o preenchimento destes CSTs é obrigatório, e caso não exista o seu preenchimento é proibido.

## 2.3.6. Regras de Validação N38-10, N40-10 e N44-10

Estas regras visam validar o valor preenchido para a alíquota *ad rem* do imposto nas diferentes modalidades de tributação monofásica dos combustíveis (próprio, com retenção e retido anteriormente). Para isso, é verificada a correspondência entre o código ANP do produto (tag: cProdANP) informado na nota e a coluna cProdANP da Tabela de Combustíveis Sujeitos à Tributação Monofásica, e a partir daí é validado o valor informado no respectivo campo da alíquota *ad rem* de cada situação tributária com a coluna “adRemICMS” da tabela.

## 2.3.7. Regras de Validação N39-10, N41-10 e N45-10

Estas regras visam garantir a consistência, para cada tipo de tributação monofásica sobre combustíveis, do Valor do ICMS, que deve ser obtido pela multiplicação da quantidade tributável pela alíquota *ad rem* de cada situação tributária.

## 2.3.8. Regras de Validação W06c-10, W06d-10 e W06e-10

O objetivo destas regras é realizar a totalização, respectivamente, do ICMS monofásico próprio, ICMS monofásico sujeito a retenção e do ICMS monofásico retido anteriormente, conforme valores informados nos itens da nota.
