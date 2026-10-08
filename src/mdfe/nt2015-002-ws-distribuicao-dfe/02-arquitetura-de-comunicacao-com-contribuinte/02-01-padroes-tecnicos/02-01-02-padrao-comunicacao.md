<!-- p.07 -->

# 2.1.2 Padrão de Comunicação

O meio físico de comunicação utilizado será a Internet, com o uso do protocolo TLS versão 1.2 ou superior e autenticação mútua, que além de garantir um duto de comunicação seguro na Internet, permite a identificação do servidor e do cliente através de certificados digitais, eliminando a necessidade de identificação do usuário através de nome ou código de usuário e senha.

O modelo de comunicação segue o padrão de Web Services definido pelo WS-I Basic Profile.

A troca de mensagens entre os Web Services do Ambiente Autorizador e o aplicativo do contribuinte será realizada no padrão SOAP versão 1.2, com troca de mensagens XML no padrão Style/Enconding: Document/Literal.

A chamada do Web Service distDFeInt é realizada com o envio de uma mensagem XML através do campo `mdfeDadosMsg`.

A versão do leiaute da mensagem XML contida no campo `mdfeDadosMsg` e o código da UF requisitada serão informados nos campos `versaoDados` e `cUF`, ambos do tipo string localizados no elemento `mdfeCabecMsg` do SOAP header.

Exemplo de uma mensagem requisição padrão SOAP:

```xml
<?xml version="1.0" encoding="utf-8"?>
<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                 xmlns:xsd="http://www.w3.org/2001/XMLSchema"
                 xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Header>
    <mdfeCabecMsg xmlns="http://www.portalfiscal.inf.br/mdfe/wsdl/MDFeDistribuicaoDFe">
      <cUF>string</cUF>
      <versaoDados>string</versaoDados>
    </mdfeCabecMsg>
  </soap12:Header>
  <soap12:Body>
    <mdfeDadosMsg xmlns="http://www.portalfiscal.inf.br/mdfe/wsdl/MDFeDistribuicaoDFe">xml</mdfeDadosMsg>
  </soap12:Body>
</soap12:Envelope>
```

Exemplo de uma mensagem de retorno padrão SOAP:

<!-- REVISAR p.07: no exemplo de retorno o namespace de mdfeDistribuicaoDFeResult aparece como MdfeRecepcao, enquanto os demais elementos usam MDFeDistribuicaoDFe; transcrito como no original -->

```xml
<?xml version="1.0" encoding="utf-8"?>
<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                 xmlns:xsd="http://www.w3.org/2001/XMLSchema"
                 xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Header>
    <mdfeCabecMsg xmlns="http://www.portalfiscal.inf.br/mdfe/wsdl/MDFeDistribuicaoDFe">
      <cUF>string</cUF>
      <versaoDados>string</versaoDados>
    </mdfeCabecMsg>
  </soap12:Header>
  <soap12:Body>
    <mdfeDistribuicaoDFeResult xmlns="http://www.portalfiscal.inf.br/mdfe/wsdl/MdfeRecepcao">xml</mdfeDistribuicaoDFeResult>
  </soap12:Body>
</soap12:Envelope>
```

<!-- p.08 -->
