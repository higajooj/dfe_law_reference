<!-- p.20 -->

# 3.4. Padrão de Mensagens dos Web Services

## 3.4.1 Informações de controle e área de dados das mensagens

A informação armazenada na área de dados `<Body>` é um documento que deve atender o leiaute definido na documentação do Web Service acessado:

<!-- p.21 -->Para o serviço de recepção de CTe (modelo 57), CTe OS (modelo 67) e GTVe (modelo 64), a mensagem deverá ser compactada no padrão GZip, onde o resultado da compactação é convertido para Base64, reduzindo o tamanho da mensagem em aproximadamente 70%, conforme abaixo:

```xml
<soap12:Body>
    <cteDadosMsg xmlns="http://www.portalfiscal.inf.br/cte/wsdl/CTeRecepcaoSinc">string</cteDadosMsg>
</soap12:Body>
```

Para os demais serviços a mensagem deverá utilizar XML sem compactação.

## 3.4.2 Validação da estrutura XML das Mensagens dos Web Services

As informações são enviadas ou recebidas dos Web Services através de mensagens no padrão XML definido na documentação de cada Web Service.

As alterações de leiaute e da estrutura de dados XML realizadas nas mensagens são controladas através da atribuição de um número de versão para a mensagem.

Um Schema XML é uma linguagem que define o conteúdo do documento XML, descrevendo os seus elementos e a sua organização, além de estabelecer regras de preenchimento de conteúdo e de obrigatoriedade de cada elemento ou grupo de informação.

A validação da estrutura XML da mensagem é realizada por um analisador sintático (parser) que verifica se a mensagem atende as definições e regras de seu Schema XML.

Qualquer divergência da estrutura XML da mensagem em relação ao seu Schema XML provoca um erro de validação do Schema XML.

A primeira condição para que a mensagem seja validada com sucesso é que ela seja submetida ao Schema XML correto. Assim, o aplicativo do contribuinte deve estar preparado para gerar as mensagens no leiaute em vigor, devendo ainda informar a versão do leiaute da estrutura XML da mensagem na TAG correspondente em cada mensagem.

## 3.4.3 Schemas XML das Mensagens dos Web Services

Toda mudança de leiaute das mensagens dos Web Services implica na atualização do seu respectivo Schema XML. A identificação da versão dos Schemas será realizada com o acréscimo do número da versão no nome do arquivo precedida da literal ‘_v’, como segue:

- `cte_v4.00.xsd` (Schema XML do CTe, versão 4.00);
- `tiposGeral_v4.00.xsd` (Schema XML dos tipos do CTe, versão 4.00).
