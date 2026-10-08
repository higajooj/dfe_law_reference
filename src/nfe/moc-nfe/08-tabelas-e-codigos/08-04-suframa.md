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

```text
A. CÓDIGO SUFRAMA   1    2    3    4    5    6    7    8
B. PESOS            9    8    7    6    5    4    3    2
C. PRODUTOS (A * B) 9   16   21   24   25   24   21   16
```

- O somatório dos produtos é: 16 + 21 + 24 + 25 + 24 + 21 + 16 + 9 = 156
- Dividindo o somatório por 11 teremos: 156 / 11 = 14, com resto valendo 2
- Considerar: 11 – (resto da divisão), portanto: 11 – 2 = 9
- Neste caso, o Dígito Verificador = 9
