# 2.2.1. Cálculo do dígito verificador do CODE-128C

O dígito verificador é baseado em um cálculo do módulo 103 considerando a soma ponderada dos valores de cada um dos dígitos na mensagem que está sendo codificada, incluindo o valor do caractere de início (start).

Exemplo: consideremos que a chave de acesso fosse apenas de oito caracteres e contivesse o seguinte número: 09758364

| Chave de acesso | | START | 09 | 75 | 83 | 64 |
|---|---|---|---|---|---|---|
| **Sequência** | **A** | | 1 | 2 | 3 | 4 |
| **Valor do caractere** | **B** | 105 | 9 | 75 | 83 | 64 |
| **Valor Ponderado (A X B)** | **C** | 105 | 9 | 150 | 249 | 256 |

- Na linha valor do caractere foi incluso o valor 105 que corresponde ao valor do caractere de início (start) para o padrão Code C.
- Excetuando o caractere de start, os demais valores dos caracteres coincidem com os valores da chave de acesso, isto porque estamos utilizando o padrão Code C de codificação que é exclusivamente numérico.
- O dígito verificador do código será o resto da divisão da somatória dos valores ponderados dividido por 103 (módulo 103).

Assim o dígito verificador será:

- Valor da soma ponderada = (1x105) +(1x9) +(2x75) +(3x83) +(4x64) = 769
- 769/103 = 7 resta 48, assim o DV é 48
