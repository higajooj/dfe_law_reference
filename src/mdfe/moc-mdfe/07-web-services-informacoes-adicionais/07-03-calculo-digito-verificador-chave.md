# 7.3 Cálculo do dígito verificador da chave de acesso do MDFe

O dígito verificador da chave de acesso do MDFe é baseado em um cálculo do módulo 11. O módulo 11 de um número é calculado multiplicando-se cada algarismo pela sequência de multiplicadores 2,3,4,5,6,7,8,9,2,3, ... posicionados da direita para a esquerda.

A somatória dos resultados das ponderações dos algarismos é dividida por 11 e o DV (dígito verificador) será a diferença entre o divisor (11) e o resto da divisão:

`DV = 11 - (resto da divisão)`

Quando o resto da divisão for 0 (zero) ou 1 (um), o DV deverá ser igual a 0 (zero).

Exemplo: consideremos que a chave de acesso tem a seguinte sequência de caracteres:

```text
A CHAVE DE ACESSO  5 2 0 6 0 4 3 3 0 0 9 9 1 1 0 0 2 5 0 6 5 5 0 1 2 0 0 0 0 0 0 7 8 0 0 2 6 7 3 0 1 6 1
B PESOS            4 3 2 9 8 7 6 5 4 3 2 9 8 7 6 5 4 3 2 9 8 7 6 5 4 3 2 9 8 7 6 5 4 3 2 9 8 7 6 5 4 3 2
C PONDERAÇÃO (A*B) 20 6 0 54 0 28 18 15 0 0 18 81 8 7 0 0 8 15 0 54 40 35 0 5 8 0 0 0 0 0 0 35 32 0 0 18 48 49 18 0 4 18 2
```

Somatória das ponderações = 644

Dividindo a somatória das ponderações por 11 teremos, 644 / 11 = 58 restando 6.

Como o dígito verificador DV = 11 - (resto da divisão), portanto 11 - 6 = 5

Neste caso o DV da chave de acesso do MDFe é igual a **5**, valor este que deverá compor a chave de acesso totalizando uma sequência de 44 caracteres.
