<!-- p.17 -->
# 2.2. Conceitos

## 2.2.1. NF-e (Modelo 55)

A Nota Fiscal Eletrônica (NF-e) é um documento de existência exclusivamente digital, emitido e armazenado eletronicamente, com o intuito de documentar uma operação de circulação de mercadorias ou prestação de serviços, nos campos de incidência do Imposto sobre Operações relativas à Circulação de Mercadorias e Prestação de Serviços de Transporte Interestadual e Intermunicipal e de Comunicação (ICMS) e do Imposto Sobre Produtos Industrializados (IPI), cuja validade jurídica é garantida por duas condições necessárias: a assinatura digital do emitente e a Autorização de Uso fornecida pela administração tributária do domicílio do contribuinte, que poderá ser utilizada em substituição:

I – à Nota Fiscal, modelo 1 ou 1-A;  
II – à Nota Fiscal de Produtor, modelo 4.

## 2.2.2. NFA-e – Nota Fiscal Avulsa Eletrônica (Modelo 55)

Na hipótese de a NF-e ser emitida por sistema eletrônico disponibilizado pelas administrações tributárias das unidades federadas em seus correspondentes endereços eletrônicos, contendo a assinatura digital da respectiva administração tributária, passa a receber a denominação de Nota Fiscal Avulsa eletrônica – NFA-e, modelo 55.

A emissão da NFA-e – Modelo 55 segue o padrão da NF-e emitida pelas empresas, com as seguintes diferenças:

- Dados do Emitente: Os campos de identificação do emitente (grupo “emit”, id[^1]:C01) são preenchidos com os dados do remetente da NF-e.
- Os dados de identificação do Fisco são informados em grupo específico (grupo “avulsa”, id:D01).
- Chave de Acesso e Série da NFA-e: Conforme pode ser visto na Tabela 2-4, a série utilizada (campo “serie”, id:B07), define se na Chave de Acesso[^2] da NFA-e é informado o número de inscrição no Cadastro Nacional de Pessoas Jurídicas (CNPJ) que consta no cadastro da Secretaria Estadual de Fazenda, Finanças ou Tributação (SEFAZ), o CNPJ do Emitente, ou o número de inscrição no Cadastro Nacional de Pessoas Físicas (CPF) do Emitente (atributo “Id”, id:A03).
- Número da NFA-e: O número da NFA-e deve ser controlado pela SEFAZ de forma a garantir a sua unicidade. A numeração pode ser feita, a critério da SEFAZ autorizadora, de forma sequencial para todas as NFA-e da unidade federada (UF), ou sequencial conforme o CNPJ / CPF do Emitente (campo “nNF”, id:B08).
<!-- p.18 -->
- Código Numérico: Este campo compõe a Chave de Acesso e também é gerado pela SEFAZ, com um valor aleatório, garantindo a segurança contra o conhecimento indevido da Chave de Acesso (campo “cNF”, id:B03).
- Processo de Emissão: 1=Emissão de NF-e avulsa pelo Fisco (campo “procEmi”, id:B26).
- Inscrição Estadual do Emitente: Caso o emitente seja contribuinte eventual, é aceita a informação de “ISENTO” (campo “IE”, id:C17).
- Tipo de Emissão: Normal (campo “tpEmis”, id:B22 = “1”: não está prevista a emissão em contingência).
- Assinatura do XML: A assinatura do XML é feita com o Certificado Digital da SEFAZ.

[^1]: Identificador do campo XML nas tabelas de leiaute no documento *MOC – Anexo I – Leiaute NF-e/NFC-e*.
[^2]: Veja item 2.2.6.

## 2.2.3. NFC-e (modelo 65)

Considera-se Nota Fiscal de Consumidor Eletrônica – NFC-e o documento emitido e armazenado eletronicamente, de existência apenas digital, com o intuito de documentar operações e prestações, cuja validade jurídica é garantida pela assinatura digital do emitente e autorização de uso pela administração tributária da unidade federada do contribuinte, antes da ocorrência do fato gerador, que poderá ser utilizada, a critério das unidades federadas, pelos contribuintes do ICMS em substituição:

I – à Nota Fiscal de Venda a Consumidor, modelo 2;  
II – ao Cupom Fiscal emitido por equipamento Emissor de Cupom Fiscal (ECF);  
III – ao Cupom Fiscal Eletrônico – SAT (CF-e-SAT).

## 2.2.4. DANFE

O DANFE (Documento Auxiliar da Nota Fiscal Eletrônica) é um documento fiscal auxiliar, que pode ser impresso em papel; sua especificação e modelos de leiaute encontram-se disponíveis no documento *MOC – Anexo II – Manual de Especificações Técnicas do DANFE e Código de Barras*.

O DANFE não é nota fiscal, nem a substitui, servindo apenas como instrumento auxiliar para consulta da NF-e, pois contém a chave de acesso da NF-e, que permite ao detentor desse documento confirmar, através das páginas da Secretaria de Fazenda Estadual ou da Receita Federal do Brasil (RFB), a efetiva existência de uma NF-e que tenha tido seu uso regularmente autorizado.

## 2.2.5. DANFE  NFC-e

O DANFE NFC-e é um documento fiscal auxiliar, sendo apenas uma representação simplificada da transação de venda no varejo, que pode ser impressa, de forma a facilitar a consulta do documento fiscal eletrônico, no ambiente da SEFAZ, pelo consumidor final.

A impressão do DANFE NFC-e é efetuada diretamente pelo aplicativo do contribuinte em impressora comum (não fiscal), com base nas informações do arquivo eletrônico XML da NFC-e, conforme especificação/modelos de leiaute disponíveis no documento *MOC – Anexo III – Manual de Especificações Técnicas do DANFE NFC-e e QR Code*.

## 2.2.6. Chave de Acesso

A composição da chave de acesso da NF-e sofreu alterações ao longo da evolução do sistema, pela versão 2.00 da NF-e e pela NT 2018.001.

<!-- p.19 -->
### 2.2.6.1. Versão 4.00 da NF-e

A Chave de Acesso de identificação da Nota Fiscal eletrônica é um conjunto de 44 caracteres numéricos, formado pela concatenação de campos que se encontram no leiaute da NF-e, seguindo a estrutura que pode ser vista na Tabela 2-1.

**Tabela 2-1 – Chave de Acesso da Versão 4.00 da NF-e**

| Posição | Informação | Caracteres | Campo | Id |
|---|---|---|---|---|
| 1 | Código da UF do emitente do Documento Fiscal | 02 | cUF | B02 |
| 2 | Ano e Mês de emissão da NF-e | 04 | AAMM | Extraídos de B09 |
| 3 | CNPJ/CPF do emitente | 14 | CNPJ/CPF | C02/C02a |
| 4 | Modelo do Documento Fiscal | 02 | mod | B06 |
| 5 | Série do Documento Fiscal | 03 | serie | B07 |
| 6 | Número do Documento Fiscal | 09 | nNF | B08 |
| 7 | forma de emissão da NF-e | 01 | tpEmis | B22 |
| 8 | Código Numérico que compõe a Chave de Acesso | 08 | cNF | B03 |
| 9 | Dígito Verificador da Chave de Acesso | 01 | cDV | B23 |

O Dígito Verificador (DV) garante a integridade da chave de acesso, protegendo-a principalmente contra digitações erradas.

Originalmente, na Chave de Acesso da NF-e deveria ser informado o CNPJ da empresa emitente da NF-e, ou o CNPJ da SEFAZ no caso da Nota Fiscal Avulsa. Esta realidade foi alterada a partir da versão 4.00 do leiaute da NF-e (NT 2018.001), permitindo, a critério da UF, a identificação na Chave de Acesso também de emitente pessoa física (CPF).

Também foi alterado o processo de assinatura da NF-e, que anteriormente somente podia ser feito utilizando um Certificado Digital tipo “e-CNPJ”. No caso do Emitente Pessoa Física:

- O CPF deverá constar na Chave de Acesso, precedido por zeros, completando 14 posições;
- Conforme pode ser visto na Tabela 2-4, está reservada uma faixa do campo Série da NF-e, como forma de identificação do Emitente pessoa física (CPF);
- A NF-e deverá ser assinada com o Certificado Digital do Emitente, do tipo “e-CPF”.

Com exceção do Código Numérico, todas as demais informações que compõem a Chave de Acesso podem ser deduzidas por qualquer pessoa, o que representa um risco importante para a segurança das consultas aos dados das NF-e. Para minimizar este risco, o Código Numérico deve ser uma sequência totalmente aleatória.

### 2.2.6.2. Cálculo do Dígito Verificador da Chave de Acesso da NF-e

O dígito verificador (DV) da chave de acesso da NF-e é baseado em um cálculo do módulo 11. O módulo 11 de um número é calculado multiplicando-se cada algarismo pela sequência de números 2,3,4,5,6,7,8,9,2,3, ..., posicionados da direita para a esquerda. A somatória dos resultados das ponderações dos algarismos é dividida por 11 e o DV (dígito verificador) será a diferença entre o divisor (11) e o resto da divisão:

> DV = 11 - (resto da divisão)

Quando o resto da divisão for 0 (zero) ou 1 (um), o DV deverá ser igual a 0 (zero).

Exemplo:

> Consideremos uma chave de acesso com a seguinte sequência de caracteres:

<!-- tabela do exemplo continua na p.20 (linha C) -->

| Linha | Valores (43 posições, da esquerda para a direita) |
|---|---|
| A. CHAVE DE ACESSO | 5 2 0 6 0 4 3 3 0 0 9 9 1 1 0 0 2 5 0 6 5 5 0 1 2 0 0 0 0 0 0 7 8 0 0 2 6 7 3 0 1 6 1 |
| B. PESOS | 4 3 2 9 8 7 6 5 4 3 2 9 8 7 6 5 4 3 2 9 8 7 6 5 4 3 2 9 8 7 6 5 4 3 2 9 8 7 6 5 4 3 2 |
<!-- p.20 -->
| C. PONDERAÇÃO (A*B) | 20 6 0 54 0 28 18 15 0 0 18 81 8 7 0 0 8 15 0 54 40 35 0 5 8 0 0 0 0 0 0 35 32 0 0 18 48 49 18 0 4 18 2 |

> Somatória das ponderações = 644  
> Dividindo a somatória das ponderações por 11 teremos 644 / 11 = 58 restando 6.  
> DV = 11 - (resto da divisão) = 11 - 6 = 5
>
> Neste caso o DV da chave de acesso da NF-e é igual a "5", valor este que deverá compor a chave de acesso, formando uma sequência de 44 caracteres.

### 2.2.6.3. Versões anteriores ao leiaute 4.00 da NF-e

Até a versão 1.10 do leiaute da NF-e, a Chave de Acesso da Nota Fiscal Eletrônica foi composta pela caracteres numéricos exposta na Tabela 2-2.

**Tabela 2-2 – Chave de Acesso da Versão 1.10 da NF-e**

| | Código da UF (cUF) | AAMM da emissão | CNPJ do Emitente | Modelo (mod) | Série (serie) | Número da NF-e (nNF) | Código Numérico (cNF) | DV (cDV) |
|---|---|---|---|---|---|---|---|---|
| Quantidade de caracteres | 02 | 04 | 14 | 02 | 03 | 09 | 09 | 01 |

A partir da versão 2.00 do leiaute da NF-e, o campo *tpEmis* (forma de emissão da NF-e) passou a compor a chave de acesso. Para que o tamanho de 44 posições da chave não fosse alterado, o tamanho do campo *cNF* (código numérico da NF-e) foi reduzido para oito posições, conforme pode ser visto na Tabela 2-3.

**Tabela 2-3 – Chave de Acesso da Versão 2.00 da NF-e**

| | Código da UF (cUF) | AAMM da emissão | CNP do Emitente | Modelo (mod) | Série (serie) | Número da NF-e (nNF) | Forma de emissão da NF-e (tpEmis) | Código Numérico | DV |
|---|---|---|---|---|---|---|---|---|---|
| Quantidade de caracteres | 02 | 04 | 14 | 02 | 03 | 09 | 01 | 08 | 01 |

## 2.2.7. Chave Natural

A legislação determina que a identificação única de uma nota fiscal para efeitos tributários é feita pelos seguintes conjuntos de informações, que são um subconjunto das informações existentes na chave de acesso:

- **NF-e**: UF, CNPJ ou CPF do Emitente, Série e Número da NF-e, modelo do documento fiscal eletrônico e ambiente de autorização.
- **NFC-e**: UF, CNPJ do Emitente, Série e Número da NF-e, modelo do documento fiscal eletrônico e tipo de emissão.

Estes subconjuntos recebem a denominação de “chave natural” (NT 2018.001), sendo que o ambiente de autorização e o tipo de emissão aparecem no campo tpEmis (id: B22).

O Sistema de Autorização de Uso da SEFAZ valida a existência de uma NF-e previamente autorizada e rejeita novos pedidos de autorização para NF-e caso seja identificada duplicidade de Chave Natural.

<!-- p.21 -->
## 2.2.8. Série Reservadas da NF-e

O campo Série da NF-e (id:B07) também é utilizado para auxiliar, juntamente com o campo procEmi (id: B26), no controle das emissões e identificação do processo de emissão, conforme descrito na Tabela 2-4.

**Tabela 2-4 – Faixas de Série Reservadas**

| Emit | Processo Emissão | Assinatura | Série | Ch Acesso | Numeração |
|---|---|---|---|---|---|
| CNPJ | Aplicativo da Empresa | e-CNPJ do Emitente (procEmi &lt;&gt; 1,2) | 000-889 | CNPJ do Emitente | Sequencial por CNPJ, controlado pelo emitente |
| CNPJ | Programa Emissor Fisco | e-CNPJ do Emitente (procEmi &lt;&gt; 1,2) | 000-889 | CNPJ do Emitente | Sequencial por CNPJ, controlado pelo emitente |
| CNPJ/CPF | Site SEFAZ (NFA-e) | e-CNPJ da SEFAZ (procEmi=1) | 890-899 | CNPJ da SEFAZ | Sequencial pela SEFAZ, independentemente do emitente (CPF ou CNPJ) |
| **Faixas reservadas a partir da NT 2018.001** | | | | | |
| CNPJ | Site SEFAZ | e-CNPJ da SEFAZ (procEmi=1), ou e-CNPJ do Emitente (procEmi=2) | 900-909 | CNPJ do Emitente | Sequencial por CNPJ, controlado pela SEFAZ |
| CPF | Site SEFAZ | e-CNPJ da SEFAZ (procEmi=1), ou e-CPF do Emitente (procEmi=2) | 910-919 | CPF do Emitente | Sequencial pelo CPF, controlado pela SEFAZ |
| CPF | Aplicativo da Empresa | e-CPF do Emitente (procEmi&lt;&gt;1,2) | 920-969 | CPF do Emitente | Sequencial por CPF, controlado pelo emitente |

Importante comentar que normalmente o CNPJ define um único estabelecimento (uma única filial da empresa na UF), com um único endereço e uma única Inscrição Estadual.

No caso do Produtor Primário isto muda, e podem existir casos onde o mesmo CNPJ participa de vários Estabelecimentos (várias Inscrições Estaduais). Nestes casos, o CNPJ na Chave de Acesso pode não identificar uma única Inscrição Estadual na UF.

O mesmo ocorre para o Produtor Primário identificado pelo seu CPF, sendo mais comum ainda a participação do mesmo CPF em diferentes estabelecimentos (várias Inscrições Estaduais de Produtor Primário) na mesma UF.

**Numeração da NF-e por Estabelecimento Rural (Inscrição Estadual)**

No caso de Produtor Primário, Pessoa Física, na Chave de Acesso consta o CPF do Emitente, mas não consta a Inscrição Estadual.

Esta realidade traz uma dificuldade para poder gerenciar a numeração das NF-e por Inscrição Estadual, caso o CPF participe em vários estabelecimentos rurais.

> Exemplificando, para o mesmo CPF, a NF-e número 1 pode ser autorizada por uma determinada Inscrição Estadual e a NF-e número 2 pode ter sido autorizada para outra Inscrição Estadual de Produtor Primário.
>
> Nestes casos, o contribuinte deverá utilizar Séries específicas para cada estabelecimento, na faixa 920 a 969.

## 2.2.9. GTIN

O GTIN, acrônimo para *Global Trade Item Number*, é um identificador para itens comerciais, resultado da evolução no sentido da internacionalização do UGPIG (*Universal Grocery Products Identification Code*), que era a unificação dos códigos comerciais em uso nos Estados Unidos em 1970, e que foi substituído pelo UPC (*Universal Product Code*) em 1973, e a união deste último código com os códigos EAN (*European Article Number*), em uso na Europa desde 1977.

<!-- p.22 -->
O GTIN é um padrão único internacional criado e administrado pela GS1, uma organização internacional multissetorial, neutra, sem fins lucrativos, que desenvolve e mantém padrões globais utilizados na comunicação empresarial. A GS1 é responsável a nível mundial pelo gerenciamento destes códigos, garantindo sua unicidade

Os GTIN são atribuídos para qualquer produto que pode ser precificado, pedido ou faturado em qualquer ponto da cadeia de suprimentos. O GTIN é utilizado para recuperar informação pré-definida e abrange desde as matérias primas até produtos acabados; podem ter o tamanho de 8, 12, 13 ou 14 dígitos, podem ser construídos utilizando uma destas quatro estruturas de numeração, que dependem da aplicação que será dada à codificação.

### 2.2.9.1. Cadastro Centralizado de GTIN

O Cadastro Centralizado de GTIN (CCG) (NT 2017.001) é um banco de dados contendo um conjunto reduzido de informações dos produtos que possuem código GTIN, e funciona de forma integrada com o Cadastro Nacional de Produtos da GS1 (CNP), que é o cadastro mantido por esta organização.

Os produtos em circulação no mercado que possuem GTIN informado na NF-e terão esta informação validada contra o CCG, de acordo com o cronograma previsto na legislação. Portanto, os donos das marcas dos produtos que possuem GTIN deverão manter atualizados os dados cadastrais de seus produtos junto ao CNP (em cnp.gs1br.org/), de forma a manter atualizado o Cadastro Centralizado de GTIN.

As informações obrigatórias que devem estar no CCG são:

I. GTIN  
II. Marca  
III. Tipo GTIN (8, 12, 13 ou 14 posições)  
IV. Descrição do Produto  
V. Dados da classificação do produto (Segmento, Família, Classe e Subclasse/Bloco)  
VI. País – Principal Mercado de Destino  
VII. CEST (quando existir)  
VIII. NCM  
IX. Peso Bruto  
X. Unidade de Medida do Peso Bruto  
XI. Foto do produto

Caso o GTIN cadastrado seja de um agrupamento de produtos homogêneos (GTIN-14, antigo DUN-14), as seguintes informações adicionais devem constar do CCG:

I. GTIN de nível inferior, também denominado GTIN contido ou item comercial contido  
II. Quantidade de Itens Contidos

### 2.2.9.2. Manutenção do Cadastro Centralizado de GTIN

Os Ajustes SINIEF 07/05 e 19/16 dispõem que os sistemas autorizadores da NF-e e NFC-e deverão validar as informações de GTIN, devendo as notas serem rejeitadas quando não estiverem em conformidade com o CCG.

A Tabela 2-5 apresenta as principais validações efetuadas no CCG, que poderão levar à necessidade de correção, pelos donos de marca, do cadastro de GTIN no CNP-GS1:

**Tabela 2-5 – Principais Validações Efetuadas no CCG**

| Campo | Validação |
|---|---|
| GTIN | Dígito de Controle inválido |
| Descrição do Produto | Descrição do Produto muito genérica ou que não permita a identificação adequada do produto. Exemplo: “A definir”, “Disponível”, “Não informado(a)”, etc. |
| Inscrição do Dono da Marca no Cadastro da Receita Federal | CNPJ ou CPF inválido |
| NCM | Não informado o código do NCM do produto, ou informado um NCM inexistente |
| CEST | Se for o caso, não informado o código CEST para o produto, ou informado um CEST inexistente, ou informado código CEST incompatível com o NCM |
| Código de Classificação Geral do Produto (GPC) | Não informado o código de Classificação Geral do Produto (Segmento, Família, Classe e Subclasse), ou informado código existente, ou incompatível. |
| GTIN de nível inferior (vinculado ao GTIN-14) | Não informado GTIN contido para o GTIN-14 ou Dígito de Controle inválido. |

<!-- p.23 -->
## 2.2.10. Responsável Técnico

Responsável Técnico (NT 2018.005) é a empresa desenvolvedora ou a empresa responsável tecnicamente pelo sistema (software) de emissão de NF-e/NFC-e utilizado pelo contribuinte emitente. Essa informação será utilizada pelas Administrações Tributárias, principalmente na identificação de uso indevido[^3] do ambiente de autorização, viabilizando eventual contato das SEFAZ com os responsáveis técnicos.

Em caso de sistema emissão de NF-e de desenvolvimento próprio o responsável técnico é o próprio contribuinte.

**Código de Segurança do Responsável Técnico – CSRT**

A critério da UF, para os estados que exigem o credenciamento de software emissor de DF-e, poderá ser exigido um código de segurança para a empresa desenvolvedora do software, denominado Código de Segurança do Responsável Técnico – CSRT.

O CSRT corresponde a um código de segurança alfanumérico (16 a 36 bytes) de conhecimento apenas da Secretaria da Fazenda da Unidade Federada do emitente e da empresa responsável pelo sistema emissor de DF-e.

A fim de garantir maior segurança no processo de emissão da NF-e e NFC-e, foi incluído o campo “hashCSRT” no grupo de identificação do responsável técnico. Este hash é gerado a partir da concatenação do CSRT da empresa com a chave de acesso da NF-e/NFC-e. Desta forma será possível garantir a autoria do software emissor da NF-e/NFC-e, pois, somente a empresa desenvolvedora do software e o Fisco conhecem o valor válido do CSRT utilizado para a geração do “hashCSRT”. Deverá ser utilizado o algoritmo SHA-1 para a geração do hash.

### 2.2.10.1. Fornecimento do CSRT

O processo de fornecimento do CSRT para o Responsável Técnico será feito por meio de página web específica da Secretaria da Fazenda da UF de cada emissor. Por meio desta página, o Responsável Técnico deverá solicitar, consultar ou revogar o CSRT. A critério da UF, poderá o CSRT ser fornecido também por *Web Service*. Cada unidade federada que tenha a intenção de utilizar este código deverá publicar como os contribuintes nela estabelecidos deverão obtê-lo.

<!-- p.24 -->
Será possível solicitar somente cinco CSRT por UF. Todavia, se a empresa necessitar de um sexto CSRT deverá indicar, previamente, qual dos outros CSRT válidos deseja revogar, uma vez que a empresa desenvolvedora do software poderá ter simultaneamente, no máximo, 5 CSRT válidos.

### 2.2.10.2. Geração do hashCSRT

Os passos para a geração do “hashCSRT” estão descritos a seguir:

Passo 1: Concatenar o CSRT com a chave de acesso da NF-e/NFC-e que está sendo emitida.  
Passo 2: Aplicar o algoritmo SHA-1 sobre o resultado da concatenação do passo 1, resultando em um string de 20 bytes hexadecimais.  
Passo 3: Converter o resultado do passo anterior para Base64, resultando em uma string de 28 caracteres  
Passo 4: Montar o grupo de identificação da empresa desenvolvedora do software (tag: infRespTec), com a tag “idCSRT” o identificador do CSRT utilizado para a geração do hash e a tag “hashCSRT” o resultado do passo 3

### 2.2.10.3. Exemplo do hashCSRT

Considere a situação hipotética de emissão de uma NF-e, e os parâmetros a serem utilizado no cálculo do “hashCSRT” são:

- Chave de Acesso: 41180678393592000146558900000006041028190697
- CSRT: G8063VRTNDMO886SFNK5LDUDEI24XJ22YIPO
- idCSRT: 01

    - **Passo 1**: Concatenar o CSRT com a chave de acesso da NF-e/NFC-e que está sendo emitida.

      Resultado: G8063VRTNDMO886SFNK5LDUDEI24XJ22YIPO41180678393592000146558900000006041028190697

    - **Passo 2**: Aplicar o algoritmo SHA-1 sobre o resultado da concatenação do passo 1, gerando uma string de 40 caracteres em hexadecimal.

      Resultado: 696bfa2de10ce17eaee3ea8123639867c82b8a0c

    - **Passo 3**: Converter o resultado do passo anterior para Base64, resultando em uma string de 28 caracteres (20 bytes).

      Resultado: aWv6LeEM4X6u4+qBI2OYZ8grigw=

    - - **Passo 4**: Montar o grupo de identificação do responsável técnico (tag: infRespTec).

      Resultado:

      ```xml
      <infRespTec>
          <CNPJ>99999999999999</CNPJ>
          <xContato>Nome do Contato</xContato>
          <email>email@empresaficticia.com.br</email>
          <fone>41999999999</fone>
          <idCSRT>01</idCSRT>
          <hashCSRT>aWv6LeEM4X6u4+qBI2OYZ8grigw=</hashCSRT>
      </infRespTec>
      ```

## 2.2.11. cBenef

O código de benefício fiscal (tag: cBenef), por tratar de situações particulares de cada unidade federada, tem sua definição também especificada pelas UF que o utilizam.

<!-- p.25 -->
Considerando a necessidade de atualizações constantes que virão durante e depois da COVID-19 as UF que utilizam essa tabela e respectivas Regras de Validação, disponibilizarão endereços eletrônicos em suas páginas contendo as respectivas tabelas para download, a partir da data de publicação dessa versão da NT 2019.001.

### 2.2.11.1. Arquivo no Portal Nacional da NF-e contendo os endereços das tabelas de “cBenef x CST” das UF:

Na área “Diversos” da aba “Documentos” no Portal Nacional da NF-e, consta o arquivo contendo os endereços onde estão disponibilizadas as Tabelas de “cBenef x CST” nos portais das Secretarias de Fazenda que implantaram o código de benefício fiscal.

## 2.2.12. Cadastro Centralizado de Contribuintes (CCC)

As SEFAZ mantêm um cadastrado centralizado de todos os contribuintes da sua UF, no qual é possível cadastrar não somente contribuintes pessoa jurídica, com seu CNPJ e a respectiva Inscrição Estadual, mas também contribuintes pessoa física, com seu CPF e a respectiva Inscrição Estadual.

O CCC é utilizado para:

- Verificação se a IE do destinatário existe na UF de destino (operação interestadual), se o contribuinte está habilitado e se o CNPJ informado está vinculado com a IE informada, para qualquer um dos ambientes de autorização (SEFAZ Autorizadora ou SEFAZ Virtual);
- Idem para os ambientes de contingência (ambiente SVC e ambiente EPEC).

Este cadastro do CCC é utilizado também como local único de informações sobre o contribuinte, inclusive para as informações de credenciamento para os emitentes Pessoa Física.

[^3]: Item 4.3.8.
