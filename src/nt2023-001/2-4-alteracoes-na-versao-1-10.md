<!-- p.13 -->
# 2.4. Alterações na versão 1.10

## 2.4.1. Criação dos campos indicadores da Base de Cálculo do ICMS monofásico (campos: qBCMono, qBCMonoReten , qBCMonoRet e qBCMonoDif)

<!-- p.14 -->
Estes campos visam permitir a indicação da Base de Cálculo do ICMS monofásico para cada uma das situações tributárias existentes.

## 2.4.2. Criação dos campos totalizadores das Bases de Cálculo do ICMS monofásico (campos: qBCMono, qBCMonoReten , qBCMonoRet) no Grupo W. Total da NF-e.

Campos criados para realizar a totalização os valores das Bases de Cálculo do ICMS monofásico informadas nos itens da NF-e. Estes campos possuem preenchimento facultativo para evitar erros de schema neste momento.

## 2.4.3. Criação dos campos pRedAdRem (id: N47) e motRedAdRem (id: N48)

Estes campos devem ser preenchidos quando houver algum Percentual de redução do valor da alíquota *ad rem*, juntamente com o indicador do motivo desta redução.

## 2.4.4. Alteração da regra de Validação I13-20

Criada exceção nesta regra para operações de comércio exterior, permitindo que sejam informadas unidades tributárias específicas de exportação.

## 2.4.5. Criação da Regra de Validação LA18-20

A regra LA18-20 visa obrigar o preenchimento do grupo de origem do combustível (tag: origComb) se preenchido um dos campos Percentual de Gás Natural Nacional – GLGNn para o produto GLP (tag: pGNn) ou Percentual de Gás Natural Importado – GLGNi para o produto GLP (tag: pGNi) com valor diferente de “0”.

## 2.4.6. Criação da Regra de Validação LA18-30

Esta regra visa proibir o preenchimento do grupo indicador da origem do combustível (tag:origComb) para produtos que não estejam presentes na Tabela de Combustíveis Sujeitos à Tributação Monofásica.

## 2.4.7. Criação da Regra de Validação LA21-20

Para os produtos com os códigos ANP 210203001, 210203003, 210203004, 210203005, caso informado o grupo indicador da origem do combustível (tag: origComb), o somatório dos percentuais originários para a UF (tag: pOrig) deverá ser feito por opção “0” ou “1” informada no campo indicador de importação (tag: indImport). O somatório de cada opção, se informada, deverá totalizar 100.

## 2.4.8. Alteração da Regra de Validação N12-110

Adicionada exceção à esta regra para permitir também a utilização dos CSTs 40, 41 e 50.

<!-- p.15 -->
## 2.4.9. Alteração das Regras de Validação N39-10, N41-10 e N45-10

Estas regras foram alteradas para considerar a respectiva Base de Cálculo de cada situação tributária no cálculo do ICMS monofásico correspondente. Além disso, a Regra N41-10 teve sua redação corrigida para considerar o CST correto (CST = 15).

## 2.4.10. Revogação das Regras de Validação N38-10, N40-10 e N44-10

Estas regras visavam validar o valor informado na alíquota *ad rem* de cada situação tributária do imposto com o valor definido pelo Convênio ICMS 199/2022. No entanto, por se tratar ainda de um período de transição e para melhor análise do impacto em alterações futuras de alíquotas, foram revogadas para posterior reavaliação.

## 2.4.11. Criação das Regras de Validação W06b.1-10, W06c.1-10, W06d.1-10

O objetivo destas regras é verificar a correta totalização dos valores das quantidades tributadas informadas nos itens da NF-e.
