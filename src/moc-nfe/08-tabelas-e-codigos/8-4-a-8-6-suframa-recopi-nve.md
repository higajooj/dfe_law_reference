<!-- p.132 -->
# 8.4. Identificador: Inscrição SUFRAMA

## 8.4.1. Composição do Identificador de Inscrição SUFRAMA

A SUFRAMA mantém controle sobre as empresas com incentivo fiscal, identificando-as através de um número de "Inscrição SUFRAMA", com a seguinte composição:

- SS.NNNN.LLD

Onde:

- SS=Código do setor de atividade da empresa, conforme exemplos abaixo:
  - 01 e 02=Cooperativa;
  - 10 e 11=Comércio;
  - 20=Indústria com Projeto Pleno;
  - 60=Serviços
- NNNN=Número sequencial;
- LL=Código da localidade da Unidade Administrativa da Suframa que habilitou a empresa, conforme exemplos abaixo:
  - 01=Manaus
  - 10=Boa Vista
<!-- p.133 -->
  - 30=Porto Velho
- D=Dígito Verificador

## 8.4.2. Validação Possível do Identificador de Inscrição SUFRAMA

- Campo: Numérico, com 8 ou 9 posições
  - Considerar que “SS” pode começar por "0", mas não pode ser "00"
- D: Dígito Verificador, Módulo 11, Pesos de 2 a 9
  - considerar DV=0 se o resto da divisão for “0” ou “1”

## 8.4.3. Exemplo de Cálculo do Dígito Verificador do Identificador de Inscrição SUFRAMA

| A. CÓDIGO SUFRAMA | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| B. PESOS | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 |
| C. PRODUTOS (A * B) | 9 | 16 | 21 | 24 | 25 | 24 | 21 | 16 |

- O somatório dos produtos é: 16 + 21 + 24 + 25 + 24 + 21 + 16 + 9 = 156
- Dividindo o somatório por 11 teremos: 156 / 11 = 14, com resto valendo 2
- Considerar: 11 – (resto da divisão), portanto: 11 – 2 = 9
- Neste caso, o Dígito Verificador = 9

# 8.5. Identificador: RECOPI

O CONFAZ instituiu o "Sistema de Registro e Controle das Operações com o Papel Imune Nacional", denominado RECOPI NACIONAL, de uso opcional por UF, que disciplina o credenciamento do contribuinte que realize operações com papel destinado à impressão de livro, jornal ou periódico. O contribuinte credenciado deve registrar previamente cada operação com papel destinado à impressão, obtendo o "número de registro de controle da operação", denominado de número do RECOPI nesta especificação. O Sistema RECOPI Nacional é disponibilizado pela SEFAZ-SP.

## 8.5.1. Composição do Identificador RECOPI

O número do RECOPI contém um timestamp gerado pelo sistema e a composição deste identificador é:

- aaaammddHHMMSSffffDD

Onde:

- aaaammdd= Ano, mês e dia da autorização do sistema RECOP;
- hhmmssffff= Hora, minuto, segundo da autorização do sistema RECOPI, com mais 4 dígitos da fração de segundo
- DD= Dígitos Verificadores

## 8.5.2. Validação Possível

- Campo: Numérico, com 20 posições fixas
- aaaa: Ano maior do que o ano atual, ou menor do que 2013
<!-- p.134 -->
- mm: Mês válido, não pode ser maior do que o Ano-Mês atual
- dd: Dia válido para o ano-mês do timestamp
- HHMMSS: Hora, minuto, segundos válidos
- DD: Dígitos verificadores, módulo 11
  - DV-1: Módulo 11, Pesos de 1 a 18 (caso o resto da divisão por 11 seja 0 ou 1, DV = 0)
  - DV-2: Módulo 11, Pesos de 1 a 19, considerando o D1 calculado acima (caso o resto da divisão por 11 seja 0 ou 1, DV = 0)

## 8.5.3. Exemplo de Cálculo do Dígito Verificador

Número de exemplo: 201311061146097343-DD  
Cálculo do DV-1:

| A. IDENTIFICADOR | 2 | 0 | 1 | 3 | 1 | 1 | 0 | 6 | 1 | 1 | 4 | 6 | 0 | 9 | 7 | 3 | 4 | 3 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| B. PESOS | 18 | 17 | 16 | 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 |
| C. PRODUTOS (A * B) | 36 | 0 | 16 | 45 | 14 | 13 | 0 | 66 | 10 | 9 | 32 | 42 | 0 | 45 | 28 | 9 | 8 | 3 |

- O somatório dos produtos é: 36+0+16+45+14+13+0+66+10+9+32+42+0+45+28+9+8+3 = 376
- Dividindo o somatório por 11 teremos: 376 / 11 = 34, com resto valendo 2
- Considerar: 11 – (resto da divisão), portanto: 11 – 2 = 9
- Neste caso, o Dígito Verificador 1 = 9

Cálculo do DV-2:  
Repetir o processo anterior, usando agora os 19 dígitos existentes, incluindo o DV1 recém-calculado

| A. IDENTIFICADOR | 2 | 0 | 1 | 3 | 1 | 1 | 0 | 6 | 1 | 1 | 4 | 6 | 0 | 9 | 7 | 3 | 4 | 3 | 9 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| B. PESOS | 19 | 18 | 17 | 16 | 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 |
| C. PRODUTOS (A * B) | 38 | 0 | 17 | 48 | 15 | 14 | 0 | 72 | 11 | 10 | 36 | 48 | 0 | 54 | 35 | 12 | 12 | 6 | 9 |

- O somatório dos produtos é: 38+0+17+48+15+14+0+72+11+10+36+48+0+54+35+12+12+6+9 = 437
- Dividindo o somatório por 11 teremos: 437 / 11 = 39, com resto valendo 8
- Considerar: 11 – (resto da divisão), portanto: 11 – 8 = 3
- Neste caso, o Dígito Verificador 2 = 3

# 8.6. Identificador: Nomenclatura de Valor Aduaneiro e Estatística

A Receita Federal definiu a codificação da "NVE – Nomenclatura de Valor Aduaneiro e Estatística", com o objetivo de identificar a mercadoria submetida a despacho aduaneiro de importação, para efeito de valoração aduaneira, e aprimorar os dados estatísticos de comércio exterior.

Em julho de 2013 existiam 1.315 códigos NCM com detalhamento pelo NVE, totalizando 5.414 codificações NVE.

## 8.6.1. Composição

A NVE tem por base a codificação do NCM – Nomenclatura Comum do MERCOSUL, acrescida de atributos e suas especificações, identificados, respectivamente, por dois caracteres alfabéticos e quatro numéricos. A mesma codificação NVE tem significado diferente, conforme o NCM que está sendo detalhado.

<!-- p.135 -->
## 8.6.2. Validação Possível

- Campo: Composto por 2 letras e 4 algarismos, com tamanho total de 6 posições
- Tabela: Somente alguns códigos NCM possuem o detalhamento da NVE, conforme tabela publicada pela RFB

## 8.6.3. Exemplo de Códigos NVE

Exemplo de codificação para Camisa de Malha de Uso Masculino:  
Tabela NCM:

| 61.05 | Camisas de malha, de uso masculino. |
|---|---|
| 6105.10.00 | - De algodão |
| 6105.20.00 | - De fibras sintéticas ou artificiais |
| 6105.90.00 | - De outras matérias têxteis |

Codificação NVE:

```
23.28. Posição 6105 Camisas de malha, de uso masculino.
23.28.1. Subitem 61051000 -De algodão
    Atributos e Especificações de Nível 'U'
23.28.1.1. Atributo AA COMPOSIÇÃO
    0001 - 100% Algodão
    0002 - De 99% até 90% algodão
    0003 - De 89% até 80% algodão
    0004 - De 79% até 70% algodão
    ...
23.28.1.2. Atributo AB TAMANHO
    0001 - Infanto-juvenil (até 32)
    0002 - Adulto (superior a 32)
23.28.1.3. Atributo AC MANGA
    0001 - Sem
    0002 - Curta (que não cubra o cotovelo)
    0003 - Longa
    0004 - 3/4
    ...
23.29. Subitem 61052000 -De fibras sintéticas ou artificiais
    Atributos e Especificações de Nível 'U'
23.29.1. Atributo AA COMPOSIÇÃO
    0001 - 100% Poliéster
    0004 - De 99% até 90% poliéster
    0005 - De 89% até 80% poliéster
```
