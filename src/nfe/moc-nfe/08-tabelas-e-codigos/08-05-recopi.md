<!-- p.133 -->

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

```text
A. IDENTIFICADOR       2   0   1   3   1   1   0   6   1   1   4   6   0   9   7   3   4   3
B. PESOS              18  17  16  15  14  13  12  11  10   9   8   7   6   5   4   3   2   1
C. PRODUTOS (A * B)   36   0  16  45  14  13   0  66  10   9  32  42   0  45  28   9   8   3
```

- O somatório dos produtos é: 36+0+16+45+14+13+0+66+10+9+32+42+0+45+28+9+8+3 = 376
- Dividindo o somatório por 11 teremos: 376 / 11 = 34, com resto valendo 2
- Considerar: 11 – (resto da divisão), portanto: 11 – 2 = 9
- Neste caso, o Dígito Verificador 1 = 9

Cálculo do DV-2:

Repetir o processo anterior, usando agora os 19 dígitos existentes, incluindo o DV1 recém-calculado

```text
A. IDENTIFICADOR      2   0   1   3   1   1   0   6   1   1   4   6   0   9   7   3   4   3   9
B. PESOS             19  18  17  16  15  14  13  12  11  10   9   8   7   6   5   4   3   2   1
C. PRODUTOS (A * B)  38   0  17  48  15  14   0  72  11  10  36  48   0  54  35  12  12   6   9
```

- O somatório dos produtos é: 38+0+17+48+15+14+0+72+11+10+36+48+0+54+35+12+12+6+9 = 437
- Dividindo o somatório por 11 teremos: 437 / 11 = 39, com resto valendo 8
- Considerar: 11 – (resto da divisão), portanto: 11 – 8 = 3
- Neste caso, o Dígito Verificador 2 = 3
