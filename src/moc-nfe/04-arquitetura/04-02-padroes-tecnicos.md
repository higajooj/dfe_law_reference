<!-- p.49 -->
# 4.2. Padrões Técnicos

## 4.2.1. Padrão de Documento XML

### 4.2.1.1. Padrão de Codificação

A especificação do documento XML adotada é a recomendação W3C para XML 1.0, disponível em www.w3.org/TR/REC-xml e a codificação dos caracteres é UTF-8; assim, todos os documentos XML devem iniciar com a seguinte declaração:

<!-- p.50 -->
```xml
<?xml version="1.0" encoding="UTF-8"?>
```

Cada arquivo XML somente poderá ter uma única declaração `<?xml version="1.0" encoding="UTF-8"?>`. Nas situações em que um documento XML pode conter outros documentos XML, como ocorre com o documento XML de lote de envio de NF-e, deve-se tomar cuidado para que exista uma única declaração no início do lote.

### 4.2.1.2. Declaração *namespace*

O documento XML deverá ter uma única declaração de *namespace* no elemento raiz do documento com o seguinte padrão:

```xml
<enviNFe xmlns="http://www.portalfiscal.inf.br/nfe">
```

(exemplo para o XML de envio de Lote de NF-e)

É vedado o uso de declaração *namespace* diferente do padrão estabelecido.

Não é permitida a utilização de prefixos de *namespace*. Essa restrição visa otimizar o tamanho do arquivo XML. Assim, ao invés da declaração \<NFe xmlns:nfe=http://www.portalfiscal.inf.br/nfe> (exemplo para o XML de NF-e com prefixo nfe), deverá ser adotada a declaração: \<NFe xmlns ="http://www.portalfiscal.inf.br/nfe" >.

A declaração do *namespace* da assinatura digital deverá ser realizada na própria tag \<Signature>, conforme exemplo abaixo.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<enviNFe xmlns="http://www.portalfiscal.inf.br/nfe" versao="1.01">
	<idLote>200602220000001</idLote>
	<NFe xmlns="http://www.portalfiscal.inf.br/nfe">
		<infNFe Id="NFe310602438167190001085500000000010001234567890" versao="1.01">
		...
		<Signature xmlns="http://www.w3.org/2000/09/xmldsig#">
		…
	</NFe>
	<NFe xmlns="http://www.portalfiscal.inf.br/nfe">
		<infNFe Id="NFe310602438167190001085500000000010011234567900" versao="1.01">
		...
		<Signature xmlns="http://www.w3.org/2000/09/xmldsig#">
		…
	</NFe>
	<NFe xmlns="http://www.portalfiscal.inf.br/nfe">
		<infNFe Id="NFe310602438167190001085500000000010021234567916" versao="1.01">
		...
		<Signature xmlns="http://www.w3.org/2000/09/xmldsig#">
		…
	</NFe>
</enviNFe>
```

### 4.2.1.3. Otimização na Montagem do Arquivo

Na geração do arquivo XML da NF-e, excetuados os campos identificados como obrigatórios no modelo, não deverá ser incluída a TAG de campo com conteúdo zero (para campos tipo numérico) ou vazio (para campos tipo caractere).

A regra constante do parágrafo anterior deverá estender-se para os campos onde não há indicação de obrigatoriedade e que, no entanto, seu preenchimento torna-se obrigatório por estar condicionado à legislação específica ou ao negócio do contribuinte. Neste caso, deverá constar a TAG com o valor correspondente e, para os demais campos, deverão ser eliminadas as TAG.

<!-- p.51 -->
Exemplo 1: campo R01 – indAdic. Será preenchido se a legislação específica o exigir.  
Exemplo 2: Subgrupo de Informações de Transportadora. Será preenchido somente se o negócio do contribuinte for transporte.

Para reduzir o tamanho final do arquivo XML da NF-e alguns cuidados de programação deverão ser assumidos:

- não incluir "zeros não significativos" para campos numéricos;
- não incluir "espaços" no início ou no final de campos numéricos e alfanuméricos;
- não incluir comentários no arquivo XML;
- não incluir anotação e documentação no arquivo XML (TAG annotation e TAG documentation);
- não incluir caracteres de formatação no arquivo XML ("line-feed", "carriage return", "tab", caractere de "espaço" entre as TAGs);
- não incluir prefixo no namespace das tags de NFe.

### 4.2.1.4. Validação de Schema

Para garantir minimamente a integridade das informações prestadas e a correta formação dos arquivos XML, o contribuinte deverá, antes de seu envio, submeter o arquivo da NF-e e as demais mensagens XML para validação pelo Schema do XML (XSD – XML Schema Definition), disponibilizado pela Secretaria de Fazenda Estadual.

Os Schemas estão disponíveis na URL:  
https://www.nfe.fazenda.gov.br/portal/listaConteudo.aspx?tipoConteudo=/fwLvLUSmU8=

### 4.2.1.5. Tratamento de Caracteres Especiais no Texto de XML

Todos os textos de um documento XML passam por uma análise do “parser” específico da linguagem. Alguns caracteres afetam o funcionamento deste “parser”, não podendo aparecer no texto de uma forma não controlada.

Os caracteres que afetam o “parser” podem ser encontrados na Tabela 4-1.

Alguns destes caracteres podem aparecer especialmente no campo de Razão Social, Endereço e Informação Adicional. Para resolver esses casos, é recomendável o uso de uma sequência de “escape” em substituição ao caractere que causa o problema.

- Ex. a denominação: DIAS & DIAS LTDA deve ser informada como: DIAS &amp; DIAS LTDA no XML para não afetar o funcionamento do "parser".

Nota: A sequência de escape conta como um único caractere para a validação do tamanho do campo pelo Schema.

**Tabela 4-1 – Caracteres Especiais no Texto de XML**

| Caractere | Descrição | Sequência de Escape |
|---|---|---|
| &lt; | sinal de maior | `&lt;` |
| &gt; | sinal de menor | `&gt;` |
| & | e-comercial | `&amp;` |
| " | aspas | `&quot;` |
| ' | sinal de apóstrofe | `&#39;` |

<!-- p.52 -->
## 4.2.2. Padrão de Comunicação

A comunicação será baseada em *Web Services* disponibilizados pelo Sistema de Recepção de Nota Fiscal eletrônica.

O meio físico de comunicação utilizado será a Internet, com o uso do protocolo TLS 1.2 ou superior, com autenticação mútua, que além de garantir um duto de comunicação seguro na Internet, permite a identificação do servidor e do cliente através de certificados digitais, eliminando a necessidade de identificação do usuário através de nome ou código de usuário e senha.

O modelo de comunicação segue o padrão de *Web Services* definido pelo WS-I Basic Profile.

A troca de mensagens entre os *Web Services* do ambiente do Sistema de Recepção da NF-e e o aplicativo da empresa será realizada no padrão SOAP versão 1.2, com troca de mensagens XML no padrão Style/Enconding: Document/Literal.

A chamada de diferentes *Web Services* é realizada com o envio de uma mensagem XML através do parâmetro *nfeDadosMsg*.

A versão do leiaute da mensagem XML contida no parâmetro *nfeDadosMsg* será informada no elemento *versaoDados* do tipo string localizado no elemento *nfeCabecMsg* do SOAP Header.  
Exemplo de uma mensagem requisição padrão SOAP:

```xml
<?xml version="1.0" encoding="utf-8"?>
<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
              xmlns:xsd="http://www.w3.org/2001/XMLSchema"
              xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Header>
    <nfeCabecMsg xmlns="http://www.portalfiscal.inf.br/sce/wsdl/NfeRecepcao2">
    <versaoDados>string</versaoDados>
    <cUF>string</cUF>
    </nfeCabecMsg>
  </soap12:Header>
  <soap12:Body>
    <nfeDadosMsg xmlns="http://www.portalfiscal.inf.br/nfe/wsdl/NfeRecepcao2"> xml</nfeDadosMsg>
</soap12:Body>
</soap12:Envelope>
```

Exemplo de uma mensagem de retorno padrão SOAP:

```xml
<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
              xmlns:xsd="http://www.w3.org/2001/XMLSchema"
              xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Header>
    <nfeCabecMsg xmlns="http://www.portalfiscal.inf.br/nfe/wsdl/NfeRecepcao2">
    <versaoDados>string</versaoDados>
    <cUF>string</cUF>
    </nfeCabecMsg>
  </soap12:Header>
  <soap12:Body>
  <nfeRecepcaoLote2Result xmlns="http://www.portalfiscal.inf.br/nfe/wsdl/NfeRecepcao2">
  xml</nfeRecepcaoResult>
</soap12:Body>
</soap12:Envelope>
<?xml version="1.0" encoding="utf-8"?>
```

## 4.2.3. Padrão de Certificado Digital

O certificado digital utilizado no Sistema Nota Fiscal eletrônica será emitido por Autoridade Certificadora credenciada pela Infraestrutura de Chaves Públicas Brasileira – ICP-Brasil, tipo A1 ou A3, devendo conter o CNPJ da pessoa jurídica titular do certificado digital no campo *OtherName* OID =2.16.76.1.3.3 ou o CPF da pessoa física titular do certificado digital no campo *OtherName* OID=2.16.76.1.3.1.

<!-- p.53 -->
Os certificados digitais serão exigidos em 2 (dois) momentos distintos:

- **Assinatura de Mensagens**: O certificado digital utilizado para essa função deverá conter o CNPJ/CPF de um dos estabelecimentos da empresa emissora da NF-e .
    - Por mensagens, entenda-se: o Pedido de Autorização de Uso (Arquivo NF-e), o Pedido de Cancelamento de NF-e, o Pedido de Inutilização de Numeração de NF-e, o Registro de Evento e demais arquivos XML que necessitem de assinatura.
    - O certificado digital deverá ter o “uso da chave” previsto para a função de assinatura digital, respeitando a Política do Certificado.
- **Transmissão** (durante a transmissão das mensagens entre o servidor do contribuinte e o Portal da Secretaria de Fazenda Estadual): O certificado digital utilizado para identificação do aplicativo do contribuinte deverá conter o CNPJ do responsável pela transmissão das mensagens, que não será necessariamente o CNPJ/CPF da empresa emissora da NF-e, devendo ter a extensão Extended Key Usage com permissão de "Autenticação Cliente".

## 4.2.4. Padrão de Assinatura Digital

As mensagens enviadas ao Portal da Secretaria de Fazenda Estadual são documentos eletrônicos elaborados no padrão XML e devem ser assinados digitalmente com um certificado digital que contenha o CNPJ de um dos estabelecimentos da empresa emissora da NF-e objeto do pedido.  
Alguns elementos estão presentes dentro do Certificado do contribuinte tornando desnecessária a sua representação individualizada no arquivo XML. Portanto, o arquivo XML não deve conter os elementos:

```
<X509SubjectName>
<X509IssuerSerial>
<X509IssuerName>
<X509SerialNumber>
<X509SKI>
```

Deve-se evitar o uso das TAG abaixo, pois as informações serão obtidas a partir do Certificado do emitente:

```
<KeyValue>
<RSAKeyValue>
<Modulus>
<Exponent>
```

A NF-e utiliza um subconjunto do padrão de assinatura XML definido pelo http://www.w3.org/TR/xmldsig-core/, com o seguinte leiaute:

Schema XML: xmldsig-core-schema_v1.01.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **XS01** | **Signature** | **Raiz** | **-** | **-** | **-** | **-** | |
| **XS02** | **SignedInfo** | **G** | **XS01** | **-** | **1-1** | | **Grupo da Informação da assinatura** |
| **XS03** | **Canonicalization Method** | **G** | **XS02** | **-** | **1-1** | | **Grupo do Método de Canonicalização** |
| XS04 | Algorithm | A | XS03 | C | 1-1 | | Atributo Algorithm de CanonicalizationMethod:<br>http://www.w3.org/TR/2001/REC-xml-c14n-20010315 |
| **XS05** | **SignatureMethod** | **G** | **XS02** | **-** | **1-1** | | **Grupo do Método de Assinatura** |
| XS06 | Algorithm | A | XS05 | C | 1-1 | | Atributo Algorithm de SignatureMethod:<br>http://www.w3.org/2000/09/xmldsig#rsa-sha1 |
| **XS07** | **Reference** | **G** | **XS02** | **-** | **1-1** | | **Grupo Reference** |
| XS08 | URI | A | XS07 | C | 1-1 | | Atributo URI da tag Reference |
| **XS10** | **Transforms** | **G** | **XS07** | **-** | **1-1** | | **Grupo do algorithm de Transform** |
| XS11 | unique_Transf_Alg | RC | XS10 | - | 1-1 | | Regra para o atributo Algorithm do Transform ser único. |
| **XS12** | **Transform** | **G** | **XS10** | **-** | **2-2** | | **Grupo de Transform** |
| XS13 | Algorithm | A | XS12 | C | 1-1 | | Atributos válidos Algorithm do Transform:<br>http://www.w3.org/TR/2001/REC-xml-c14n-20010315<br>http://www.w3.org/2000/09/xmldsig#enveloped-signature |
| XS14 | XPath | E | XS12 | C | 0-N | | XPath |
| **XS15** | **DigestMethod** | **G** | **XS07** | **-** | **1-1** | | **Grupo do Método de DigestMethod** |
| XS16 | Algorithm | A | XS15 | C | 1-1 | | Atributo Algorithm de DigestMethod:<br>http://www.w3.org/2000/09/xmldsig#sha1 |
| XS17 | DigestValue | E | XS07 | C | 1 | | Digest Value (Hash SHA-1 – Base64) |
| **XS18** | **SignatureValue** | **G** | **XS01** | **-** | **1-1** | | **Grupo do Signature Value** |
| **XS19** | **KeyInfo** | **G** | **XS01** | **-** | **1-1** | | **Grupo do KeyInfo** |
| **XS20** | **X509Data** | **G** | **XS19** | **-** | **1-1** | | **Grupo X509** |
| XS21 | X509Certificate | E | XS20 | C | 1-1 | | Certificado Digital X509 em Base64 |

<!-- p.54 (a tabela acima começa na p.53 e termina na p.54, a partir de XS11) -->
A assinatura do Contribuinte na NF-e será feita na TAG \<infNFe> identificada pelo atributo *Id*, cujo conteúdo deverá ser um identificador único (chave de acesso) precedido do literal ‘NFe’ para cada NF-e conforme leiaute descrito no documento *MOC – Anexo I – Leiaute NF-e/NFC-e* . O identificador único precedido do literal ‘#NFe’ deverá ser informado no atributo URI da TAG \<Reference>. Para as demais mensagens a serem assinadas, o processo é o mesmo mantendo sempre um identificador único para o atributo *Id* na TAG a ser assinada. Segue abaixo um exemplo:

```xml
<NFe xmlns="http://www.portalfiscal.inf.br/nfe" >
  <infNFe Id="NFe310602438167190001085500000000010001234567897" versao="1.01">
    ...
  </infNFe>
  <Signature xmlns="http://www.w3.org/2000/09/xmldsig#">
    <SignedInfo>
      <CanonicalizationMethod Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"/>
      <SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1" />
      <Reference URI="#NFe310602438167190001085500000000010001234567897">
        <Transforms>
          <Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"/>
          <Transform Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"/>
        </Transforms>
        <DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
        <DigestValue>vFL68WETQ+mvj1aJAMDx+oVi928=</DigestValue>
      </Reference>
    </SignedInfo>
    <SignatureValue>IhXNhbdL1F9UGb2ydVc5v/gTB/y6r0KIFaf5evUi1i ...</SignatureValue>
    <KeyInfo>
      <X509Data>
        <X509Certificate>MIIFazCCBFOgAwIBAgIQaHEfNaxSeOEvZG1VDANB ... </X509Certificate>
      </X509Data>
    </KeyInfo>
  </Signature>
</NFe>
```

Para o processo de assinatura o contribuinte não deve fornecer a Lista de Certificados Revogados, já que a mesma será montada e validada por cada Portal da Secretaria de Fazenda Estadual no momento da conferência da assinatura digital.

A assinatura digital do documento eletrônico deverá atender aos seguintes padrões adotados descritos na Tabela 4-2.

**Tabela 4-2 – Padrões de Assinatura Digital**

| Parâmtero | Padrão |
|---|---|
| Padrão de assinatura | “XML Digital Signature”, utilizando o formato “Enveloped” (http://www.w3.org/TR/xmldsig-core/) |
| Certificado digital | Emitido por AC credenciada no ICP-Brasil (http://www.w3.org/2000/09/xmldsig#X509Data) |
| Cadeia de Certificação | EndCertOnly (Incluir na assinatura apenas o certificado do usuário final) |
| Tipo do certificado | A1 ou A3 |
| Tamanho da Chave Criptográfica | Compatível com os certificados A1 e A3 (1024 bits) |
| Função criptográfica assimétrica | RSA (http://www.w3.org/2000/09/xmldsig#rsa-sha1) |
| Função de “message digest” | SHA-1 (http://www.w3.org/2000/09/xmldsig#sha1) |
| Codificação | Base64 (http://www.w3.org/2000/09/xmldsig#base64) |
| Transformações exigidas | Útil para realizar a canonicalização do XML enviado para realizar a validação correta da Assinatura Digital. São elas:<br>• Enveloped (http://www.w3.org/2000/09/xmldsig#enveloped-signature)<br>• C14N (http://www.w3.org/TR/2001/REC-xml-c14n-20010315) |

<!-- p.55 (a Tabela 4-2 começa na p.54 e continua na p.55 a partir de "Tamanho da Chave Criptográfica") -->
### 4.2.4.1. Assinatura Digital com Certificado e-CPF

O Manual de Orientação do Contribuinte (MOC) define que o certificado digital será emitido dentro do padrão ICP-Brasil, devendo conter o CNPJ da pessoa jurídica titular do certificado digital na extensão “Nome Alternativo para o Requerente” (“OtherName”), com o OID = 2.16.76.1.3.3.

Isso se mantém, incluindo a partir da NT 2018.001 a possibilidade de utilização do certificado digital do tipo “e-CPF”, com o CPF da pessoa física na mesma extensão do certificado, com o OID = 2.16.76.1.3.1. Da mesma forma que o certificado digital para pessoa jurídica, o “e-CPF” poderá ser usado na transmissão dos dados e/ou na assinatura dos documentos. No caso da assinatura de documentos XML, o CPF constante no certificado digital deverá coincidir com o CPF do emitente da NF-e.

## 4.2.5. Validação de Assinatura Digital pela Secretaria de Fazenda Estadual

O Procedimento para a validação da assinatura digital adotado pelas Secretarias de Fazenda Estaduais é:

a) Extrair a chave pública do certificado;  
b) Verificar o prazo de validade do certificado utilizado;  
c) Montar e validar a cadeia de confiança dos certificados validando também a LCR (Lista de Certificados Revogados) de cada certificado da cadeia;  
d) Validar o uso da chave utilizada (Assinatura Digital) de tal forma a aceitar certificados somente do tipo A (não serão aceitos certificados do tipo S);  
e) Garantir que o certificado utilizado é de um usuário final e não de uma Autoridade Certificadora;  
f) Adotar as regras definidas pelo RFC 3280 para as LCR e cadeia de confiança;  
g) Validar a integridade de todas as LCR utilizadas pelo sistema;  
h) Prazo de validade de cada LCR utilizada (verificar data inicial e final).

A forma de conferência da LCR fica a critério de cada Secretaria de Fazenda Estadual, podendo ser feita de 2 (duas) maneiras: Online ou Download periódico. As assinaturas digitais das mensagens serão verificadas considerando a lista de certificados revogados disponível no momento da conferência da assinatura.

## 4.2.6. Resumo dos Padrões Técnicos

A Tabela 4-3 resume os principais padrões de tecnologia utilizados:

**Tabela 4-3 – Resumo dos Padrões Técnicos**

| Parâmetro | Padrão |
|---|---|
| Web Services | Padrão definido pelo WS-I Basic Profile 1.1 (http://www.ws-i.org/Profiles/BasicProfile-1.1-2004-08-24.html). |
| Meio lógico de comunicação | Web Services, disponibilizados pelo Portal da Secretaria de Fazenda Estadual. |
| Meio físico de comunicação | Internet |
| Protocolo Internet | TLS versão 1.2, com autenticação mútua através de certificados digitais. |
| Padrão de troca de mensagens | SOAP versão 1.2. |
| Padrão da mensagem | XML no padrão Style/Encoding: Document/Literal. |
| Padrão de certificado digital | X.509 versão 3, emitido por Autoridade Certificadora credenciada pela Infraestrutura de Chaves Públicas Brasileira – ICP-Brasil, do tipo A1 ou A3, devendo conter o CNPJ do proprietário do certificado digital.<br>Para transmissão, utilizar o certificado digital do responsável pela transmissão. |
| Padrão de assinatura digital | XML Digital Signature, Enveloped, com certificado digital X.509 versão 3, com chave privada de tamanho variável, conforme o padrão da ICP-Brasil (1024, 2048, ou mais bits)., com padrões de criptografia assimétrica RSA, algoritmo message digest SHA-1 e utilização das transformações Enveloped e C14N. |
| Validação de assinatura digital | Será validada além da integridade e autoria, a cadeia de confiança com a validação das LCR. |
| Padrões de preenchimento XML | Campos não obrigatórios do Schema que não possuam conteúdo terão suas tags suprimidas no arquivo XML.<br>Máscara de números decimais e datas estão definidas no Schema XML.<br>Nos campos numéricos inteiro, não incluir a vírgula ou ponto decimal.<br>Nos campos numéricos com casas decimais, utilizar o “ponto decimal” na separação da parte inteira. |

<!-- p.56 (a Tabela 4-3 começa na p.55 e continua na p.56 a partir de "Padrão da mensagem") -->
## 4.2.7. Colunas das Tabelas de Leiaute de Mensagens

As colunas utilizadas nas tabelas que definem as mensagens XML contêm informações conforme descrito na Tabela 4-4.

**Tabela 4-4 – Colunas das Tabelas de Leiaute de Mensagens**

| Nome da Coluna | Informação contida |
|---|---|
| # | Número de referência da tag XML |
| Campo | Nome da tag XML |
| Ele | Tipo de elemento, podendo assumir os valores:<br>• A=Versão<br>• Id=Identificador da TAG a ser assinada<br>• G=Grupo<br>• CG=Grupo exclusivo (*Choice Group*: somente um dos grupos pode existir)<br>• E=Elemento<br>• CE=Elemento exclusivo (*Choice Element*: somente um dos elementos pode existir) |
| Pai | Número de referência da tag XML que contém esta tag XML |
| Tipo | Tipo de dado, podendo assumir os valores:<br>• C=Caractere (alfanumérico)<br>• N=Número<br>• D=Data no formato AAAA-MM-DD<br>• DH=Data e hora no formato UTC (Universal Coordinated Time): AAAA-MM-DDThh:mm:ssTZD, onde:<br>• AAAA=Ano com quatro dígitos<br>• MM=Mês com dois dígitos<br>• DD=Dia com dois dígitos<br>• T=Letra “T”<br>• HH=Hora (de 00 a 23)<br>• MM=Minuto<br>• SS=Segundo<br>• TZD=Distância em horas do meridiano de Greenwich (zona horária) |
| Ocor. | Quantidade de ocorrências<br>• 1-1: elemento obrigatório com no máximo uma ocorrência<br>• 0-1: elemento opcional com no máximo uma ocorrência<br>• 1-n: elemento obrigatório com no máximo “n” ocorrências<br>• 0-n: elemento opcional com no máximo “n” ocorrências |
| Tam. | Tamanhos aceito, conforme notação e exemplos vistos na **Tabela 4-5** |
| Descrição/ Observação | Comentários explicativos desta tag XML |

**Tabela 4-5 – Notação e Exemplos de Tamanhos de Elementos em Tabelas de Leiaute XML**

| Tam | Observação |
|---|---|
| x | Tamanho do elemento<br>• ex.: 5: o campo deve conter um valor com cinco posições. |
| x-y | Tamanho mínimo de “x”, máximo de “y”<br>• ex.: 0-10: neste exemplo, o campo pode conter nenhum valor (tamanho “0”) até um valor de até dez posições. |
| xvn | Campo de valor, com tamanho de “x” posições na parte inteira, seguido pelo “ponto decimal” e com “n” casas decimais.<br>• ex.: 11v4: Número com onze posições no inteiro e quatro casas decimais. |
| xv(n-m) | Campo de valor, com tamanho de “x” posições na parte inteira, seguido pelo “ponto decimal” e com entre “n” e “m” casas decimais<br>• ex.: 11v(0-6): Número com onze posições no inteiro, com zero a 6 casas decimais. No caso de “zero” casas decimais, o ponto decimal não deve ser informado. |
| (x-y)v(n-m) | Campo de valor com tamanho mínimo de “x” e no máximo de “y” posições, com entre “n” e “m” casas decimais<br>• ex.: 1-11v(0-6): Número deve ter entre uma e onze posições, com zero a seis casas decimais. |
| Valores separados por vírgulas | O elemento dever ser informado com o tamanho de uma das opções listadas<br>• ex.: 1, 3, 5, 8: Campo deve ser informado com um do quatro tamanhos fixos na quantidade de caracteres. |

<!-- p.57 (a Tabela 4-5 começa na p.56 e continua na p.57 a partir da linha "x") -->
