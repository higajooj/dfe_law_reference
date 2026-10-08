<!-- p.15 -->
# 3.2 Padrões Técnicos

## 3.2.1 Padrão de documento XML

### a) Padrão de Codificação

A especificação do documento XML adotada é a recomendação W3C para XML 1.0, disponível em www.w3.org/TR/REC-xml e a codificação dos caracteres será em UTF-8, assim todos os documentos XML serão iniciados com a seguinte declaração:

```xml
<?xml version="1.0" encoding="UTF-8"?>
```

OBS: Lembrando que cada arquivo XML somente poderá ter uma única declaração `<?xml version="1.0" encoding="UTF-8"?>`.

Cada arquivo de MDFe terá apenas um MDFe sem ocorrer a formação de lotes para autorização.

### b) Declaração namespace

O documento XML deverá ter uma única declaração de namespace no elemento raiz do documento com o seguinte padrão:

```xml
<MDFe xmlns="http://www.portalfiscal.inf.br/mdfe" > (exemplo para o XML do MDFe)
```

O uso de declaração namespace diferente do padrão estabelecido para o Projeto é vedado.

A declaração do namespace da assinatura digital deverá ser realizada na própria tag `<Signature>`, conforme exemplo abaixo.

Veja exemplo a seguir:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<MDFe xmlns="http://www.portalfiscal.inf.br/mdfe">
  <infMDFe Id="MDFe31060243816719000108650000000010001234567890" versao="3.00">
    ...
  <Signature xmlns="http://www.w3.org/2000/09/xmldsig#">
    ...
</MDFe>
```

### c) Prefixo de namespace

Não é permitida a utilização de prefixos de namespace. Essa restrição visa otimizar o tamanho do arquivo XML.

Assim, ao invés da declaração:

```xml
<mdfe:MDFe xmlns:mdfe="http://www.portalfiscal.inf.br/mdfe">
```

(exemplo para o XML do MDFe com prefixo mdfe) deverá ser adotada a declaração:

```xml
<MDFe xmlns ="http://www.portalfiscal.inf.br/mdfe" >
```

<!-- p.16 -->

### d) Otimização na montagem do arquivo

Na geração do arquivo XML do MDFe, excetuados os campos identificados como obrigatórios no modelo (primeiro dígito da coluna de ocorrências do leiaute iniciada com 1, ex.: 1-1, 1-2, 1-N), não deverão ser incluídas as TAGs de campos com conteúdo zero (para campos tipo numérico) ou vazio (para campos tipo caractere).

Na geração do arquivo XML do MDFe, deverão ser preenchidos no modelo apenas as TAGs de campos identificados como obrigatórios no leiaute ou os campos obrigatórios por força da legislação pertinente. Os campos obrigatórios no leiaute são identificados pelo primeiro dígito da coluna ocorrência ("Ocorr") que inicie com 1, ex.: 1-1, 1-2, 1-N. Os campos obrigatórios por força da legislação pertinente devem ser informados, mesmo que no leiaute seu preenchimento seja facultativo.

A regra constante do parágrafo anterior deverá estender-se para os campos onde não há indicação de obrigatoriedade e que, no entanto, seu preenchimento torna-se obrigatório por estar condicionado à legislação específica ou ao negócio do contribuinte. Neste caso, deverá constar a TAG com o valor correspondente e, para os demais campos, deverão ser eliminadas as TAGs.

Para reduzir o tamanho final do arquivo XML do MDFe alguns cuidados de programação deverão ser assumidos:

- Não incluir "zeros não significativos" para campos numéricos;
- Não incluir "espaços" ("line-feed", "carriage return", "tab", caractere de "espaço" entre as TAGs) no início ou no final de campos numéricos e alfanuméricos;
- Não incluir comentários no arquivo XML;
- Não incluir anotação e documentação no arquivo XML (TAG annotation e TAG documentation);
- Não incluir caracteres de formatação no arquivo XML ("line-feed", "carriage return", "tab", caractere de "espaço" entre as TAGs).

### e) Validação de Schema

Para garantir minimamente a integridade das informações prestadas e a correta formação dos arquivos XML, o contribuinte deverá submeter o arquivo do MDFe e as demais mensagens XML para validação pelo Schema (XSD – XML Schema Definition), disponibilizado pelo Ambiente Autorizador, antes de seu envio.

<!-- p.17 -->

## 3.2.2 Padrão de Comunicação

A comunicação entre o contribuinte e a Secretaria de Fazenda Estadual será baseada em Web Services disponíveis no ambiente autorizador da SEFAZ Virtual Rio Grande do Sul.

O meio físico de comunicação utilizado será a Internet, com o uso do protocolo TLS versão 1.2, com autenticação mútua, que além de garantir um duto de comunicação seguro na Internet, permite a identificação do servidor e do cliente através de certificados digitais, eliminando a necessidade de identificação do usuário através de nome ou código de usuário e senha.

O modelo de comunicação segue o padrão de Web Services definido pelo WS-I Basic Profile.

A troca de mensagens entre os Web Services do Ambiente Autorizador e o aplicativo do contribuinte será realizada no padrão SOAP versão 1.2, com troca de mensagens XML no padrão Style/Enconding: Document/Literal.

A chamada dos diferentes Web Services do Projeto MDFe é realizada com o envio de uma mensagem através do campo mdfeDadosMsg.

A versão do leiaute da mensagem XML e o código da UF requisitada passarão a ser obtidos nos dados informados no leiaute da mensagem, desta forma, a informação contida no SOAP Header passará a ser opcional, iniciando a transição para sua eliminação em futura versão do MDFe.

## 3.2.3 Padrão de Certificado Digital

O certificado digital utilizado no Projeto do MDFe será emitido por Autoridade Certificadora credenciada pela Infraestrutura de Chaves Públicas Brasileira – ICP-Brasil, tipo A1 ou A3, devendo conter o CNPJ/CPF do titular do certificado digital.

Os certificados digitais serão exigidos em 3 (três) momentos distintos para o projeto:

a) **Assinatura de Mensagens:** O certificado digital utilizado para essa função deverá conter:

   a. O CNPJ de um dos estabelecimentos da empresa emissora do MDFe;
   b. O CPF do emitente pessoa física (carga própria);
   c. O CNPJ da SVRS para emitente TAC (regime especial da NFF).

   Por mensagens, entenda-se: o Pedido de Autorização de Uso (Arquivo MDFe), o Registro de Eventos de MDFe e demais arquivos XML que necessitem de assinatura. O certificado digital deverá ter o "uso da chave" previsto para a função de assinatura digital e atributo de "não recusa" obrigatoriamente com o CNPJ no campo otherName OID = 2.16.76.1.3.3 ou CPF na mesma extensão do certificado, com o OID = 2.16.76.1.3.1, respeitando a Política do Certificado.

<!-- p.18 -->

b) **Transmissão** (durante a transmissão das mensagens entre o servidor do contribuinte e o Ambiente Autorizador): O certificado digital utilizado para identificação do aplicativo do contribuinte deverá conter o CNPJ ou CPF do responsável pela transmissão das mensagens, que não necessita ser o mesmo do emissor do MDFe, devendo ter a extensão Extended Key Usage com permissão de "Autenticação Cliente".

c) **Geração do QR Code do MDFe:** O certificado digital utilizado para a assinatura do MDFe deverá ser utilizado para assinar a chave de acesso do MDFe na geração do QR Code na hipótese de emissão em contingência off-line, conforme será descrito em item futuro deste manual.

## 3.2.4 Padrão da Assinatura Digital

As mensagens enviadas ao Ambiente Autorizador são documentos eletrônicos elaborados no padrão XML e devem ser assinados digitalmente com um certificado digital que contenha o CPF do emitente ou CNPJ do estabelecimento (matriz ou filial) emissor do MDFe objeto do pedido.

Os elementos abaixo estão presentes dentro do Certificado do contribuinte tornando desnecessária a sua representação individualizada no arquivo XML. Portanto, o arquivo XML não deve conter os elementos:

- `<X509SubjectName>`
- `<X509IssuerSerial>`
- `<X509IssuerName>`
- `<X509SerialNumber>`
- `<X509SKI>`

Deve-se evitar o uso das TAGs relacionadas a seguir, pois as informações serão obtidas a partir do Certificado do emitente:

- `<KeyValue>`
- `<RSAKeyValue>`
- `<Modulus>`
- `<Exponent>`

<!-- p.19 -->

O Projeto MDFe utiliza um subconjunto do padrão de assinatura XML definido pelo http://www.w3.org/TR/xmldsig-core/, que tem o seguinte leiaute:

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| XS01 | Signature | Raiz | - | - | - | | |
| XS02 | SignedInfo | G | XS01 | - | 1-1 | | Grupo da Informação da assinatura |
| XS03 | CanonicalizationMethod | G | XS02 | - | 1-1 | | Grupo do Método de Canonicalização |
| XS04 | Algorithm | A | XS03 | C | 1-1 | | Atributo Algorithm de CanonicalizationMethod: http://www.w3.org/TR/2001/REC-xml-c14n-20010315 |
| XS05 | SignatureMethod | G | XS02 | - | 1-1 | | Grupo do Método de Assinatura |
| XS06 | Algorithm | A | XS05 | C | 1-1 | | Atributo Algorithm de SignedMethod: http://www.w3.org/2000/09/xmldsig#rsa-sha1 |
| XS07 | Reference | G | XS02 | - | 1-1 | | Grupo de Reference |
| XS08 | URI | A | XS07 | C | 1-1 | | Atributo URI da tag Reference |
| XS10 | Transforms | G | XS07 | - | 1-1 | | Grupo do algorithm de Transform |
| XS11 | unique_Transf_Alg | RC | XS10 | - | 1-1 | | Regra para o atributo Algorithm do Transform ser único. |
| XS12 | Transform | G | XS10 | - | 2-2 | | Grupo de Transform |
| XS13 | Algorithm | A | XS12 | C | 1-1 | | Atributos válidos Algorithm do Transform: http://www.w3.org/TR/2001/REC-xml-c14n-20010315 e http://www.w3.org/2000/09/xmldsig#enveloped-signature |
| XS14 | XPath | E | XS12 | C | 0-N | | XPath |
| XS15 | DigestMethod | G | XS07 | - | 1-1 | | Grupo do Método de DigestMethod |
| XS16 | Algorithm | A | XS15 | C | 1-1 | | Atributo Algorithm de DigestMethod: http://www.w3.org/2000/09/xmldsig#sha1 |
| XS17 | DigestValue | E | XS07 | C | 1-1 | | Digest Value (Hash SHA-1 – Base64) |
| XS18 | SignatureValue | G | XS01 | - | 1-1 | | Grupo do Signature Value |
| XS19 | KeyInfo | G | XS01 | - | 1-1 | | Grupo do KeyInfo |
| XS20 | X509Data | G | XS19 | - | 1-1 | | Grupo X509 |
| XS21 | X509Certificate | E | XS20 | C | 1-1 | | Certificado Digital x509 em Base64 |

A assinatura do Contribuinte no MDFe será feita na TAG `<infMDFe>` identificada pelo atributo `Id`, cujo conteúdo deverá ser um identificador único (chave de acesso) precedido do literal 'MDFe' para o MDFe, conforme leiaute descrito no Anexo I. O identificador único precedido do literal '#MDFe' deverá ser informado no atributo URI da TAG `<Reference>`. Para as demais mensagens a serem assinadas, o processo será o mesmo mantendo sempre um identificador único para o atributo `Id` na TAG a ser assinada.

Para o processo de assinatura, o contribuinte não deve fornecer a Lista de Certificados Revogados, já que ela será montada e validada no Ambiente Autorizador no momento da conferência da assinatura digital.

A assinatura digital do documento eletrônico deverá atender aos seguintes padrões adotados:

- **Padrão de assinatura:** "XML Digital Signature", utilizando o formato "Enveloped" (http://www.w3.org/TR/xmldsig-core/);
- **Certificado digital:** Emitido por AC credenciada no ICP-Brasil (http://www.w3.org/2000/09/xmldsig#X509Data);
<!-- p.20 -->

- **Cadeia de Certificação:** EndCertOnly (Incluir na assinatura apenas o certificado do usuário final);
- **Tipo do certificado:** A1 ou A3 (o uso de HSM é recomendado);
- **Tamanho da Chave Criptográfica:** Compatível com os certificados A1 e A3 (1024 bits);
- **Função criptográfica assimétrica:** RSA (http://www.w3.org/2000/09/xmldsig#rsa-sha1);
- **Função de "message digest":** SHA-1 (http://www.w3.org/2000/09/xmldsig#sha1);
- **Codificação:** Base64 (http://www.w3.org/2000/09/xmldsig#base64);
- **Transformações exigidas:** Útil para realizar a canonicalização do XML enviado para realizar a validação correta da Assinatura Digital. São elas:
  - (1) Enveloped (http://www.w3.org/2000/09/xmldsig#enveloped-signature)
  - (2) C14N (http://www.w3.org/TR/2001/REC-xml-c14n-20010315)

## 3.2.5 Validação da Assinatura Digital pelo Ambiente Autorizador

Para a validação da assinatura digital, seguem as regras que serão adotadas pelo Ambiente Autorizador:

1. Extrair a chave pública do certificado;
2. Verificar o prazo de validade do certificado utilizado;
3. Montar e validar a cadeia de confiança dos certificados validando também a LCR (Lista de Certificados Revogados) de cada certificado da cadeia;
4. Validar o uso da chave utilizada (Assinatura Digital) de tal forma a aceitar certificados somente do tipo A (não serão aceitos certificados do tipo S);
5. Garantir que o certificado utilizado é de um usuário final e não de uma Autoridade Certificadora;
6. Adotar as regras definidas pelo RFC 3280 para LCRs e cadeia de confiança;
7. Validar a integridade de todas as LCR utilizadas pelo sistema;
8. Prazo de validade de cada LCR utilizada (verificar data inicial e final).

A forma de conferência da LCR pode ser feita de 2 (duas) maneiras: On-line ou Download periódico. As assinaturas digitais das mensagens serão verificadas considerando a lista de certificados revogados disponível no momento da conferência da assinatura.

## 3.2.6 Resumo dos Padrões Técnicos

| Característica | Descrição |
|---|---|
| Web Services | Padrão definido pelo WS-I Basic Profile 1.1 (http://www.ws-i.org/Profiles/BasicProfile-1.1-2004-08-24.html). |
| Meio lógico de comunicação | Web Services, disponibilizados pelo AMBIENTE AUTORIZADOR |
| Meio físico de comunicação | Internet |
<!-- p.21 -->

| Característica | Descrição |
|---|---|
| Protocolo Internet | TLS versão 1.2, com autenticação mútua através de certificados digitais. |
| Padrão de troca de mensagens | SOAP versão 1.2 |
| Padrão da mensagem | XML no padrão Style/Encoding: Document/Literal. |
| Padrão de certificado digital | X.509 versão 3, emitido por Autoridade Certificadora credenciada pela Infra-estrutura de Chaves Públicas Brasileira – ICP-Brasil, do tipo A1 ou A3, devendo conter o CNPJ/CPF do proprietário do certificado digital. Para assinatura de mensagens, utilizar o certificado digital do emitente pessoa física ou um dos estabelecimentos da empresa emissora do MDFe. Para transmissão, utilizar o certificado digital do responsável pela transmissão. |
| Padrão de assinatura digital | XML Digital Signature, Enveloped, com certificado digital X.509 versão 3, com chave privada de 1024 bits, com padrões de criptografia assimétrica RSA, algoritmo message digest SHA-1 e utilização das transformações Enveloped e C14N. |
| Validação de assinatura digital | Será validada além da integridade e autoria, a cadeia de confiança com a validação das LCRs. |
| Padrões de preenchimento XML | Campos não obrigatórios do Schema que não possuam conteúdo terão suas tags suprimidas no arquivo XML. Máscara de números decimais e datas estão definidas no Schema XML. Nos campos numéricos inteiro, não incluir a vírgula ou ponto decimal. Nos campos numéricos com casas decimais, utilizar o "ponto decimal" na separação da parte inteira. |
