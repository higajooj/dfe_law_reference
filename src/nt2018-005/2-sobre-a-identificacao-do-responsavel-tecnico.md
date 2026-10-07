<!-- p.8 -->
# 2. Sobre a Identificação do Responsável Técnico

Responsável técnico é a empresa desenvolvedora ou a empresa responsável tecnicamente pelo sistema (software) de emissão de NF-e/NFC-e utilizado pelo contribuinte emitente. Essa informação será utilizada pelas Administrações Tributárias, principalmente na identificação de uso indevido do ambiente de autorização, viabilizando eventual contato das SEFAZ com os responsáveis técnicos.

## 2.1 Código de Segurança do Responsável Técnico - CSRT

A critério da UF, para os estados que exigem o credenciamento de software emissor de DF-e, poderá ser exigido um código de segurança para a empresa desenvolvedora do software, denominado Código de Segurança do Responsável Técnico - CSRT.

O CSRT corresponde a um código de segurança alfanumérico (16 a 36 bytes) de conhecimento apenas da Secretaria da Fazenda da Unidade Federada do emitente e da empresa responsável pelo sistema emissor de DF-e.

A fim de garantir maior segurança no processo de emissão da NF-e e NFC-e, foi incluído o campo “hashCSRT” no grupo de identificação do responsável técnico. Este hash é gerado a partir da concatenação do CSRT da empresa com a chave de acesso da NF-e/NFC-e. Desta forma será possível garantir a autoria do software emissor da NF-e/NFC-e, pois, somente a empresa desenvolvedora do software e o Fisco conhecem o valor válido do CSRT utilizado para a geração do “hashCSRT”. Deverá ser utilizado o algoritmo SHA-1 para a geração do hash.

Para o estado do Paraná, o CSRT será opcional em homologação até 19/01/2026 e em produção até 23/02/2026. Após essas respectivas datas o idCSRT e hashCSRT serão obrigatórios. Portanto, até a obrigatoriedade, esses campos serão facultativos para as empresas. Somente serão validados em produção o idCSRT e hashCSRT a partir de 01/10/2024, caso estes campo sejam informados..

## 2.2 Fornecimento do CSRT

O processo de fornecimento do CSRT para o Responsável Técnico será feito por meio de página web específica da Secretaria da Fazenda da UF de cada emissor. Por meio desta página, o Responsável Técnico deverá solicitar, consultar ou revogar o CSRT. A critério da UF, poderá o CSRT ser fornecido também por Web Service. Cada unidade federada que tenha a intenção de utilizar este código deverá publicar como os contribuintes nela estabelecidos deverão obtê-lo.

Será possível solicitar somente cinco CSRT por UF. Todavia, se a empresa necessitar de um sexto CSRT deverá indicar, previamente, qual dos outros CSRT válidos deseja revogar, uma vez que a empresa desenvolvedora do software poderá ter simultaneamente, no máximo, 5 CSRT válidos.

## 2.3 Geração do hashCSRT

Os passos para a geração do “hashCSRT” estão descritos a seguir:

- Passo 1: Concatenar o CSRT com a chave de acesso da NF-e/NFC-e que está sendo emitida.
- Passo 2: Aplicar o algoritmo SHA-1 sobre o resultado da concatenação do passo 1, resultando em um string de 20 bytes hexadecimais.
- Passo 3: Converter o resultado do passo anterior para Base64, resultando em uma string de <!-- p.9 -->28 caracteres
- Passo 4: Montar o grupo de identificação da empresa desenvolvedora do software (tag: infRespTec), com a tag “idCSRT” o identificador do CSRT utilizado para a geração do hash e a tag “hashCSRT” o resultado do passo 3

<!-- p.10 -->
## 2.4 Exemplo do hashCSRT

Considere a situação hipotética de emissão de uma NF-e, e os parâmetros a serem utilizado no cálculo do “hashCSRT” são:

- Chave de Acesso: 41180678393592000146558900000006041028190697
- CSRT: G8063VRTNDMO886SFNK5LDUDEI24XJ22YIPO
- idCSRT: 01

- Passo 1: Concatenar o CSRT com a chave de acesso da NF-e/NFC-e que está sendo emitida.  
  Resultado: G8063VRTNDMO886SFNK5LDUDEI24XJ22YIPO41180678393592000146558900000006041028190697

Passo 2: Aplicar o algoritmo SHA-1 sobre o resultado da concatenação do passo 1, gerando uma string de 40 caracteres em hexadecimal.

- ~~Resultado: `<string de 20 bytes hexadecimais>`~~
- Resultado: 696bfa2de10ce17eaee3ea8123639867c82b8a0c

- Passo 3: Converter o resultado do passo anterior para Base64, resultando em uma string de 28 caracteres (20 bytes).
  - ~~Resultado: 696bfa2de10ce17eaee3ea8123639867c82b8a0c~~
  - Resultado: aWv6LeEM4X6u4+qBI2OYZ8grigw=

- Passo 4: Montar o grupo de identificação do responsável técnico (tag: infRespTec).
  - Resultado:

```xml
<infRespTec>
    <CNPJ>99999999999999</CNPJ>
    <xContato>Nome do Contato</xContato>
    <email>email@empresaficticia.com.br</email>
    <fone>41999999999</fone>
    <idCSRT>01</idCSRT>
```

~~`<hashCSRT>696bfa2de10ce17eaee3ea8123639867c82b8a0c</hashCSRT>`~~

```xml
    <hashCSRT>aWv6LeEM4X6u4+qBI2OYZ8grigw=</hashCSRT>
</infRespTec>
```

> **Revogado/Descontinuado:** no exemplo do item 2.4, os resultados riscados no original (passo 2 e passo 3, em hexadecimal) e a linha `<hashCSRT>` com o valor hexadecimal foram substituídos pelos valores em Base64 mostrados em seguida.
