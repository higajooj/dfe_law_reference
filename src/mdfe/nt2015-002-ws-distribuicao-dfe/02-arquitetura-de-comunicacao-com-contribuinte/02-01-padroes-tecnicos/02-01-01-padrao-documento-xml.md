# 2.1.1 Padrão de documento XML

**a) Padrão de Codificação**

A especificação do documento XML adotada é a recomendação W3C para XML 1.0, disponível em [www.w3.org/TR/REC-xml](http://www.w3.org/TR/REC-xml) e a codificação dos caracteres será em UTF-8, assim todos os documentos XML serão iniciados com a seguinte declaração:

```xml
<?xml version="1.0" encoding="UTF-8"?>
```

**b) Declaração namespace**

O documento XML deverá ter uma única declaração de namespace no elemento raiz do documento com o seguinte padrão:

```xml
<distDFeInt xmlns="http://www.portalfiscal.inf.br/mdfe">
```

O uso de declaração namespace diferente do padrão estabelecido para o Projeto é vedado.

**c) Prefixo de namespace**

Não é permitida a utilização de prefixos de namespace. Essa restrição visa otimizar o tamanho do arquivo XML.

Assim, ao invés da declaração:

```xml
<mdfe:distDFeInt xmlns:mdfe="http://www.portalfiscal.inf.br/mdfe">
```

Deverá ser adotada a declaração:

```xml
<distDFeInt xmlns="http://www.portalfiscal.inf.br/mdfe">
```

**d) Validação de Schema**

Para garantir minimamente a integridade das informações prestadas e a correta formação dos arquivos XML, o contribuinte deverá submeter a mensagem XML para validação pelo Schema (XSD – XML Schema Definition), disponibilizado pelo Ambiente Autorizador, antes de seu envio.
