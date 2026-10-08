# 3.4 Padrão de Mensagens dos Web Services

## 3.4.1 Informações de controle e área de dados das mensagens

A informação armazenada na área de dados `<Body>` da mensagem SOAP é um documento que deve atender o leiaute definido na documentação do Web Service acessado.

Para o serviço de recepção a mensagem deverá ser compactada no padrão GZip, onde o resultado da compactação é convertido para Base64, reduzindo o tamanho da mensagem em aproximadamente 70%, conforme abaixo:

```xml
<soap12:Body>
  <mdfeDadosMsg xmlns="http://www.portalfiscal.inf.br/mdfe/wsdl/MDFeRecepcaoSinc">string</mdfeDadosMsg>
</soap12:Body>
```

Para os demais serviços (Consulta, Recepção Eventos e Status), a mensagem deverá utilizar XML sem compactação:

```xml
<soap12:Body>
  <mdfeDadosMsg xmlns="http://www.portalfiscal.inf.br/mdfe/wsdl/MDFeRecepcaoEvento">xml</mdfeDadosMsg>
</soap12:Body>
```

A área referente ao SOAP Header foi descontinuada a partir deste Manual, não haverá quebra de compatibilidade para quem utiliza os WSDL antigos com Header, porém essa informação não será mais utilizada e recomenda-se que o emitente não envie esses dados, reduzindo assim o tamanho da mensagem.

## 3.4.2 Validação da estrutura XML das Mensagens dos Web Services

As informações são enviadas ou recebidas dos Web Services através de mensagens no padrão XML definido na documentação de cada Web Service.

As alterações de leiaute e da estrutura de dados XML realizadas nas mensagens são controladas através da atribuição de um número de versão para a mensagem.

Um Schema XML é uma linguagem que define o conteúdo do documento XML, descrevendo os seus elementos e a sua organização, além de estabelecer regras de preenchimento de conteúdo e de obrigatoriedade de cada elemento ou grupo de informação.

<!-- p.23 -->

A validação da estrutura XML da mensagem é realizada por um analisador sintático (parser) que verifica se a mensagem atende as definições e regras de seu Schema XML.

Qualquer divergência da estrutura XML da mensagem em relação ao seu Schema XML provoca um erro de validação do Schema XML.

A primeira condição para que a mensagem seja validada com sucesso é que ela seja submetida ao Schema XML correto.

Assim, o aplicativo do contribuinte deve estar preparado para gerar as mensagens no leiaute em vigor, devendo ainda informar a versão do leiaute da estrutura XML da mensagem na TAG correspondente em cada mensagem.

```xml
<MDFe xmlns="http://www.portalfiscal.inf.br/mdfe">
  <infMDFe Id="MDFe43081808467115000100580010757245731000000010" versao="3.00">
    ...
  </infMDFe>
</MDFe>
```

## 3.4.3 Schemas XML das Mensagens dos Web Services

Toda mudança de leiaute das mensagens dos Web Services implica na atualização do seu respectivo Schema XML.

A identificação da versão dos Schemas será realizada com o acréscimo do número da versão no nome do arquivo precedida da literal '_v', como segue:

- mdfe_v3.00.xsd (Schema XML do MDFe, versão 3.00);
- tiposGeral_v3.00.xsd (Schema XML dos tipos do MDFe, versão 3.00).

A maioria dos Schemas XML do MDFe utilizam as definições de tipos básicos ou tipos complexos que estão definidos em outros Schemas XML (ex.: tiposGeralMDFe_v3.00.xsd, etc.), nestes casos, a modificação de versão do Schema básico será repercutida no Schema principal.

Por exemplo, o tipo numérico de 15 posições com 2 decimais é definido no Schema tiposGeralMDFe_v3.00.xsd, caso ocorra alguma modificação na definição deste tipo, todos os Schemas que utilizam este tipo básico devem ter a sua versão atualizada e as declarações "import" ou "include" devem ser atualizadas com o nome do Schema básico atualizado.

As modificações de leiaute das mensagens dos Web Services podem ser causadas por necessidades técnicas ou em razão da modificação de alguma legislação. As modificações decorrentes de alteração da legislação deverão ser implementadas nos prazos previstos na norma <!-- p.24 --> que introduziu a alteração. As modificações de ordem técnica serão divulgadas pela Coordenação Técnica do ENCAT e poderão ocorrer sempre que se fizerem necessárias.
